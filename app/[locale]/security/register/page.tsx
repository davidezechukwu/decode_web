"use client"
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { RegisterComponent} from '@/components'
import {Copy, LocalisationUtils, UseUserResponse } from '@/lib'
import RegisterPageImage from '/public/images/registerpage.jpg'
import styles from '@/app/[locale]/layout.module.scss'

export default function RegisterPage() {    
    const params = useParams()
    const locale = (String)(params.locale)
    const [Authenticating, UserResponse, ___] = UseUserResponse({ redirectToIfFound: true, redirectToIfFoundUrl: `/${locale}/user` })  
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)    
    return (
        <section>            
            <h1>{copy.Pages.Authentication.Register.MainHeading}</h1>            
            <div className={`${styles.pkpagemaincontent} ${styles.pkregisterpagemaincontent}`} >
                <Image className={styles.pkregisterpageimage} 
                    src={RegisterPageImage} 
                    alt={'magic'}                     
                    x-magic='magical'   
                    title={copy.Common.Magic} 
                />
                <div className={`${styles.pkpagemaincontentsecondcontainer} ${styles.pkregisterpagemaincontentsecondcontainer}`}>
                    <RegisterComponent locale={locale}/>            
                </div>                
            </div>            
        </section>
    )
}
 