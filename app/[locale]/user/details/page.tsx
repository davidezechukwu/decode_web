'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Copy, LocalisationUtils, UseUserResponse} from '@/lib'
//import styles from '@/app/[locale]/layout.module.scss'

export default function UserDetailsPage() {
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
                <h1>{copy.Pages.User.YourDetails.MainHeading}</h1>                                                      
            </section>
            <section>
                <h5><Link href={`/api/healthcheck/whoami`} target='_blank'>{copy.Common.YourDetails}</Link></h5>                        
            </section>
        </>
    )
}