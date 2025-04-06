'use client'
import { useState, useEffect, useRef} from 'react'
import { IconSize, SvgIcon } from '@progress/kendo-react-common'
import * as svgIcons from '@progress/kendo-svg-icons'
import { Button } from '@progress/kendo-react-buttons'
import { Popover, PopoverActionsBar  } from '@progress/kendo-react-tooltip'
import { Copy, LocalisationUtils } from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'

export type InfoTipProps = {
    children: React.ReactNode,
    infoId: string,
    locale: string,
    size?: IconSize
}

export function InfoTip(props: InfoTipProps) {         
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(props.locale)
    const anchor = useRef(null);
    const [show, setShow] = useState(false);    
    useEffect(() => {setShow(false)}, []);
    const onClick = (event: any) => { setShow(!show); }
    const onClickPreventDefault = (event: any) => { setShow(!show); event.preventDefault(); event.stopPropagation(); }    
    const size = props.size ?? 'medium'
    return (
        <>
            <Button ref={anchor} className={styles.pkinfotipbutton} onClick={onClickPreventDefault} fillMode='flat'>                            
                <SvgIcon icon={svgIcons['infoCircleIcon']} size={size} />
            </Button>
            <Popover 
                show={show} 
                position='bottom' 
                collision={{vertical: 'fit', horizontal: 'fit'}} 
                anchor={anchor.current && anchor.current['element'] } 
                title={copy.Common.InfoTipHeader}
                className={styles.pkinfotipopover}
                contentStyle={{padding: '0 1rem' }}                
            >
                <span id={props.infoId}>{props.children}</span>
                <PopoverActionsBar alignment='start'>                            
                    <Button onClick={onClick} fillMode={'flat'} className={`${styles.pkbutton} ${styles.pkbuttontypebutton}`}>{copy.Common.Close}</Button>
                </PopoverActionsBar>
            </Popover>
        </>        
    )
}
