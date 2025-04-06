import { FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form'
import { Input } from '@progress/kendo-react-inputs'
import { FloatingLabel, Error as ErrorLabel } from '@progress/kendo-react-labels'
import { InfoTip } from '@/components'
import styles from '@/app/[locale]/layout.module.scss'

export const KendoFormInputText = (fieldRenderProps: FieldRenderProps) => {
    const {
      id,
      name,
      label,
      value,
      editorValue,      
      hint,
      modified,            
      valid,
      disabled,      
      optional,   
      validationMessage,   
      locale,
      ...others
    } = fieldRenderProps;
  
    const showvalidationMessage: string | false | null =  modified && validationMessage;
    const showHint: boolean = hint != ''
    
    return (
      <FieldWrapper>
        <FloatingLabel labelClassName={styles.pkformlabelhint} label={label} editorId={id} editorValid={value} editorDisabled={disabled} optional={optional} editorValue={value}>                         
        <div className={`k-form-field-wrap ${styles.pkformfieldwrap}`}>
          <Input 
            type='text'            
            id={id}  
            value={value}            
            ariaDescribedBy={`${`${id}_infotip`} ${`${id}_error`}`}
            {...others} 
          />
          {showHint && <InfoTip infoId={`${id}_infotip`} locale={locale}><p>{hint}</p><p>{validationMessage}</p></InfoTip> }          
        </div>        
        </FloatingLabel>
        {showvalidationMessage && (<a className={styles.pkformfielderroranchor} href={`javascript:document.getElementById('${id}').focus();`}><ErrorLabel id={`${id}_error`}>{validationMessage}</ErrorLabel></a> )}
      </FieldWrapper>
    );
  };
  