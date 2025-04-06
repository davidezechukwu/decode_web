/* eslint-disable prettier/prettier */
'use client'
import {useEffect } from 'react'
import {useRouter, usePathname} from 'next/navigation'
import useSWR from 'swr'
import { IUserResponse,  } from '@david.ezechukwu/core'
import { HTTPUtils, API_TYPE, HTTP_ENCODING_TYPE, HTTP_METHOD } from '@/lib'

export type UseUserProps = {
    redirectToIfFound?: boolean
    redirectToIfFoundUrl?: string
    redirectToIfNotFound?: boolean
    redirectToIfNotFoundUrl?: string
}

export function UseUserResponse(
    props: UseUserProps = {
        redirectToIfFound: undefined,
        redirectToIfFoundUrl: '/user',
        redirectToIfNotFound: undefined,
        redirectToIfNotFoundUrl: undefined,
    },
): [boolean, IUserResponse | null, any] {
    const router = useRouter()
    const pathname = usePathname()        
    const apiUrl = `/user`
    
    const GetUserResponse = async() => {
        try {
            const userDetails = await HTTPUtils.RequestUsingPromise(API_TYPE.CORE,HTTP_METHOD.GET,HTTP_ENCODING_TYPE.JSON,apiUrl,null,{})
            return userDetails
        } catch (err: any) {
            if (( err?.message?.statusCode != 401 && err?.statusCode != 401) &&
            ( err?.message?.statusCode != 403 && err?.statusCode != 403) ){                           
                console.log("GetUserResponse failed with this (this could be because the call was not authenticated and authetication is required" )                
                console.log(err)
            }        
            
            if (err?.message?.statusCode== 403 || err?.statusCode == 403){
                console.log("GetUserResponse failed as access was denied please check casbin settings and ensure access is granted to UserResponse" )                
            }    
            return null            
        }
    }
    const SWROPtions = undefined        
    let { data, error, isLoading, isValidating, mutate} = useSWR(apiUrl, GetUserResponse, SWROPtions)

    const CleanUpEffect = () => {}        
    useEffect(() => {                        
        if (props.redirectToIfFound && !props.redirectToIfFoundUrl){
            throw new Error(`props.redirectToIfFoundUrl is null for the route ${pathname}` )
        }

        if (props.redirectToIfNotFound && !props.redirectToIfNotFoundUrl){
            throw new Error(`props.redirectToIfNotFoundUrl is null for the route ${pathname}` )
        }
     
        if (
            props.redirectToIfFound &&
            props.redirectToIfFoundUrl &&
            !isLoading &&
            !isValidating &&                
            data?.IsAuthenticated == true
        ) {            
            router.push(props.redirectToIfFoundUrl)                 
        }

        if (
            props.redirectToIfNotFound &&
            props.redirectToIfNotFoundUrl &&
            !isLoading &&
            !isValidating &&
            data &&
            (!data?.IsAuthenticated || !data?.UserId)                
        ) {            
            router.push(props.redirectToIfNotFoundUrl)                         
        }       
        return CleanUpEffect
    }, [isLoading, isValidating, data, data?.IsAuthenticated, data?.UserId, error, props])

    return [
        (isLoading || isValidating) && ( !data || error),        
        data,
        (_userDetails: IUserResponse | undefined) => {                        
            if (_userDetails && _userDetails.IsAuthenticated) {
                mutate(_userDetails, false)
            } else {                                
                mutate(_userDetails, true)
            }            
        }
    ]
}
  