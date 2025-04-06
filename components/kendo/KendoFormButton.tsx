import { FieldRenderProps, FieldWrapper } from "@progress/kendo-react-form"
import styles from '@/app/[locale]/layout.module.scss'
import { Button } from "@/components"

export const KendoFormButton = (fieldRenderProps: FieldRenderProps) => {
    const {
      label,
      type,    
      valid,
      validationMessage,         
      ...others
    } = fieldRenderProps;
        
    return (
      <FieldWrapper>        
        <div className={`k-form-field-wrap ${styles.pkformfieldwrap}`}>          
          <Button type={type} label={label} {...others} />
        </div>                
      </FieldWrapper>
    );
  };
  