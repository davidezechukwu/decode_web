'use client'
import { useParams } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react';
import { Form, FormElement, Field, FieldWrapper } from '@progress/kendo-react-form';
import { getter } from "@progress/kendo-react-common"
import { Error as ErrorLabel } from "@progress/kendo-react-labels";
import { API_TYPE, Copy, DataUtils, HTTPUtils, HTTP_ENCODING_TYPE, HTTP_METHOD, LocalisationUtils, UseLookupCategory, UseUserResponse } from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'
import { ILookupNameValueResponse, IUserPhoneNumber, IUserPhoneNumberConstants, IUserPhoneNumberRequest, ModelIdType, ServiceErrorCodesEnum, TypeUtility } from '@david.ezechukwu/core'
import { DeleteConfirm, KendoFormButton, KendoFormInputPhoneNumber, KendoFormSelect, InfoTip } from '@/components';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
var hasFetchedPhoneTypes = false;

export default function UserPhonesPage() {
    const params = useParams()
    const locale = (String)(params.locale)
    const ID = useId()
    const router = useRouter()
    const CurrentPath = usePathname()
    const SearchParams = useSearchParams()
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
    const [IsAuthenticating, UserResponse, SetUserResponse] = UseUserResponse()
    const [IsLoadingLookups, Lookups] = UseLookupCategory({ CategoryValue: `phonetypes`, Locale: locale })
    const [IsLoadingCountries, Countries] = UseLookupCategory({ CategoryValue: `countries`, Locale: locale  })
    const [FilteredLookups, SetFilteredLookups] = useState([] as ILookupNameValueResponse[])
    const [HasFilteredLookups, SetHasFilteredLookups] = useState(false)
    const [AddMore, SetAddMore] = useState(!(HasFilteredLookups && FilteredLookups.length != 0))    
    const [ErrorMsg, SetErrorMsg] = useState('')
    const [HasAttemptedASubmit, SetHasAttemptedASubmit] = useState(false)
    const formRef = useRef(null)
    let phoneRef = useRef(null);
    const SetPhoneRef = (ref: any) => { phoneRef = ref }    
    const [PhoneNumberValue, SetPhoneNumberValue] = useState('')
    const [SelectedPhoneType, SetSelectedPhoneType] = useState(undefined as any)
    const [SelectedCountry, SetSelectedCountry] = useState(undefined as any)
    const PhoneTypeIdFieldName = TypeUtility.NameOf<IUserPhoneNumberRequest>('PhoneTypeId')
    const PhoneNumberFieldName = TypeUtility.NameOf<IUserPhoneNumberRequest>('PhoneNumber')
    const PhoneNumberGetter: any = getter(PhoneNumberFieldName)
    const initialValues: { [index: string]: string } = {}
    initialValues[PhoneNumberFieldName] = ''

    const OnResetClick = (event: any) => {
        if (formRef.current) { (formRef.current as any).resetForm() }
        SetErrorMsg('')
        HTTPUtils.RefreshWindow();
    }

    const FormValidator = (values: any) => {
        const phoneNumber = PhoneNumberGetter(values)
        const isPhoneNumberValid = phoneNumber && phoneNumber?.length >= IUserPhoneNumberConstants.PHONE_NUMBER_MIN_LENGTH && phoneNumber?.length <= IUserPhoneNumberConstants.PHONE_NUMBER_MAX_LENGTH
        const isPhoneTypeIdValid = !IsLoadingLookups && Lookups.find(lookup => lookup.Id == lookup.Id)

        if (isPhoneNumberValid && isPhoneTypeIdValid) {
            return;
        }

        let validationError: { [index: string]: string, VALIDATION_SUMMARY: string } = { VALIDATION_SUMMARY: copy.Errors.ValidationErrors.GenericSummary }
        if (!isPhoneNumberValid) {
            validationError[PhoneNumberFieldName] = LocalisationUtils.GetValidationTip(
                copy,
                {
                    fieldValue: phoneNumber,
                    fieldName: copy.Pages.User.Phones.PhoneNumber,
                    minLen: IUserPhoneNumberConstants.PHONE_NUMBER_MIN_LENGTH,
                    maxLen: IUserPhoneNumberConstants.PHONE_NUMBER_MAX_LENGTH
                }
            )
        }
        return validationError;
    }

    const OnAddSubmitClick = (event: any) => { SetHasAttemptedASubmit(true) }
    const OnAddSubmit = (formData: any) => {
        try {
            if (phoneRef.current && !IsLoadingCountries) {
                let country = Countries.find(c => c.Value == (phoneRef!.current! as any).state.country.iso2!)
                SetSelectedCountry(country)
            }
            const reqBodyObject: IUserPhoneNumberRequest = {
                PhoneTypeId: SelectedPhoneType.Id,
                LocationId: SelectedCountry?.Id,
                PhoneNumber: formData[PhoneNumberFieldName].replace(" ", '').replace("-", '').replace("=", '')
            }

            const urlPath = `user/${UserResponse?.UserId}/phonenumbers`
            const requestOptions: RequestInit = {}

            HTTPUtils.RequestUsingCallback(
                API_TYPE.CORE,
                HTTP_METHOD.POST,
                HTTP_ENCODING_TYPE.JSON,
                urlPath,
                reqBodyObject,
                requestOptions,
                (userPhoneNumber: IUserPhoneNumber, err: any) => {                    
                    if (!err) {                            
                        if (formRef.current) { (formRef.current as any).resetForm() }                     
                        SetHasAttemptedASubmit(false)         
                        UserResponse?.UserPhoneNumbers?.push( userPhoneNumber)
                        HTTPUtils.RefreshWindow(true, SetUserResponse, UserResponse, router, CurrentPath, SearchParams, locale )                        
                        FilterLookup()
                        const addMore = !IsLoadingLookups && !IsAuthenticating && !((UserResponse?.UserPhoneNumbers?.length == Lookups.length) && Lookups.length > 0)                
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

    const FilterLookup = ( ) => {     
        let excludedIds: ModelIdType[] = []
        UserResponse?.UserPhoneNumbers?.forEach(p => excludedIds.push(p.PhoneTypeId!))
        const lookups = DataUtils.FilterLookupNameValueResponse({ Lookups, ExcludedIds: excludedIds })
        SetFilteredLookups(lookups)
        SetSelectedPhoneType(lookups[0])
        SetHasFilteredLookups(true)                    
    }

    const OnDelete = (phoneId: ModelIdType) => {          
        const phoneDeleted = UserResponse!.UserPhoneNumbers!.find( phone => phone.Id == phoneId)
        const indexToDelete = UserResponse!.UserPhoneNumbers!.indexOf(phoneDeleted!)   
        UserResponse?.UserPhoneNumbers?.splice(indexToDelete, 1)        
        SetHasFilteredLookups(false)
        FilterLookup()
        const addMore = !IsLoadingLookups && !IsAuthenticating && !((UserResponse?.UserPhoneNumbers?.length == Lookups.length) && Lookups.length > 0)                
        SetAddMore(addMore)
        HTTPUtils.RefreshWindow(true, SetUserResponse, UserResponse, router, CurrentPath, SearchParams, locale );
    }

    useEffect(() => {      
        if (!IsAuthenticating && !UserResponse?.IsAuthenticated){                 
            router.push(`/${locale}/security/login?redirect=${CurrentPath}`)                         
        }                
    }, [IsAuthenticating, UserResponse, UserResponse?.IsAuthenticated])
    
    useEffect(() => {        
        if (phoneRef.current && !IsLoadingCountries) {
            let country = Countries.find(c => c.Value == (phoneRef!.current! as any).state.country.iso2!)
            SetSelectedCountry(country)
        }
        if (!hasFetchedPhoneTypes && !SelectedPhoneType && !IsLoadingLookups && Lookups && Lookups.length > 0) {
            hasFetchedPhoneTypes = true
            SetSelectedPhoneType(Lookups[0])
        }
        if (IsAuthenticating || IsLoadingLookups ){
            SetHasFilteredLookups(false)
        }                
        if ( !IsLoadingLookups && FilteredLookups.length == 0 && !IsAuthenticating && UserResponse && UserResponse!.UserPhoneNumbers!.length == 0 ){              
            SetHasFilteredLookups(false)
        }
        if ( 
            (!IsLoadingLookups && UserResponse?.IsAuthenticated && !HasFilteredLookups ) ||
            (!IsLoadingLookups && UserResponse?.IsAuthenticated && FilteredLookups.length == 0 && Lookups.length > 0 ))
        {   
            FilterLookup()
        }
        const addMore = !IsLoadingLookups && !IsAuthenticating && !((UserResponse?.UserPhoneNumbers?.length == Lookups.length) && Lookups.length > 0)
        SetAddMore(addMore)
    }, [IsLoadingLookups, Lookups, IsLoadingCountries, Countries,  IsAuthenticating, UserResponse, UserResponse?.IsAuthenticated, HasFilteredLookups])

    return (
        <>
            <section>
                <h1>{copy.Pages.User.Phones.MainHeading}</h1>
            </section>
            <section>
                <br />
                <table className={`${styles.pktablewithfirstcolumnhighlighted} ${styles.pkphonepagetablewithfirstcolumnhighlighted}  `} >
                    <thead></thead>
                    <tbody>
                        {!IsAuthenticating && !IsLoadingLookups && UserResponse?.UserPhoneNumbers?.map((phone: IUserPhoneNumber, index: number) => (
                            <tr>
                                <td>{phone.PhoneNumber}</td>
                                <td>{Lookups.find(l => l.Id == phone.PhoneTypeId)?.Name}</td>
                                <td><DeleteConfirm url={`user/${UserResponse?.UserId}/phonenumbers/${phone.Id}`} locale={locale}  onDelete={() => OnDelete(phone.Id!)} /></td>
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
                                    <legend className={`k-form-legend ${styles.pkformlegend}`}>{copy.Pages.User.Phones.AddAPhoneNumber}</legend>
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
                                                id={`${PhoneTypeIdFieldName}-${ID}`}
                                                name={PhoneTypeIdFieldName}
                                                data={FilteredLookups}
                                                textField={"Name"}
                                                dataItemKey="Id"
                                                value={SelectedPhoneType}
                                                onChange={e => { SetSelectedPhoneType(e.value) }}
                                            />
                                            &nbsp;&nbsp;
                                            <InfoTip
                                                infoId={`${PhoneTypeIdFieldName}-${ID}_infotip`}
                                                locale={locale}>
                                                <p>{LocalisationUtils.GetValidationTipForLookups(copy, { Lookups: FilteredLookups, Item: copy.Pages.User.Phones.PhoneNumber })}</p>
                                            </InfoTip>
                                        </div>
                                    </FieldWrapper>
                                    <Field
                                        component={KendoFormInputPhoneNumber}
                                        id={`${PhoneNumberFieldName}-${ID}`}
                                        locale={locale}
                                        name={PhoneNumberFieldName}
                                        label={copy.Pages.User.Phones.PhoneNumber}
                                        value={PhoneNumberValue}
                                        SetPhoneRef={SetPhoneRef}
                                        hint={LocalisationUtils.GetValidationTipForLookups(copy, { Lookups: FilteredLookups, Item: copy.Pages.User.Phones.PhoneNumber })}
                                        validationMessage={formRenderProps.errors[copy.Pages.User.Phones.PhoneNumber]}
                                        onChange={(e) => { SetPhoneNumberValue(e.value) }}
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
                                            disabled={!formRenderProps.allowSubmit && !IsAuthenticating && IsLoadingCountries && !IsLoadingLookups}
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