
'use client'
import { useParams } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react';
import { Form, FormElement, Field, FieldWrapper } from '@progress/kendo-react-form';
import { getter } from "@progress/kendo-react-common"
import { Error as ErrorLabel } from "@progress/kendo-react-labels";
import { API_TYPE, Copy, DataUtils, HTTPUtils, HTTP_ENCODING_TYPE, HTTP_METHOD, LocalisationUtils, UseLookupCategory, UseUserResponse } from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'
import { ILookupNameValueResponse, ISuperConstants, IUserEmailAddress, IUserEmailAddressRequest, ModelIdType, ModelIdTypeName, ServiceErrorCodesEnum, TypeUtility } from '@david.ezechukwu/core'
import { DeleteConfirm, KendoFormButton, KendoFormInputEmail, InfoTip } from '@/components';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
var hasFetchedEmailAddressTypes = false;

export default function UserEmailAddressesPage() {    
    const params = useParams()
    const locale = (String)(params.locale)
    const ID = useId()
    const router = useRouter()
    const CurrentPath = usePathname()
    const SearchParams = useSearchParams()
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
    const [IsAuthenticating, UserResponse, SetUserResponse] = UseUserResponse()
    const [IsLoadingLookups, Lookups] = UseLookupCategory({ CategoryValue: `basictypes`, Locale: locale })
    const [FilteredLookups, SetFilteredLookups] = useState([] as ILookupNameValueResponse[])
    const [HasFilteredLookups, SetHasFilteredLookups] = useState(false)
    const [AddMore, SetAddMore] = useState(!(HasFilteredLookups && FilteredLookups.length != 0))
    const [ErrorMsg, SetErrorMsg] = useState('')
    const [HasAttemptedASubmit, SetHasAttemptedASubmit] = useState(false)
    const formRef = useRef(null)
    let  EmailaddressRef = useRef(null);
    const SetEmailAddressRef = (ref: any) => { EmailaddressRef = ref }
    const [EmailAddressValue, SetEmailAddressValue] = useState('')
    const [SelectedEmailAddressType, SetSelectedEmailAddressType] = useState(undefined as any)    
    const EmailAddressTypeIdFieldName = TypeUtility.NameOf<IUserEmailAddressRequest>('EmailAddressTypeId')
    const EmailAddressFieldName = TypeUtility.NameOf<IUserEmailAddressRequest>('EmailAddress')
    const EmailAddressGetter: any = getter(EmailAddressFieldName)
    const initialValues: { [index: string]: string } = {}
    initialValues[EmailAddressFieldName] = ''
    const [PrimaryEmailAddressLookupId, SetPrimaryEmailAddressLookupId] = useState(ModelIdTypeName == 'number' ? 0 : '')

    const OnResetClick = (event: any) => {
        if (formRef.current) { (formRef.current as any).resetForm() }
        SetErrorMsg('')
        HTTPUtils.RefreshWindow(); 
    }

    const FormValidator = (values: any) => {
        const EmailAddress = EmailAddressGetter(values)
        const isEmailAddressValid = EmailAddress && EmailAddress?.length >= ISuperConstants.EMAIL_ADDRESS_MIN_LENGTH && EmailAddress?.length <= ISuperConstants.EMAIL_ADDRESS_MAX_LENGTH
        const isEmailAddressTypeIdValid = !IsLoadingLookups && Lookups.find(lookup => lookup.Id == lookup.Id)

        if (isEmailAddressValid && isEmailAddressTypeIdValid) {
            return;
        }

        let validationError: { [index: string]: string, VALIDATION_SUMMARY: string } = { VALIDATION_SUMMARY: copy.Errors.ValidationErrors.GenericSummary }
        if (!isEmailAddressValid) {
            validationError[EmailAddressFieldName] = LocalisationUtils.GetValidationTip(
                copy,
                {
                    fieldValue: EmailAddress,
                    fieldName: copy.Pages.User.EmailAddresses.EmailAddress,
                    minLen: ISuperConstants.EMAIL_ADDRESS_MIN_LENGTH,
                    maxLen: ISuperConstants.EMAIL_ADDRESS_MAX_LENGTH
                }
            )
        }
        return validationError;
    }

    const OnAddSubmitClick = (event: any) => { SetHasAttemptedASubmit(true) }
    const OnAddSubmit = (formData: any) => {
        try {            
            const reqBodyObject: IUserEmailAddressRequest = {
                EmailAddressTypeId: SelectedEmailAddressType.Id,                
                EmailAddress: formData[EmailAddressFieldName].replace(" ", '')
            }

            const urlPath = `user/${UserResponse?.UserId}/emailaddresses`
            const requestOptions: RequestInit = {}

            HTTPUtils.RequestUsingCallback(
                API_TYPE.CORE,
                HTTP_METHOD.POST,
                HTTP_ENCODING_TYPE.JSON,
                urlPath,
                reqBodyObject,
                requestOptions,
                (userEmailAddress: IUserEmailAddress, err: any) => {
                    if (!err) {                      
                        if (formRef.current) { (formRef.current as any).resetForm() }                     
                        SetHasAttemptedASubmit(false)
                        UserResponse?.UserEmailAddresses?.push( userEmailAddress)
                        HTTPUtils.RefreshWindow(true, SetUserResponse, UserResponse, router, CurrentPath, SearchParams, locale )                        
                        FilterLookup()
                        const addMore = !IsLoadingLookups && !IsAuthenticating && !((UserResponse?.UserEmailAddresses?.length == Lookups.length) && Lookups.length > 0)                
                        SetAddMore(addMore)                                                    
                    } else {
                        let _message = ''
                        switch (err.statusCode) {
                            case ServiceErrorCodesEnum.InternalServerError:
                            default:
                                _message = copy.Errors.Common.GenericError
                        }
                        HTTPUtils.ShowError(_message)
                        SetErrorMsg(`${_message}`)
                    }
                },
            )
        } catch (err: any) {
            let _message = ''
            switch (err.statusCode) {
                case ServiceErrorCodesEnum.InternalServerError:
                default:
                    _message = copy.Errors.Common.GenericError
            }
            HTTPUtils.ShowError(_message)
            SetErrorMsg(_message)
        }
    }

    const OnDelete = (emailAddressId: ModelIdType) => {          
        const emailAddressDeleted = UserResponse!.UserEmailAddresses!.find( phone => phone.Id == emailAddressId)
        const indexToDelete = UserResponse!.UserEmailAddresses!.indexOf(emailAddressDeleted!)   
        UserResponse!.UserEmailAddresses!.splice(indexToDelete, 1)        
        SetHasFilteredLookups(false)
        FilterLookup()
        const addMore = !IsLoadingLookups && !IsAuthenticating && !((UserResponse?.UserEmailAddresses?.length == Lookups.length) && Lookups.length > 0)                
        SetAddMore(addMore)
        HTTPUtils.RefreshWindow(true, SetUserResponse, UserResponse, router, CurrentPath, SearchParams, locale );
    }

    const FilterLookup = ( ) => {    
        let excludedIds: ModelIdType[] = []
        UserResponse?.UserEmailAddresses?.forEach(p => excludedIds.push(p.EmailAddressTypeId!))
        const lookups = DataUtils.FilterLookupNameValueResponse({ Lookups, ExcludedIds: excludedIds })
        SetFilteredLookups(lookups)
        SetSelectedEmailAddressType(lookups[0])
        SetHasFilteredLookups(true )
    }

    useEffect(() => {      
        if (!IsAuthenticating && !UserResponse?.IsAuthenticated){                 
            router.push(`/${locale}/security/login?redirect=${CurrentPath}`)                         
        }                
    }, [IsAuthenticating, UserResponse, UserResponse?.IsAuthenticated])
    
    useEffect(() => {      
        if (!hasFetchedEmailAddressTypes && !SelectedEmailAddressType && !IsLoadingLookups && Lookups && Lookups.length > 0) {
            hasFetchedEmailAddressTypes = true
            SetSelectedEmailAddressType(Lookups[0])
        }
        if (IsAuthenticating || IsLoadingLookups ){
            SetHasFilteredLookups(false)
        }
        if ( !IsLoadingLookups && FilteredLookups.length == 0 && !IsAuthenticating && UserResponse && UserResponse!.UserEmailAddresses!.length == 0 ){              
            SetHasFilteredLookups(false)
        }        
        if ( 
            (!IsLoadingLookups && !IsAuthenticating && UserResponse?.IsAuthenticated && !HasFilteredLookups ) ||
            (!IsLoadingLookups && !IsAuthenticating && UserResponse?.IsAuthenticated && FilteredLookups.length == 0 && Lookups.length > 0 ))
        {         
            FilterLookup()
        }
        const addMore = !IsLoadingLookups && !IsAuthenticating && !((UserResponse?.UserEmailAddresses.length == Lookups.length) && Lookups.length > 0)
        SetAddMore(addMore)        
        if ( !IsLoadingLookups && Lookups.length > 0 && !PrimaryEmailAddressLookupId  ){            
            SetPrimaryEmailAddressLookupId(Lookups.find(l => l.Value == "primary" )?.Id!)
        }
    }, [IsLoadingLookups, Lookups, UserResponse, IsAuthenticating, UserResponse?.IsAuthenticated, HasFilteredLookups])

    return (
        <>
            <section>
                <h1>{copy.Pages.User.EmailAddresses.MainHeading}</h1>
            </section>
            <section>
                <br />
                <table className={`${styles.pktablewithfirstcolumnhighlighted} ${styles.pkemailaddresspagetablewithfirstcolumnhighlighted}  `} >
                    <thead></thead>
                    <tbody>
                        {!IsAuthenticating && !IsLoadingLookups && UserResponse && UserResponse!.UserEmailAddresses!.map((emailaddress: IUserEmailAddress, index: number) => (
                            <tr>
                                <td>{emailaddress.EmailAddress}</td>
                                <td>{Lookups.find(l => l.Id == emailaddress.EmailAddressTypeId)?.Name}</td>
                                <td>
                                    {emailaddress.EmailAddressTypeId != PrimaryEmailAddressLookupId &&
                                        <DeleteConfirm url={`user/${UserResponse?.UserId}/emailaddresses/${emailaddress.Id}`} locale={locale}  onDelete={() => OnDelete(emailaddress.Id!)} />
                                    }
                                    {emailaddress.EmailAddressTypeId == PrimaryEmailAddressLookupId &&
                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </section>
            <br />
            {AddMore &&
                <section>
                    <Form
                        initialValues={initialValues}
                        onSubmit={OnAddSubmit}
                        validator={FormValidator}
                        ref={formRef}
                        render={(formRenderProps) =>
                            <FormElement className={`${styles.pkform}`}>
                                <fieldset className={'k-form-fieldset'}>
                                    <legend className={`k-form-legend ${styles.pkformlegend}`}>{copy.Pages.User.EmailAddresses.AddAnEmailAddress}</legend>
                                    <section className={styles.pkerrorcontainer} >
                                        {HasAttemptedASubmit && !formRenderProps.valid && formRenderProps.errors && formRenderProps.errors.VALIDATION_SUMMARY && (
                                            <article>
                                                <summary className={"k-messagebox k-messagebox-error"}>
                                                    <div  className={styles.pkerrorscrollercontainer}>
                                                        <div  className={styles.pkerrorscroller}>
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
                                    <FieldWrapper>
                                        <div className={`k-form-field-wrap ${styles.pkformfieldwrap}`}>
                                            <DropDownList
                                                id={`${EmailAddressTypeIdFieldName}-${ID}`}
                                                name={EmailAddressTypeIdFieldName}
                                                data={FilteredLookups}
                                                textField={"Name"}
                                                dataItemKey="Id"
                                                value={SelectedEmailAddressType}
                                                onChange={e => { SetSelectedEmailAddressType(e.value) }}
                                            />
                                            &nbsp;&nbsp;
                                            <InfoTip
                                                infoId={`${EmailAddressTypeIdFieldName}-${ID}_infotip`}
                                                locale={locale}>
                                                <p>{LocalisationUtils.GetValidationTipForLookups(copy, { Lookups: FilteredLookups, Item: copy.Pages.User.EmailAddresses.EmailAddress })}</p>
                                            </InfoTip>
                                        </div>
                                    </FieldWrapper>
                                    <Field
                                        component={KendoFormInputEmail}
                                        id={`${EmailAddressFieldName}-${ID}`}
                                        locale={locale}
                                        name={EmailAddressFieldName}
                                        label={copy.Pages.User.EmailAddresses.EmailAddress}
                                        value={EmailAddressValue}
                                        SetEmailAddressRef={SetEmailAddressRef}
                                        hint={LocalisationUtils.GetValidationTipForLookups(copy, { Lookups: FilteredLookups, Item: copy.Pages.User.EmailAddresses.EmailAddress })}
                                        validationMessage={formRenderProps.errors[copy.Pages.User.EmailAddresses.EmailAddress]}
                                        onChange={(e) => { SetEmailAddressValue(e.value) }}
                                    />
                                    <FieldWrapper>
                                        {ErrorMsg && <mark className={styles.pkhttperrormark}>{ErrorMsg}</mark>}
                                    </FieldWrapper>
                                    <div className={styles.pkuserdisplaysettingscomponentactionbar}>
                                        <Field
                                            component={KendoFormButton}
                                            locale={locale}
                                            id={`Reset-${ID}`}
                                            name='Reset'
                                            type='reset'
                                            label={copy.Common.Reset}
                                            onClick={OnResetClick}
                                        />
                                        <Field
                                            component={KendoFormButton}
                                            locale={locale}
                                            id={`Add-${ID}`}
                                            name='Add'
                                            type='submit'
                                            disabled={!formRenderProps.allowSubmit && !IsAuthenticating && !IsLoadingLookups}
                                            label={copy.Common.Add}
                                            onClick={OnAddSubmitClick}
                                        />
                                    </div>
                                </fieldset>
                            </FormElement>
                        }
                    />
                </section>
            }
        </>
    )
}