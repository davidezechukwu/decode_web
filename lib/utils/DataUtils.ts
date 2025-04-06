// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJsConfig = require('../../next.config')
import { toast } from 'react-toastify';
import {
    ILookup,
    ILookupCategoryWithRelations,
    ILookupLanguageResponse,
    ILookupNameValueResponse,
    IUserName,
    IUserNotification,    
    IUserResponse,    
    ModelIdType,
} from '@david.ezechukwu/core'
import { API_TYPE, Copy, HTTPUtils, HTTP_ENCODING_TYPE, HTTP_METHOD, LocalisationUtils } from 'lib'

let CachedThemes: { [key: string]: ILookup[] } = {}
let notificationTimer : any = undefined    

export class DataUtils {
    static async GetLanguages(
        locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? LocalisationUtils.DefaultLocale,
        device = process.env.NEXT_PUBLIC_DEFAULT_DEVICE ?? 'web'
        ): Promise<ILookupLanguageResponse[]> {            
            return new Promise<ILookupLanguageResponse[]>((resolve, reject) => {
                try {                
                    const urlPath = `lookup/categories/languages?locale=${locale}&device=${device}`
                    const requestOptions: RequestInit = {}                    
                    HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.GET, HTTP_ENCODING_TYPE.JSON, urlPath, null, requestOptions)
                    .then((languages: ILookupLanguageResponse[]) => {
                        let defaultlanguage = languages.find((p) => p.Value.toLocaleLowerCase() === process.env.NEXT_PUBLIC_DEFAULT_LOCALE)
                        if (!defaultlanguage) {
                            languages.find((p) => p.Value.toLocaleLowerCase() === LocalisationUtils.DefaultLocale.toLocaleLowerCase())
                        }
                        if (!defaultlanguage) {
                            throw new Error('No default language found')
                        }
                        defaultlanguage.IsSelected = true                        
                        return resolve(languages)
                    })
                    .catch((e: any) => {
                        //return reject(e)
                        //todo: use a fallback
                        return resolve ([
                            {
                              Id: 252,
                              LookupCategoryId: 3,
                              Name: "Punjabi",
                              Value: "pa",
                              IsRTL: false,
                              ISO639_1: "pan",
                              ISO639_2: "pa",
                              ISO639_3: "pan"
                            },
                            {
                              Id: 253,
                              LookupCategoryId: 3,
                              Name: "English",
                              Value: "en",
                              IsRTL: false,
                              ISO639_1: "eng",
                              ISO639_2: "en",
                              ISO639_3: "eng"
                            },
                            {
                              Id: 254,
                              LookupCategoryId: 3,
                              Name: "Urdu",
                              Value: "ur",
                              IsRTL: true,
                              ISO639_1: "urd",
                              ISO639_2: "ur",
                              ISO639_3: "urd"
                            },
                            {
                              Id: 255,
                              LookupCategoryId: 3,
                              Name: "French",
                              Value: "fr",
                              IsRTL: false,
                              ISO639_1: "fre",
                              ISO639_2: "fr",
                              ISO639_3: "fre"
                            }
                          ])
                    })
                }
                catch (e: any) {
                    //return reject(e)
                    //todo: use a fallback
                    return resolve ([
                        {
                          Id: 252,
                          LookupCategoryId: 3,
                          Name: "Punjabi",
                          Value: "pa",
                          IsRTL: false,
                          ISO639_1: "pan",
                          ISO639_2: "pa",
                          ISO639_3: "pan"
                        },
                        {
                          Id: 253,
                          LookupCategoryId: 3,
                          Name: "English",
                          Value: "en",
                          IsRTL: false,
                          ISO639_1: "eng",
                          ISO639_2: "en",
                          ISO639_3: "eng"
                        },
                        {
                          Id: 254,
                          LookupCategoryId: 3,
                          Name: "Urdu",
                          Value: "ur",
                          IsRTL: true,
                          ISO639_1: "urd",
                          ISO639_2: "ur",
                          ISO639_3: "urd"
                        },
                        {
                          Id: 255,
                          LookupCategoryId: 3,
                          Name: "French",
                          Value: "fr",
                          IsRTL: false,
                          ISO639_1: "fre",
                          ISO639_2: "fr",
                          ISO639_3: "fre"
                        }
                      ])                
                }
            })
        }
        
        /**
        * Get the list of themes supported, by making a Lookup call, with the the Lookupup category set as Themes, 
        * and output tailored for the provided locale and device
        * @param locale 
        * @param device 
        * @returns 
        */
        static async GetThemes(
            locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? LocalisationUtils.DefaultLocale,
            device = process.env.NEXT_PUBLIC_DEFAULT_DEVICE ?? 'web'
            ): Promise<ILookup[]> {
                return new Promise<ILookup[]>((resolve, reject) => {
                    try {
                        const requestOptions: RequestInit = {}
                        const urlPath = `lookup/categories/themes/lookups?locale=${locale}&device=${device}`
                        if (CachedThemes[urlPath]) {
                            return resolve(CachedThemes[urlPath])
                        }
                        HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.GET, HTTP_ENCODING_TYPE.JSON, urlPath, null, requestOptions)
                        .then((resp: ILookupCategoryWithRelations) => {
                            CachedThemes[urlPath] = resp.Lookups!
                            resolve(resp.Lookups!)
                        })
                        .catch((e: any) => {
                            reject(e)
                        })
                    }
                    catch (e: any) {
                        reject(e)
                    }
                })
            }
            
            /**
            * Get Lookup Category as localised Name/Value pairs      
            * @param locale - The desired language
            * @param device - The device it is mearnt for
            * @param categoryValue - The Lookup Category 
            * @returns 
            */
            static FilterLookupNameValueResponse(filterLookupNameValueResponseOptions: {
                Lookups: ILookupNameValueResponse[]
                SelectedId?: ModelIdType,
                ExcludedIds?: ModelIdType[],
                ExcludedValues?: [string],
            }): ILookupNameValueResponse[] {
                let lookups: ILookupNameValueResponse[] = []
                filterLookupNameValueResponseOptions.Lookups.forEach(lookup => {
                    if (!(
                        ((filterLookupNameValueResponseOptions.ExcludedIds && filterLookupNameValueResponseOptions.ExcludedIds.find((excludedLookupId) => excludedLookupId == lookup.Id!))) ||
                        ((filterLookupNameValueResponseOptions.ExcludedValues && filterLookupNameValueResponseOptions.ExcludedValues.find((excludedLookupValue) => excludedLookupValue == lookup.Value!)))
                        )){
                            lookups.push({
                                Id: lookup.Id!,
                                LookupCategoryId: lookup.LookupCategoryId,
                                Name: lookup.Name,
                                Value: lookup.Value,
                                IsSelected: filterLookupNameValueResponseOptions.SelectedId == lookup.Id
                            })
                        }
                    })
                    return lookups
                }
                
                
                /**
                * Given as IUserName, this will compose the Avatar name, display name and the full name, represented within it, 
                * taking into account the display name (highest presidence), the nickname(next highest presidence),
                *  and then title and middle name, if any are provideded.
                * @param userName 
                * @returns An object containing avatarName, displayName and legalName
                */
                static ComposeUsername(userName: IUserName): { avatarName: string, displayName: string, legalName: string } {
                    let avatarName = ''
                    if (userName.DisplayName && userName.DisplayName.trim()) {
                        let displayNameParts = userName.DisplayName.split(' ');
                        if (displayNameParts.length > 1) {
                            avatarName = `${displayNameParts[0][0]}${displayNameParts[1][0]}`.trim().toUpperCase()
                        } else {
                            avatarName = `${displayNameParts[0][0]}`.toUpperCase()
                        }
                    } else if (userName.NickName && userName.NickName.trim()) {
                        let nickNameParts = userName.NickName.split(' ');
                        if (nickNameParts.length > 1) {
                            avatarName = `${nickNameParts[0][0]}${nickNameParts[1][0]}`.trim().toUpperCase()
                        } else {
                            avatarName = `${nickNameParts[0][0]}`.toUpperCase()
                        }
                    } else {
                        avatarName = `${userName?.FirstName.trim()?.[0]}${userName?.MiddleName?.trim()?.[0] ?? ''}${userName?.LastName.trim()?.[0]}`.trim().toUpperCase()
                    }
                    
                    let displayName = ''
                    if (userName.DisplayName && userName.DisplayName.trim()) {
                        displayName = userName.DisplayName
                    } else if (userName.NickName && userName.NickName.trim()) {
                        displayName = userName.NickName
                    } else {
                        if (userName?.Title && userName?.Title?.trim()) {
                            displayName = userName?.Title?.trim() + ' '
                        }
                        displayName = displayName + userName?.FirstName.trim() + ' '
                        if (userName?.MiddleName && userName?.MiddleName?.trim()) {
                            displayName = displayName + userName?.MiddleName?.trim() + ' '
                        }
                        displayName = displayName + userName.LastName.trim()
                        displayName = displayName.trim()
                    }
                    
                    let legalName = ''
                    legalName = legalName + userName?.FirstName.trim() + ' '
                    if (userName?.MiddleName && userName?.MiddleName?.trim()) {
                        legalName = legalName + userName?.MiddleName?.trim() + ' '
                    }
                    legalName = legalName + userName.LastName
                    legalName = legalName.trim()
                    
                    return { avatarName, displayName, legalName }
                }
                
                /**
                * Get unread user notifcations count          
                * @returns a tuble containing the number of unread user notifications 
                * and the number of unread group notifications
                */
                // static async GetUnReadNotificationsCount(
                //     userId: ModelIdType,
                //     locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? LocalisationUtils.DefaultLocale,
                //     device = process.env.NEXT_PUBLIC_DEFAULT_DEVICE ?? 'web'
                // ): Promise<[number,number]> {        
                //     const requestOptions: RequestInit = {}
                
                //     const urlPathForImportance = `lookup/categories/importance/lookups?locale=${locale}&device=${device}`
                //     const importanceCategory = await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.GET, HTTP_ENCODING_TYPE.JSON, urlPathForImportance, null, requestOptions)                    
                //     const lowImportance = importanceCategory.Lookups.find((lookup: ILookup )=> lookup.Value === 'low')
                
                //     const urlPathForNotificationstatus = `lookup/categories/notificationstatus/lookups?locale=${locale}&device=${device}`
                //     const notificationstatusCategory = await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.GET, HTTP_ENCODING_TYPE.JSON, urlPathForNotificationstatus, null, requestOptions)                    
                //     const pendingStatus = notificationstatusCategory.Lookups.find((lookup: ILookup )=> lookup.Value === 'pending')
                
                //     const urlPathForNotificationstrategies = `lookup/categories/notificationstrategies/lookups?locale=${locale}&device=${device}`
                //     const notificationstrategiesCategory = await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.GET, HTTP_ENCODING_TYPE.JSON, urlPathForNotificationstrategies, null, requestOptions)                    
                //     const inAppStrategy = notificationstrategiesCategory.Lookups.find((lookup: ILookup )=> lookup.Value === 'inapp')
                
                //     const urlPathForUnreadUserNotifications = `user/${userId}/notifications?notificationstrategyid=${inAppStrategy.Id}&notificationstatusid=${pendingStatus.Id}&limit=1000`
                //     //const userNotifications : IUserNotification[] = (await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.GET, HTTP_ENCODING_TYPE.JSON, urlPathForUnreadUserNotifications, null, requestOptions))?.filter( (p: IUserNotification) => p.ImportanceId !=  lowImportance.Id)          
                //     const userNotifications : IUserNotification[] = (await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.GET, HTTP_ENCODING_TYPE.JSON, urlPathForUnreadUserNotifications, null, requestOptions))
                
                //     const urlPathForUnreadUserGroupNotifications = `user/${userId}/groupnotifications?notificationstrategyid=${inAppStrategy.Id}&notificationstatusid=${pendingStatus.Id}&limit=1000`
                //     //const userGroupNotifications : IUserNotification[] = (await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.GET, HTTP_ENCODING_TYPE.JSON, urlPathForUnreadUserGroupNotifications, null, requestOptions))?.filter( (p: IUserNotification) => p.ImportanceId !=  lowImportance.Id)          
                //     const userGroupNotifications : IUserNotification[] = (await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.GET, HTTP_ENCODING_TYPE.JSON, urlPathForUnreadUserGroupNotifications, null, requestOptions))
                
                //     return [userNotifications.length, userGroupNotifications.length]
                // }
                
                /**
                * Iterate through source and look for Lookups that end with Id; i.e Foreign keys.
                * Given {LocationId, ImportanceId, NotificationStrategyId}[], for example, 
                * it creates the corresponding {Location, Importance, NotificationStrategy} properties
                * using the Name property value of the Lookup it points to instiate these new properties
                * @param source - the source objects
                * @param allLookups - All the avalable lookups 
                * @returns - Source object with fields added for corresponding keys
                */
                static PrepareForHumans(source: any[], allLookups: ILookup[]): any[]{        
                    if ( !source)  return source
                    source.forEach(item => {
                        for (const property of Object.keys(item)) {
                            if ( property.endsWith(`On`)){                    
                                item[property] = new Date(Date.parse(item[property]))
                            } 
                            if ( property.length >2 /*`Id`.length*/ && !property.toLocaleLowerCase().startsWith(`user`)  && property.endsWith(`Id`)){
                                const id = item[property]
                                const lookup = allLookups.find( p => p.Id == id);
                                const newPropertyName = property.slice(0, property.length - 2/*`Id`.length*/)
                                item[newPropertyName] = lookup?.Name
                            }
                        }
                    }) 
                    return source
                } 
                
                static ShowNotificationToasters(userDetails: IUserResponse, allLookups: ILookup[]){
                    if (!userDetails || !userDetails.IsAuthenticated || !userDetails.UserNotifications || !userDetails.UserNotifications.length){
                        return
                    }
                    let strategy = allLookups.find( p => p.Value == "inapp")
                    let pendingStatus = allLookups.find( p => p.Value == "pending")
                    let ImportanceStatus = allLookups.find( p => p.Value == "low")
                    let pendingNotifications = userDetails.UserNotifications.filter( p => p.NotificationStrategyId === strategy?.Id &&  p.NotificationStatusId == pendingStatus?.Id && p.ImportanceId != ImportanceStatus?.Id)        
                    if (pendingNotifications.length ){
                        let notification = pendingNotifications[0]
                        pendingNotifications = pendingNotifications.slice(1)
                        toast.info(notification.Message)
                        notificationTimer = setInterval(() => {
                            if ((pendingNotifications.length == 0) || (!userDetails.IsAuthenticated)){
                                clearInterval(notificationTimer)
                                return
                            }
                            let notification = pendingNotifications[0]
                            pendingNotifications = pendingNotifications.slice(1)
                            toast.info(notification.Message,
                                {         
                                    pauseOnHover: true,                       
                                })
                        }, 10000)
                    }
                }
            }
            