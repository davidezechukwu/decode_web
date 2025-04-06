import { toast } from 'react-toastify';
import { IUserResponse, PathUtility, ServiceErrorCodesEnum, StringUtility, } from '@david.ezechukwu/core'
import qs from 'qs'
import { ReadonlyURLSearchParams } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
const https = require('https');

export enum HTTP_METHOD {
    GET = 1,
    DELETE = 2,
    HEAD = 3,
    OPTIONS = 4,
    POST = 5,
    PUT = 6,
    PATCH = 7,
}

export enum HTTP_ENCODING_TYPE {
    JSON = 1,
    FORM_ENCODED = 2,
    MULTI_PART = 3,
}

export enum API_TYPE {
    CORE = 1,
}

export class HTTPUtils {
    // eslint-disable-next-line prettier/prettier
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    static readonly IsProduction: boolean = +process.env.NEXT_PUBLIC_IS_PRODUCTION! == 0

    static HTTPError = class extends Error {        
        statusCode: number
        status: string
        date: any        
        constructor(message: string = 'An Internal Server error', statusCode: any = undefined) {
            super(message)
            this.message = message 
            this.statusCode = statusCode ?? ServiceErrorCodesEnum.InternalServerError
            this.status = ServiceErrorCodesEnum[this.statusCode]
            this.date = new Date().toString()                        
            if (!HTTPUtils.IsProduction && Error.captureStackTrace) {
                Error.captureStackTrace(this, HTTPUtils.HTTPError)
            }                  
        }
    }

    protected static GetRequestMarshallingOptions(
        apiType: API_TYPE,
        method: HTTP_METHOD,
        encoding: HTTP_ENCODING_TYPE,
        urlPath: string,
        payload: object | null,
        options: RequestInit,
    ) {
        const _options: any = { ...options, }
        _options.mode = _options.mode ?? 'cors'
        _options.credentials = _options.credentials ?? 'include'
        _options.headers = _options.headers ?? {}        
        _options.headers.Accept = _options.headers.Accept ??  'application/json'
        if (method == HTTP_METHOD.DELETE ){
            _options.headers.Accept = 'text/plain'
        }

        let apiHostUrl = ''
        switch (apiType) {
            case API_TYPE.CORE:
                // eslint-disable-next-line prettier/prettier
                if (!process.env.NEXT_PUBLIC_CORE_API_HOST) throw new Error('process.env.NEXT_PUBLIC_CORE_API_HOST is null')
                apiHostUrl = process.env.NEXT_PUBLIC_CORE_API_HOST.toString()
                break
        }
        _options.url = `${PathUtility.RemoveTrailingSlash(apiHostUrl)}/${PathUtility.RemoveLastSlash(urlPath)}`

        switch (encoding) {
            case HTTP_ENCODING_TYPE.JSON:
                _options.headers['Content-Type'] = 'application/json'
                _options.encoding = 'application/json'
                _options.body = payload ? JSON.stringify(payload) : null                                
                break
            case HTTP_ENCODING_TYPE.FORM_ENCODED:
                _options.headers['Content-Type'] = 'application/x-www-form-urlencoded'        
                _options.encoding = 'application/x-www-form-urlencoded'
                _options.body = payload ? qs.stringify(payload) : null
                break
            case HTTP_ENCODING_TYPE.MULTI_PART:
                _options.headers['Content-Type'] = 'multipart/form-data'        
                _options.encoding = 'multipart/form-data'
                if (payload) {
                    const formData = new FormData()
                    Object.entries(payload).forEach(([key, value,]) => formData.append(key, value))
                    _options.body = formData
                } else {
                    _options.body = null
                }
                break
            default:
                throw new HTTPUtils.HTTPError(`The specified encoding type ${HTTP_ENCODING_TYPE[encoding]} using the ${HTTP_METHOD[method]} on ${urlPath}`)
        }

        switch (method) {
            case HTTP_METHOD.GET:
                _options.method = 'GET'
                delete _options.body
                break
            case HTTP_METHOD.POST:
                _options.method = 'POST'
                break
            case HTTP_METHOD.PUT:
                _options.method = 'PUT'
                break
            case HTTP_METHOD.DELETE:
                _options.method = 'DELETE'
                break
            default:
                throw new HTTPUtils.HTTPError(`The specified method ${HTTP_METHOD[method]} using the ${HTTP_ENCODING_TYPE[encoding]} encoding on ${urlPath} is not supported`)
        }

        if (_options.body &&_options.encoding != HTTP_ENCODING_TYPE.MULTI_PART) {
            _options.headers['Content-Length'] = new TextEncoder().encode(_options.body).length
        }

        return _options
    }

    protected static async Fetch(options: RequestInit & {url: string}): Promise<Response>{                   
        return new Promise(async (resolve, reject ) =>{
            try {                
                const isProduction: boolean = +process.env.NEXT_PUBLIC_IS_PRODUCTION! == 0                
                const response = await fetch(options.url, options) 
                resolve(response);
            }catch(err){                
                console.error(`ERROR: ${HTTPUtils.Fetch.name} failed fetch call on ${options.url} with this error ${err}`)            
                reject (err)
            }
        })        
    }

    static RequestUsingCallback(
        apiType: API_TYPE,
        method: HTTP_METHOD,
        encoding: HTTP_ENCODING_TYPE,
        urlPath: string,
        payload: object | null,
        options: RequestInit,
        callback: (data: any, err: any) => void,
    ) {
        try {
            const _options = HTTPUtils.GetRequestMarshallingOptions(apiType,method,encoding,urlPath,payload,options)
            HTTPUtils.Fetch(_options)
                .then((response) => {
                    if (response.ok) {
                        if (_options.headers.Accept?.toLowerCase() == 'application/json'){
                            response.json().then((data) => {
                                callback(data, undefined)
                            }).catch((err) => {
                                const httpError = new HTTPUtils.HTTPError(err)
                                callback(undefined, httpError)
                            })
                        }else{
                            if ( response.status != 204){
                                const httpError = new HTTPUtils.HTTPError("Not Implemented")
                                callback(undefined, httpError)
                            }else{
                                callback(undefined, undefined)
                            }                            
                        }
                    } else {  
                        response.json().then((data) => {
                            const httpError = new HTTPUtils.HTTPError(data, response.status)
                            callback(undefined, httpError)
                        }).catch((err) => {
                            const httpError = new HTTPUtils.HTTPError(err)
                            callback(undefined, httpError)
                        })                    
                    }
                })
                .catch((err) => {
                    if ( err?.message?.statusCode != 401 && err?.statusCode != 401){
                        if ( err instanceof HTTPUtils.HTTPError){
                            callback(undefined, err)
                        }else{
                            const httpError = new HTTPUtils.HTTPError(err)
                            callback(undefined, httpError)
                        }
                    }else{
                        callback(undefined, undefined)
                    }
                })
        } catch (err: any) {
            if ( err?.message?.statusCode != 401 && err?.statusCode != 401){
                if ( err instanceof HTTPUtils.HTTPError){
                    callback(undefined, err)
                }else{
                    const httpError = new HTTPUtils.HTTPError(err)
                    callback(undefined, httpError)
                }
            }
        }
    }

    static async RequestUsingPromise(
        apiType: API_TYPE,
        method: HTTP_METHOD,  
        encoding: HTTP_ENCODING_TYPE,
        urlPath: string,
        payload: object | null,
        options: RequestInit,
    ) {
        const _options = HTTPUtils.GetRequestMarshallingOptions(apiType,method,encoding,urlPath,payload,options)
        try {                        
            const response = await HTTPUtils.Fetch(_options)
            if (response.ok) {
                if (_options.headers.Accept?.toLowerCase() == 'application/json'){                        
                    return response.json() 
                }else{     
                    if ( response.status != 204){
                        throw "The Accept Header content type is not implemented"
                    }
                }
            } else {
                if ( response.status != 401){
                    let data = await response.json()
                    throw new HTTPUtils.HTTPError(data)                    
                }
            }
        } catch (err: any) {
            if ( err?.message?.statusCode != 401 && err?.statusCode != 401){
                if ( err instanceof HTTPUtils.HTTPError){
                    throw err
                }else{
                    const httpError = new HTTPUtils.HTTPError(err)
                    throw httpError
                }
            }
        }
    }

    static FormEncode(data: any): string {
        const dataEncodedAsForms = new URLSearchParams(
            Object.entries(data),
        ).toString()
        return dataEncodedAsForms
    }

    static ShowError(err: string){      
        toast.error(err)        
        if ( !HTTPUtils.IsProduction){
            console.log(err);
        }
    }

    static async RefreshWindow(
        softRefresh: boolean = false, 
        setUserResponse: ((userResponse: IUserResponse | null)=>void ) | undefined = undefined,
        userResponse: IUserResponse | null = null,
        router: AppRouterInstance | undefined = undefined, 
        currentPath: string | undefined = undefined,
        searchParams: ReadonlyURLSearchParams | undefined = undefined,
        locale: StringUtility | undefined = undefined
        ) {                        
        if ( softRefresh && setUserResponse && router){     
            if (userResponse ){
                setUserResponse(userResponse ) 
            }else{
                setUserResponse( null ) 
            }            
            await router.refresh()
        }else{
            window.location.reload();
        }        
    }
}