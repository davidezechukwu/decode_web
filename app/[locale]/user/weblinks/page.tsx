'use client'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { IUserWebLink } from '@david.ezechukwu/core'
import { Copy, LocalisationUtils, UseUserResponse} from '@/lib'
//import styles from '@/app/[locale]/layout.module.scss'

export default function UserWebLinksPage() {
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
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
                <h1>{copy.Pages.User.WebLinks.MainHeading}</h1>                                      
            </section>
            <section>
                {UserResponse?.UserWebLinks?.map((weblink: IUserWebLink, index: number) => (
                    <p>{weblink.URL}</p>
                ))}
            </section>
        </>
    )
}