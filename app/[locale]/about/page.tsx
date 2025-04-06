'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Copy, LocalisationUtils } from '@/lib'

export default function AboutPage(){
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)        
    return (
        <section>                        
            <h1>{copy.Pages.About.IndexPageMainHeading}</h1>            
            <h5><Link href={`/${locale}/about/privacy`}>{copy.Pages.About.PrivacyPolicy.PageTitle}</Link></h5>
            <h5><Link href={`/${locale}/about/terms`}>{copy.Pages.About.TermsAndConditions.PageTitle}</Link></h5>
        </section>
    )
}