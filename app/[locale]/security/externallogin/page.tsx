"use client"
import { useParams } from 'next/navigation'
import {Copy, LocalisationUtils } from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'
import { ExternalLoginProvidersComponent } from '@/components'

export default function ExternalLoginPage() {
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)    
    return (
        <section>                                    
            <h1>{copy.Pages.Authentication.ExternalLogin.MainHeading}</h1>            
            <div className={`${styles.pkpagemaincontent} ${styles.pkexternalloginpagemaincontent}`} >
                <ExternalLoginProvidersComponent  locale={locale} showUsernameLogin={true} />
            </div>
        </section>
    )
}
