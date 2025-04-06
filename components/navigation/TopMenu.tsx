'use client'
import React, { useState, useEffect, useId, Suspense } from 'react'
import {
    Avatar,
    Breadcrumb,
    BreadcrumbLinkKeyDownEvent,
    BreadcrumbLinkMouseEvent
} from '@progress/kendo-react-layout'
import { bellIcon } from '@progress/kendo-svg-icons'
import { SvgIcon } from '@progress/kendo-react-common'
import { Popover, PopoverActionsBar } from '@progress/kendo-react-tooltip'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ILookup, ILookupLanguageResponse, IUserEmailAddress, PathUtility, StringUtility } from '@david.ezechukwu/core'
import {
    LocalisationUtils,
    Copy,
    API_TYPE,
    HTTP_METHOD,
    HTTPUtils,
    HTTP_ENCODING_TYPE,
    UseUserResponse,    
    DataUtils,
    UseUserNotifications
} from '@/lib'
import {MenuUtils} from './MenuUtils'
import {CountrySelelct} from '@/components'
import styles from '@/app/[locale]/layout.module.scss'
import blankuser from '/public/images/blankuser.png'
import { Button } from '@/components'
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators'


export type TopMenuProps = {
    locale: string,
    languages: ILookupLanguageResponse[]
}

export function TopMenu(props: TopMenuProps) {
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(props.locale)
    const id = useId()
    const router = useRouter()
    const CurrentPath = usePathname()
    const SearchParams = useSearchParams()
    const _CurrentPath = `${PathUtility.RemoveTrailingSlash(CurrentPath)}`
    const [IsAuthenticating, UserResponse, SetUserResponse] = UseUserResponse()
    const menus = MenuUtils.GetMenus(props.locale, UserResponse)
    const breadcrumbs = MenuUtils.GetBreadcrumbs(props.locale, CurrentPath, MenuUtils.GenerateIds(menus))
    const [selectedLanguage, setSelectedLanguage] = useState({
        value: props.languages.find((p: any) => p.Value == props.locale)?.Value,
        label: props.languages.find((p: any) => p.Value == props.locale)?.Name,
        isRTL: props.languages.find((p: any) => p.Value == props.locale)?.IsRTL
    })
    const [isHydrated, setIsHydrated] = useState(false)
    const avatarImage = UserResponse?.UserPhotos?.[0]?.URL
    const avatarName = UserResponse?.UserName ? DataUtils.ComposeUsername(UserResponse?.UserName).avatarName : null
    const [avatarPopupVisible, setAvatarPopupVisible] = React.useState(false)
    const [avatarPopupTop, setAvatarPopupTop] = useState(0)
    const [avatarPopupleft, setAvatarPopupLeft] = useState(0)

    const [PendingStatus, SetPendingStatus] = useState(null)
    const [LowImportance, SetLowImportance] = useState(null)
    const [IsLoadingUserNotifications, UserNotifications, _] = UseUserNotifications({ Locale: props.locale, UserId: UserResponse?.UserId })    
    const [UserNotificationsCount, SetUserNotificationsCount] = useState(0)
    const [__, SetGroupUserNotificationsCount] = useState(0)
    

    const avatarRef = React.useRef(null)

    const ToggleAvatarPopup = (event: any) => {
        setAvatarPopupVisible(!avatarPopupVisible)
        setAvatarPopupTop(event.clientY)
        setAvatarPopupLeft(event.clientX)
    }

    const OnLanguageSelectChange = (option: { label: string, value: string }) => {
        const selectedLanguage = props.languages.find((p) => p.Value == option.value)!
        const selectedLocale = `/${selectedLanguage?.Value}/`
        let newPath = CurrentPath == '/' ? `/${props.locale}/` : CurrentPath
        newPath  = `${newPath}?${SearchParams}`
        newPath = newPath.replace(`/${props.locale}/`, selectedLocale)
        router.push(newPath)
    }

    const OnMenuSelect = (event: any) => {
        const url: string = event?.target?.href?.toLocaleLowerCase()
        if (url.indexOf(`/logout`) > 0) {
             (async () => {
                await OnLogOut()
            })()
            event.nativeEvent.preventDefault()
            return
        } else {
            router.push(url)
        }
    }

    const OnLogOut = async () => {
        const urlPath = `security/logout?locale=${props.locale ?? LocalisationUtils.DefaultLocale}&device=${'web'}`
        const requestOptions: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
        try {
            await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.POST, HTTP_ENCODING_TYPE.JSON, urlPath, null, requestOptions)
            SetUserResponse(null)
        } catch (err: any) {
            HTTPUtils.ShowError(err)
        } finally {
            SetUserResponse(null)
            router.push(`/${props.locale}`)
            router.refresh()
        }
    }

    const OnBreadcrumbItemSelect = (event: BreadcrumbLinkMouseEvent) => {
        const itemIndex: number = breadcrumbs.findIndex((curValue) => curValue.id === event.id)
        const menuItem = MenuUtils.FindMenuItem(props.locale, CurrentPath, menus, true, breadcrumbs[itemIndex].id)
        if (menuItem) {
            const newPath = menuItem.Url == '/' ? `/${props.locale}/` : menuItem.Url
            router.push(newPath)
        }
    }

    const OnBreadcrumbKeyDown = (event: BreadcrumbLinkKeyDownEvent) => {
        if (event.nativeEvent.keyCode === 13) {
            const itemIndex: number = breadcrumbs.findIndex((curValue) => curValue.id === event.id)
            const menuItem = MenuUtils.FindMenuItem(props.locale, CurrentPath, menus, true, breadcrumbs[itemIndex].id)
            if (menuItem) {
                router.push(menuItem.Url)
            }
        }
    }

    const GetData = async () => {            
        if (!PendingStatus){
            const requestOptions: RequestInit = {}
            const urlPathForNotificationstatus = `lookup/categories/notificationstatus/lookups?locale=${props.locale}&device=web`
            const notificationstatusCategory = await HTTPUtils.RequestUsingPromise(API_TYPE.CORE, HTTP_METHOD.GET, HTTP_ENCODING_TYPE.JSON, urlPathForNotificationstatus, null, requestOptions)
            const pendingStatus = notificationstatusCategory.Lookups.find((lookup: ILookup) => lookup.Value === 'pending')
            SetPendingStatus(pendingStatus)
        }
        if (!LowImportance){
            const requestOptions: RequestInit = {}        
            const urlPathForImportance = `lookup/categories/importance/lookups?locale=${props.locale}&device=web`
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
        setTimeout(() => { setIsHydrated(true) }, 1000)
        GetData()
    }, [IsLoadingUserNotifications, UserNotifications, UserNotifications.length, IsAuthenticating, UserResponse, UserResponse?.UserId, UserResponse?.IsAuthenticated, UserResponse?.UserId])

    return (
        <section>                            
            <Navbar className={styles.pkmainmenu} bg='dark' variant='dark' expand='xl' role='navigation'>
                <Container className={`${styles.pkmainmenucontainer}  ${styles.pkcontainer}`} >
                    <Navbar.Brand
                        className={`styles.pkmainmenubrand ${CurrentPath == '/' || CurrentPath == `/${props.locale}/` ? 'selected' : ''}`}
                        href={`/${props.locale}/`}
                    >{process.env.NEXT_PUBLIC_HOST_NAME!}</Navbar.Brand>
                    <Navbar.Toggle aria-controls='pkmainmenunavbar' />
                    <Navbar.Collapse id='pkmainmenunavbar' className={styles.pkmainmenucontainerbar}>
                        {!isHydrated && (
                            <div className={styles.pkmainmenucontainerbarwaitcontainer}>
                                <progress className={styles.pkmainmenucontainerbarwait}></progress>
                                <progress className={styles.pkmainmenucontainerbarwait}></progress>
                                <progress className={styles.pkmainmenucontainerbarwait}></progress>
                            </div>)}
                        <Nav>
                            {isHydrated && menus.map((menu1: any, index1: any) => {
                                if (menu1.Items.length == 0) {
                                    return (
                                        <Nav.Link
                                            className={`${styles.pkmainmenuitem} ${_CurrentPath == menu1.Url ? styles.pkselectedmainmenuitem : ''}`}
                                            key={`0_${index1}`} href={menu1.Url}
                                            onClick={OnMenuSelect}
                                        >
                                            {menu1.Text}
                                        </Nav.Link>
                                    )
                                } else {
                                    return (
                                        <NavDropdown
                                            className={`${styles.pkmainmenudropdown} ${_CurrentPath == menu1.Url ? styles.pkselectedmainmenuitem : ''}`}
                                            key={`0_${index1}`}
                                            title={menu1.Text}
                                            id={`${index1}_${menu1.MenuId}`}
                                            onClick={OnMenuSelect}
                                        >
                                            {menu1.Items.map((menu2: any, index2: any) => {
                                                if (menu2.Items.length == 0) {
                                                    return (
                                                        <NavDropdown.Item
                                                            className={`${styles.pkmainsubmenuitem} ${_CurrentPath == menu2.Url ? styles.pkselectedmainmenuitem : ''}`}
                                                            key={`${index1}_${index2}`}
                                                            href={menu2.Url}
                                                            onClick={OnMenuSelect}
                                                        >
                                                            {menu2.Text}
                                                        </NavDropdown.Item>)
                                                } else {
                                                    return (
                                                        <NavDropdown
                                                            className={`${styles.pkmainsubmenudropdown} ${_CurrentPath == menu2.Url ? styles.pkselectedmainmenuitem : ''}`}
                                                            key={`${index1}_${index2}`}
                                                            title={menu2.Text}
                                                            id={`${index1}_${index2}_${menu2.MenuId}`}
                                                            onClick={OnMenuSelect}
                                                        >
                                                            {menu2.Items.map((menu3: any, index3: any) => {
                                                                return (
                                                                    <NavDropdown.Item
                                                                        className={`${styles.pkmainsubmenuitem} ${_CurrentPath == menu3.Url ? styles.pkselectedmainmenuitem : ''}`}
                                                                        key={`${index1}_${index2}_${index3}`}
                                                                        href={menu3.Url}
                                                                        onClick={OnMenuSelect}
                                                                    >
                                                                        {menu3.Text}
                                                                    </NavDropdown.Item>
                                                                )
                                                            })}
                                                        </NavDropdown>
                                                    )
                                                }
                                            })}
                                        </NavDropdown>
                                    )
                                }
                            })}
                        </Nav>
                        <Nav>
                            {UserResponse?.IsAuthenticated &&
                                <Nav.Item>                       
                                    <div className={styles.pkmainmenunotifications}>
                                        <a href={`/${props.locale}/user/notifications`} title={UserNotificationsCount > 1 ? StringUtility.StringFormat(copy.Common.PendingNotifications, UserNotificationsCount.toString()) : copy.Common.PendingNotification}>
                                            <SvgIcon icon={bellIcon}  width={24} height={24} style={{color: 'royalblue !important'}}/>
                                                {UserNotificationsCount > 0 && 
                                                    <BadgeContainer>                                                                                
                                                        <Badge>{UserNotificationsCount}</Badge>
                                                    </BadgeContainer>
                                                }
                                        </a>
                                    </div>         
                                </Nav.Item>
                            }
                            {!UserResponse?.IsAuthenticated &&
                                <Nav.Item className={styles.pkmainmenuuseravater}>
                                    <Avatar type='image' size='medium' fillMode='outline'>
                                        <Image
                                            src={blankuser}
                                            width={36}
                                            height={36}
                                            alt={copy.Common.Name}
                                        ></Image>
                                    </Avatar>
                                </Nav.Item>
                            }
                            {UserResponse?.IsAuthenticated && avatarImage &&
                                <Nav.Item className={styles.pkmainmenuuseravatersvg}>
                                    <a
                                        ref={avatarRef}
                                        href='#'
                                        onClick={ToggleAvatarPopup}
                                        title={copy.Common.Name}
                                    >
                                        <Avatar
                                            type='image'
                                            size='medium'
                                            fillMode='outline'
                                        >
                                            <Image
                                                src={avatarImage}
                                                width={36}
                                                height={36}
                                                alt={copy.Common.Name}
                                            ></Image>
                                        </Avatar>
                                    </a>
                                </Nav.Item>
                            }
                            {UserResponse?.IsAuthenticated && !avatarImage && avatarName &&
                                <Nav.Item className={styles.pkmainmenuuseravatersvg}>
                                    <a
                                        ref={avatarRef}
                                        href='#'
                                        onClick={ToggleAvatarPopup}
                                        title={copy.Common.Name}
                                    >
                                        <Avatar type='text' size='medium'>
                                            <span className={styles.pkmainmenuuseravatersvgusingtext}>{avatarName}</span>
                                        </Avatar>
                                    </a>
                                </Nav.Item>
                            }
                            {UserResponse?.IsAuthenticated && !avatarImage && !avatarName &&
                                <Nav.Item className={styles.pkmainmenuuseravatersvg}>
                                    <a ref={avatarRef} href='#' onClick={ToggleAvatarPopup} title={copy.Common.Name}>
                                        <Avatar type='image' size='medium' fillMode='outline'>
                                            <Image src={blankuser} width={36} height={36} alt={copy.Common.Name}></Image>
                                        </Avatar>
                                    </a>
                                </Nav.Item>
                            }
                            {UserResponse?.IsAuthenticated && avatarPopupVisible && (
                                <Popover
                                    show={avatarPopupVisible}
                                    anchor={avatarRef.current}
                                    collision={{ vertical: 'fit', horizontal: 'fit' }}
                                    animate={{ openDuration: 300, closeDuration: 300 }}
                                    position='bottom'
                                    title={copy.Common.Name}
                                    className={styles.pkmainmenuuseravaterpopup}
                                >
                                    <aside>
                                        {UserResponse?.IsAuthenticated && avatarImage &&
                                            <div className={styles.pkmainmenuuserpopupavater}>
                                                <a
                                                    href={`/${props.locale}/user/photos`}
                                                    onClick={ToggleAvatarPopup}
                                                    title={copy.Pages.User.Photos.MainHeading}>
                                                    <Avatar type='image' size='large' fillMode='outline'>
                                                        <Image
                                                            src={avatarImage}
                                                            width={36}
                                                            height={36}
                                                            alt={copy.Pages.User.Photos.MainHeading}
                                                        ></Image>
                                                    </Avatar>
                                                </a>
                                            </div>
                                        }
                                        {UserResponse?.IsAuthenticated && !avatarImage && avatarName &&
                                            <div className={styles.pkmainmenuuserpopupavater}>
                                                <a
                                                    href={`/${props.locale}/user/photos`}
                                                    onClick={ToggleAvatarPopup}
                                                    title={copy.Common.Name}
                                                >
                                                    <Avatar type='text' size='large'>
                                                        <span>{avatarName}</span>
                                                    </Avatar>
                                                </a>
                                            </div>
                                        }
                                        {UserResponse?.IsAuthenticated && !avatarImage && !avatarName &&
                                            <div className={styles.pkmainmenuuserpopupavater}>
                                                <a
                                                    href={`/${props.locale}/user/photos`}
                                                    onClick={ToggleAvatarPopup}
                                                    title={copy.Common.Name}
                                                >
                                                    <Avatar type='image' size='large' fillMode='outline'>
                                                        <Image src={blankuser} width={36} height={36} alt={copy.Common.Name}></Image>
                                                    </Avatar>
                                                </a>
                                            </div>
                                        }
                                        {UserResponse?.UserName &&
                                            <div>
                                                <span>{DataUtils.ComposeUsername(UserResponse!.UserName!).displayName}</span>
                                            </div>
                                        }
                                        {UserResponse?.UserEmailAddresses.map((emailaddress: IUserEmailAddress, index: number) => (
                                            <div className={styles.pkmainmenuuserpopupavateremail}>{emailaddress.EmailAddress}</div>
                                        ))}
                                        <div>
                                            <Link
                                                href={`/${props.locale}/user`}
                                                onClick={ToggleAvatarPopup}
                                            >
                                                {copy.Pages.User.IndexPageMainHeading}
                                            </Link>
                                        </div>
                                    </aside>
                                    <PopoverActionsBar>                                                                          
                                        <Button type='button' label={copy.Common.Close} onClick={ToggleAvatarPopup} />
                                    </PopoverActionsBar>
                                </Popover>
                            )}

                            <Nav.Item>
                                <span className={styles.pkmainmenucountryselector}>
                                    <CountrySelelct value={selectedLanguage} languages={props.languages} onLanguageSelectChange={OnLanguageSelectChange}></CountrySelelct>
                                </span>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>                                  
            <Container className={styles.pkcontainer}>
                <div className={styles.pkbreadcrumb}>
                    <div className={styles.pkbreadcrumbinner}>
                        <Breadcrumb className={styles.pkbreadcrumblinks} data={breadcrumbs} onItemSelect={OnBreadcrumbItemSelect} onKeyDown={OnBreadcrumbKeyDown} dir={selectedLanguage.isRTL ? 'rtl' : 'ltr'} />
                    </div>
                </div>
            </Container>
        </section>
    )
}

