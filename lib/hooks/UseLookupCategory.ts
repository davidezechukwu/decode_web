/* eslint-disable prettier/prettier */
'use client'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { ILookup, ILookupNameValueResponse } from '@david.ezechukwu/core'
import { HTTPUtils, API_TYPE, HTTP_ENCODING_TYPE, HTTP_METHOD, LocalisationUtils, Copy, } from '@/lib'

export type UseLookupProps = {
    CategoryValue: string
    Locale?: string
    Device?: string
}

export function UseLookupCategory(props: UseLookupProps): [boolean, ILookupNameValueResponse[]] {
    props.Locale = props.Locale ?? (process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? LocalisationUtils.DefaultLocale)
    props.Device = props.Device ?? (process.env.NEXT_PUBLIC_DEFAULT_DEVICE ?? 'web')
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(props.Locale)
    const apiUrl = `lookup/categories/${props.CategoryValue.toLowerCase()}/lookups?locale=${props.Locale.toLowerCase()}&device=${props.Device.toLowerCase()}`

    const GetLookupNameValueResponse = async () => {
        try {            
            let lookupNameValueResponses: ILookupNameValueResponse[] = []
            const lookupCategory = await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.GET, HTTP_ENCODING_TYPE.JSON, apiUrl, null, {})
            lookupCategory.Lookups.forEach((lookup: ILookup) => {
                lookupNameValueResponses.push({
                    Id: lookup.Id!,
                    LookupCategoryId: lookup.LookupCategoryId,
                    Name: lookup.Name,
                    Value: lookup.Value                    
                })
            })

            return lookupNameValueResponses
        } catch (err: any) {          
            HTTPUtils.ShowError(copy.Errors.Common.GenericError)
            return null
        }
    }
    
    var [LookupNameValueResponse, SetLookupNameValueResponse] = useState([] as ILookupNameValueResponse[])
    var { data, error, isLoading, isValidating, mutate } = useSWR(
        apiUrl, 
        GetLookupNameValueResponse, 
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

    const CleanUpEffect = () => { }
    useEffect(() => {
        if (!isLoading && !isValidating && !error && data)  {
            SetLookupNameValueResponse(data)
        }
        return CleanUpEffect
    })

    return [isLoading/* || isValidating*/, LookupNameValueResponse]
}
