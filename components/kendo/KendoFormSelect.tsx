
/*Do not use as this is faulty */

import { FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form'
import { DropDownList } from '@progress/kendo-react-dropdowns'
import { Error as ErrorLabel } from '@progress/kendo-react-labels'
import { InfoTip } from '@/components'
import styles from '@/app/[locale]/layout.module.scss'

export const KendoFormSelect = (fieldRenderProps: FieldRenderProps )=> {
    const {
      id,      
      hint,
      modified,                  
      validationMessage,         
      locale,      
      ...others
    } = fieldRenderProps;
    
    const showvalidationMessage: string | false | null =  modified && validationMessage;
    const showHint: boolean = hint != ''
  
    return (
      <FieldWrapper>
         <div className={`k-form-field-wrap ${styles.pkformfieldwrap}`}>
         <DropDownList                          
              id={id}                        
              ariaDescribedBy={`${`${id}_infotip`} ${`${id}_error`}`}              
              {...others} 
            />  
            &nbsp;&nbsp;
            {showHint && <InfoTip infoId={`${id}_infotip`} locale={locale}><p>{hint}</p><p>{validationMessage}</p></InfoTip> }   
          </div>        
        {showvalidationMessage && (<a className={styles.pkformfielderroranchor} href={`javascript:document.getElementById('${id}').focus();`}><ErrorLabel id={`${id}_error`}>{validationMessage}</ErrorLabel></a> )}
      </FieldWrapper>
    );
  };
  