'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { API_TYPE, Copy, DataUtils, HTTPUtils, HTTP_ENCODING_TYPE, HTTP_METHOD, LocalisationUtils, UseUserNotifications, UseUserResponse } from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'
import UserNameIcon from '/public/images/pagelinks/user/name.png'
import UserDisplaySettingsIcon from '/public/images/pagelinks/user/display_settings.png'
import UserEmailAddressesIcon from '/public/images/pagelinks/user/email_addresses.png'
import UserPhonesIcon from '/public/images/pagelinks/user/phone_numbers.png'
import UserCommunicationPreferencesIcon from '/public/images/pagelinks/user/correspondence_preferences.png'
import UserLogonsIcon from '/public/images/pagelinks/user/logons.png'
import UserPhotosIcon from '/public/images/pagelinks/user/photos.png'
import UserRolesIcon from '/public/images/pagelinks/user/roles.png'
import UserGroupsIcon from '/public/images/pagelinks/user/groups.png'
import UserGroupsAndRolesIcon from '/public/images/pagelinks/user/groups_and_roles.png'
import UserWebLinksIcon from '/public/images/pagelinks/user/web_links.png'
import UserDetailsIcon from '/public/images/pagelinks/user/details.png'
import UserDeleteIcon from '/public/images/pagelinks/user/delete.png'
import UserNotificationsIcon from '/public/images/pagelinks/user/notifications.png'
import UserGroupNotificationsIcon from '/public/images/pagelinks/user/groupnotifications.png'
import UserLoginsIcon from '/public/images/pagelinks/user/logins.png'

import { useEffect, useState } from 'react'
import { ILookup } from '@david.ezechukwu/core';

export default function UserHomePage() {        
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
    const router = useRouter()
    const CurrentPath = usePathname()
    const [IsAuthenticating, UserResponse, SetUserResponse] = UseUserResponse()
    const [UserNotificationsCount, SetUserNotificationsCount] = useState(0)
    const [UserGroupNotificationsCount, SetGroupUserNotificationsCount] = useState(0)
    const [IsLoadingUserNotifications, UserNotifications, _] = UseUserNotifications({ UserId: UserResponse?.UserId }) 
    const [PendingStatus, SetPendingStatus] = useState(null)
    const [LowImportance, SetLowImportance] = useState(null)
    const GetData = async () => {            
        if (!PendingStatus){
            const requestOptions: RequestInit = {}
            const urlPathForNotificationstatus = `lookup/categories/notificationstatus/lookups?locale=${locale}&device=web`
            const notificationstatusCategory = await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.GET, HTTP_ENCODING_TYPE.JSON, urlPathForNotificationstatus, null, requestOptions)
            const pendingStatus = notificationstatusCategory.Lookups.find((lookup: ILookup) => lookup.Value === 'pending')
            SetPendingStatus(pendingStatus)
        }
        if (!LowImportance){
            const requestOptions: RequestInit = {}        
            const urlPathForImportance = `lookup/categories/importance/lookups?locale=${locale}&device=web`
            const importanceCategory = await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.GET, HTTP_ENCODING_TYPE.JSON, urlPathForImportance, null, requestOptions)                    
            const lowImportance = importanceCategory.Lookups.find((lookup: ILookup )=> lookup.Value === 'low')
            SetLowImportance(lowImportance)
        }
        if (UserResponse?.IsAuthenticated && UserResponse?.UserId ){                            
            const userNotificationsCount = UserNotifications.filter( p => p.NotificationStatusId == (PendingStatus as any)?.Id && p.ImportanceId != (LowImportance as any)?.Id).length
            SetUserNotificationsCount(userNotificationsCount)
            SetGroupUserNotificationsCount(0)
        }
    }

    useEffect(() => {        
        GetData()
    })
    
    useEffect(() => {      
        if (!IsAuthenticating && !UserResponse?.IsAuthenticated){                 
            router.push(`/${locale}/security/login?redirect=${CurrentPath}`)                         
        }                
    }, [IsAuthenticating, UserResponse, UserResponse?.IsAuthenticated])
            
    return (
        <section>
            <h1>{copy.Pages.User.IndexPageMainHeading}</h1>                        
            {!IsAuthenticating && UserResponse?.IsAuthenticated &&
                <div className={styles.pkpagelinkcontainer}>
                    <h5>                        
                        <Link href={`/${locale}/user/name`}>
                            <Image src={UserNameIcon} alt={copy.Pages.User.Name.MainHeading} width={60} height={60} />
                            {copy.Pages.User.Name.MainHeading}
                        </Link>
                    </h5>                        
                    <h5>
                        <Link href={`/${locale}/user/displaysettings`}>
                            <Image src={UserDisplaySettingsIcon} alt={copy.Pages.User.Name.MainHeading} width={60} height={60} />
                            {copy.Pages.User.DisplaySettings.MainHeading}
                        </Link>
                    </h5>                                
                    <h5>
                        <Link href={`/${locale}/user/emailaddresses`}>
                            <Image src={UserEmailAddressesIcon} alt={copy.Pages.User.Name.MainHeading} width={60} height={60} />
                            {copy.Pages.User.EmailAddresses.MainHeading}
                        </Link>
                    </h5>            
                    <h5>
                        <Link href={`/${locale}/user/phones`}>
                            <Image src={UserPhonesIcon} alt={copy.Pages.User.Name.MainHeading} width={60} height={60} />
                            {copy.Pages.User.Phones.MainHeading}
                        </Link>
                    </h5>           
                    <h5>
                        <Link href={`/${locale}/user/notifications`}>
                            <BadgeContainer className={styles.pkbadgecontainer}>
                                <Badge>{UserNotificationsCount}</Badge>
                            </BadgeContainer>
                            <Image src={UserNotificationsIcon} alt={copy.Pages.User.Name.MainHeading} width={60} height={60} />
                            {copy.Pages.User.Notifications.MainHeading}
                        </Link>
                    </h5>            
                    <h5>
                        <Link href={`/${locale}/user/groupnotifications`}>
                            <BadgeContainer className={styles.pkbadgecontainer}>
                                <Badge>{UserGroupNotificationsCount}</Badge>
                            </BadgeContainer>
                            <Image src={UserGroupNotificationsIcon} alt={copy.Pages.User.Name.MainHeading} width={60} height={60} />
                            {copy.Pages.User.GroupNotifications.MainHeading}
                        </Link>
                    </h5>                           
                    <h5>
                        <Link href={`/${locale}/user/communicationpreferences`}>
                            <Image src={UserCommunicationPreferencesIcon} alt={copy.Pages.User.Name.MainHeading} width={60} height={60} />
                            {copy.Pages.User.CommunicationPreferences.MainHeading}
                        </Link>
                    </h5>           
                    <h5>
                        <Link href={`/${locale}/user/logons`}>
                            <Image src={UserLogonsIcon} alt={copy.Pages.User.Name.MainHeading} width={60} height={60} />
                            {copy.Pages.User.Logons.MainHeading}
                        </Link>
                    </h5>             
                    <h5>
                        <Link href={`/${locale}/user/photos`}>
                            <Image src={UserPhotosIcon} alt={copy.Pages.User.Name.MainHeading} width={60} height={60} />
                            {copy.Pages.User.Photos.MainHeading}
                        </Link>
                    </h5>            
                    <h5>
                        <Link href={`/${locale}/user/roles`}>
                            <Image src={UserRolesIcon} alt={copy.Pages.User.Name.MainHeading} width={60} height={60} />
                            {copy.Pages.User.Roles.MainHeading}
                        </Link>
                    </h5>            
                    <h5>
                        <Link href={`/${locale}/user/groups`}>
                            <Image src={UserGroupsIcon} alt={copy.Pages.User.Name.MainHeading} width={60} height={60} />
                            {copy.Pages.User.Groups.MainHeading}
                        </Link>
                    </h5>            
                    <h5>
                        <Link href={`/${locale}/user/groupsandroles`}>
                            <Image src={UserGroupsAndRolesIcon} alt={copy.Pages.User.Name.MainHeading} width={60} height={60} />
                            {copy.Pages.User.GroupsAndRoles.MainHeading}
                        </Link>
                    </h5>            
                    <h5>
                        <Link href={`/${locale}/user/weblinks`}>
                            <Image src={UserWebLinksIcon} alt={copy.Pages.User.Name.MainHeading} width={60} height={60} />
                            {copy.Pages.User.WebLinks.MainHeading}
                        </Link>
                    </h5>                                
                    <h5>
                        <Link href={`/${locale}/user/details`}>
                            <Image src={UserDetailsIcon} alt={copy.Pages.User.Name.MainHeading} width={60} height={60} />
                            {copy.Pages.User.YourDetails.MainHeading}
                        </Link>
                    </h5>            
                    <h5>
                        <Link href={`/${locale}/user/delete`}>
                            <Image src={UserDeleteIcon} alt={copy.Pages.User.Name.MainHeading} width={60} height={60} />
                            {copy.Pages.User.DeleteMyDetails.MainHeading}
                        </Link>
                    </h5>    
                    <h5>
                        <Link href={`/${locale}/user/logins`}>
                            <Image src={UserLoginsIcon} alt={copy.Pages.User.LoginHistory.MainHeading} width={60} height={60} />
                            {copy.Pages.User.LoginHistory.MainHeading}
                        </Link>
                    </h5>                        
                </div>
        }
        </section>
    )
}

