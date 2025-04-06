'use client'
import { useRouter } from 'next/navigation'
import { useId, useState } from 'react'
import { Form, FormElement, Field, FieldWrapper } from "@progress/kendo-react-form";
import { Error as ErrorLabel } from "@progress/kendo-react-labels";
import { getter } from "@progress/kendo-react-common";
import {
    ISuperConstants,
    IRegisterRequest,    
    TypeUtility,
    ILoginRequest,
    ServiceErrorCodesEnum
} from '@david.ezechukwu/core'
import {
    UseUserResponse,
    LocalisationUtils,
    HTTPUtils,
    API_TYPE,
    HTTP_ENCODING_TYPE,
    HTTP_METHOD,
    Copy,
    DataUtils,
    UseAllLookups    
} from 'lib'
import {
    KendoFormInputCheckBoxWithLink,
    KendoFormInputEmail,
    KendoFormInputPassword, KendoFormSelectWithLabel, KendoFormButton
} from 'components';
import { DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import styles from '@/app/[locale]/layout.module.scss'
import Link from 'next/link';

export type RegisterComponentProps =  {
    locale: string
}

export function RegisterComponent(props: RegisterComponentProps) {    
    const router = useRouter()
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(props.locale)
    const [___, AllLookups] = UseAllLookups({Locale: props.locale, Device: 'web'})
    const [_, UserResponse, SetUserResponse] = UseUserResponse({ redirectToIfFound: true, redirectToIfFoundUrl: `/${props.locale}/user` })
    const [UsernameValue, SetUsernameValue] = useState('')
    const [PasswordStrengthValue, SetPasswordStrengthValue] = useState(copy.Components.RegisterComponent.PasswordStrengthNoStrength)
    const [PasswordValue, SetPasswordValue] = useState('')
    const [PasswordConfirmationValue, SetPasswordConfirmationValue] = useState('')
    const [IAcceptTermsAndConditionsValue, SetIAcceptTermsAndConditionsValue] = useState(false)
    const [IAcceptPrivacyPolicyValue, SetIAcceptPrivacyPolicyValue] = useState(false)
    const [ErrorMsg, SetErrorMsg] = useState('')
    const [HasAttemptedASubmit, SetHasAttemptedASubmit] = useState(false)
    const ID = useId()

    const UsernameFieldName = TypeUtility.NameOf<ILoginRequest>('Username')
    const PasswordFieldName = TypeUtility.NameOf<ILoginRequest>('Password')
    const PasswordConfirmationFieldName = TypeUtility.NameOf<IRegisterRequest>('PasswordConfirmation')
    const IAcceptTermsAndConditionsFieldName = TypeUtility.NameOf<IRegisterRequest>('IAcceptTermsAndConditions')
    const IAcceptPrivacyPolicyFieldName = TypeUtility.NameOf<IRegisterRequest>('IAcceptPrivacyPolicy')
    const UsernameGetter = getter(UsernameFieldName);
    const PasswordGetter = getter(PasswordFieldName);
    const PasswordConfirmationGetter = getter(PasswordConfirmationFieldName);
    const IAcceptTermsAndConditionsGetter = getter(IAcceptTermsAndConditionsFieldName);
    const IAcceptPrivacyPolicyGetter = getter(IAcceptPrivacyPolicyFieldName);
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
        let isUsernameValid = false
        let isPasswordValid = false
        let isPasswordConfirmation = false
        let isIAcceptTermsAndConditions = false
        let isIAcceptPrivacyPolicy = false
        const username = UsernameGetter(values)
        const password = PasswordGetter(values)
        const passwordConfirmation = PasswordConfirmationGetter(values)
        const iAcceptTermsAndConditions = IAcceptTermsAndConditionsGetter(values)
        const iAcceptPrivacyPolicy = IAcceptPrivacyPolicyGetter(values)

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


        if (username && ISuperConstants.EMAIL_ADDRESS_REGEX.length > 0) {
            isUsernameValid = username.match(ISuperConstants.EMAIL_ADDRESS_REGEX) != null
        }

        if (password && passwordRegex.length > 0) {
            isPasswordValid = password.match(passwordRegex) != null
        }
        if (isUsernameValid && isPasswordValid && password === passwordConfirmation && iAcceptTermsAndConditions && iAcceptPrivacyPolicy) {
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

        if (!iAcceptTermsAndConditions) {
            validationError[IAcceptTermsAndConditionsFieldName] = copy.Components.RegisterComponent.Errors.ValidationErrors.MustAcceptTermsAndConditions
        }

        if (!iAcceptPrivacyPolicy) {
            validationError[IAcceptPrivacyPolicyFieldName] = copy.Components.RegisterComponent.Errors.ValidationErrors.MustAcceptPrivacyPolicy
        }
        return validationError;
    }

    function OnSubmitClick(event: any) {
        SetHasAttemptedASubmit(true)
    }

    async function OnSubmit(formData: any) {        
        const locale = props.locale
        const device = process.env.NEXT_PUBLIC_DEFAULT_DEVICE ?? 'web'        
        const passwordStrength = PasswordStrengths.indexOf(PasswordStrengthValue)
        const reqBodyObject: IRegisterRequest = {
            Username: UsernameValue,
            Password: PasswordValue,
            PasswordConfirmation: PasswordConfirmationValue,
            IAcceptTermsAndConditions: IAcceptTermsAndConditionsValue,
            IAcceptPrivacyPolicy: IAcceptPrivacyPolicyValue,
            PasswordStrength: passwordStrength,
            Locale: locale,
            Device: device,
        }

        try {
            const urlPath = `security/register?locale=${locale}&device=${device}`
            const requestOptions: RequestInit = {}
            const userDetails = await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.POST, HTTP_ENCODING_TYPE.FORM_ENCODED, urlPath, reqBodyObject, requestOptions)
            if (userDetails) {
                SetUserResponse(userDetails)
                DataUtils.ShowNotificationToasters(userDetails, AllLookups)
                router.push(`/${props.locale}/user`)
                router.refresh()
            }
            else {
                let _message = copy.Components.RegisterComponent.Errors.ServerErrors.RegistrationFailed
                HTTPUtils.ShowError(_message)
                SetErrorMsg(_message)
            }
        } catch (err: any) {
            HTTPUtils.ShowError(err)
            let toast = '';
            switch (err.message.statusCode || err.statusCode) {
                case ServiceErrorCodesEnum.Conflict:
                case ServiceErrorCodesEnum.ImATeapot:
                case ServiceErrorCodesEnum.UnprocessableEntity:
                case ServiceErrorCodesEnum.UnavailableForLegalReasons:
                    toast = copy.Components.RegisterComponent.Errors.ServerErrors.RegistrationFailed
                    break
                case ServiceErrorCodesEnum.InternalServerError:
                default:
                    toast = copy.Errors.Common.GenericError
            }
            HTTPUtils.ShowError(toast)
            SetErrorMsg(toast)
        }
    }

    let initialValues: { [index: string]: string } = {}
    initialValues[UsernameFieldName] = UsernameValue
    initialValues[PasswordFieldName] = PasswordValue
    initialValues[PasswordConfirmationFieldName] = PasswordConfirmationValue
    initialValues[IAcceptTermsAndConditionsFieldName] = IAcceptTermsAndConditionsValue ? 'true' : 'false'
    initialValues[IAcceptPrivacyPolicyFieldName] = IAcceptPrivacyPolicyValue ? 'true' : 'false'
    return (
        <article className={`${styles.pkformcomponent} ${styles.pkregisterformcomponent}`}>
            <Form
                initialValues={{ Username: '', Password: '', PasswordConfirmation: '' }}
                validator={FormValidator}
                onSubmit={OnSubmit}
                render={formRenderProps =>
                    <FormElement className={`${styles.pkform} ${styles.pkregisterform}`}>
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
                                locale={props.locale}
                                id={`${UsernameFieldName}-${ID}`}
                                name={TypeUtility.NameOf<IRegisterRequest>('Username')}
                                label={copy.Components.RegisterComponent.Username}
                                value={UsernameValue}
                                autoComplete={"email"}
                                editorValue={UsernameValue}
                                hint={copy.Components.RegisterComponent.UsernameInfo}
                                onChange={(e) => { SetUsernameValue(e.value) }}
                                minLength={ISuperConstants.EMAIL_ADDRESS_MIN_LENGTH}
                                maxLength={ISuperConstants.EMAIL_ADDRESS_MAX_LENGTH}
                            />
                            <Field
                                component={KendoFormSelectWithLabel}
                                locale={props.locale}
                                id={`PasswordStrength-${ID}`}
                                name={TypeUtility.NameOf<IRegisterRequest>('PasswordStrength')}
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
                                locale={props.locale}
                                id={`${PasswordFieldName}-${ID}`}
                                name={TypeUtility.NameOf<IRegisterRequest>('Password')}
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
                                locale={props.locale}
                                id={`${PasswordConfirmationFieldName}-${ID}`}
                                name={TypeUtility.NameOf<IRegisterRequest>('PasswordConfirmation')}
                                label={copy.Components.RegisterComponent.ConfirmPassword}
                                value={PasswordConfirmationValue}
                                editorValue={PasswordConfirmationValue}
                                hint={copy.Components.RegisterComponent.ConfirmPasswordInfo}
                                onChange={(e) => { SetPasswordConfirmationValue(e.value) }}
                                minLength={minLen}
                                maxLength={ISuperConstants.PASSWORD_MAX_LENGTH}
                            />
                            <Field
                                component={KendoFormInputCheckBoxWithLink}
                                locale={props.locale}
                                id={`${IAcceptTermsAndConditionsFieldName}-${ID}`}
                                name={TypeUtility.NameOf<IRegisterRequest>('IAcceptTermsAndConditions')}
                                label={copy.Components.RegisterComponent.IAcceptTermsAndConditions}
                                value={IAcceptTermsAndConditionsValue}
                                hint={copy.Components.RegisterComponent.IAcceptTermsAndConditionsInfo}
                                onChange={(e) => { SetIAcceptTermsAndConditionsValue(e.value) }}
                                defaultChecked={IAcceptTermsAndConditionsValue}
                                showlabelaslink={true}
                                url={`/${props.locale}/about/terms`}
                            />
                            <Field
                                component={KendoFormInputCheckBoxWithLink}
                                locale={props.locale}
                                id={`${IAcceptPrivacyPolicyFieldName}-${ID}`}
                                name={TypeUtility.NameOf<IRegisterRequest>('IAcceptPrivacyPolicy')}
                                label={copy.Components.RegisterComponent.IAcceptPrivacyPolicy}
                                value={IAcceptPrivacyPolicyValue}
                                hint={copy.Components.RegisterComponent.IAcceptPrivacyPolicyInfo}
                                onChange={(e) => { SetIAcceptPrivacyPolicyValue(e.value) }}
                                defaultChecked={IAcceptPrivacyPolicyValue}
                                showlabelaslink={true}
                                url={`/${props.locale}/about/privacy`}
                            />
                            <FieldWrapper>
                                {ErrorMsg && <mark className={styles.pkhttperror} dangerouslySetInnerHTML={{ __html: ErrorMsg }} ></mark>}
                            </FieldWrapper>
                            <Field
                                component={KendoFormButton}
                                locale={props.locale}
                                id={`Submit-${ID}`}
                                name='Submit'
                                type='submit'
                                label={copy.Components.RegisterComponent.Submit}
                                onClick={OnSubmitClick}
                            />
                        </fieldset>
                    </FormElement>}
            />
            <br />
            <h5><Link href={`/${props.locale}/security/login`}>{copy.Pages.Authentication.Login.PageTitle}</Link></h5>
            <h5><Link href={`/${props.locale}/security/forgotpassword`}>{copy.Pages.Authentication.ForgotPassword.PageTitle}</Link></h5>
        </article>
    )
}
