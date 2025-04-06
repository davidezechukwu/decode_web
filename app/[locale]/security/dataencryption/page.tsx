"use client"
import { useParams } from 'next/navigation'
import { InfoTip } from '@/components'
import { Copy, LocalisationUtils } from '@/lib'

export default function DataEncryptionPage() {
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
    return (
        <section>
            <h1>{copy.Pages.Authentication.DataEncryption.MainHeading}
                <InfoTip infoId='SecurityHomePageInfoTip' locale={locale} size='xlarge'>
                    <p>{`${copy.Pages.Authentication.DataEncryption.Warning}`}</p>
                </InfoTip>
            </h1>
        </section>
    )
}
