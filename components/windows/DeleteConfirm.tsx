"use client"
import { useState } from 'react'
import { API_TYPE, Copy, HTTPUtils, HTTP_ENCODING_TYPE, HTTP_METHOD, LocalisationUtils } from '@/lib'
//import styles from '@/app/[locale]/layout.module.scss'

export type DeleteConfirmProps =  {
    url: string,
    locale: string,
    onDelete?: (()=>void )| undefined
}

export function DeleteConfirm(props: DeleteConfirmProps) {    
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(props.locale)
    const [DeleteNeedsConfirming, SetDeleteNeedsConfirming] = useState(false)
    const [ConfirmDeleteText, SetConfirmDeleteText] = useState(copy.Common.Delete)
    const onClick = async (event: any) => {
        if (!DeleteNeedsConfirming) {
            SetDeleteNeedsConfirming(true)
            SetConfirmDeleteText(copy.Common.PleaseConfirmDeletion)
            return
        }
        await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.DELETE, HTTP_ENCODING_TYPE.JSON, props.url, null, {})        
        SetDeleteNeedsConfirming(false)
        SetConfirmDeleteText(copy.Common.Delete)
        event.preventDefault()
        event.stopPropagation()        
        if (props.onDelete){
            props.onDelete()
        }
    }

    const onCancelClick = async (event: any) => {
        SetDeleteNeedsConfirming(false)
        SetConfirmDeleteText(copy.Common.Delete)
    }
    return (
        <>            
            <a onClick={onClick} href='#'>{ConfirmDeleteText}</a>
            <span>&nbsp;&nbsp;&nbsp;</span>
            {DeleteNeedsConfirming &&
                <a onClick={onCancelClick} href='#'>{copy.Common.Cancel}</a>
            }
        </>
    )
}
