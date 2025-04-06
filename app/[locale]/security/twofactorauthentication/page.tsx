"use client"
import { useParams } from 'next/navigation'
import {Copy, LocalisationUtils } from '@/lib'

export default function TwoFactorAuthenticationPage() {
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)    
    return (
        <section>                        
            <h1>{copy.Pages.Authentication.TwoFactorAuthentication.MainHeading}</h1>            
        </section>        
    )
}
