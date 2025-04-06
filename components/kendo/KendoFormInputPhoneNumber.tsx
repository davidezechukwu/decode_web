"use client"
import { FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import styles from '@/app/[locale]/layout.module.scss'
import { InfoTip } from '@/components'
import { IUserPhoneNumberConstants } from '@david.ezechukwu/core'
import { useEffect, useRef } from 'react'

export const KendoFormInputPhoneNumber = (fieldRenderProps: FieldRenderProps) => {
    let {            
      id,            
      name,
      hint,      
      modified,              
      validationMessage,   
      locale,            
      onChange,
      SetPhoneRef,
      ...others      
    } = fieldRenderProps;      
    const showvalidationMessage: string | false | null =  modified && validationMessage;
    const showHint: boolean = hint != ''
    const ref = useRef(null)    

    useEffect(() => SetPhoneRef(ref))    
    return (
      <FieldWrapper>        
        <div className={`k-form-field-wrap ${styles.pkformfieldwrap} ${styles.pkforminputphonenumber}`}>
          <PhoneInput         
            ref={ref}   
            inputProps={{
              id, 
              name, 
              minLength: IUserPhoneNumberConstants.PHONE_NUMBER_MIN_LENGTH,
              maxLength: IUserPhoneNumberConstants.PHONE_NUMBER_MAX_LENGTH,
              onChange
            }}     
            defaultCountry={locale == 'en' || locale == '' ? 'gb' : locale}        
            disableFormatting={true}                
            {...others}
          />          
          &nbsp;&nbsp;
          {showHint && <InfoTip infoId={`${id}_infotip`} locale={locale}><p>{hint}</p><p>{validationMessage}</p></InfoTip> }          
        </div>                
      </FieldWrapper>
    );
  };
  