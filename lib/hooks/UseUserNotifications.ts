/* eslint-disable prettier/prettier */
'use client'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { IUserNotification, ModelIdType } from '@david.ezechukwu/core'
import { HTTPUtils, API_TYPE, HTTP_ENCODING_TYPE, HTTP_METHOD, LocalisationUtils, Copy, DataUtils, } from '@/lib'
import { UseAllLookups } from './UseAllLookups'

export type UseUserNotificationsProps = {    
    Locale?: string
    Device?: string
    UserId?: ModelIdType | undefined,
    PendingStatusId?: ModelIdType,    
    Limit? : number
}

export function UseUserNotifications(props: UseUserNotificationsProps): [boolean, IUserNotification[], any] {    
    props.Locale = props.Locale ?? (process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? LocalisationUtils.DefaultLocale)
    props.Device = props.Device ?? (process.env.NEXT_PUBLIC_DEFAULT_DEVICE ?? 'web')
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(props.Locale)        
    const [IsLoadingAllLookups, AllLookups, SetAllLookups] = UseAllLookups({Locale: props.Locale, Device: 'web'})        
    let apiUrl = `user/${props.UserId}/notifications?notificationstrategyvalue=inapp&`
    if (props.PendingStatusId){
        apiUrl = apiUrl + `&notificationstatusid=${props.PendingStatusId}&limit=1000`
    }
    if (props.Limit){
        apiUrl = apiUrl + `&limit=${props.Locale}&device=${props.Device}`
    }
    apiUrl = apiUrl + `&locale=${props.Locale}`

    const GetUserNotifications = async () => {
        try {
            if (!props.UserId ){
                return null
            }
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
    
    var [UserNotifications, SetUserNotifications] = useState([] as IUserNotification[])
    var { data, error, isLoading, isValidating, mutate } = useSWR(
        apiUrl, 
        GetUserNotifications, 
        {
            revalidateIfStale :true,
            revalidateOnMount: true,
            keepPreviousData: true,
            suspense: false,
            revalidateOnFocus : false,
            revalidateOnReconnect : false,
            shouldRetryOnError : true,
            refreshInterval:120000, /*TODO: This clears the menu filter*/
            dedupingInterval:2000,
            errorRetryInterval:2000 
        }
    )

    useEffect(() => {        
        if (!isLoading && !isValidating && !error && data)  {
            SetUserNotifications(data)
        }
        return () => { }
    })

    return [
        isLoading || isValidating, 
        DataUtils.PrepareForHumans(UserNotifications, AllLookups),
        (userNotifications: IUserNotification[] | undefined) => {                        
            if (userNotifications && userNotifications.length > 0) {
                mutate(userNotifications, false)
            } else {                                
                mutate(userNotifications, true)
            }            
        }
    ]
}
