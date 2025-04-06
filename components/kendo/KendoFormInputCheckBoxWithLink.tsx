import { FieldRenderProps, FieldWrapper } from "@progress/kendo-react-form";
import { SvgIcon } from '@progress/kendo-react-common'
import * as svgIcons from '@progress/kendo-svg-icons'
import { Checkbox } from '@progress/kendo-react-inputs';
import { Error as ErrorLabel } from '@progress/kendo-react-labels';
import { InfoTip } from '@/components';
import styles from '@/app/[locale]/layout.module.scss'

export const KendoFormInputCheckBoxWithLink = (fieldRenderProps: FieldRenderProps) => {
    const {
      id,      
      label,      
      hint,
      modified,                             
      validationMessage,   
      showlabelaslink,
      url,
      locale,
      ...others
    } = fieldRenderProps;
  
    const showvalidationMessage: string | false | null =  modified && validationMessage;
    const showHint: boolean = hint != ''
    
    return (
      <FieldWrapper>
        <div className={`k-form-field-wrap ${styles.pkformfieldwrap}`}>
          <label className={`${styles.pkforminputcheckboxwithlink}`}>          
            <Checkbox                         
              id={id} 
              ariaDescribedBy={`${`${id}_infotip`} ${`${id}_error`}`}
              {...others} 
            />   
            &nbsp;&nbsp;                        
            {showlabelaslink && 
              <>
                {label}              
                <a 
                  className={styles.pkforminputcheckboxwithlinkicon} 
                  href={url} 
                  target='_blank'
                  title={hint}
                >
                  <SvgIcon icon={svgIcons['arrowUpIcon']} size='medium' aria-description={hint}  width={20}  height={20} style={{transform: 'rotate(45deg)'}} />                  
                </a>
              </>
            }     
             {!showlabelaslink && <span>{label}</span>}                                         
          </label>         
          {showHint && <InfoTip infoId={`${id}_infotip`} locale={locale}><p>{hint}</p><p>{validationMessage}</p></InfoTip> }   
        </div>        
        {showvalidationMessage && (<a style={{textDecoration: "none: !important"}} className={styles.pkformfielderroranchor} href={`javascript:document.getElementById('${id}').focus();`}><ErrorLabel id={`${id}_error`}>{validationMessage}</ErrorLabel></a> )}
      </FieldWrapper>
    );
  };
  