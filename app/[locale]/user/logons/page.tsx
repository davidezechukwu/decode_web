'use client'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { IUserLogon } from '@david.ezechukwu/core'
import { Copy, LocalisationUtils, UseLookupCategory, UseUserResponse} from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'

export default function UserLogonsPage() {
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)        
    const [IsLoadingAuthenticationProviderLookups, AuthenticationProviderLookups] = UseLookupCategory({ CategoryValue: `authenticationproviders`, Locale: locale })
    const router = useRouter()
    const CurrentPath = usePathname()
    const [IsAuthenticating, UserResponse, SetUserResponse] = UseUserResponse()
    
    useEffect(() => {      
        if (!IsAuthenticating && !UserResponse?.IsAuthenticated){                 
            router.push(`/${locale}/security/login?redirect=${CurrentPath}`)                         
        }                
    }, [IsAuthenticating, UserResponse, UserResponse?.IsAuthenticated])

    return (
        <>
            <section>      
                <h1>{copy.Pages.User.Logons.MainHeading}</h1>                                                      
            </section>
            <section>
                <table className={`${styles.pktablewithfirstcolumnhighlighted}`} >                    
                    <thead>
                    <tr>
                            <th>
                                {copy.Pages.User.Logons.Provider}
                            </th>
                            <th>
                            {copy.Pages.User.Logons.ProviderUserId}
                            </th>
                            <th>
                            {copy.Pages.User.Logons.ProviderUserName}
                            </th>
                    </tr>                        
                    </thead>                    
                    {UserResponse?.UserLogons.map((logon: IUserLogon, index: number) => (
                        <tr>
                            <td>
                                { !IsLoadingAuthenticationProviderLookups &&
                                    AuthenticationProviderLookups.find( l => l.Id == logon.ProviderId)?.Name
                                }
                            </td>
                            <td>
                                {logon.ProviderUserId}
                            </td>
                            <td>
                                {logon.ProviderUserName}
                            </td>
                        </tr>                        
                    ))}
                </table>                
            </section>
        </>
    )
}