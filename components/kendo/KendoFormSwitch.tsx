import { FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form'
import styles from '@/app/[locale]/layout.module.scss'
import { Switch } from '@progress/kendo-react-inputs'
import { InfoTip } from '@/components'

export const KendoFormSwitch = (fieldRenderProps: FieldRenderProps) => {
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
          <Switch                                       
            {...others} 
          />
          &nbsp;&nbsp;
          {showHint && <InfoTip infoId={`${id}_infotip`} locale={locale}><p>{hint}</p><p>{validationMessage}</p></InfoTip> }          
        </div>                
      </FieldWrapper>
    );
  };
  