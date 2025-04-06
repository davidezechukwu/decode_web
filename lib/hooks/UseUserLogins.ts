/* eslint-disable prettier/prettier */
'use client'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { IUserLogin, ModelIdType } from '@david.ezechukwu/core'
import { HTTPUtils, API_TYPE, HTTP_ENCODING_TYPE, HTTP_METHOD, LocalisationUtils, Copy, DataUtils, } from '@/lib'
import { UseAllLookups } from './UseAllLookups'

export type UseUserLoginsProps = {    
    Locale?: string
    Device?: string
    UserId?: ModelIdType | undefined,    
    Limit? : number
}

export function UseUserLogins(props: UseUserLoginsProps): [boolean, IUserLogin[]] {
    props.Locale = props.Locale ?? (process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? LocalisationUtils.DefaultLocale)
    props.Device = props.Device ?? (process.env.NEXT_PUBLIC_DEFAULT_DEVICE ?? 'web')
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(props.Locale)
    const [_, AllLookups] = UseAllLookups({Locale: props.Locale, Device: 'web'})
    
    let apiUrl = `user/${props.UserId}/logins`    
    if (props.Limit){
        apiUrl = apiUrl + `&limit=${props.Limit}`
    }

    const GetUserLogins = async () => {
        try {
            const userDetails = await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.GET, HTTP_ENCODING_TYPE.JSON, apiUrl, null,{})
            return userDetails
        } catch (err: any) {
            if ((err?.message?.statusCode != 401 && err?.statusCode != 401) &&
            ( err?.message?.statusCode != 403 && err?.statusCode != 403) ){
                throw new Error(err)
            }        
            
            if (err?.message?.statusCode== 403 || err?.statusCode == 403){
                console.log("Access is denied please check casbin settings and ensure access is granted to UserResponse" )                
            }    
            return null            
        }
    }
    
    var [UserLogins, SetUserLogins] = useState([] as IUserLogin[])
    var { data, error, isLoading, isValidating, mutate } = useSWR(
        apiUrl, 
        GetUserLogins, 
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
            SetUserLogins(data)
        }
        return CleanUpEffect
    })

    return [isLoading || isValidating, DataUtils.PrepareForHumans(UserLogins, AllLookups)]
}
