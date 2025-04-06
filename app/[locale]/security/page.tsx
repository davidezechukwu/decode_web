'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Copy, LocalisationUtils, UseUserResponse } from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'
import ChangePasswordIcon from '/public/images/pagelinks/security/change_password.png'
import TwoFactorAuthenticationIcon from '/public/images/pagelinks/security/two_factor_authentication.png'
import DataencryptionIcon from '/public/images/pagelinks/security/dataencryption.png'
import { InfoTip } from '@/components'

export default function SecurityHomePage() {
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
    const [isLoading, UserResponse, _] = UseUserResponse()
    return (
        <>
            <section>
                <h1>{copy.Pages.Authentication.IndexPageMainHeading}
                    <InfoTip infoId='SecurityHomePageInfoTip' locale={locale} size='xlarge'>
                        <p>{`${copy.Pages.Authentication.SecurityInfo1}`}</p>
                        <p>{`${copy.Pages.Authentication.SecurityInfo2}`}</p>
                        <p>{`${copy.Pages.Authentication.SecurityInfo3}`}</p>
                    </InfoTip>
                </h1>
                <>
                    {!isLoading && !UserResponse?.IsAuthenticated && (
                        <>
                            <h5><Link href={`/${locale}/security/login`}>{copy.Pages.Authentication.Login.PageTitle}</Link></h5>
                            <h5><Link href={`/${locale}/security/forgotpassword`}>{copy.Pages.Authentication.ForgotPassword.PageTitle}</Link></h5>
                            <h5><Link href={`/${locale}/security/register`}>{copy.Pages.Authentication.Register.PageTitle}</Link></h5>
                            <h5><Link href={`/${locale}/security/externallogin`}>{copy.Pages.Authentication.ExternalLogin.PageTitle}</Link></h5>
                        </>
                    )}
                    {!isLoading && UserResponse?.IsAuthenticated && (
                        <>
                            <div className={styles.pkpagelinkcontainer}>
                                <h5>
                                    <Link href={`/${locale}/user/password`}>
                                        <Image src={ChangePasswordIcon} alt={copy.Pages.User.ChangePassword.MainHeading} width={60} height={60} />
                                        {copy.Pages.User.ChangePassword.PageTitle}
                                    </Link>
                                </h5>
                                <h5>
                                    <Link href={`/${locale}/security/twofactorauthentication`}>
                                        <Image src={TwoFactorAuthenticationIcon} alt={copy.Pages.Authentication.TwoFactorAuthentication.MainHeading} width={60} height={60} />
                                        {copy.Pages.Authentication.TwoFactorAuthentication.PageTitle}
                                    </Link>
                                </h5>
                                <h5>
                                    <Link href={`/${locale}/security/dataencryption`}>
                                        <Image src={DataencryptionIcon} alt={copy.Pages.Authentication.DataEncryption.MainHeading} width={60} height={60} />
                                        {copy.Pages.Authentication.DataEncryption.PageTitle}
                                    </Link>
                                </h5>
                            </div>
                        </>
                    )}
                    <br />
                    {/* <section className='pkinfo'>
            
            </section> */}
                </>
            </section>
            <style>{`
            .pkinfo {            
                background-color: #fff !important;
                color: #000;
                padding: 2rem
            }
        `}</style>
        </>
    )
}