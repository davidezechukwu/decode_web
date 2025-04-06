'use client'
import { useParams } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import { 
    API_TYPE, 
    Copy,     
    HTTPUtils, 
    HTTP_ENCODING_TYPE, 
    HTTP_METHOD, 
    LocalisationUtils, 
    UseLookupCategory, 
    UseUserResponse 
} from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'
import {     
    IUserDisplaySettings, 
    ModelIdType, 
    TypeUtility,     
    ServiceErrorCodesEnum,         
    IUserDisplaySettingsRequest
} from '@david.ezechukwu/core'
import { KendoFormSwitch } from '@/components'
import { Field, FieldWrapper, Form, FormElement } from '@progress/kendo-react-form'
import { KendoFormButton, KendoFormSelect } from '@/components'
import { usePathname, useRouter } from 'next/navigation'


export default function UserCommunicationPreferencesPage() {    
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
    const [IsAuthenticating, UserResponse, SetUserResponse] = UseUserResponse()
    const [IsLoadingThemes, Themes] = UseLookupCategory({ CategoryValue: `themes`, Locale: locale })
    const [IsLoadingLanguages, Languages] = UseLookupCategory({ CategoryValue: `languages`, Locale: locale })
    const ID = useId()
    const formRef = useRef(null)
    const router = useRouter()  
    const CurrentPath = usePathname()
    const [HasSubmitted, SetHasSubmitted] = useState(false)    
    const [SelectedLanguage, SetSelectedLanguage] = useState(undefined as any)    
    const [SelectedTheme, SetSelectedTheme] = useState(undefined as any)
    const [ErrorMsg, SetErrorMsg] = useState('')
    const [IsOnLowSpeedConnectionValue, SetIsOnLowSpeedConnectionValue] = useState(UserResponse?.UserDisplaySettings?.IsOnLowSpeedConnection)
    const [DisableAnimationsValue, SetDisableAnimationsValue] = useState(UserResponse?.UserDisplaySettings?.DisableAnimations)
    const [ShowBackgroundVideoValue, SetShowBackgroundVideoValue] = useState(UserResponse?.UserDisplaySettings?.ShowBackgroundVideo)
    let initialValues: { [index: string]: boolean | ModelIdType } = {}        
    initialValues[TypeUtility.NameOf<IUserDisplaySettingsRequest>('IsOnLowSpeedConnection')] = !!IsOnLowSpeedConnectionValue
    initialValues[TypeUtility.NameOf<IUserDisplaySettingsRequest>('DisableAnimations')] = !!DisableAnimationsValue
    initialValues[TypeUtility.NameOf<IUserDisplaySettingsRequest>('ShowBackgroundVideo')] = !!ShowBackgroundVideoValue
    
    const OnLowspeedConnectionChange = (event: any) => {SetHasSubmitted(false); SetIsOnLowSpeedConnectionValue(event.target.value)}
    const OnDisableAnimationsChange = (event: any) => {SetHasSubmitted(false); SetDisableAnimationsValue(event.target.value)}
    const OnShowBackgroundVideoChange = (event: any) => {SetHasSubmitted(false); SetShowBackgroundVideoValue(event.target.value)}
    const OnLanguageSelectChange = (event: any) => {SetHasSubmitted(false), SetSelectedLanguage( event.target.value)}
    const OnThemeSelectChange = (event: any) => {SetHasSubmitted(false), SetSelectedTheme( event.target.value)}

    const OnResetClick = (event: any) => {
        if (formRef.current) {(formRef.current as any).resetForm()}
        SetErrorMsg('')
        SetIsOnLowSpeedConnectionValue(UserResponse?.UserDisplaySettings?.IsOnLowSpeedConnection)
        SetDisableAnimationsValue(UserResponse?.UserDisplaySettings?.DisableAnimations)
        SetShowBackgroundVideoValue(UserResponse?.UserDisplaySettings?.ShowBackgroundVideo)
    }
    
    const OnSubmitClick = (event: any) => {}
    const OnSubmit = (formData: any) => {
        try {            
            const reqBodyObject: IUserDisplaySettingsRequest = {                 
                DisableAnimations: DisableAnimationsValue ?? false, 
                IsOnLowSpeedConnection: IsOnLowSpeedConnectionValue ?? false, 
                ShowBackgroundVideo: ShowBackgroundVideoValue ?? true, 
                LanguageId: SelectedLanguage.Id,                 
                ThemeId: SelectedTheme.Id
            }            
            const languageChanged =  reqBodyObject.LanguageId != UserResponse?.UserDisplaySettings?.LanguageId
            const themeChanged =  reqBodyObject.ThemeId != UserResponse?.UserDisplaySettings?.ThemeId
            const urlPath = `user/${UserResponse?.UserId}/displaysettings/${UserResponse?.UserDisplaySettings?.Id}`
            const requestOptions: RequestInit = {}
            HTTPUtils.RequestUsingCallback(
                API_TYPE.CORE,
                HTTP_METHOD.PUT,
                HTTP_ENCODING_TYPE.JSON,
                urlPath,
                reqBodyObject,
                requestOptions,
                (userDisplaySettingsRequest: IUserDisplaySettingsRequest, err: any) => {                                        
                    SetHasSubmitted(true)
                    if (!err){
                       if ( languageChanged){
                        const newLanguage = Languages.find(l => l.Id ==  reqBodyObject.LanguageId)                        
                        SetUserResponse()
                        router.push(`/${newLanguage!.Value!}/user/displaysettings`)                                         
                       }else{
                          if (themeChanged){
                            SetUserResponse()
                            router.push(`/${locale}/user/displaysettings`)                                         
                          }
                       }     
                    }
                    else {                       
                        SetHasSubmitted(false)
                        let _message = '';
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
                },
            )
        } catch (error: any) {
            SetHasSubmitted(false)
            HTTPUtils.ShowError(error)
            SetErrorMsg(copy.Errors.Common.GenericError)
        }
    }
        
    useEffect(() => { 
        if (!IsAuthenticating && !UserResponse?.IsAuthenticated){                 
            router.push(`/${locale}/security/login?redirect=${CurrentPath}`)                         
        }         
        if (!IsLoadingThemes){            
            let selectedTheme = undefined
            if (!UserResponse?.UserDisplaySettings?.ThemeId){
                selectedTheme = Themes.find(l => l.Value == process.env.NEXT_PUBLIC_DEFAULT_THEME!)
            }else{
                selectedTheme = Themes.find(l => l.Id == UserResponse?.UserDisplaySettings?.ThemeId)
            }                
            if (!selectedTheme) {
                selectedTheme = Themes[0]
            }                
            SetSelectedTheme(selectedTheme)
        }
        if (!IsLoadingLanguages) {                           
            let selectedLanguage = undefined
            selectedLanguage = Languages.find(l => l.Id == UserResponse?.UserDisplaySettings?.LanguageId)
            SetSelectedLanguage(selectedLanguage)
        }                        
        if (!IsAuthenticating){            
             SetIsOnLowSpeedConnectionValue(UserResponse?.UserDisplaySettings?.IsOnLowSpeedConnection)
             SetDisableAnimationsValue(UserResponse?.UserDisplaySettings?.DisableAnimations)
             SetShowBackgroundVideoValue(UserResponse?.UserDisplaySettings?.ShowBackgroundVideo)               
        }        
    }, [UserResponse, Themes, Languages, IsLoadingLanguages, IsLoadingThemes, UserResponse?.IsAuthenticated, IsAuthenticating])


    return (
        <>
            <section>
                <h1>{copy.Pages.User.DisplaySettings.MainHeading}</h1>
            </section>
            <article className={styles.pkuserdisplaysettingscomponent}>
                <Form
                    initialValues={initialValues}
                    onSubmit={OnSubmit}
                    ref={formRef}
                    render={formRenderProps =>                        
                        <FormElement className={`${styles.pkform} ${styles.pkuserdisplaysettingsform}`}>
                            <fieldset className={'k-form-fieldset'}>

                                <table className={`${styles.pktablewithfirstcolumnhighlighted} ${styles.pkuserdisplaysettingspagetablewithfirstcolumnhighlighted}  `}>
                                    <thead></thead>
                                    <tbody>
                                    <tr>
                                        <td>{copy.Pages.User.DisplaySettings.LowspeedConnection}</td>
                                        <td>
                                            <Field
                                                component={KendoFormSwitch}
                                                locale={locale}
                                                id={`${TypeUtility.NameOf<IUserDisplaySettings>('IsOnLowSpeedConnection')}-${ID}`}
                                                name={TypeUtility.NameOf<IUserDisplaySettings>('IsOnLowSpeedConnection')}                                                
                                                checked={IsOnLowSpeedConnectionValue}
                                                value={IsOnLowSpeedConnectionValue}
                                                hint={copy.Pages.User.DisplaySettings.LowspeedConnectionInfo}
                                                onChange={OnLowspeedConnectionChange}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{copy.Pages.User.DisplaySettings.DisableAnimations}</td>
                                        <td>
                                            <Field
                                                component={KendoFormSwitch}
                                                locale={locale}
                                                id={`${TypeUtility.NameOf<IUserDisplaySettings>('DisableAnimations')}-${ID}`}
                                                name={TypeUtility.NameOf<IUserDisplaySettings>('DisableAnimations')}
                                                checked={DisableAnimationsValue}
                                                value={DisableAnimationsValue}
                                                hint={copy.Pages.User.DisplaySettings.DisableAnimationsInfo}
                                                onChange={OnDisableAnimationsChange}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{copy.Pages.User.DisplaySettings.ShowBackgroundVideo}</td>
                                        <td>
                                            <Field
                                                component={KendoFormSwitch}
                                                locale={locale}
                                                id={`${TypeUtility.NameOf<IUserDisplaySettings>('ShowBackgroundVideo')}-${ID}`}
                                                name={TypeUtility.NameOf<IUserDisplaySettings>('ShowBackgroundVideo')}
                                                checked={ShowBackgroundVideoValue}
                                                value={ShowBackgroundVideoValue}
                                                hint={copy.Pages.User.DisplaySettings.ShowBackgroundVideoInfo}
                                                onChange={OnShowBackgroundVideoChange}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{copy.Pages.User.DisplaySettings.Language}</td>
                                        <td>
                                            <Field                                                
                                                component={KendoFormSelect}
                                                locale={locale}
                                                id={`Language-${ID}`}
                                                name={'Language'}                                                
                                                defaultValue={SelectedLanguage}
                                                data={Languages}
                                                textField='Name'
                                                dataItemKey='Id'
                                                hint={copy.Pages.User.DisplaySettings.LanguageInfo}
                                                onChange={OnLanguageSelectChange}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{copy.Pages.User.DisplaySettings.Theme}</td>
                                        <td>
                                            <Field
                                                component={KendoFormSelect}
                                                locale={locale}
                                                id={`Theme-${ID}`}
                                                name={'Theme'}                                                
                                                defaultValue={SelectedTheme}
                                                data={Themes}
                                                textField='Name'
                                                dataItemKey='Id'
                                                hint={copy.Pages.User.DisplaySettings.ThemeInfo}
                                                onChange={OnThemeSelectChange}
                                            />
                                        </td>
                                    </tr>
                                    </tbody>
                                    <tfoot></tfoot>
                                </table>
                                <FieldWrapper>
                                    {ErrorMsg && <mark className={styles.pkhttperrormark}>{ErrorMsg}</mark>}
                                </FieldWrapper>
                                {formRenderProps.modified && !HasSubmitted &&
                                    <div className={styles.pkuserdisplaysettingscomponentactionbar}>
                                        <Field
                                            component={KendoFormButton}
                                            locale={locale}
                                            id={`Reset-${ID}`}
                                            name='Reset'
                                            type='reset'
                                            disabled={!formRenderProps.allowSubmit}
                                            label={copy.Common.Reset}
                                            onClick={OnResetClick}
                                        />
                                        <Field
                                            component={KendoFormButton}
                                            locale={locale}
                                            id={`Submit-${ID}`}
                                            name='Submit'
                                            type='submit'
                                            disabled={!formRenderProps.allowSubmit}
                                            label={copy.Common.Submit}
                                            onClick={OnSubmitClick}
                                        />
                                    </div>
                                }
                            </fieldset>
                        </FormElement>
                    }
                />
            </article>
        </>
    )
}