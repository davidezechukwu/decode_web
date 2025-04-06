'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { getter } from "@progress/kendo-react-common"
import { Form, FormElement, Field, FieldWrapper } from "@progress/kendo-react-form"
import { Error as ErrorLabel } from "@progress/kendo-react-labels";
import { API_TYPE, Copy, HTTPUtils, HTTP_ENCODING_TYPE, HTTP_METHOD, LocalisationUtils, UseUserResponse } from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'
import { IUserNameConstants, IUserNameRequest, IUserNameWithRelations, ServiceErrorCodesEnum, StringUtility, TypeUtility } from '@david.ezechukwu/core'
import { Button, KendoFormButton, KendoFormInputText } from '@/components'


export default function UserNamePage() {
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale);
    const [IsAuthenticating, UserResponse, SetUserResponse] = UseUserResponse({ redirectToIfNotFound: true, redirectToIfNotFoundUrl: `/${locale}/security/login` })
    const router = useRouter()
    const CurrentPath = usePathname()
    const ID = useId()
    const formRef = useRef(null)
    const [HasAttemptedASubmit, SetHasAttemptedASubmit] = useState(false)
    const [IsEditing, SetIsEditing] = useState(false)
    let [TitleValue, SetTitleValue] = useState(UserResponse?.UserName?.Title)
    let [DisplaynameValue, SetDisplaynameValue] = useState(UserResponse?.UserName?.DisplayName)
    let [FirstnameValue, SetFirstnameValue] = useState(UserResponse?.UserName?.FirstName)
    let [MiddlenameValue, SetMiddlenameValue] = useState(UserResponse?.UserName?.MiddleName)
    let [LastnameValue, SetLastnameValue] = useState(UserResponse?.UserName?.LastName)
    let [NicknameValue, SetNicknameValue] = useState(UserResponse?.UserName?.NickName)
    let [ErrorMsg, SetErrorMsg] = useState('')
    const TitleFieldName = TypeUtility.NameOf<IUserNameRequest>('Title')
    const DisplaynameFieldName = TypeUtility.NameOf<IUserNameRequest>('DisplayName')
    const FirstnameFieldName = TypeUtility.NameOf<IUserNameRequest>('FirstName')
    const MiddlenameFieldName = TypeUtility.NameOf<IUserNameRequest>('MiddleName')
    const LastnameFieldName = TypeUtility.NameOf<IUserNameRequest>('LastName')
    const NicknameFieldName = TypeUtility.NameOf<IUserNameRequest>('NickName')
    const TitleGetter: any = getter(TitleFieldName);
    const DisplaynameGetter: any = getter(DisplaynameFieldName);
    const FirstnameGetter: any = getter(FirstnameFieldName);
    const MiddlenameGetter: any = getter(MiddlenameFieldName);
    const LastnameGetter: any = getter(LastnameFieldName);
    const NicknameGetter: any = getter(NicknameFieldName);
    const initialValues: { [index: string]: string } = {}
    initialValues[TitleFieldName] = UserResponse?.UserName?.Title ?? ''
    initialValues[DisplaynameFieldName] = UserResponse?.UserName?.DisplayName ?? ''
    initialValues[FirstnameFieldName] = UserResponse?.UserName?.FirstName ?? ''
    initialValues[MiddlenameFieldName] = UserResponse?.UserName?.MiddleName ?? ''
    initialValues[LastnameFieldName] = UserResponse?.UserName?.LastName ?? ''
    initialValues[NicknameFieldName] = UserResponse?.UserName?.NickName ?? ''


    const OnSubmitClick = (event: any) => {
        SetHasAttemptedASubmit(true)
    }

    const OnSubmit = (formData: any) => {
        try {
            const device = process.env.NEXT_PUBLIC_DEFAULT_DEVICE ?? 'web'
            const reqBodyObject: IUserNameRequest = {
                Title: formData.Title,
                DisplayName: formData.DisplayName,
                FirstName: formData.FirstName,
                MiddleName: formData.MiddleName,
                LastName: formData.LastName,
                NickName: formData.NickName,
            }

            let urlPath = ``
            if (UserResponse?.UserName?.Id) {
                urlPath = `user/${UserResponse?.UserId}/name/${UserResponse?.UserName.Id}`
            } else {
                urlPath = `user/${UserResponse?.UserId}/name`
            }

            const requestOptions: RequestInit = {}

            HTTPUtils.RequestUsingCallback(
                API_TYPE.CORE,
                UserResponse?.UserName?.Id ? HTTP_METHOD.PUT : HTTP_METHOD.POST,
                HTTP_ENCODING_TYPE.JSON,
                urlPath,
                reqBodyObject,
                requestOptions,
                (userName: IUserNameWithRelations, err: any) => {
                    if (!err) {
                        UserResponse!.UserName = userName
                        SetUserResponse(UserResponse)
                        SetIsEditing(false)
                    } else {
                        let _message = ''
                        let loginToast = ''
                        switch (err.statusCode) {
                            case ServiceErrorCodesEnum.InternalServerError:
                            default:
                                _message = copy.Errors.Common.GenericError
                                loginToast = copy.Errors.Common.ExpiredSession
                        }
                        HTTPUtils.ShowError(_message)
                        if (loginToast != '') {
                            HTTPUtils.ShowError(loginToast)
                        }
                        SetErrorMsg(`${_message}. ${loginToast}`)
                    }
                },
            )
        } catch (err: any) {
            let _message = ''
            let loginToast = ''
            switch (err.statusCode) {
                case ServiceErrorCodesEnum.AuthenticationError:
                    _message = copy.Errors.Common.ExpiredSession
                    break;
                case ServiceErrorCodesEnum.InternalServerError:
                default:
                    _message = copy.Errors.Common.GenericError
            }
            HTTPUtils.ShowError(_message)
            SetErrorMsg(_message)
        }
    }

    const FormValidator = (values: any) => {
        const title = TitleGetter(values)
        const isTitleValid = !title || (title && title?.length >= IUserNameConstants.TITLE_MIN_LENGTH && title?.length <= IUserNameConstants.TITLE_MAX_LENGTH)
        const displayname = DisplaynameGetter(values)
        const isDisplaynameValid = !displayname || (displayname && displayname?.length >= IUserNameConstants.DISPLAY_NAME_MIN_LENGTH && displayname?.length <= IUserNameConstants.DISPLAY_NAME_MAX_LENGTH)
        const firstname = FirstnameGetter(values)
        const isFirstnameValid = !!firstname && (firstname && firstname?.length >= IUserNameConstants.FIRSTNAME_MIN_LENGTH && firstname?.length >= IUserNameConstants.FIRSTNAME_MIN_LENGTH && firstname.length <= IUserNameConstants.FIRSTNAME_MAX_LENGTH)
        const middlename = MiddlenameGetter(values)
        const isMiddlenameValid = !middlename || (middlename && middlename?.length >= IUserNameConstants.MIDDLENAME_MIN_LENGTH && middlename?.length <= IUserNameConstants.MIDDLENAME_MAX_LENGTH)
        const lastname = LastnameGetter(values)
        const isLastnameValid = !!lastname && (lastname && lastname?.length >= IUserNameConstants.LASTNAME_MIN_LENGTH && lastname?.length >= IUserNameConstants.LASTNAME_MIN_LENGTH && lastname.length <= IUserNameConstants.LASTNAME_MAX_LENGTH)
        const nickname = NicknameGetter(values)
        const isNicknameValid = !nickname || (nickname && nickname?.length >= IUserNameConstants.NICKNAME_MIN_LENGTH && nickname?.length <= IUserNameConstants.NICKNAME_MAX_LENGTH)

        if (isTitleValid && isDisplaynameValid && isFirstnameValid && isMiddlenameValid && isLastnameValid && isNicknameValid) {
            return;
        }

        let validationError: { [index: string]: string, VALIDATION_SUMMARY: string } = { VALIDATION_SUMMARY: copy.Errors.ValidationErrors.GenericSummary }
        if (!isTitleValid) {
            validationError[TitleFieldName] = LocalisationUtils.GetValidationTip(
                copy,
                {
                    fieldValue: title,
                    fieldName: copy.Pages.User.Name.Title,
                    minLen: IUserNameConstants.TITLE_MIN_LENGTH,
                    maxLen: IUserNameConstants.TITLE_MAX_LENGTH
                }
            )
        }
        if (!isDisplaynameValid) {
            validationError[DisplaynameFieldName] = LocalisationUtils.GetValidationTip(
                copy,
                {
                    fieldValue: displayname,
                    fieldName: copy.Pages.User.Name.Displayname,
                    minLen: IUserNameConstants.DISPLAY_NAME_MIN_LENGTH,
                    maxLen: IUserNameConstants.DISPLAY_NAME_MAX_LENGTH
                }
            )
        }
        if (!isFirstnameValid) {
            validationError[FirstnameFieldName] = LocalisationUtils.GetValidationTip(
                copy,
                {
                    fieldValue: firstname,
                    fieldName: copy.Pages.User.Name.Firstname,
                    minLen: IUserNameConstants.FIRSTNAME_MIN_LENGTH,
                    maxLen: IUserNameConstants.FIRSTNAME_MAX_LENGTH
                }
            )
        }
        if (!isMiddlenameValid) {
            validationError[MiddlenameFieldName] = LocalisationUtils.GetValidationTip(
                copy,
                {
                    fieldValue: middlename,
                    fieldName: copy.Pages.User.Name.Middlename,
                    minLen: IUserNameConstants.MIDDLENAME_MIN_LENGTH,
                    maxLen: IUserNameConstants.MIDDLENAME_MAX_LENGTH
                }
            )
        }
        if (!isLastnameValid) {
            validationError[LastnameFieldName] = LocalisationUtils.GetValidationTip(
                copy,
                {
                    fieldValue: lastname,
                    fieldName: copy.Pages.User.Name.Lastname,
                    minLen: IUserNameConstants.LASTNAME_MIN_LENGTH,
                    maxLen: IUserNameConstants.LASTNAME_MAX_LENGTH
                }
            )
        }

        if (!isNicknameValid) {
            validationError[NicknameFieldName] = LocalisationUtils.GetValidationTip(
                copy,
                {
                    fieldValue: nickname,
                    fieldName: copy.Pages.User.Name.Nickname,
                    minLen: IUserNameConstants.NICKNAME_MIN_LENGTH,
                    maxLen: IUserNameConstants.NICKNAME_MAX_LENGTH
                }
            )
        }

        return validationError;
    }

    const ToggleEditing = (event: any) => {
        SetIsEditing(!IsEditing)
        if (formRef.current) { (formRef.current as any).resetForm() }
        SetErrorMsg('')
    }

    useEffect(() => {
        if (!IsAuthenticating && !UserResponse?.IsAuthenticated) {
            router.push(`/${locale}/security/login?redirect=${CurrentPath}`)
        }
    }, [IsAuthenticating, UserResponse, UserResponse?.IsAuthenticated])

    return (
        <>
            <section>
                <h1>{copy.Pages.User.Name.MainHeading}</h1>
            </section>
            <section>
                {IsEditing && UserResponse?.IsAuthenticated &&
                    <Form
                        ref={formRef}
                        initialValues={initialValues}
                        onSubmit={OnSubmit}
                        validator={FormValidator}
                        render={formRenderProps =>
                            <FormElement className={`${styles.pkform} ${styles.pkloginform}`}>
                                <fieldset className={'k-form-fieldset'}>
                                    <legend className={`k-form-legend ${styles.pkformlegend}`}>{copy.Pages.User.Name.UpdateYourDetails}</legend>
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
                                                                    <a className={styles.pkerroranchor} href={`javascript:document.getElementById('${keyName}-${ID}').focus();`}>
                                                                        <ErrorLabel id={`${ID}_error`}>{formRenderProps.errors[keyName]}</ErrorLabel>
                                                                    </a>
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
                                        component={KendoFormInputText}
                                        locale={locale}
                                        id={`${TitleFieldName}-${ID}`}
                                        name={TitleFieldName}
                                        label={copy.Pages.User.Name.Title}
                                        value={TitleValue}
                                        editorValue={TitleValue}
                                        hint={copy.Pages.User.Name.TitleInfo}
                                        validationMessage={formRenderProps.errors[copy.Pages.User.Name.Title]}
                                        minLength={IUserNameConstants.TITLE_MIN_LENGTH}
                                        maxLength={IUserNameConstants.TITLE_MAX_LENGTH}
                                    />

                                    <Field
                                        component={KendoFormInputText}
                                        locale={locale}
                                        id={`${DisplaynameFieldName}-${ID}`}
                                        name={DisplaynameFieldName}
                                        label={copy.Pages.User.Name.Displayname}
                                        value={DisplaynameValue}
                                        editorValue={DisplaynameValue}
                                        hint={copy.Pages.User.Name.DisplaynameInfo}
                                        validationMessage={formRenderProps.errors[copy.Pages.User.Name.Displayname]}
                                        minLength={IUserNameConstants.DISPLAY_NAME_MIN_LENGTH}
                                        maxLength={IUserNameConstants.DISPLAY_NAME_MAX_LENGTH}
                                    />

                                    <Field
                                        component={KendoFormInputText}
                                        locale={locale}
                                        id={`${FirstnameFieldName}-${ID}`}
                                        name={FirstnameFieldName}
                                        label={copy.Pages.User.Name.Firstname}
                                        value={FirstnameValue}
                                        editorValue={FirstnameValue}
                                        hint={copy.Pages.User.Name.FirstnameInfo}
                                        validationMessage={formRenderProps.errors[copy.Pages.User.Name.Firstname]}
                                        minLength={IUserNameConstants.FIRSTNAME_MIN_LENGTH}
                                        maxLength={IUserNameConstants.FIRSTNAME_MAX_LENGTH}
                                    />

                                    <Field
                                        component={KendoFormInputText}
                                        locale={locale}
                                        id={`${MiddlenameFieldName}-${ID}`}
                                        name={MiddlenameFieldName}
                                        label={copy.Pages.User.Name.Middlename}
                                        value={MiddlenameValue}
                                        editorValue={MiddlenameValue}
                                        hint={copy.Pages.User.Name.MiddlenameInfo}
                                        validationMessage={formRenderProps.errors[copy.Pages.User.Name.Middlename]}
                                        minLength={IUserNameConstants.MIDDLENAME_MIN_LENGTH}
                                        maxLength={IUserNameConstants.MIDDLENAME_MAX_LENGTH}
                                    />

                                    <Field
                                        component={KendoFormInputText}
                                        locale={locale}
                                        id={`${LastnameFieldName}-${ID}`}
                                        name={LastnameFieldName}
                                        label={copy.Pages.User.Name.Lastname}
                                        value={LastnameValue}
                                        editorValue={LastnameValue}
                                        hint={copy.Pages.User.Name.LastnameInfo}
                                        validationMessage={formRenderProps.errors[copy.Pages.User.Name.Lastname]}
                                        minLength={IUserNameConstants.LASTNAME_MIN_LENGTH}
                                        maxLength={IUserNameConstants.LASTNAME_MAX_LENGTH}
                                    />

                                    <Field
                                        component={KendoFormInputText}
                                        locale={locale}
                                        id={`${NicknameFieldName}-${ID}`}
                                        name={NicknameFieldName}
                                        label={copy.Pages.User.Name.Nickname}
                                        value={NicknameValue}
                                        editorValue={NicknameValue}
                                        hint={copy.Pages.User.Name.NicknameInfo}
                                        validationMessage={formRenderProps.errors[copy.Pages.User.Name.Nickname]}
                                        minLength={IUserNameConstants.NICKNAME_MIN_LENGTH}
                                        maxLength={IUserNameConstants.NICKNAME_MAX_LENGTH}
                                    />

                                    <FieldWrapper>
                                        {ErrorMsg && HasAttemptedASubmit && <mark className={styles.pkhttperrormark}>{ErrorMsg}</mark>}
                                        <br />
                                        {!UserResponse.IsAuthenticated && <Link href={`/${locale}/security/login`}>{copy.Common.LoginAgain}</Link>}
                                    </FieldWrapper>

                                    <div className={styles.pkbuttoncontainer}>
                                        <Field
                                            component={KendoFormButton}
                                            locale={locale}
                                            id={`Cancel-${ID}`}
                                            name='Cancel'
                                            type='reset'
                                            label={copy.Common.Cancel}
                                            onClick={ToggleEditing}
                                        />
                                        <Field
                                            component={KendoFormButton}
                                            locale={locale}
                                            id={`Submit-${ID}`}
                                            name='Submit'
                                            type='submit'
                                            label={copy.Common.Submit}
                                            onClick={OnSubmitClick}
                                        />
                                    </div>
                                </fieldset>
                            </FormElement>
                        }
                    />
                }
                {!IsEditing && UserResponse?.IsAuthenticated &&
                    <>
                        <div>
                            <table className={`${styles.pkusernamepagetablewithfirstcolumnhighlighted} ${styles.pktablewithfirstcolumnhighlighted}`} >
                                <thead>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{copy.Pages.User.Name.Title}</td>
                                        <td>{UserResponse?.UserName?.Title}</td>
                                    </tr>
                                    <tr>
                                        <td>{copy.Pages.User.Name.Displayname}</td>
                                        <td>{UserResponse?.UserName?.DisplayName}</td>
                                    </tr>
                                    <tr>
                                        <td>{copy.Pages.User.Name.Firstname}</td>
                                        <td>{UserResponse?.UserName?.FirstName}</td>
                                    </tr>
                                    <tr>
                                        <td>{copy.Pages.User.Name.Middlename}</td>
                                        <td>{UserResponse?.UserName?.MiddleName}</td>
                                    </tr>
                                    <tr>
                                        <td>{copy.Pages.User.Name.Lastname}</td>
                                        <td>{UserResponse?.UserName?.LastName}</td>
                                    </tr>
                                    <tr>
                                        <td>{copy.Pages.User.Name.Nickname}</td>
                                        <td>{UserResponse?.UserName?.NickName}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                </tfoot>
                            </table>                            
                        </div>
                        <br />
                        <div className={styles.pkbuttoncontainer}>
                            <Button type='submit' label={copy.Common.Change} onClick={ToggleEditing} />
                        </div>
                    </>
                }
            </section>
        </>
    )
}