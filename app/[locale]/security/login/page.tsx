"use client"
import { useParams } from 'next/navigation'
import { ExternalLoginProvidersComponent, LoginComponent } from '@/components'
import { Copy, LocalisationUtils, UseUserResponse } from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LoginPage() {
	const params = useParams()
	const locale = (String)(params.locale)
	const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
	const querystring = useSearchParams( ) 
	const redirect = querystring.get('redirect') ?? `/${locale}/user` 		
	const [IsAuthenticating, UserResponse, ___] = UseUserResponse({ redirectToIfFound: true, redirectToIfFoundUrl: redirect })
	const router = useRouter()
	
	return (
		<section>
			<h1>{copy.Pages.Authentication.Login.MainHeading}</h1>
			<div className={`${styles.pkpagemaincontent} ${styles.pkloginpagemaincontent}`}>
				<div className={`${styles.pkpagemaincontentfirstcontainer} ${styles.pkloginpagemaincontentfirstcontainer}`}>
					<LoginComponent locale={locale} />
				</div>
				<div className={`${styles.pkpagemaincontentsecondcontainer} ${styles.pkloginpagemaincontentsecondcontainer}`}>
					<ExternalLoginProvidersComponent  locale={locale} showUsernameLogin={false}/>
				</div>
			</div>
		</section>		
	)
}
