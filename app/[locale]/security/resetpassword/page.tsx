"use client"
import { useParams } from 'next/navigation'
import { getter } from '@progress/kendo-react-common'
import { useRouter, useSearchParams } from 'next/navigation'
import { Error as ErrorLabel } from "@progress/kendo-react-labels"
import { API_TYPE, Copy, DataUtils, HTTPUtils, HTTP_ENCODING_TYPE, HTTP_METHOD, LocalisationUtils, UseAllLookups, UseUserResponse } from '@/lib'
import { useId, useState } from 'react'
import { Form, FormElement, Field, FieldWrapper } from "@progress/kendo-react-form"
import { IResetPasswordRequest, ISuperConstants, TypeUtility } from '@david.ezechukwu/core'
import { KendoFormButton, KendoFormInputPassword, KendoFormSelectWithLabel } from '@/components'
import styles from '@/app/[locale]/layout.module.scss'
import { DropDownListChangeEvent } from '@progress/kendo-react-dropdowns'



export default function ResetPasswordPage() {
    const params = useParams()
    const locale = (String)(params.locale)
    const router = useRouter()
    const SearchParams = useSearchParams()
    const resetToken = SearchParams.get('resettoken')
    if (!resetToken?.trim()) {
        router.push(`/${locale}/security/forgotpassword`)
        return
    }
    const [_, UserResponse, SetUserResponse] = UseUserResponse({ redirectToIfFound: true, redirectToIfFoundUrl: `/${locale}/user` })
    const [___, AllLookups] = UseAllLookups({ Locale: locale, Device: 'web' })
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
    const ID = useId()

    const [IsProcessing, SetIsProcessing] = useState(false)
    const [ErrorMsg, SetErrorMsg] = useState('')
    const [HasAttemptedASubmit, SetHasAttemptedASubmit] = useState(false)
    const PasswordFieldName = TypeUtility.NameOf<IResetPasswordRequest>('Password')
    const PasswordConfirmationFieldName = TypeUtility.NameOf<IResetPasswordRequest>('PasswordConfirmation')
    const [PasswordValue, SetPasswordValue] = useState('')
    const [PasswordConfirmationValue, SetPasswordConfirmationValue] = useState('')
    const [PasswordStrengthValue, SetPasswordStrengthValue] = useState(copy.Components.RegisterComponent.PasswordStrengthNoStrength)
    const PasswordGetter = getter(PasswordFieldName);
    const PasswordConfirmationGetter = getter(PasswordConfirmationFieldName);
    let initialValues: { [index: string]: string } = {}
    let passwordRegex = '';

    let minLen = ISuperConstants.PASSWORD_MIN_LENGTH
    const PasswordStrengths = [
        '',
        copy.Components.RegisterComponent.PasswordStrengthHighStrength,
        copy.Components.RegisterComponent.PasswordStrengthMediumStrength,
        copy.Components.RegisterComponent.PasswordStrengthLowStrength,
        copy.Components.RegisterComponent.PasswordStrengthNoStrength
    ]


    const FormValidator = (values: any) => {
        let isPasswordValid = false
        let isPasswordConfirmation = false
        const password = PasswordGetter(values)
        const passwordConfirmation = PasswordConfirmationGetter(values)
        switch (PasswordStrengthValue) {
            case ' ':
                {
                    passwordRegex = ISuperConstants.PASSWORD_HIGH_STRENGTH_REGEX
                }
                break
            case copy.Components.RegisterComponent.PasswordStrengthHighStrength:
                {
                    passwordRegex = ISuperConstants.PASSWORD_HIGH_STRENGTH_REGEX
                }
                break
            case copy.Components.RegisterComponent.PasswordStrengthMediumStrength:
                {
                    passwordRegex = ISuperConstants.PASSWORD_MEDIUM_STRENGTH_REGEX
                }
                break
            case copy.Components.RegisterComponent.PasswordStrengthLowStrength:
                {
                    passwordRegex = ISuperConstants.PASSWORD_LOW_STRENGTH_REGEX
                }
                break
            case copy.Components.RegisterComponent.PasswordStrengthNoStrength:
                {
                    passwordRegex = ISuperConstants.PASSWORD_NO_STRENGTH_REGEX
                    minLen = 1
                }
                break
            default: {
                passwordRegex = ISuperConstants.PASSWORD_HIGH_STRENGTH_REGEX
            }
        }

        if (password && passwordRegex.length > 0) {
            isPasswordValid = password.match(passwordRegex) != null
        }
        if (isPasswordValid && password === passwordConfirmation) {
            return;
        }

        let validationError: { [index: string]: string, VALIDATION_SUMMARY: string } = { VALIDATION_SUMMARY: copy.Errors.ValidationErrors.GenericSummary }
        if (!isPasswordValid) {
            validationError[PasswordFieldName] = LocalisationUtils.GetValidationTip(
                copy,
                {
                    fieldValue: password,
                    fieldName: copy.Components.LoginComponent.Password,
                    regexFormat: passwordRegex,
                    minLen: minLen,
                    maxLen: ISuperConstants.PASSWORD_MAX_LENGTH
                }
            )
        }

        if (password !== passwordConfirmation) {
            validationError[PasswordConfirmationFieldName] = copy.Components.RegisterComponent.Errors.ValidationErrors.PasswordConfirmationMustMatch
        }

        return validationError;
    }

    const OnSubmitClick = (event: any) => {
        SetHasAttemptedASubmit(true)
    }

    const OnSubmit = async (formData: any) => {
        try {
            const passwordStrength = PasswordStrengths.indexOf(PasswordStrengthValue)
            const reqBodyObject: IResetPasswordRequest = {
                Password: PasswordValue,
                PasswordConfirmation: PasswordConfirmationValue,
                ResetToken: SearchParams.get('resettoken') ?? '',
                PasswordStrength: passwordStrength,
                Locale: locale ?? LocalisationUtils.DefaultLocale
            }
            const urlPath = `security/resetpassword?locale=${locale ?? LocalisationUtils.DefaultLocale}`
            const requestOptions: RequestInit = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }

            SetIsProcessing(true)
            const userDetails = await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.POST, HTTP_ENCODING_TYPE.FORM_ENCODED, urlPath, reqBodyObject, requestOptions)
            if (userDetails) {
                SetUserResponse(userDetails)
                DataUtils.ShowNotificationToasters(userDetails, AllLookups)
                router.push(`/${locale}/user`)
                router.refresh()
            }
            else {
                SetIsProcessing(false)
                let _message = copy.Errors.Common.GenericError
                HTTPUtils.ShowError(_message)
                SetErrorMsg(_message)
            }
        } catch (error: any) {
            SetIsProcessing(false)
            HTTPUtils.ShowError(error)
            SetErrorMsg(copy.Errors.Common.GenericError)
        }
        return false;
    }


    return (
        <section>
            <h1>{copy.Pages.Authentication.ResetPassword.MainHeading}</h1>
            <div>
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
                                    component={KendoFormSelectWithLabel}
                                    locale={locale}
                                    id={`PasswordStrength-${ID}`}
                                    name={TypeUtility.NameOf<IResetPasswordRequest>('PasswordStrength')}
                                    label={copy.Components.RegisterComponent.PasswordStrength}
                                    defaultValue={copy.Components.RegisterComponent.PasswordStrengthNoStrength}
                                    value={PasswordStrengthValue}
                                    editorValue={PasswordStrengthValue}
                                    data={PasswordStrengths}
                                    hint={copy.Components.RegisterComponent.PasswordStrengthInfo}
                                    onChange={(event: DropDownListChangeEvent) => { SetPasswordStrengthValue(event.target.value) }}
                                />
                                <Field
                                    component={KendoFormInputPassword}
                                    locale={locale}
                                    id={`${PasswordFieldName}-${ID}`}
                                    name={TypeUtility.NameOf<IResetPasswordRequest>('Password')}
                                    label={copy.Components.RegisterComponent.Password}
                                    value={PasswordValue}
                                    editorValue={PasswordValue}
                                    hint={copy.Components.RegisterComponent.PasswordInfo}
                                    onChange={(e) => { SetPasswordValue(e.value) }}
                                    minLength={minLen}
                                    maxLength={ISuperConstants.PASSWORD_MAX_LENGTH}
                                />
                                <Field
                                    component={KendoFormInputPassword}
                                    locale={locale}
                                    id={`${PasswordConfirmationFieldName}-${ID}`}
                                    name={TypeUtility.NameOf<IResetPasswordRequest>('PasswordConfirmation')}
                                    label={copy.Components.RegisterComponent.ConfirmPassword}
                                    value={PasswordConfirmationValue}
                                    editorValue={PasswordConfirmationValue}
                                    hint={copy.Components.RegisterComponent.ConfirmPasswordInfo}
                                    onChange={(e) => { SetPasswordConfirmationValue(e.value) }}
                                    minLength={minLen}
                                    maxLength={ISuperConstants.PASSWORD_MAX_LENGTH}
                                />

                                <FieldWrapper>
                                    {ErrorMsg && HasAttemptedASubmit && <mark className={styles.pkhttperrormark}>{ErrorMsg}</mark>}
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
