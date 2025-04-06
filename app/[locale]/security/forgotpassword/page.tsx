"use client"
import { useParams } from 'next/navigation'
import { getter } from '@progress/kendo-react-common'
import { Error as ErrorLabel } from "@progress/kendo-react-labels"
import {API_TYPE, Copy, HTTPUtils, HTTP_ENCODING_TYPE, HTTP_METHOD, LocalisationUtils } from '@/lib'
import { useId, useState } from 'react'
import { Form, FormElement, Field, FieldWrapper } from "@progress/kendo-react-form"
import { IForgotPasswordRequest, ISuperConstants, ServiceErrorCodesEnum, TypeUtility } from '@david.ezechukwu/core'
import { KendoFormInputEmail, KendoFormButton } from '@/components'
import styles from '@/app/[locale]/layout.module.scss'



export default function ForgotPasswordPage() {
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)    
    const ID = useId()    
    const [IsProcessing, SetIsProcessing] = useState(false)
    const [ErrorMsg, SetErrorMsg] = useState('')
    const [HasAttemptedASubmit, SetHasAttemptedASubmit] = useState(false)
    const [HasSentResetPasswordEmail, SetHasSentResetPasswordEmail] = useState(false)
    const [UsernameValue, SetUsernameValue] = useState('')
    const UsernameFieldName = TypeUtility.NameOf<IForgotPasswordRequest>('Username')
    const UsernameGetter: any = getter(UsernameFieldName);

    let initialValues: { [index: string]: string } = {}

    const FormValidator = (values: any) => {
        let isUsernameValid = false
        const username = UsernameGetter(values)        
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
                    fieldName: copy.Pages.Authentication.ForgotPassword.Username,
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
            const reqBodyObject: IForgotPasswordRequest = { Username: UsernameValue}
            const urlPath = `security/forgotpassword?locale=${locale ?? LocalisationUtils.DefaultLocale}`
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
                (response: string, err: any) => {
                    SetIsProcessing(false)
                    if (!err) {
                        SetHasSentResetPasswordEmail(true)                        
                        SetErrorMsg("")
                        return;
                    } else {
                        SetIsProcessing(false)
                        let _message = '';
                        switch (err.statusCode) {
                            case ServiceErrorCodesEnum.Conflict:
                            case ServiceErrorCodesEnum.ImATeapot:
                            case ServiceErrorCodesEnum.UnprocessableEntity:                            
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
        <section>                        
            <h1>{copy.Pages.Authentication.ForgotPassword.MainHeading}</h1>            
            <div className={`${styles.pkforgotpasswordpagemaincontent}`}>
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
                                        <summary className={"k-messagebox k-messagebox-error"}>
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
                                locale={locale}
                                id={`Username-${ID}`}
                                name={UsernameFieldName}
                                label={copy.Pages.Authentication.ForgotPassword.Username}
                                value={UsernameValue}
                                editorValue={UsernameValue}
                                hint={copy.Pages.Authentication.ForgotPassword.UsernameInfo}
                                validationMessage={formRenderProps.errors[copy.Pages.Authentication.ForgotPassword.Username]}
                                onChange={(e) => { SetUsernameValue(e.value) }}
                                minLength={ISuperConstants.EMAIL_ADDRESS_MIN_LENGTH}
                                maxLength={ISuperConstants.EMAIL_ADDRESS_MAX_LENGTH}
                            />                            
                            <FieldWrapper>
                                {ErrorMsg && HasAttemptedASubmit && <mark className={styles.pkhttperrormark}>{ErrorMsg}</mark>}
                            </FieldWrapper>
                            <FieldWrapper>
                                {HasSentResetPasswordEmail && <mark>{copy.Pages.Authentication.ForgotPassword.ForgotPasswordPasswordEmailSent}</mark>}
                            </FieldWrapper>
                            <Field
                                component={KendoFormButton}
                                locale={locale}
                                id={`Submit-${ID}`}
                                name='Submit'
                                type='submit'
                                label={copy.Common.Submit}
                                onClick={OnSubmitClick}
                            />
                        </fieldset>
                    </FormElement>
                }
            />
            <br />            
            </div>
        </section>        
    )
}


