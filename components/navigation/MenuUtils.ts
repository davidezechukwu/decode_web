import { DataModel } from '@progress/kendo-react-layout'
import { LocalisationUtils, Copy } from '@/lib'
import { IUserResponse, ModelIdType, PathUtility, } from "@david.ezechukwu/core"


export interface IMenu {
    MenuId: string;
    GeneratedUniqueId: string;
    Text: string;    
    Url: string;
    IsHref: boolean;
    Items: IMenu[];    
    ShowIfAuthenticated: boolean;
    HideIfAuthenticated: boolean;    
}

const Menus: IMenu[] = [
    {
        MenuId: "home",
        GeneratedUniqueId: "",
        Text: "Home",        
        Url: "/en/",
        IsHref: false,                
        ShowIfAuthenticated: false,
        HideIfAuthenticated: false,         
        Items: []
    },   
    {
        MenuId: "login",
        GeneratedUniqueId: "",
        Text: "Login",
        Url: "/en/security/login",
        IsHref: false,                
        ShowIfAuthenticated: false,
        HideIfAuthenticated: true,             
        Items: []
    },
    {
        MenuId: "register",
        GeneratedUniqueId: "",
        Text: "Register",
        Url: "/en/security/register",
        IsHref: false,                
        ShowIfAuthenticated: false,
        HideIfAuthenticated: true,
        Items: []
    },
    {
        MenuId: "security",
        GeneratedUniqueId: "",        
        Text: "Security",
        Url: "/en/security",
        IsHref: false,              
        ShowIfAuthenticated: false,
        HideIfAuthenticated: false,        
        Items: [
            {
                MenuId: "login",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Login",
                Url: "/en/security/login",                                
                ShowIfAuthenticated: false,
                HideIfAuthenticated: true,
                Items: []
            },
            {
                MenuId: "register",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Register",
                Url: "/en/security/register",                                
                ShowIfAuthenticated: false,
                HideIfAuthenticated: true,
                Items: []
            },
            {
                MenuId: "forgotpassword",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Forgot password",
                Url: "/en/security/forgotpassword",                                
                ShowIfAuthenticated: false,
                HideIfAuthenticated: true,
                Items: []
            },
            {
                MenuId: "resetpassword",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Reset password",
                Url: "/en/security/resetpassword",                                
                ShowIfAuthenticated: false,
                HideIfAuthenticated: true,
                Items: []
            },
            {
                MenuId: "changepassword",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Change password",
                Url: "/en/user/password",                                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,
                Items: []
            },
            {
                MenuId: "twofactorauthentication",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Two Factor Authentication",
                Url: "/en/security/twofactorauthentication",                                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,                
                Items: []
            },           
            {
                MenuId: "dataencryption",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Data Encryption",
                Url: "/en/security/dataencryption",                                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,
                Items: []
            },           
            {
                MenuId: "logout",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Logout",
                Url: "/en/security/logout",                                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,                
                Items: []
            },
            {
                MenuId: "externallogin",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Other ways to login",                
                Url: "/en/security/externallogin",
                Items: [
                    {
                        MenuId: "google",
                        GeneratedUniqueId: "",
                        IsHref: true,
                        Text: "Google",
                        Url: `${process.env.NEXT_PUBLIC_CORE_API_HOST}/security/externallogin/google`,                                                
                        ShowIfAuthenticated: false,
                        HideIfAuthenticated: false,
                        Items: [],
                    },
                    // {
                    //     MenuId: "facebook",
                    //     GeneratedUniqueId: "",
                    //     IsHref: true,
                    //     Text: "Facebook",
                    //     Url: `${process.env.NEXT_PUBLIC_CORE_API_HOST}/security/externallogin/facebook`,                        
                    //     ShowIfAuthenticated: false,
                    //     HideIfAuthenticated: false,                       
                    //     Items: [],
                    // },
                    // {
                    //     MenuId: "twitter",
                    //     GeneratedUniqueId: "",
                    //     IsHref: true,
                    //     Text: "Twitter",
                    //     Url: `${process.env.NEXT_PUBLIC_CORE_API_HOST}/security/externallogin/twitter`,                    
                    //     ShowIfAuthenticated: false,
                    //     HideIfAuthenticated: false,                              
                    //     Items: [],
                    // },
                    // {
                    //     MenuId: "linkedin",
                    //     GeneratedUniqueId: "",
                    //     IsHref: true,
                    //     Text: "linkedin",
                    //     Url: `${process.env.NEXT_PUBLIC_CORE_API_HOST}/security/externallogin/linkedin`,                    
                    //     ShowIfAuthenticated: false,
                    //     HideIfAuthenticated: false,                                        
                    //     Items: []
                    // }
                ],                
                ShowIfAuthenticated: false,
                HideIfAuthenticated: true,                
            }
        ]
    },    
    {
        MenuId: "user",
        GeneratedUniqueId: "",
        Text: "User",        
        Url: "/en/user",
        IsHref: false,        
        ShowIfAuthenticated: true,
        HideIfAuthenticated: false,        
        Items: [
            {
                MenuId: "name",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Name",
                Url: "/en/user/name",                                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false, 
                Items: []
            },
            {
                MenuId: "displaysettings",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Display settings",
                Url: "/en/user/displaysettings",                                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,
                Items: []
            },
            {
                MenuId: "logons",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Logons",
                Url: "/en/user/logons",                                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,                
                Items: []
            },
            {
                MenuId: "emailaddresses",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Email Addresses",
                Url: "/en/user/emailaddresses",                                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,               
                Items: []
            },            
            {
                MenuId: "phones",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Phones",
                Url: "/en/user/phones",                                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,                
                Items: []
            },
            {
                MenuId: "notifications",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Notifications",
                Url: "/en/user/notifications",                                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,              
                Items: []
            },
            {
                MenuId: "groupnotifications",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Group notifications",
                Url: "/en/user/groupnotifications",                                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,                
                Items: []
            },
            {
                MenuId: "communicationpreferences",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Communication preferences",
                Url: "/en/user/communicationpreferences",                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,               
                Items: []
            },
            {
                MenuId: "photos",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Photos",
                Url: "/en/user/photos",                                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,               
                Items: []
            },
            {
                MenuId: "roles",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Roles",
                Url: "/en/user/roles",                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,               
                Items: []
            },
            {
                MenuId: "groups",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Groups",
                Url: "/en/user/groups",                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,                
                Items: []
            },
            {
                MenuId: "groupsandroles",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Groups and roles",
                Url: "/en/user/groupsandroles",                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,               
                Items: []
            },
            {
                MenuId: "weblinks",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Web links",
                Url: "/en/user/weblinks",                                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,              
                Items: []
            },            
            {
                MenuId: "details",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Your details",
                Url: "/en/user/details",                                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,             
                Items: []
            },
            {
                MenuId: "delete",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Delete",
                Url: "/en/user/delete",                                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,                
                Items: []
            },
            {
                MenuId: "loginhistory",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Login history",
                Url: "/en/user/logins",                                
                ShowIfAuthenticated: true,
                HideIfAuthenticated: false,               
                Items: []
            }                              
        ]
    }, 
    {
        MenuId: "about",
        GeneratedUniqueId: "",
        Text: "About us",
        Url: "/en/about",
        IsHref: false,        
        ShowIfAuthenticated: false,
        HideIfAuthenticated: false,        
        Items: [
            {
                MenuId: "privacypolicy",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Privacy Policy",
                Url: "/en/about/privacy",                
                ShowIfAuthenticated: false,
                HideIfAuthenticated: false,               
                Items: []
            },
            {
                MenuId: "termsandconditions",
                GeneratedUniqueId: "",
                IsHref: false,
                Text: "Terms and Conditions",
                Url: "/en/about/terms",                                
                ShowIfAuthenticated: false,
                HideIfAuthenticated: false,               
                Items: []
            }
        ]
    },
    {
        MenuId: "logout",
        GeneratedUniqueId: "",
        IsHref: false,
        Text: "Logout",
        Url: "/en/security/logout",                        
        ShowIfAuthenticated: true,
        HideIfAuthenticated: false,
        Items: []
    }
]


export class MenuUtils {

    static GetSubCopy(menuId: string, copy: { Name: string, Value: string, items: [] }[]): { Name: string, Value: string, items: [] } {
        const soughtCopy = copy.find(m => m.Name == menuId)
        return soughtCopy!
    }

    static AllowMenuItem(menu: IMenu, userResponse: IUserResponse | null = null): boolean {
        const isAuthenticated = userResponse?.IsAuthenticated ?? false
        if (!isAuthenticated && menu.ShowIfAuthenticated) {
            return false;
        }

        if (isAuthenticated && menu.HideIfAuthenticated) {
            return false;
        }

        return true;
    }

    static GetSubMenus(locale: string, parentMenu: IMenu, subMenu: IMenu[], copy: { Name: string, Value: string, items: [] }, userResponse: IUserResponse | null = null): IMenu[] {
        let debugMenu = undefined
        try {
            const isAuthenticated = userResponse?.IsAuthenticated ?? false
            let menus: IMenu[] = []
            subMenu.forEach((menu: IMenu) => {
                debugMenu = menu                
                if (!MenuUtils.AllowMenuItem(menu, userResponse)) return;
                const _menu: IMenu = {                    
                    MenuId: menu.MenuId,
                    GeneratedUniqueId: `${parentMenu.MenuId}_${menu.MenuId}`,
                    Text: MenuUtils.GetSubCopy(menu.MenuId, copy.items).Value,                    
                    Url: menu.Url.replace('/en/', `/${locale}/`),
                    IsHref: menu.IsHref,
                    Items: MenuUtils.GetSubMenus(locale, menu, menu.Items, MenuUtils.GetSubCopy(menu.MenuId, copy.items), userResponse),                    
                    ShowIfAuthenticated: menu.ShowIfAuthenticated,
                    HideIfAuthenticated: menu.HideIfAuthenticated,                    
                }
                menus.push(_menu)
            })
            return menus
        } catch (err: any) {
            const exception = `MenuUtils.GetSubMenus failed for the menu: ${JSON.stringify(debugMenu)} with this error: ${JSON.stringify(err)}\nCheck and insure that the MenuId in matches what is in the Menu section of Copy.ts`
            console.error(exception)
            throw new Error(exception, err)
        }
    }

    static GetMenus(locale: string, userResponse: IUserResponse | null = null): IMenu[] {
        const isAuthenticated = userResponse?.IsAuthenticated ?? false
        let debugMenu = undefined
        try {
            const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
            let menus: IMenu[] = []
            Menus.forEach((menu: IMenu) => {
                debugMenu = menu           
                if (!MenuUtils.AllowMenuItem(menu, userResponse)) return;     
                const _menu: IMenu = {
                    MenuId: menu.MenuId,
                    GeneratedUniqueId: menu.MenuId,
                    Text: MenuUtils.GetSubCopy(menu.MenuId, copy.Menus as { Name: string, Value: string, items: [] }[]).Value,                    
                    Url: menu.Url.replace('/en/', `/${locale}/`),
                    IsHref: menu.IsHref,
                    Items: MenuUtils.GetSubMenus(locale, menu, menu.Items, MenuUtils.GetSubCopy(menu.MenuId, copy.Menus as { Name: string, Value: string, items: [] }[]), userResponse),                    
                    ShowIfAuthenticated: menu.ShowIfAuthenticated,
                    HideIfAuthenticated: menu.HideIfAuthenticated                    
                }
                menus.push(_menu)
            })
            return menus
        } catch (err: any) {
            const exception = `MenuUtils.GetMenus failed for the menu: ${JSON.stringify(debugMenu)} with this error: ${JSON.stringify(err)}\nCheck and insure that the MenuId in matches what is in the Menu section of Copy.ts`
            console.error(exception)
            throw new Error(exception, err)
        }
    }

    static FindMenuItem(locale: string, currentPath: string, menus: IMenu[], findById = false, id = ''): IMenu | undefined {
        const FindMenuItemRecursively = (locale: string, currentPath: string, menus: IMenu[], findById = false, id = ''): IMenu | undefined => {
            let menuItem = menus.find((menu: IMenu) => {
                if (findById) {
                    return menu.MenuId == id
                }
                else {
                    return (
                        PathUtility.RemoveTrailingSlash(menu.Url).toLocaleLowerCase() == PathUtility.RemoveTrailingSlash(currentPath).toLocaleLowerCase()) ||
                        (PathUtility.RemoveTrailingSlash(menu.Url).toLocaleLowerCase() == `/${locale}${PathUtility.RemoveTrailingSlash(currentPath).toLocaleLowerCase()}`
                        )
                }
            })
            if (menuItem) {
                return menuItem
            }
            for (let a = 0; a < menus.length; a++) {
                menuItem = FindMenuItemRecursively(locale, currentPath, menus[a].Items)
                if (menuItem) {
                    break
                }
            }
            return menuItem
        }

        let menuItem = menus.find((menu: IMenu) => {
            if (findById) {
                return menu.MenuId == id
            }
            else {
                return (
                    PathUtility.RemoveTrailingSlash(menu.Url).toLocaleLowerCase() == PathUtility.RemoveTrailingSlash(currentPath.toLocaleLowerCase())) ||
                    (PathUtility.RemoveTrailingSlash(menu.Url).toLocaleLowerCase() == `/${locale}${PathUtility.RemoveTrailingSlash(currentPath).toLocaleLowerCase()}`
                    )
            }
        })
        if (menuItem) {
            return menuItem
        }
        for (let a = 0; a < menus.length; a++) {
            menuItem = FindMenuItemRecursively(locale, currentPath, menus[a].Items)
            if (menuItem) {
                break
            }
        }
        return menuItem
    }

    static GenerateIds(menus: (IMenu & { id?: string })[]) {
        menus.map((menu: IMenu & { id?: string }) => {
            menu.id = menu.GeneratedUniqueId
            if (menu.Items && menu.Items.length > 0) {
                MenuUtils.GenerateIds(menu.Items)
            }
        })
        return menus
    }

    static GetBreadcrumbs(locale: string, currentPath: string, menus: IMenu[]) {
        const breadcrumbData: DataModel[] = []
        let menuItem = MenuUtils.FindMenuItem(locale, currentPath, menus)
        if (menuItem) {
            breadcrumbData.push({
                id: menuItem.GeneratedUniqueId,                
                text: menuItem.Text,
            })
            let parentMenuId: string | undefined = ''
            do {
                parentMenuId = menuItem?.GeneratedUniqueId.substr(0, menuItem?.GeneratedUniqueId.lastIndexOf('_'))
                if (parentMenuId) {
                    menuItem = MenuUtils.FindMenuItem(locale, currentPath, menus, true, parentMenuId)
                    if (menuItem) {
                        const dataModel = {
                            id: menuItem.GeneratedUniqueId,                            
                            text: menuItem.Text,
                            Url: menuItem.Url,
                        }
                        breadcrumbData.push(dataModel)
                    }
                }
            } while (parentMenuId != '')
        }

        if (
            currentPath!.toLocaleLowerCase() !== `/${locale?.toLocaleLowerCase()}` 
            && currentPath!.toLocaleLowerCase() !== `/${locale?.toLocaleLowerCase()}/` 
            && currentPath!.toLocaleLowerCase() !== '/') {
            const rootMenuItem = menus.find(m => m.Url == '/' || m.Url == `/${locale}` || m.Url == `/${locale}/`)!
            breadcrumbData.push({
                id: rootMenuItem.GeneratedUniqueId,                
                text: rootMenuItem.Text,
            })
        }
        breadcrumbData[0].disabled = true
        return breadcrumbData.reverse()
    }

}