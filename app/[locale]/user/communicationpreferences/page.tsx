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
    UseUserResponse 
} from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'
import {     
    IUserCommunicationPreferences, 
    ModelIdType, 
    TypeUtility,     
    ServiceErrorCodesEnum,
    IUserCommunicationPreferencesRequest
} from '@david.ezechukwu/core'
import { KendoFormSwitch } from '@/components'
import { Field, FieldWrapper, Form, FormElement } from '@progress/kendo-react-form'
import { KendoFormButton } from '@/components'
import { usePathname, useRouter } from 'next/navigation'


export default function UserCommunicationPreferencesPage() {    
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
    const [IsAuthenticating, UserResponse, SetUserResponse] = UseUserResponse()
    const ID = useId()
    const formRef = useRef(null);
    const router = useRouter();  
    const CurrentPath = usePathname()      
    const [HasSubmitted, SetHasSubmitted] = useState(false)    
    const [ErrorMsg, SetErrorMsg] = useState('')
    const [UseInAppValue, SetUseInAppValue] = useState(UserResponse?.UserCommunicationPreferences?.UseInApp)
    const [UseEmailValue, SetUseEmailValue] = useState(UserResponse?.UserCommunicationPreferences?.UseEmail)
    const [UseSMSValue, SetUseSMSValue] = useState(UserResponse?.UserCommunicationPreferences?.UseSMS)
    const [UseWhatsAppValue, SetUseWhatsAppValue] = useState(UserResponse?.UserCommunicationPreferences?.UseWhatsApp)
    const [UseIMessageValue, SetUseIMessageValue] = useState(UserResponse?.UserCommunicationPreferences?.UseIMessage)

    let initialValues: { [index: string]: boolean | ModelIdType } = {}        
    initialValues[TypeUtility.NameOf<IUserCommunicationPreferencesRequest>('UseInApp')] = !!UseInAppValue
    initialValues[TypeUtility.NameOf<IUserCommunicationPreferencesRequest>('UseEmail')] = !!UseEmailValue
    initialValues[TypeUtility.NameOf<IUserCommunicationPreferencesRequest>('UseSMS')] = !!UseSMSValue
    initialValues[TypeUtility.NameOf<IUserCommunicationPreferencesRequest>('UseWhatsApp')] = !!UseWhatsAppValue
    initialValues[TypeUtility.NameOf<IUserCommunicationPreferencesRequest>('UseIMessage')] = !!UseIMessageValue
    
    const OnResetClick = (event: any) => {
        if (formRef.current) {(formRef.current as any).resetForm()}
        SetErrorMsg('')
        SetUseInAppValue(UserResponse?.UserCommunicationPreferences?.UseInApp ?? true)
        SetUseEmailValue(UserResponse?.UserCommunicationPreferences?.UseEmail ?? true)
        SetUseSMSValue(UserResponse?.UserCommunicationPreferences?.UseSMS ?? false)
        SetUseWhatsAppValue(UserResponse?.UserCommunicationPreferences?.UseWhatsApp ?? false)
        SetUseIMessageValue(UserResponse?.UserCommunicationPreferences?.UseIMessage ?? false)
    }
    
    const OnSubmitClick = (event: any) => {}
    const OnSubmit = (formData: any) => {
        try {                        
            const reqBodyObject: IUserCommunicationPreferencesRequest = {                 
                UseInApp: UseInAppValue ?? true, 
                UseEmail: UseEmailValue ?? true, 
                UseSMS: UseSMSValue ?? false, 
                UseWhatsApp: UseWhatsAppValue ?? false, 
                UseIMessage: UseIMessageValue  ?? false, 
            }            
            const urlPath = `user/${UserResponse?.UserId}/communicationpreferences/${UserResponse?.UserCommunicationPreferences?.Id}`
            const requestOptions: RequestInit = {}
            HTTPUtils.RequestUsingCallback(
                API_TYPE.CORE,
                HTTP_METHOD.PUT,
                HTTP_ENCODING_TYPE.JSON,
                urlPath,
                reqBodyObject,
                requestOptions,
                (userCommunicationPreferencesRequest: IUserCommunicationPreferencesRequest, err: any) => {                    
                    SetHasSubmitted(true)
                    if (!err){                       
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
        if (!IsAuthenticating){            
             SetUseInAppValue(UserResponse?.UserCommunicationPreferences?.UseInApp ?? true)
             SetUseEmailValue(UserResponse?.UserCommunicationPreferences?.UseEmail ?? true)
             SetUseSMSValue(UserResponse?.UserCommunicationPreferences?.UseSMS ?? false)               
             SetUseWhatsAppValue(UserResponse?.UserCommunicationPreferences?.UseWhatsApp ?? false)               
             SetUseIMessageValue(UserResponse?.UserCommunicationPreferences?.UseIMessage ?? false)
        }        
    }, [UserResponse, UserResponse?.IsAuthenticated, IsAuthenticating])


    return (
        <>
            <section>
                <h1>{copy.Pages.User.CommunicationPreferences.MainHeading}</h1>
            </section>
            <article className={styles.pkusercommunicationpreferencescomponent}>
                <Form
                    initialValues={initialValues}
                    onSubmit={OnSubmit}
                    ref={formRef}
                    render={formRenderProps =>                        
                        <FormElement className={`${styles.pkform} ${styles.pkusercommunicationpreferencesform}`}>
                            <fieldset className={'k-form-fieldset'}>

                                <table className={`${styles.pktablewithfirstcolumnhighlighted} ${styles.pkusercommunicationpreferencespagetablewithfirstcolumnhighlighted}  `}>
                                    <thead></thead>
                                    <tbody>
                                    <tr>
                                        <td>{copy.Pages.User.CommunicationPreferences.InApp}</td>
                                        <td>
                                            <Field
                                                component={KendoFormSwitch}
                                                disabled={true}
                                                locale={locale}
                                                id={`${TypeUtility.NameOf<IUserCommunicationPreferences>('UseInApp')}-${ID}`}
                                                name={TypeUtility.NameOf<IUserCommunicationPreferences>('UseInApp')}                                                
                                                checked={UseInAppValue}
                                                value={UseInAppValue}
                                                hint={copy.Pages.User.CommunicationPreferences.InAppInfo}
                                                onChange={(event: any) => {SetHasSubmitted(false); SetUseInAppValue(event.target.value)}}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{copy.Pages.User.CommunicationPreferences.Email}</td>
                                        <td>
                                            <Field
                                                component={KendoFormSwitch}
                                                locale={locale}
                                                id={`${TypeUtility.NameOf<IUserCommunicationPreferences>('UseEmail')}-${ID}`}
                                                name={TypeUtility.NameOf<IUserCommunicationPreferences>('UseEmail')}
                                                checked={UseEmailValue}
                                                value={UseEmailValue}
                                                hint={copy.Pages.User.CommunicationPreferences.EmailInfo}
                                                onChange={(event: any) => {SetHasSubmitted(false); SetUseEmailValue(event.target.value)}}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{copy.Pages.User.CommunicationPreferences.SMS}</td>
                                        <td>
                                            <Field
                                                component={KendoFormSwitch}
                                                locale={locale}
                                                id={`${TypeUtility.NameOf<IUserCommunicationPreferences>('UseSMS')}-${ID}`}
                                                name={TypeUtility.NameOf<IUserCommunicationPreferences>('UseSMS')}
                                                checked={UseSMSValue}
                                                value={UseSMSValue}
                                                hint={copy.Pages.User.CommunicationPreferences.SMSInfo}
                                                onChange={(event: any) => {SetHasSubmitted(false); SetUseSMSValue(event.target.value)}}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{copy.Pages.User.CommunicationPreferences.WhatsApp}</td>
                                        <td>
                                            <Field                                                
                                                 component={KendoFormSwitch}
                                                 locale={locale}
                                                 id={`${TypeUtility.NameOf<IUserCommunicationPreferences>('UseWhatsApp')}-${ID}`}
                                                 name={TypeUtility.NameOf<IUserCommunicationPreferences>('UseWhatsApp')}
                                                 checked={UseWhatsAppValue}
                                                 value={UseWhatsAppValue}
                                                 hint={copy.Pages.User.CommunicationPreferences.WhatsAppInfo}
                                                 onChange={(event: any) => {SetHasSubmitted(false); SetUseWhatsAppValue(event.target.value)}}
                                            />
                                        </td>
                                    </tr>                                    
                                    <tr>
                                        <td>{copy.Pages.User.CommunicationPreferences.IMessage}</td>
                                        <td>
                                            <Field                                                
                                                 component={KendoFormSwitch}
                                                 locale={locale}
                                                 id={`${TypeUtility.NameOf<IUserCommunicationPreferences>('UseIMessage')}-${ID}`}
                                                 name={TypeUtility.NameOf<IUserCommunicationPreferences>('UseIMessage')}
                                                 checked={UseIMessageValue}
                                                 value={UseIMessageValue}
                                                 hint={copy.Pages.User.CommunicationPreferences.IMessageInfo}
                                                 onChange={(event: any) => {SetHasSubmitted(false); SetUseIMessageValue(event.target.value)}}
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
                                    <div className={styles.pkusercommunicationpreferencescomponentactionbar}>
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