'use client'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { IUserPhoto } from '@david.ezechukwu/core'
import { Copy, LocalisationUtils, UseUserResponse} from '@/lib'
//import styles from '@/app/[locale]/layout.module.scss'

export default function UserPhotosPage() {
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
                <h1>{copy.Pages.User.Photos.MainHeading}</h1>                                                      
            </section>
            <section>
                {UserResponse?.UserPhotos?.map((Photo: IUserPhoto, index: number) => (
                    <p>
                        <img src={Photo.URL} title={`${UserResponse.UserName?.FirstName} ${UserResponse.UserName?.LastName}`.trim()}></img>
                    </p>
                ))}
            </section>
        </>
    )
}