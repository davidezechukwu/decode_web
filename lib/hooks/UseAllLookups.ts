/* eslint-disable prettier/prettier */
'use client'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { ILookup, ILookupNameValueResponse } from '@david.ezechukwu/core'
import { HTTPUtils, API_TYPE, HTTP_ENCODING_TYPE, HTTP_METHOD, LocalisationUtils, Copy, } from '@/lib'

export type UseAllLookupsProps = {     
    Locale?: string
    Device?: string
}

export function UseAllLookups(props: UseAllLookupsProps): [boolean, ILookup[], any] {
    props.Locale = props.Locale ?? (process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? LocalisationUtils.DefaultLocale)
    props.Device = props.Device ?? (process.env.NEXT_PUBLIC_DEFAULT_DEVICE ?? 'web')
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(props.Locale)    
    const apiUrl = `lookup/lookups?locale=${props.Locale.toLowerCase()}&device=${props.Device.toLowerCase()}`

    const GetLookups = async () => {
        try {            
            let lookups: ILookup[] = await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.GET, HTTP_ENCODING_TYPE.JSON, apiUrl, null, {})            
            return lookups
        } catch (err: any) {          
            HTTPUtils.ShowError(copy.Errors.Common.GenericError)
            return null
        }
    }
        
    var { data, error, isLoading, isValidating, mutate } = useSWR(
        apiUrl, 
        GetLookups, 
        {
            revalidateIfStale :true,
            revalidateOnMount: true,
            keepPreviousData: true,
            suspense: false,
            revalidateOnFocus : false,
            revalidateOnReconnect : false,
            shouldRetryOnError : true,
            refreshInterval:3600000,
            dedupingInterval:360000,
            errorRetryInterval:2000 
        }
    )

    return [
        (isLoading || isValidating), 
        data ?? [],
        (locale: string) => {      
            mutate()
        }
    ]
}
