'use client'
import { useParams } from 'next/navigation'
import { Copy, LocalisationUtils } from '@/lib'

export default function TermsAndConditionsPage(){
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)        
    return (
        <>
        <section>                        
            <h1>{copy.Pages.About.TermsAndConditions.MainHeading}</h1>                        
        </section>
        <section>
            <p>{copy.Pages.About.TermsAndConditions.sections.Temp}</p>
        </section>
        </>
    )
}