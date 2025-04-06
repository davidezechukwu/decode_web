/* eslint-disable prettier/prettier */
'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useId, useState } from 'react'
import { Form, FormElement, Field, FieldWrapper } from '@progress/kendo-react-form'
import { Error as ErrorLabel } from '@progress/kendo-react-labels'
import { getter } from '@progress/kendo-react-common'
import { ILoginRequest, ISuperConstants, IUserResponse, ServiceErrorCodesEnum, TypeUtility, } from '@david.ezechukwu/core'
import { Copy, UseAllLookups, UseUserResponse, HTTPUtils, API_TYPE, HTTP_ENCODING_TYPE, HTTP_METHOD, LocalisationUtils, DataUtils } from '@/lib'
import { KendoFormInputEmail, KendoFormInputPassword, KendoFormButton } from '@/components'
import styles from '@/app/[locale]/layout.module.scss'

export type LoginComponentProps =  {
    locale: string
}

export function LoginComponent(props: LoginComponentProps) {
    const [___, AllLookups] = UseAllLookups({Locale: props.locale, Device: 'web'})
    const router = useRouter()
    const querystring = useSearchParams()
    const redirect = querystring.get('redirect') ?? `/${props.locale}/user`
    const [UsernameValue, SetUsernameValue] = useState('')
    const [PasswordValue, SetPasswordValue] = useState('')
    const [ErrorMsg, SetErrorMsg] = useState('')
    const [HasAttemptedASubmit, SetHasAttemptedASubmit] = useState(false)
    const [IsProcessing, SetIsProcessing] = useState(false)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, __, SetUserResponse] = UseUserResponse()
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(props.locale)
    const ID = useId()
    const UsernameFieldName = TypeUtility.NameOf<ILoginRequest>('Username')
    const PasswordFieldName = TypeUtility.NameOf<ILoginRequest>('Password')
    const UsernameGetter: any = getter(UsernameFieldName);
    const PasswordGetter: any = getter(PasswordFieldName);
    let initialValues: { [index: string]: string } = {}
    initialValues[UsernameFieldName] = UsernameValue
    initialValues[PasswordFieldName] = PasswordValue

    const FormValidator = (values: any) => {
        let isUsernameValid = false
        const username = UsernameGetter(values)
        const password = PasswordGetter(values)
        if (username && ISuperConstants.EMAIL_ADDRESS_REGEX.length > 0) {
            isUsernameValid = username.match(ISuperConstants.EMAIL_ADDRESS_REGEX) != null
        }

        if (isUsernameValid) {
            return;
        }


        let validationError: { [index: string]: string, VALIDATION_SUMMARY: string } = { VALIDATION_SUMMARY: copy.Errors.ValidationErrors.GenericSummary }
        if (!isUsernameValid) {
            validationError[UsernameFieldName] = LocalisationUtils.GetValidationTip(
                copy,
                {
                    fieldValue: username,
                    fieldName: copy.Components.LoginComponent.Username,
                    regexFormat: ISuperConstants.EMAIL_ADDRESS_REGEX,
                    minLen: ISuperConstants.EMAIL_ADDRESS_MIN_LENGTH,
                    maxLen: ISuperConstants.EMAIL_ADDRESS_MAX_LENGTH
                }
            )
        }
        return validationError;
    }

    const OnSubmitClick = (event: any) => {
        SetHasAttemptedASubmit(true)
    }

    const OnSubmit = (formData: any) => {
        try {
            const reqBodyObject: ILoginRequest = { Username: UsernameValue, Password: PasswordValue }
            const urlPath = `security/login?locale=${props.locale ?? LocalisationUtils.DefaultLocale}`
            const requestOptions: RequestInit = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }

            SetIsProcessing(true)
            HTTPUtils.RequestUsingCallback(
                API_TYPE.CORE,
                HTTP_METHOD.POST,
                HTTP_ENCODING_TYPE.FORM_ENCODED,
                urlPath,
                reqBodyObject,
                requestOptions,
                (userDetails: IUserResponse, err: any) => {
                    if (!err) {
                        SetUserResponse(userDetails)
                        DataUtils.ShowNotificationToasters(userDetails, AllLookups)
                        router.push(redirect ?? `/${userDetails!.UserLanguage!.Value!}/user`)
                        return;
                    } else {
                        SetIsProcessing(false)
                        let _message = '';
                        switch (err.statusCode) {
                            case ServiceErrorCodesEnum.Conflict:
                            case ServiceErrorCodesEnum.ImATeapot:
                            case ServiceErrorCodesEnum.UnprocessableEntity:
                            case ServiceErrorCodesEnum.UnavailableForLegalReasons:
                                _message = copy.Components.LoginComponent.Errors.ServerErrors.IncorrectUsernameOrPassword
                                break
                            case ServiceErrorCodesEnum.InternalServerError:
                            default:
                                _message = copy.Errors.Common.GenericError
                        }
                        HTTPUtils.ShowError(_message)
                        SetErrorMsg(_message)
                    }
                },
            )
        } catch (error: any) {
            SetIsProcessing(false)
            HTTPUtils.ShowError(error)
            SetErrorMsg(copy.Errors.Common.GenericError)
        }
        return false;
    }

    return (
        <article className={`${styles.pkformcomponent} ${styles.pkloginformcomponent}`}>
            {IsProcessing &&
                <div className={styles.pksususpensecomponent} >
                    <div className={styles.pksususpensespinnercontainer}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            }
            <Form
                initialValues={initialValues}
                onSubmit={OnSubmit}
                validator={FormValidator}
                render={formRenderProps =>
                    <FormElement className={`${styles.pkform} ${styles.pkloginform}`}>
                        <fieldset className={'k-form-fieldset'}>
                            <section className={styles.pkerrorcontainer} >
                                {HasAttemptedASubmit && !formRenderProps.valid && formRenderProps.errors && formRenderProps.errors.VALIDATION_SUMMARY && (
                                    <article>
                                        <summary className={'k-messagebox k-messagebox-error'}>
                                            <div className={styles.pkerrorscrollercontainer}>
                                                <div className={styles.pkerrorscroller}>
                                                    {formRenderProps.errors.VALIDATION_SUMMARY}
                                                </div>
                                            </div>
                                        </summary>
                                        <div>
                                            <ul className={styles.pkerrorlist}>
                                                {Object.keys(formRenderProps.errors).map(function (keyName, keyIndex) {
                                                    return (
                                                        formRenderProps.errors[keyName]
                                                        && keyName != 'VALIDATION_SUMMARY'
                                                        && <li>
                                                            <a className={styles.pkerroranchor} href={`javascript:document.getElementById('${keyName}-${ID}').focus();`}><ErrorLabel id={`${ID}_error`}>{formRenderProps.errors[keyName]}</ErrorLabel></a>
                                                        </li>
                                                    )
                                                })
                                                }
                                            </ul>
                                        </div>
                                    </article>
                                )}
                            </section>
                            <Field
                                component={KendoFormInputEmail}
                                locale={props.locale}
                                id={`Username-${ID}`}
                                name={UsernameFieldName}
                                label={copy.Components.LoginComponent.Username}
                                value={UsernameValue}
                                editorValue={UsernameValue}
                                hint={copy.Components.LoginComponent.UsernameInfo}
                                validationMessage={formRenderProps.errors[copy.Components.LoginComponent.Username]}
                                onChange={(e) => { SetUsernameValue(e.value) }}
                                minLength={ISuperConstants.EMAIL_ADDRESS_MIN_LENGTH}
                                maxLength={ISuperConstants.EMAIL_ADDRESS_MAX_LENGTH}
                            />
                            <Field
                                component={KendoFormInputPassword}
                                locale={props.locale}
                                id={`Password-${ID}`}
                                name={PasswordFieldName}
                                label={copy.Components.LoginComponent.Password}
                                value={PasswordValue}
                                editorValue={PasswordValue}
                                hint={copy.Components.LoginComponent.PasswordInfo}
                                validationMessage={formRenderProps.errors[copy.Components.LoginComponent.Password]}
                                onChange={(e) => { SetPasswordValue(e.value) }}
                                minLength={1}
                                maxLength={ISuperConstants.PASSWORD_MAX_LENGTH}
                            />
                            <FieldWrapper>
                                {ErrorMsg && HasAttemptedASubmit && <mark className={styles.pkhttperrormark}>{ErrorMsg}</mark>}
                            </FieldWrapper>
                            <Field
                                component={KendoFormButton}
                                locale={props.locale}
                                id={`Submit-${ID}`}
                                name='Submit'
                                type='submit'
                                label={copy.Components.LoginComponent.Submit}
                                onClick={OnSubmitClick}
                            />
                        </fieldset>
                    </FormElement>
                }
            />
            <br />
            <h5><Link href={`/${props.locale}/security/register`}>{copy.Pages.Authentication.Register.PageTitle}</Link></h5>
            <h5><Link href={`/${props.locale}/security/forgotpassword`}>{copy.Pages.Authentication.ForgotPassword.PageTitle}</Link></h5>
        </article>
    )
}
