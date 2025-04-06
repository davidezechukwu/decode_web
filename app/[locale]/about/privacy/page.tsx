'use client'
import { useParams } from 'next/navigation'
import { useCallback, useId, useState } from 'react'
import { ExpansionPanel, ExpansionPanelContent } from "@progress/kendo-react-layout";
import { Reveal } from "@progress/kendo-react-animation";
import { Copy, HTTPUtils, LocalisationUtils } from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'
import { PathUtility } from '@david.ezechukwu/core';

export default function PrivacyPolicyPage(){
	const params = useParams()
    const locale = (String)(params.locale)
	const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
	const ID = useId()

	return (
		<section className={`${styles.pkprivacypolicypage}`}>
			<h1>{copy.Pages.About.PrivacyPolicy.MainHeading}</h1>
			<div>
				<details>

					<summary>{copy.Pages.About.PrivacyPolicy.sections.DefinitionsAndInterpretation.SectionTitle}</summary>
					<p>
						<h2>{copy.Pages.About.PrivacyPolicy.sections.DefinitionsAndInterpretation.SectionTitle}</h2>
						{(locale == 'en' || locale == '') && (
							<>
								<p>
									This Privacy Policy applies between you, the User of this Website, and <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong>, the owner and provider of this Website. <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> takes the privacy of your information very seriously.
									This Privacy Policy applies to our use of any and all Data collected by us or provided by you in relation to your use of the Website.
								</p>
								<p>
									This Privacy Policy should be read alongside, and in addition to, our Terms and Conditions, which can be found at: <a href={`${process.env.NEXT_PUBLIC_CORE_HOST!}about/terms/`}>{`${process.env.NEXT_PUBLIC_CORE_HOST!}about/terms/`}</a>.
								</p>
								<p><b>Please read this Privacy Policy carefully</b>.</p>
								<ol>
									<li>
										In this Privacy Policy, the following definitions are used:
										<table style={{ width: '100%' }}>
											<thead>
												<tr>
													<th style={{ width: '15%' }}></th>
													<th style={{ width: '85%' }}></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><b>Data</b></td>
													<td>collectively all information that you submit to <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> via the Website. This definition incorporates, where applicable, the definitions provided in the Data Protection Laws;</td>
												</tr>
												<tr>
													<td><b>Cookies</b></td>
													<td>a small text file placed on your computer by this Website when you visit certain parts of the Website and/or when you use certain features of the Website. Details of the cookies used by this Website are set out in the clause below (<b>Cookies</b>);</td>
												</tr>
												<tr>
													<td><b>Data Protection Laws</b></td>
													<td><p>any applicable law relating to the processing of personal Data, including but not limited to the GDPR, and any national implementing and supplementary laws, regulations and secondary legislation;</p></td>
												</tr>
												<tr>
													<td><b>GDPR</b></td>
													<td><p>the UK General Data Protection Regulation;</p></td>
												</tr>
												<tr>
													<td><b>{process.env.NEXT_PUBLIC_APP_NAME!}</b></td>
													<td></td>
												</tr>
												<tr>
													<td><b> UK and EU Cookie Law</b></td>
													<td>the Privacy and Electronic Communications (EC Directive) Regulations 2003 as amended by the Privacy and Electronic Communications (EC Directive) (Amendment) Regulations 2011 and the Privacy and Electronic Communications (EC Directive) (Amendment) Regulations 2018;</td>
												</tr>
												<tr>
													<td><b>User</b> or <b>you</b></td>
													<td>any third party that accesses the Website and is not either (i) employed by <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> and acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> and accessing the Website in connection with the provision of such services; and</td>
												</tr>
												<tr>
													<td><b>Website</b></td>
													<td>the website that you are currently using, <strong>{`${PathUtility.RemoveTrailingSlash(process.env.NEXT_PUBLIC_CORE_HOST!)}`}</strong>, and any sub-domains of this site unless expressly excluded by their own terms and conditions.</td>
												</tr>
											</tbody>
											<tfoot></tfoot>
										</table>
									</li>
									<li>
										In this Privacy Policy, unless the context requires a different interpretation:
										<ol>
											<li>the singular includes the plural and vice versa;</li>
											<li>references to sub-clauses, clauses, schedules or appendices are to sub-clauses, clauses, schedules or appendices of this Privacy Policy;</li>
											<li>a reference to a person includes firms, companies, government entities, trusts and partnerships;</li>
											<li>"including" is understood to mean "including without limitation";</li>
											<li>reference to any statutory provision includes any modification or amendment of it;</li>
											<li>the headings and sub-headings do not form part of this Privacy Policy.</li>
										</ol>
									</li>
								</ol>
							</>
						)}
						{locale == 'fr' && (
							<>
								<p>
									Cette politique de confidentialité s'applique entre vous, l'utilisateur de ce site Web, et <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong>, le propriétaire et fournisseur de ce site Web. <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> prend la confidentialité de vos informations très au sérieux.
									Cette politique de confidentialité s'applique à notre utilisation de toutes les données collectées par nous ou fournies par vous en relation avec votre utilisation du site Web.
								</p>
								<p>
									Cette politique de confidentialité doit être lue parallèlement et en complément de nos conditions générales, disponibles à l'adresse: <a href={`${process.env.NEXT_PUBLIC_CORE_HOST!}about/terms/`}>{`${process.env.NEXT_PUBLIC_CORE_HOST!}about/terms/`}</a>.
								</p>
								<p><b>Veuillez lire attentivement cette politique de confidentialité</b>.</p>
								<ol>
									<li>
										Dans cette politique de confidentialité, les définitions suivantes sont utilisées:
										<table style={{ width: '100%' }}>
											<thead>
												<tr>
													<th style={{ width: '15%' }}></th>
													<th style={{ width: '85%' }}></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><b>Données</b></td>
													<td>collectivement toutes les informations que vous soumettez à <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> via le site Web. Cette définition intègre, le cas échéant, les définitions fournies dans les lois sur la protection des données;</td>
												</tr>
												<tr>
													<td><b>Cookies</b></td>
													<td>un petit fichier texte placé sur votre ordinateur par ce site Web lorsque vous visitez certaines parties du site Web et/ou lorsque vous utilisez certaines fonctionnalités du site Web. Les détails des cookies utilisés par ce site Web sont définis dans la clause ci-dessous (<b>Cookies</b>);</td>
												</tr>
												<tr>
													<td><b>Lois sur la protection des données</b></td>
													<td><p>toute loi applicable relative au traitement des données personnelles, y compris, mais sans s'y limiter, le RGPD, ainsi que toutes lois nationales d'application et complémentaires, réglementations et législations secondaires;</p></td>
												</tr>
												<tr>
													<td><b>RGPD</b></td>
													<td><p>le règlement général sur la protection des données du Royaume-Uni;</p></td>
												</tr>
												<tr>
													<td><b>Décoder en ligne</b></td>
													<td></td>
												</tr>
												<tr>
													<td><b> Lois britanniques et européennes sur les cookies</b></td>
													<td>le Règlement sur la confidentialité et les communications électroniques (Directive CE) de 2003 tel que modifié par le Règlement sur la confidentialité et les communications électroniques (Directive CE) (Amendement) de 2011 et le Règlement de 2018 sur la confidentialité et les communications électroniques (Directive CE) (Amendement);</td>
												</tr>
												<tr>
													<td><b>Utilisateur</b> ou <b>vous</b></td>
													<td>tout tiers qui accède au site Web et qui n'est pas (i) employé par <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> et agissant dans le cadre de son emploi ou (ii) engagé en tant que consultant ou fournissant autrement des services à <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> et l'accès au site Web dans le cadre de la fourniture de ces services; et</td>
												</tr>
												<tr>
													<td><b>Site Web</b></td>
													<td>le site Web que vous utilisez actuellement, <strong>{`${PathUtility.RemoveTrailingSlash(process.env.NEXT_PUBLIC_CORE_HOST!)}`}</strong>, et tous les sous-domaines de ce site, sauf expressément exclus par leurs propres termes et conditions.</td>
												</tr>
											</tbody>
											<tfoot></tfoot>
										</table>
									</li>
									<li>
										Dans la présente Politique de Confidentialité, sauf si le contexte nécessite une interprétation différente:
										<ol>
											<li>le singulier inclut le pluriel et vice versa;</li>
											<li>Les références aux sous-clauses, clauses, annexes ou annexes renvoient aux sous-clauses, clauses, annexes ou annexes de la présente Politique de confidentialité;</li>
											<li>une référence à une personne inclut les entreprises, les sociétés, les entités gouvernementales, les fiducies et les partenariats;</li>
											<li>"y compris" signifie "y compris, sans limitation";</li>
											<li>la référence à toute disposition légale inclut toute modification ou amendement de celle-ci;</li>
											<li>les titres et sous-titres ne font pas partie de cette politique de confidentialité.</li>
										</ol>
									</li>
								</ol>
							</>
						)}
						{locale == 'pa' && (
							<>
								<p>
									ਇਹ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਤੁਹਾਡੇ, ਇਸ ਵੈੱਬਸਾਈਟ ਦੇ ਉਪਭੋਗਤਾ, ਅਤੇ <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong>, ਇਸ ਵੈੱਬਸਾਈਟ ਦੇ ਮਾਲਕ ਅਤੇ ਪ੍ਰਦਾਤਾ ਵਿਚਕਾਰ ਲਾਗੂ ਹੁੰਦੀ ਹੈ। <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਦੀ ਗੋਪਨੀਯਤਾ ਨੂੰ ਬਹੁਤ ਗੰਭੀਰਤਾ ਨਾਲ ਲੈਂਦਾ ਹੈ।
									ਇਹ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਵੈਬਸਾਈਟ ਦੀ ਤੁਹਾਡੀ ਵਰਤੋਂ ਦੇ ਸਬੰਧ ਵਿੱਚ ਸਾਡੇ ਦੁਆਰਾ ਇਕੱਤਰ ਕੀਤੇ ਜਾਂ ਤੁਹਾਡੇ ਦੁਆਰਾ ਪ੍ਰਦਾਨ ਕੀਤੇ ਗਏ ਕਿਸੇ ਵੀ ਅਤੇ ਸਾਰੇ ਡੇਟਾ ਦੀ ਵਰਤੋਂ 'ਤੇ ਲਾਗੂ ਹੁੰਦੀ ਹੈ।
								</p>
								<p>
									ਇਹ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਸਾਡੇ ਨਿਯਮਾਂ ਅਤੇ ਸ਼ਰਤਾਂ ਦੇ ਨਾਲ-ਨਾਲ ਪੜ੍ਹੀ ਜਾਣੀ ਚਾਹੀਦੀ ਹੈ, ਜੋ ਕਿ ਇੱਥੇ ਲੱਭੀ ਜਾ ਸਕਦੀ ਹੈ: <a href={`${process.env.NEXT_PUBLIC_CORE_HOST!}about/terms/`}>{`${process.env.NEXT_PUBLIC_CORE_HOST!}about/terms/`}</a>.
								</p>
								<p><b>ਕਿਰਪਾ ਕਰਕੇ ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਨੂੰ ਧਿਆਨ ਨਾਲ ਪੜ੍ਹੋ</b>।</p>
								<ol>
									<li>
										ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਵਿੱਚ, ਹੇਠ ਲਿਖੀਆਂ ਪਰਿਭਾਸ਼ਾਵਾਂ ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ:
										<table style={{ width: '100%' }}>
											<thead>
												<tr>
													<th style={{ width: '15%' }}></th>
													<th style={{ width: '85%' }}></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><b>ਡਾਟਾ</b></td>
													<td>ਸਮੂਹਿਕ ਤੌਰ 'ਤੇ ਉਹ ਸਾਰੀ ਜਾਣਕਾਰੀ ਜੋ ਤੁਸੀਂ ਵੈੱਬਸਾਈਟ ਰਾਹੀਂ <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> 'ਤੇ ਜਮ੍ਹਾਂ ਕਰਦੇ ਹੋ। ਇਹ ਪਰਿਭਾਸ਼ਾ, ਜਿੱਥੇ ਲਾਗੂ ਹੁੰਦੀ ਹੈ, ਡੇਟਾ ਸੁਰੱਖਿਆ ਕਾਨੂੰਨਾਂ ਵਿੱਚ ਪ੍ਰਦਾਨ ਕੀਤੀਆਂ ਪਰਿਭਾਸ਼ਾਵਾਂ ਨੂੰ ਸ਼ਾਮਲ ਕਰਦੀ ਹੈ;</td>
												</tr>
												<tr>
													<td><b>ਕੂਕੀਜ਼</b></td>
													<td>ਇਸ ਵੈੱਬਸਾਈਟ ਦੁਆਰਾ ਤੁਹਾਡੇ ਕੰਪਿਊਟਰ 'ਤੇ ਇੱਕ ਛੋਟੀ ਟੈਕਸਟ ਫਾਈਲ ਰੱਖੀ ਜਾਂਦੀ ਹੈ ਜਦੋਂ ਤੁਸੀਂ ਵੈੱਬਸਾਈਟ ਦੇ ਕੁਝ ਹਿੱਸਿਆਂ 'ਤੇ ਜਾਂਦੇ ਹੋ ਅਤੇ/ਜਾਂ ਜਦੋਂ ਤੁਸੀਂ ਵੈੱਬਸਾਈਟ ਦੀਆਂ ਕੁਝ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋ। ਇਸ ਵੈੱਬਸਾਈਟ ਦੁਆਰਾ ਵਰਤੀਆਂ ਗਈਆਂ ਕੂਕੀਜ਼ ਦੇ ਵੇਰਵੇ ਹੇਠਾਂ ਦਿੱਤੇ ਉਪਬੰਧ ਵਿੱਚ ਦਿੱਤੇ ਗਏ ਹਨ (<b>ਕੂਕੀਜ਼</b>);</td>
												</tr>
												<tr>
													<td><b>ਡੇਟਾ ਸੁਰੱਖਿਆ ਕਾਨੂੰਨ</b></td>
													<td><p>ਜੀਡੀਪੀਆਰ ਸਮੇਤ ਪਰ ਇਸ ਤੱਕ ਸੀਮਤ ਨਹੀਂ, ਅਤੇ ਕੋਈ ਵੀ ਰਾਸ਼ਟਰੀ ਲਾਗੂ ਕਰਨ ਵਾਲੇ ਅਤੇ ਪੂਰਕ ਕਾਨੂੰਨ, ਨਿਯਮਾਂ ਅਤੇ ਸੈਕੰਡਰੀ ਕਾਨੂੰਨ ਸਮੇਤ ਨਿੱਜੀ ਡੇਟਾ ਦੀ ਪ੍ਰਕਿਰਿਆ ਨਾਲ ਸਬੰਧਤ ਕੋਈ ਵੀ ਲਾਗੂ ਕਾਨੂੰਨ;</p></td>
												</tr>
												<tr>
													<td><b>GDPR</b></td>
													<td><p>ਯੂਕੇ ਜਨਰਲ ਡੇਟਾ ਪ੍ਰੋਟੈਕਸ਼ਨ ਰੈਗੂਲੇਸ਼ਨ;</p></td>
												</tr>
												<tr>
													<td><b>ਡੀਕੋਡ ਔਨਲਾਈਨ</b></td>
													<td></td>
												</tr>
												<tr>
													<td><b> UK ਅਤੇ EU ਕੂਕੀ ਕਾਨੂੰਨ</b></td>
													<td> ਗੋਪਨੀਯਤਾ ਅਤੇ ਇਲੈਕਟ੍ਰਾਨਿਕ ਸੰਚਾਰ (EC ਡਾਇਰੈਕਟਿਵ) ਨਿਯਮ 2003 ਜਿਵੇਂ ਕਿ ਗੋਪਨੀਯਤਾ ਅਤੇ ਇਲੈਕਟ੍ਰਾਨਿਕ ਸੰਚਾਰ (EC ਨਿਰਦੇਸ਼ਕ) (ਸੋਧ) ਨਿਯਮ 2011 ਦੁਆਰਾ ਸੋਧਿਆ ਗਿਆ ਹੈ ਅਤੇ ਗੋਪਨੀਯਤਾ ਅਤੇ ਇਲੈਕਟ੍ਰਾਨਿਕ ਸੰਚਾਰ (EC ਡਾਇਰੈਕਟਿਵ) (ਸੋਧ) ਨਿਯਮ 2018;</td>
												</tr>
												<tr>
													<td><b>ਉਪਭੋਗਤਾ</b> ਜਾਂ <b>ਤੁਸੀਂ</b></td>
													<td>ਕੋਈ ਵੀ ਤੀਜੀ ਧਿਰ ਜੋ ਵੈੱਬਸਾਈਟ ਤੱਕ ਪਹੁੰਚ ਕਰਦੀ ਹੈ ਅਤੇ ਜਾਂ ਤਾਂ (i) <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> ਦੁਆਰਾ ਨਿਯੁਕਤ ਨਹੀਂ ਹੈ ਅਤੇ ਆਪਣੇ ਰੁਜ਼ਗਾਰ ਦੇ ਦੌਰਾਨ ਕੰਮ ਕਰਦੀ ਹੈ ਜਾਂ (ii) ਇੱਕ ਸਲਾਹਕਾਰ ਵਜੋਂ ਰੁੱਝੀ ਹੋਈ ਹੈ ਜਾਂ ਨਹੀਂ ਤਾਂ <strong> ਨੂੰ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ {process.env.NEXT_PUBLIC_APP_NAME!}</strong> ਅਤੇ ਅਜਿਹੀਆਂ ਸੇਵਾਵਾਂ ਦੇ ਪ੍ਰਬੰਧ ਦੇ ਸਬੰਧ ਵਿੱਚ ਵੈੱਬਸਾਈਟ ਤੱਕ ਪਹੁੰਚ ਕਰਨਾ; ਅਤੇ</td>
												</tr>
												<tr>
													<td><b>ਵੈੱਬਸਾਈਟ</b></td>
													<td>ਉਹ ਵੈੱਬਸਾਈਟ ਜਿਸਦੀ ਤੁਸੀਂ ਵਰਤਮਾਨ ਵਿੱਚ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹੋ, <strong>{`${PathUtility.RemoveTrailingSlash(process.env.NEXT_PUBLIC_CORE_HOST!)}`}</strong>, ਅਤੇ ਇਸ ਸਾਈਟ ਦੇ ਕਿਸੇ ਵੀ ਉਪ-ਡੋਮੇਨ ਨੂੰ ਜਦੋਂ ਤੱਕ ਉਹਨਾਂ ਦੇ ਆਪਣੇ ਨਿਯਮਾਂ ਅਤੇ ਸ਼ਰਤਾਂ ਦੁਆਰਾ ਸਪਸ਼ਟ ਤੌਰ 'ਤੇ ਬਾਹਰ ਨਾ ਕੀਤਾ ਗਿਆ ਹੋਵੇ।</td>
												</tr>
											</tbody>
											<tfoot></tfoot>
										</table>
									</li>
									<li>
										ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਵਿੱਚ, ਜਦੋਂ ਤੱਕ ਕਿ ਪ੍ਰਸੰਗ ਨੂੰ ਇੱਕ ਵੱਖਰੀ ਵਿਆਖਿਆ ਦੀ ਲੋੜ ਨਹੀਂ ਹੁੰਦੀ:
										<ol>
											<li>ਇਕਵਚਨ ਵਿੱਚ ਬਹੁਵਚਨ ਅਤੇ ਇਸਦੇ ਉਲਟ ਸ਼ਾਮਲ ਹਨ;</li>
											<li>ਉਪ-ਧਾਰਾਵਾਂ, ਧਾਰਾਵਾਂ, ਅਨੁਸੂਚੀਆਂ ਜਾਂ ਅੰਤਿਕਾ ਦਾ ਹਵਾਲਾ ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਦੇ ਉਪ-ਧਾਰਾਵਾਂ, ਧਾਰਾਵਾਂ, ਸਮਾਂ-ਸਾਰਣੀਆਂ ਜਾਂ ਅੰਤਿਕਾ ਲਈ ਹਨ;</li>
											<li>ਕਿਸੇ ਵਿਅਕਤੀ ਦੇ ਹਵਾਲੇ ਵਿੱਚ ਫਰਮਾਂ, ਕੰਪਨੀਆਂ, ਸਰਕਾਰੀ ਸੰਸਥਾਵਾਂ, ਟਰੱਸਟ ਅਤੇ ਭਾਈਵਾਲੀ ਸ਼ਾਮਲ ਹਨ;</li>
											<li>"ਸਮੇਤ" ਦਾ ਮਤਲਬ "ਬਿਨਾਂ ਸੀਮਾਵਾਂ ਸਮੇਤ" ਸਮਝਿਆ ਜਾਂਦਾ ਹੈ;</li>
											<li>ਕਿਸੇ ਵੀ ਕਨੂੰਨੀ ਵਿਵਸਥਾ ਦੇ ਸੰਦਰਭ ਵਿੱਚ ਇਸ ਵਿੱਚ ਕੋਈ ਸੋਧ ਜਾਂ ਸੋਧ ਸ਼ਾਮਲ ਹੈ;</li>
											<li>ਸਿਰਲੇਖ ਅਤੇ ਉਪ-ਸਿਰਲੇਖ ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਦਾ ਹਿੱਸਾ ਨਹੀਂ ਬਣਦੇ ਹਨ।</li>
										</ol>
									</li>
								</ol>
							</>
						)}
						{locale == 'ur' && (
							<>
								<p>
									یہ رازداری کی پالیسی آپ، اس ویب سائٹ کے صارف، اور <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong>، اس ویب سائٹ کے مالک اور فراہم کنندہ کے درمیان لاگو ہوتی ہے۔ <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> آپ کی معلومات کی رازداری کو بہت سنجیدگی سے لیتا ہے۔
									یہ رازداری کی پالیسی ہمارے ذریعہ جمع کردہ یا آپ کی ویب سائٹ کے استعمال کے سلسلے میں فراہم کردہ کسی بھی اور تمام ڈیٹا کے ہمارے استعمال پر لاگو ہوتی ہے۔
								</p>
								<p>
									اس رازداری کی پالیسی کو ہماری شرائط و ضوابط کے ساتھ ساتھ پڑھنا چاہیے، جو کہ یہاں پایا جا سکتا ہے: <a href={`${process.env.NEXT_PUBLIC_CORE_HOST!}about/terms/`}>{`${process.env.NEXT_PUBLIC_CORE_HOST!}about/terms/`}</a>۔
								</p>
								<p><b>براہ کرم اس رازداری کی پالیسی کو غور سے پڑھیں</b>۔</p>
								<ol>
									<li>
										اس رازداری کی پالیسی میں، درج ذیل تعریفیں استعمال کی گئی ہیں:
										<table style={{ width: '100%' }}>
											<thead>
												<tr>
													<th style={{ width: '15%' }}></th>
													<th style={{ width: '85%' }}></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><b>ڈیٹا</b></td>
													<td>مجموعی طور پر وہ تمام معلومات جو آپ ویب سائٹ کے ذریعے <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> پر جمع کراتے ہیں۔ یہ تعریف، جہاں قابل اطلاق ہو، ڈیٹا پروٹیکشن قوانین میں فراہم کردہ تعریفیں شامل کرتی ہے؛</td>
												</tr>
												<tr>
													<td><b>کوکیز</b></td>
													<td>اس ویب سائٹ کے ذریعہ آپ کے کمپیوٹر پر ایک چھوٹی ٹیکسٹ فائل رکھی جاتی ہے جب آپ ویب سائٹ کے کچھ حصوں پر جاتے ہیں اور/یا جب آپ ویب سائٹ کی کچھ خصوصیات استعمال کرتے ہیں۔ اس ویب سائٹ کے ذریعہ استعمال کی جانے والی کوکیز کی تفصیلات ذیل کی شق میں بیان کی گئی ہیں (<b>کوکیز</b>)؛</td>
												</tr>
												<tr>
													<td><b>ڈیٹا کے تحفظ کے قوانین</b></td>
													<td><p>ذاتی ڈیٹا کی پروسیسنگ سے متعلق کوئی بھی قابل اطلاق قانون، بشمول GDPR، اور کسی بھی قومی نفاذ اور ضمنی قوانین، ضوابط اور ثانوی قانون سازی سمیت لیکن ان تک محدود نہیں؛</p></td>
												</tr>
												<tr>
													<td><b>GDPR</b></td>
													<td><p>یو کے جنرل ڈیٹا پروٹیکشن ریگولیشن؛</p></td>
												</tr>
												<tr>
													<td><b>ڈی کوڈ آن لائن</b></td>
													<td></td>
												</tr>
												<tr>
													<td><b>برطانیہ اور یورپی یونین کوکی قانون</b></td>
													<td>پرائیویسی اینڈ الیکٹرانک کمیونیکیشنز (EC ڈائرکٹیو) ریگولیشنز 2003 جیسا کہ پرائیویسی اینڈ الیکٹرانک کمیونیکیشنز (EC Directive) (ترمیمی) ریگولیشنز 2011 اور پرائیویسی اینڈ الیکٹرانک کمیونیکیشنز (EC ڈائرکٹیو) (ترمیمی) ضوابط 2003۔</td>
												</tr>
												<tr>
													<td><b>صارف</b> یا <b>آپ</b></td>
													<td>کوئی تیسرا فریق جو ویب سائٹ تک رسائی حاصل کرتا ہے اور وہ یا تو (i) <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> کے ذریعہ ملازم نہیں ہے اور اپنی ملازمت کے دوران کام کررہا ہے یا (ii) مشیر کے طور پر مصروف ہے یا دوسری صورت میں <strong> کو خدمات فراہم کررہا ہے {process.env.NEXT_PUBLIC_APP_NAME!}</strong> اور اس طرح کی خدمات کی فراہمی کے سلسلے میں ویب سائٹ تک رسائی؛ اور</td>
												</tr>
												<tr>
													<td><b>ویب سائٹ</b></td>
													<td>وہ ویب سائٹ جسے آپ فی الحال استعمال کر رہے ہیں، <strong>{`${PathUtility.RemoveTrailingSlash(process.env.NEXT_PUBLIC_CORE_HOST!)}`}</strong>، اور اس سائٹ کے کوئی بھی ذیلی ڈومینز جب تک کہ ان کی اپنی شرائط و ضوابط سے واضح طور پر خارج نہ ہوں۔</td>
												</tr>
											</tbody>
											<tfoot></tfoot>
										</table>
									</li>
									<li>
										اس رازداری کی پالیسی میں، جب تک کہ سیاق و سباق کو مختلف تشریح کی ضرورت نہ ہو:
										<ol>
											<li>واحد میں جمع اور اس کے برعکس شامل ہوتا ہے؛</li>
											<li>ذیلی شقوں، شقوں، نظام الاوقات یا ضمیموں کا حوالہ اس رازداری کی پالیسی کی ذیلی شقوں، شقوں، نظام الاوقات یا ضمیموں سے ہے؛</li>
											<li>کسی شخص کے حوالے سے فرم، کمپنیاں، حکومتی ادارے، ٹرسٹ اور شراکت داری شامل ہے؛</li>
											<li>"بشمول" کا مطلب "بغیر حد بندی سمیت" سمجھا جاتا ہے؛</li>
											<li>کسی بھی قانونی شق کے حوالہ میں اس میں کوئی ترمیم یا ترمیم شامل ہے؛</li>
											<li> عنوانات اور ذیلی سرخیاں اس رازداری کی پالیسی کا حصہ نہیں بنتی ہیں۔</li>
										</ol>
									</li>
								</ol>
							</>
						)}
					</p>
				</details>

				<details>
					<summary>{copy.Pages.About.PrivacyPolicy.sections.ScopeOfThisPrivacyPolicy.SectionTitle}</summary>
					<p>
						<h2>{copy.Pages.About.PrivacyPolicy.sections.ScopeOfThisPrivacyPolicy.SectionTitle}</h2>
						<ol>
							{(locale == 'en' || locale == '') && (
								<>
									<li>This Privacy Policy applies only to the actions of <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> and Users with respect to this Website. It does not extend to any websites that can be accessed from this Website including, but not limited to, any links we may provide to social media websites.</li>
									<li>For purposes of the applicable Data Protection Laws, <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> is the "data controller". This means that <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> determines the purposes for which, and the manner in which, your Data is processed.</li>
								</>
							)}
							{(locale == 'fr') && (
								<>
									<li>Cette politique de confidentialité s'applique uniquement aux actions de <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> et des utilisateurs concernant ce site Web. Il ne s'étend pas aux sites Web accessibles à partir de ce site Web, y compris, mais sans s'y limiter, les liens que nous pouvons fournir vers des sites Web de médias sociaux.</li>
									<li>Aux fins des lois applicables sur la protection des données, <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> est le "contrôleur des données". Cela signifie que <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> détermine les finalités pour lesquelles et la manière dont vos données sont traitées.</li>
								</>
							)}
							{(locale == 'pa') && (
								<>
									<li>ਇਹ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਸਿਰਫ਼ <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> ਅਤੇ ਇਸ ਵੈੱਬਸਾਈਟ ਦੇ ਸਬੰਧ ਵਿੱਚ ਵਰਤੋਂਕਾਰਾਂ ਦੀਆਂ ਕਾਰਵਾਈਆਂ 'ਤੇ ਲਾਗੂ ਹੁੰਦੀ ਹੈ। ਇਹ ਕਿਸੇ ਵੀ ਵੈਬਸਾਈਟ ਤੱਕ ਨਹੀਂ ਵਿਸਤਾਰ ਕਰਦਾ ਹੈ ਜਿਸਨੂੰ ਇਸ ਵੈਬਸਾਈਟ ਤੋਂ ਐਕਸੈਸ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਅਸੀਂ ਸੋਸ਼ਲ ਮੀਡੀਆ ਵੈਬਸਾਈਟਾਂ ਨੂੰ ਪ੍ਰਦਾਨ ਕਰ ਸਕਦੇ ਹਾਂ ਕਿਸੇ ਵੀ ਲਿੰਕ ਸਮੇਤ, ਪਰ ਇਹਨਾਂ ਤੱਕ ਸੀਮਿਤ ਨਹੀਂ ਹੈ।</li>
									<li>ਲਾਗੂ ਡਾਟਾ ਸੁਰੱਖਿਆ ਕਨੂੰਨਾਂ ਦੇ ਉਦੇਸ਼ਾਂ ਲਈ, <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> "ਡਾਟਾ ਕੰਟਰੋਲਰ" ਹੈ। ਇਸਦਾ ਮਤਲਬ ਹੈ ਕਿ <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> ਉਹਨਾਂ ਉਦੇਸ਼ਾਂ ਨੂੰ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਜਿਸ ਲਈ, ਅਤੇ ਜਿਸ ਤਰੀਕੇ ਨਾਲ, ਤੁਹਾਡੇ ਡੇਟਾ ਦੀ ਪ੍ਰਕਿਰਿਆ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।</li>
								</>
							)}
							{(locale == 'ur') && (
								<>
									<li>یہ رازداری کی پالیسی صرف کے اعمال پر لاگو ہوتی ہے۔ <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> اور اس ویب سائٹ کے حوالے سے صارفین۔ یہ کسی بھی ویب سائٹ تک توسیع نہیں کرتا ہے جس تک اس ویب سائٹ سے رسائی حاصل کی جاسکتی ہے، بشمول، لیکن ان تک محدود نہیں، کوئی بھی لنک جو ہم سوشل میڈیا ویب سائٹس کو فراہم کرسکتے ہیں۔</li>
									<li>قابل اطلاق ڈیٹا پروٹیکشن قوانین کے مقاصد کے لیے،<strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong>"ڈیٹا کنٹرولر" ہے۔ اس کا مطلب ہے کہ <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> ان مقاصد کا تعین کرتا ہے جن کے لیے، اور جس طریقے سے، آپ کے ڈیٹا پر کارروائی کی جاتی ہے۔</li>
								</>
							)}
						</ol>
					</p>
				</details>

				<details>
					<summary>{copy.Pages.About.PrivacyPolicy.sections.HowWeCollectData.SectionTitle}</summary>
					<p>
						<h2>{copy.Pages.About.PrivacyPolicy.sections.HowWeCollectData.SectionTitle}</h2>
						<ol>
							{(locale == 'en' || locale == '') && (
								<>
									<li>
										We collect Data, when applicable, in the following ways:
										<ol>
											<li>Data expressly given to us by you</li>
											<li>Data received from other sources, with your permission</li>
											<li>Data received from publicly available third-party sources, with your permission</li>
											<li>Data collected automatically such as date and time, browser, functional cookies and tokens/nonces</li>
										</ol>
									</li>
								</>
							)}
							{(locale == 'fr') && (
								<>
									<li>
										Nous collectons les Données, le cas échéant, des manières suivantes:
										<ol>
											<li>Données expressément fournies par vous</li>
											<li>Données reçues d'autres sources, avec votre permission</li>
											<li>Données reçues de sources tierces accessibles au public, avec votre autorisation</li>
											<li>Les données sont collectées automatiquement telles que la date et l'heure, le navigateur, les cookies fonctionnels; et les jetons/nonces.</li>
										</ol>
									</li>
								</>
							)}
							{(locale == 'pa') && (
								<>
									<li>
										ਅਸੀਂ ਹੇਠਾਂ ਦਿੱਤੇ ਤਰੀਕਿਆਂ ਨਾਲ, ਜਦੋਂ ਲਾਗੂ ਹੁੰਦਾ ਹੈ, ਡੇਟਾ ਇਕੱਠਾ ਕਰਦੇ ਹਾਂ:
										<ol>
											<li>ਤੁਹਾਡੇ ਦੁਆਰਾ ਸਾਨੂੰ ਦਿੱਤਾ ਗਿਆ ਡੇਟਾ</li>
											<li>ਤੁਹਾਡੀ ਇਜਾਜ਼ਤ ਨਾਲ, ਹੋਰ ਸਰੋਤਾਂ ਤੋਂ ਪ੍ਰਾਪਤ ਡੇਟਾ; ਅਤੇ</li>
											<li>ਤੁਹਾਡੀ ਇਜਾਜ਼ਤ ਨਾਲ, ਜਨਤਕ ਤੌਰ 'ਤੇ ਉਪਲਬਧ ਤੀਜੀ-ਧਿਰ ਦੇ ਸਰੋਤਾਂ ਤੋਂ ਪ੍ਰਾਪਤ ਡੇਟਾ</li>
											<li>ਡਾਟਾ ਆਪਣੇ ਆਪ ਇਕੱਠਾ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਜਿਵੇਂ ਕਿ ਮਿਤੀ ਅਤੇ ਸਮਾਂ, ਬ੍ਰਾਊਜ਼ਰ, ਕਾਰਜਸ਼ੀਲ ਕੂਕੀਜ਼; ਅਤੇ ਟੋਕਨ/ਨੋਂਸ।</li>
										</ol>
									</li>
								</>
							)}
							{(locale == 'ur') && (
								<>
									<li>
										ہم ڈیٹا جمع کرتے ہیں، جب قابل اطلاق ہو، درج ذیل طریقوں سے:
										<ol>
											<li>ڈیٹا واضح طور پر آپ کے ذریعہ ہمیں دیا گیا ہے۔</li>
											<li>دوسرے ذرائع سے موصول ہونے والا ڈیٹا، آپ کی اجازت سے؛ اور</li>
											<li>آپ کی اجازت سے عوامی طور پر دستیاب فریق ثالث کے ذرائع سے موصول ہونے والا ڈیٹا</li>
											<li>ڈیٹا خود بخود جمع ہوتا ہے جیسے کہ تاریخ اور وقت، براؤزر، فنکشنل کوکیز؛ اور ٹوکن/نونسز۔</li>
										</ol>
									</li>
								</>
							)}
						</ol>
					</p>
				</details>

				<details>
					<summary>{copy.Pages.About.PrivacyPolicy.sections.DataCollected.SectionTitle}</summary>
					<p>
						<h2>{copy.Pages.About.PrivacyPolicy.sections.DataCollected.SectionTitle}</h2>
						<ol>
							{(locale == 'en' || locale == '') && (
								<li>
									We may collect the following Data, which includes personal Data, from you:
									<ol>
										<li>Name</li>
										<li>Date of birth</li>
										<li>Gender</li>
										<li>Contact information such as email addresses and telephone numbers</li>
										<li>Your age (in order to comply with Age-restricted content, if any)</li>
										<li>IP address (automatically collected)</li>
										<li>Location (automatically estimated from your IP Address if your Device GeoLocation functionality is disabled )</li>
										<li>Device make and  model (automatically collected)</li>
										<li>Web browser type and version when using a web browser (automatically collected)</li>
										<li>Native App version when using a Native App (automatically collected)</li>
										<li>Operating system (automatically collected)</li>
										<li>Your login history</li>
										<li>A history of changes you make to your data</li>
									</ol>
									<p>in each case, in accordance with this Privacy Policy.</p>
								</li>
							)}
							{(locale == 'fr') && (
								<li>
									Nous pouvons collecter les données suivantes, qui incluent des données personnelles, auprès de vous:
									<ol>
										<li>Nom</li>
										<li>Date de naissance</li>
										<li>Sexe</li>
										<li>Coordonnées telles que les adresses e-mail et les numéros de téléphone</li>
										<li>Votre âge (pour respecter les contenus soumis à une limite d'âge, le cas échéant)</li>
										<li>Adresse IP (collectée automatiquement)</li>
										<li>Localisation (automatiquement estimée à partir de votre adresse IP si la fonctionnalité de géolocalisation de votre appareil est désactivée)</li>
										<li>Marque et modèle de l'appareil (collectés automatiquement)</li>
										<li>Type et version du navigateur Web lors de l'utilisation d'un navigateur Web (collectés automatiquement)</li>
										<li>Version de l'application native lors de l'utilisation d'une application native (collectée automatiquement)</li>
										<li>Système d'exploitation (collecté automatiquement)</li>
										<li>Votre historique de connexion</li>
										<li>Un historique des modifications que vous apportez à vos données</li>
									</ol>
									<p>dans chaque cas, conformément à la présente politique de confidentialité.</p>
								</li>
							)}
							{(locale == 'pa') && (
								<li>
									ਅਸੀਂ ਤੁਹਾਡੇ ਤੋਂ ਹੇਠਾਂ ਦਿੱਤੇ ਡੇਟਾ ਨੂੰ ਇਕੱਠਾ ਕਰ ਸਕਦੇ ਹਾਂ, ਜਿਸ ਵਿੱਚ ਨਿੱਜੀ ਡੇਟਾ ਸ਼ਾਮਲ ਹੁੰਦਾ ਹੈ:
									<ol>
										<li>ਨਾਮ</li>
										<li>ਜਨਮ ਮਿਤੀ</li>
										<li>ਲਿੰਗ</li>
										<li>ਸੰਪਰਕ ਜਾਣਕਾਰੀ ਜਿਵੇਂ ਕਿ ਈਮੇਲ ਪਤੇ ਅਤੇ ਟੈਲੀਫੋਨ ਨੰਬਰ</li>
										<li>ਤੁਹਾਡੀ ਉਮਰ (ਉਮਰ-ਪ੍ਰਤੀਬੰਧਿਤ ਸਮੱਗਰੀ ਦੀ ਪਾਲਣਾ ਕਰਨ ਲਈ, ਜੇਕਰ ਕੋਈ ਹੋਵੇ)</li>
										<li>IP ਪਤਾ (ਆਟੋਮੈਟਿਕਲੀ ਇਕੱਠਾ ਕੀਤਾ)</li>
										<li>ਟਿਕਾਣਾ (ਤੁਹਾਡੇ IP ਪਤੇ ਤੋਂ ਸਵੈਚਲਿਤ ਤੌਰ 'ਤੇ ਅੰਦਾਜ਼ਾ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ ਜੇਕਰ ਤੁਹਾਡੀ ਡਿਵਾਈਸ ਜੀਓਲੋਕੇਸ਼ਨ ਕਾਰਜਕੁਸ਼ਲਤਾ ਅਯੋਗ ਹੈ)</li>
										<li>ਡਿਵਾਈਸ ਮੇਕ ਅਤੇ ਮਾਡਲ (ਆਟੋਮੈਟਿਕਲੀ ਇਕੱਠੀ ਕੀਤੀ)</li>
										<li>ਵੈੱਬ ਬ੍ਰਾਊਜ਼ਰ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਸਮੇਂ ਵੈੱਬ ਬ੍ਰਾਊਜ਼ਰ ਦੀ ਕਿਸਮ ਅਤੇ ਸੰਸਕਰਣ (ਆਟੋਮੈਟਿਕ ਤੌਰ 'ਤੇ ਇਕੱਤਰ ਕੀਤਾ ਗਿਆ)</li>
										<li>ਨੇਟਿਵ ਐਪ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਸਮੇਂ ਨੇਟਿਵ ਐਪ ਵਰਜ਼ਨ (ਆਟੋਮੈਟਿਕਲੀ ਇਕੱਠੀ ਕੀਤੀ)</li>
										<li>ਓਪਰੇਟਿੰਗ ਸਿਸਟਮ (ਆਟੋਮੈਟਿਕਲੀ ਇਕੱਠਾ ਕੀਤਾ ਗਿਆ)</li>
										<li>ਤੁਹਾਡਾ ਲਾਗਇਨ ਇਤਿਹਾਸ</li>
										<li>ਤੁਹਾਡੇ ਵੱਲੋਂ ਆਪਣੇ ਡੇਟਾ ਵਿੱਚ ਕੀਤੀਆਂ ਤਬਦੀਲੀਆਂ ਦਾ ਇਤਿਹਾਸ</li>
									</ol>
									<p>ਹਰੇਕ ਮਾਮਲੇ ਵਿੱਚ, ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਦੇ ਅਨੁਸਾਰ।</p>
								</li>
							)}
							{(locale == 'ur') && (
								<li>
									ہم آپ سے درج ذیل ڈیٹا اکٹھا کر سکتے ہیں، جس میں ذاتی ڈیٹا شامل ہے:
									<ol>
										<li>نام</li>
										<li>تاریخ پیدائش</li>
										<li>جنس</li>
										<li>رابطہ کی معلومات جیسے ای میل پتے اور ٹیلی فون نمبرز</li>
										<li>آپ کی عمر (عمر کی پابندی والے مواد کی تعمیل کرنے کے لیے، اگر کوئی ہو)</li>
										<li>IP ایڈریس (خودکار طور پر جمع)</li>
										<li>مقام (آپ کے آئی پی ایڈریس سے خود بخود اندازہ لگایا جاتا ہے اگر آپ کے ڈیوائس کی جیو لوکیشن کی فعالیت غیر فعال ہے)</li>
										<li>آلہ سازی اور ماڈل (خودکار طور پر جمع)</li>
										<li>ویب براؤزر کا استعمال کرتے وقت ویب براؤزر کی قسم اور ورژن (خودکار طور پر جمع)</li>
										<li>ایک مقامی ایپ استعمال کرتے وقت مقامی ایپ ورژن (خودکار طور پر جمع)</li>
										<li>آپریٹنگ سسٹم (خودکار طور پر جمع)</li>
										<li>آپ کی لاگ ان کی تاریخ</li>
										<li>آپ کے ڈیٹا میں تبدیلیوں کی تاریخ</li>
									</ol>
									<p>ہر معاملے میں، اس رازداری کی پالیسی کے مطابق۔</p>
								</li>
							)}
						</ol>
					</p>
				</details>

				<details>
					<summary>{copy.Pages.About.PrivacyPolicy.sections.DataThatisGivenToUsbyYou.SectionTitle}</summary>
					<p>
						<h2>{copy.Pages.About.PrivacyPolicy.sections.DataThatisGivenToUsbyYou.SectionTitle}</h2>
						<ol>
							<li>
								{(locale == 'en' || locale == '') && (
									<>
										<strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> will collect your Data in a number of ways, for example:
										<ol>
											<li>when you contact us through the Website, by telephone, post, e-mail or through any other means;</li>
											<li>when you register with us and set up an account to receive or use our products or services;</li>
											<li>when you use our services;</li>
										</ol>
										<p>in each case, in accordance with this Privacy Policy.</p>
									</>
								)}
								{(locale == 'fr') && (
									<>
										<strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> collectera vos données de plusieurs manières, par exemple:
										<ol>
											<li>Lorsque vous nous contactez via le site Web, par téléphone, courrier, e-mail ou par tout autre moyen;</li>
											<li>Lorsque vous vous inscrivez chez nous et créez un compte pour recevoir ou utiliser nos produits ou services;</li>
											<li>lorsque vous utilisez nos services;</li>
										</ol>
										<p>dans chaque cas, conformément à la présente politique de confidentialité.</p>
									</>
								)}
								{(locale == 'pa') && (
									<>
										<strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> ਤੁਹਾਡੇ ਡੇਟਾ ਨੂੰ ਕਈ ਤਰੀਕਿਆਂ ਨਾਲ ਇਕੱਠਾ ਕਰੇਗਾ, ਉਦਾਹਰਨ ਲਈ:
										<ol>
											<li>ਜਦੋਂ ਤੁਸੀਂ ਵੈੱਬਸਾਈਟ ਰਾਹੀਂ, ਟੈਲੀਫੋਨ, ਡਾਕ, ਈ-ਮੇਲ ਜਾਂ ਕਿਸੇ ਹੋਰ ਸਾਧਨ ਰਾਹੀਂ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਦੇ ਹੋ;</li>
											<li>ਜਦੋਂ ਤੁਸੀਂ ਸਾਡੇ ਨਾਲ ਰਜਿਸਟਰ ਕਰਦੇ ਹੋ ਅਤੇ ਸਾਡੇ ਉਤਪਾਦਾਂ ਜਾਂ ਸੇਵਾਵਾਂ ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਨ ਜਾਂ ਵਰਤਣ ਲਈ ਇੱਕ ਖਾਤਾ ਸਥਾਪਤ ਕਰਦੇ ਹੋ;</li>
											<li>ਜਦੋਂ ਤੁਸੀਂ ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋ;</li>
										</ol>
										<p>ਹਰੇਕ ਮਾਮਲੇ ਵਿੱਚ, ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਦੇ ਅਨੁਸਾਰ।</p>
									</>
								)}
								{(locale == 'ur') && (
									<>
										<strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> آپ کا ڈیٹا متعدد طریقوں سے جمع کرے گا، مثال کے طور پر:
										<ol>
											<li>جب آپ ہم سے ویب سائٹ کے ذریعے، ٹیلی فون، ڈاک، ای میل یا کسی اور ذریعے سے رابطہ کرتے ہیں؛</li>
											<li>جب آپ ہمارے ساتھ رجسٹر ہوتے ہیں اور ہماری مصنوعات یا خدمات حاصل کرنے یا استعمال کرنے کے لیے ایک اکاؤنٹ مرتب کرتے ہیں؛</li>
											<li>جب آپ ہماری خدمات استعمال کرتے ہیں؛</li>
										</ol>
										<p>ہر معاملے میں، اس رازداری کی پالیسی کے مطابق۔</p>
									</>
								)}
							</li>
						</ol>
					</p>
				</details>

				<details>
					<summary>{copy.Pages.About.PrivacyPolicy.sections.DataThatIsReceivedFromThirdParties.SectionTitle}</summary>
					<p>
						<h2>{copy.Pages.About.PrivacyPolicy.sections.DataThatIsReceivedFromThirdParties.SectionTitle}</h2>
						<ol>
							<li>
								{(locale == 'en' || locale == '') && (
									<>
										<strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> will receive Data about you such as your email address and photos from the following third parties when you authenticate using their services:
									</>
								)}
								{(locale == 'fr') && (
									<>
										<strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> recevra des données vous concernant, telles que votre adresse e-mail et des photos, des tiers suivants lorsque vous vous authentifierez en utilisant leurs services:
									</>
								)}
								{(locale == 'pa') && (
									<>
										<strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> ਜਦੋਂ ਤੁਸੀਂ ਉਹਨਾਂ ਦੀਆਂ ਸੇਵਾਵਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਪ੍ਰਮਾਣਿਤ ਕਰਦੇ ਹੋ ਤਾਂ ਹੇਠਾਂ ਦਿੱਤੀਆਂ ਤੀਜੀਆਂ ਧਿਰਾਂ ਤੋਂ ਤੁਹਾਡੇ ਬਾਰੇ ਡਾਟਾ ਪ੍ਰਾਪਤ ਕਰੇਗਾ ਜਿਵੇਂ ਕਿ ਤੁਹਾਡਾ ਈਮੇਲ ਪਤਾ ਅਤੇ ਫੋਟੋਆਂ:
									</>
								)}
								{(locale == 'ur') && (
									<>
										<strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> جب آپ ان کی خدمات کا استعمال کرتے ہوئے تصدیق کریں گے تو آپ کے بارے میں ڈیٹا حاصل کریں گے جیسے کہ آپ کا ای میل پتہ اور تصاویر درج ذیل فریقین سے:
									</>
								)}
								<ol>
									{(locale == 'en' || locale == '') && (
										<>
											<li>Meta (formerly known as Facebook)</li>
											<li>Google</li>
										</>
									)}
									{(locale == 'fr') && (
										<>
											<li>Meta (anciennement Facebook)</li>
											<li>Google</li>
										</>
									)}
									{(locale == 'pa') && (
										<>
											<li>ਮੈਟਾ (ਪਹਿਲਾਂ ਫੇਸਬੁੱਕ ਵਜੋਂ ਜਾਣਿਆ ਜਾਂਦਾ ਸੀ)</li>
											<li>Google</li>
										</>
									)}
									{(locale == 'ur') && (
										<>
											<li>ਮੈਟਾ (ਪਹਿਲਾਂ ਫੇਸਬੁੱਕ ਵਜੋਂ ਜਾਣਿਆ ਜਾਂਦਾ ਸੀ)</li>
											<li>Google</li>
										</>
									)}
								</ol>
							</li>
						</ol>
					</p>
				</details>

				<details>
					<summary>{copy.Pages.About.PrivacyPolicy.sections.DataThatisReceivedFromPubliclyAvailableThirdPartiesSources.SectionTitle}</summary>
					<p>
						<h2>{copy.Pages.About.PrivacyPolicy.sections.DataThatisReceivedFromPubliclyAvailableThirdPartiesSources.SectionTitle}</h2>
						<ol>
							{(locale == 'en' || locale == '') && (
								<>
									<li>
										We may receive Data about you from the following publicly available third-party sources:
										<ol>
											<li>UK Electoral Register</li>
											<li>USA Labour Statistics</li>
										</ol>
									</li>
								</>
							)}
							{(locale == 'fr') && (
								<>
									<li>
										Nous pouvons recevoir des données vous concernant à partir des sources tierces suivantes accessibles au public:
										<ol>
											<li>Registre électoral du Royaume-Uni</li>
											<li>Statistiques du travail aux États-Unis</li>
										</ol>
									</li>
								</>
							)}
							{(locale == 'pa') && (
								<>
									<li>
										ਅਸੀਂ ਹੇਠਾਂ ਦਿੱਤੇ ਜਨਤਕ ਤੌਰ 'ਤੇ ਉਪਲਬਧ ਤੀਜੀ-ਧਿਰ ਦੇ ਸਰੋਤਾਂ ਤੋਂ ਤੁਹਾਡੇ ਬਾਰੇ ਡੇਟਾ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦੇ ਹਾਂ:
										<ol>
											<li>ਯੂਕੇ ਇਲੈਕਟੋਰਲ ਰਜਿਸਟਰ</li>
											<li>USA ਲੇਬਰ ਸਟੈਟਿਸਟਿਕਸ</li>
										</ol>
									</li>
								</>
							)}
							{(locale == 'ur') && (
								<>
									<li>
										ہمیں درج ذیل عوامی طور پر دستیاب تیسرے فریق کے ذرائع سے آپ کے بارے میں ڈیٹا موصول ہو سکتا ہے:
										<ol>
											<li>برطانیہ کا انتخابی رجسٹر</li>
											<li>USA لیبر کے اعدادوشمار</li>
										</ol>
									</li>
								</>
							)}

						</ol>
					</p>
				</details>

				<details>
					<summary>{copy.Pages.About.PrivacyPolicy.sections.DataThatIsCollectedAutomatically.SectionTitle}</summary>
					<p>
						<h2>{copy.Pages.About.PrivacyPolicy.sections.DataThatIsCollectedAutomatically.SectionTitle}</h2>
						<ol>
							{(locale == 'en' || locale == '') && (
								<>
									<li>
										To the extent that you access the Website, we will collect your Data automatically, for example:
										<ol>
											<li>we automatically collect some information about your visit to the Website. This information helps us to make improvements to Website content and navigation, and includes your IP address, the date, times and frequency with which you access the Website and the way you use and interact with its content.</li>
											<li>we will collect your Data automatically via cookies, in line with the cookie settings on your browser. For more information about cookies, and how we use them on the Website, see the section below, headed "Cookies".</li>
										</ol>
									</li>
								</>
							)}
							{(locale == 'fr') && (
								<>
									<li>
										Dans la mesure où vous accédez au Site Web, nous collecterons automatiquement vos Données, par exemple:
										<ol>
											<li>nous collectons automatiquement certaines informations concernant votre visite sur le site Web. Ces informations nous aident à améliorer le contenu et la navigation du site Web et incluent votre adresse IP, la date, les heures et la fréquence avec lesquelles vous accédez au site Web ainsi que la façon dont vous utilisez et interagissez avec son contenu.</li>
											<li>nous collecterons vos données automatiquement via des cookies, conformément aux paramètres de cookies de votre navigateur. Pour plus d'informations sur les cookies et la manière dont nous les utilisons sur le site Web, consultez la section ci-dessous intitulée "Cookies".</li>
										</ol>
									</li>
								</>
							)}
							{(locale == 'pa') && (
								<>
									<li>
										ਜਿਸ ਹੱਦ ਤੱਕ ਤੁਸੀਂ ਵੈੱਬਸਾਈਟ ਤੱਕ ਪਹੁੰਚ ਕਰਦੇ ਹੋ, ਅਸੀਂ ਤੁਹਾਡੇ ਡੇਟਾ ਨੂੰ ਆਪਣੇ ਆਪ ਇਕੱਠਾ ਕਰਾਂਗੇ, ਉਦਾਹਰਨ ਲਈ:
										<ol>
											<li>ਅਸੀਂ ਵੈੱਬਸਾਈਟ 'ਤੇ ਤੁਹਾਡੀ ਫੇਰੀ ਬਾਰੇ ਕੁਝ ਜਾਣਕਾਰੀ ਆਪਣੇ ਆਪ ਇਕੱਠੀ ਕਰਦੇ ਹਾਂ। ਇਹ ਜਾਣਕਾਰੀ ਵੈੱਬਸਾਈਟ ਸਮੱਗਰੀ ਅਤੇ ਨੈਵੀਗੇਸ਼ਨ ਵਿੱਚ ਸੁਧਾਰ ਕਰਨ ਵਿੱਚ ਸਾਡੀ ਮਦਦ ਕਰਦੀ ਹੈ, ਅਤੇ ਇਸ ਵਿੱਚ ਤੁਹਾਡਾ IP ਪਤਾ, ਮਿਤੀ, ਸਮਾਂ ਅਤੇ ਬਾਰੰਬਾਰਤਾ ਸ਼ਾਮਲ ਹੈ ਜਿਸ ਨਾਲ ਤੁਸੀਂ ਵੈੱਬਸਾਈਟ ਤੱਕ ਪਹੁੰਚ ਕਰਦੇ ਹੋ ਅਤੇ ਤੁਹਾਡੇ ਦੁਆਰਾ ਇਸਦੀ ਸਮੱਗਰੀ ਨੂੰ ਵਰਤਣ ਅਤੇ ਇੰਟਰੈਕਟ ਕਰਨ ਦਾ ਤਰੀਕਾ ਸ਼ਾਮਲ ਹੈ।</li>
											<li>ਅਸੀਂ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ 'ਤੇ ਕੂਕੀ ਸੈਟਿੰਗਾਂ ਦੇ ਅਨੁਸਾਰ, ਕੂਕੀਜ਼ ਰਾਹੀਂ ਤੁਹਾਡੇ ਡੇਟਾ ਨੂੰ ਆਪਣੇ ਆਪ ਇਕੱਠਾ ਕਰਾਂਗੇ। ਕੂਕੀਜ਼ ਬਾਰੇ ਹੋਰ ਜਾਣਕਾਰੀ ਲਈ, ਅਤੇ ਅਸੀਂ ਉਹਨਾਂ ਨੂੰ ਵੈੱਬਸਾਈਟ 'ਤੇ ਕਿਵੇਂ ਵਰਤਦੇ ਹਾਂ, ਹੇਠਾਂ ਦਿੱਤੇ ਭਾਗ ਨੂੰ ਵੇਖੋ, ਸਿਰਲੇਖ "ਕੂਕੀਜ਼"।</li>
										</ol>
									</li>
								</>
							)}
							{(locale == 'ur') && (
								<>
									<li>
										جس حد تک آپ ویب سائٹ تک رسائی حاصل کریں گے، ہم آپ کا ڈیٹا خود بخود اکٹھا کریں گے، مثال کے طور پر:
										<ol>
											<li>ہم ویب سائٹ پر آپ کے وزٹ کے بارے میں کچھ معلومات خود بخود جمع کرتے ہیں۔ یہ معلومات ویب سائٹ کے مواد اور نیویگیشن میں بہتری لانے میں ہماری مدد کرتی ہے، اور اس میں آپ کا IP ایڈریس، وہ تاریخ، اوقات اور فریکوئنسی شامل ہے جس کے ساتھ آپ ویب سائٹ تک رسائی حاصل کرتے ہیں اور جس طرح سے آپ اس کے مواد کے ساتھ استعمال اور تعامل کرتے ہیں۔</li>
											<li>ہم آپ کا ڈیٹا خود بخود کوکیز کے ذریعے جمع کریں گے، آپ کے براؤزر پر موجود کوکی کی ترتیبات کے مطابق۔ کوکیز کے بارے میں مزید معلومات کے لیے، اور ہم انہیں ویب سائٹ پر کیسے استعمال کرتے ہیں، ذیل میں "کوکیز" کے عنوان سے سیکشن دیکھیں۔</li>
										</ol>
									</li>
								</>
							)}
						</ol>
					</p>
				</details>

				<details>
					<summary>{copy.Pages.About.PrivacyPolicy.sections.OurUseOfData.SectionTitle}</summary>
					<p>
						<h2>{copy.Pages.About.PrivacyPolicy.sections.OurUseOfData.SectionTitle}</h2>
						<ol>
							{(locale == 'en' || locale == '') && (
								<>
									<li>
										Any or all of the above Data may be required by us from time to time in order to provide you with the best possible service and experience when using our Website. Specifically, Data may be used by us for the following reasons:
										<ol>
											<li>internal record keeping;</li>
											<li>improvement of our products / services;</li>
										</ol>
										<strong>in each case, in accordance with this Privacy Policy.</strong>
									</li>
									<li>We may use your Data for the above purposes if we deem it necessary to do so for our legitimate interests. If you are not satisfied with this, you have the right to object in certain circumstances (see the section headed "Your rights" below).</li>
									<li>When you register with us and set up an account to receive our services, the legal basis for this processing is the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract.</li>
								</>
							)}
							{(locale == 'fr') && (
								<>
									<li>
										Tout ou partie des données ci-dessus peuvent nous être demandées de temps à autre afin de vous fournir le meilleur service et la meilleure expérience possible lors de l'utilisation de notre site Web. Plus précisément, nous pouvons utiliser les données pour les raisons suivantes:
										<ol>
											<li>tenue de registres internes;</li>
											<li>amélioration de nos produits/services;</li>
										</ol>
										<strong>dans chaque cas, conformément à la présente Politique de confidentialité.</strong>
									</li>
									<li>Nous pouvons utiliser vos données aux fins ci-dessus si nous estimons que cela est nécessaire pour nos intérêts légitimes. Si cela ne vous satisfait pas, vous avez le droit de vous y opposer dans certaines circonstances (voir la section intitulée "Vos droits" ci-dessous).</li>
									<li>Lorsque vous vous inscrivez chez nous et créez un compte pour bénéficier de nos services, la base juridique de ce traitement est l'exécution d'un contrat entre vous et nous et/ou la prise de mesures, à votre demande, pour conclure un tel contrat. .</li>
								</>
							)}
							{(locale == 'pa') && (
								<>
									<li>
										ਸਾਡੀ ਵੈੱਬਸਾਈਟ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਸਮੇਂ ਤੁਹਾਨੂੰ ਸਭ ਤੋਂ ਵਧੀਆ ਸੰਭਵ ਸੇਵਾ ਅਤੇ ਅਨੁਭਵ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਸਾਡੇ ਦੁਆਰਾ ਸਮੇਂ-ਸਮੇਂ 'ਤੇ ਉਪਰੋਕਤ ਕੋਈ ਵੀ ਜਾਂ ਸਾਰਾ ਡਾਟਾ ਲੋੜੀਂਦਾ ਹੋ ਸਕਦਾ ਹੈ। ਖਾਸ ਤੌਰ 'ਤੇ, ਸਾਡੇ ਦੁਆਰਾ ਡੇਟਾ ਦੀ ਵਰਤੋਂ ਹੇਠਾਂ ਦਿੱਤੇ ਕਾਰਨਾਂ ਕਰਕੇ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ:
										<ol>
											<li>ਅੰਦਰੂਨੀ ਰਿਕਾਰਡ ਰੱਖਣਾ;</li>
											<li>ਸਾਡੇ ਉਤਪਾਦਾਂ/ਸੇਵਾਵਾਂ ਵਿੱਚ ਸੁਧਾਰ;</li>
										</ol>
										<strong>ਹਰੇਕ ਮਾਮਲੇ ਵਿੱਚ, ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਦੇ ਅਨੁਸਾਰ।</strong>
									</li>
									<li>ਜੇ ਅਸੀਂ ਆਪਣੇ ਜਾਇਜ਼ ਹਿੱਤਾਂ ਲਈ ਅਜਿਹਾ ਕਰਨਾ ਜ਼ਰੂਰੀ ਸਮਝਦੇ ਹਾਂ ਤਾਂ ਅਸੀਂ ਉਪਰੋਕਤ ਉਦੇਸ਼ਾਂ ਲਈ ਤੁਹਾਡੇ ਡੇਟਾ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹਾਂ। ਜੇਕਰ ਤੁਸੀਂ ਇਸ ਤੋਂ ਸੰਤੁਸ਼ਟ ਨਹੀਂ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ ਕੁਝ ਸਥਿਤੀਆਂ ਵਿੱਚ ਇਤਰਾਜ਼ ਕਰਨ ਦਾ ਅਧਿਕਾਰ ਹੈ (ਹੇਠਾਂ "ਤੁਹਾਡੇ ਅਧਿਕਾਰ" ਸਿਰਲੇਖ ਵਾਲਾ ਭਾਗ ਦੇਖੋ)।</li>
									<li>ਜਦੋਂ ਤੁਸੀਂ ਸਾਡੇ ਨਾਲ ਰਜਿਸਟਰ ਕਰਦੇ ਹੋ ਅਤੇ ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਇੱਕ ਖਾਤਾ ਸਥਾਪਤ ਕਰਦੇ ਹੋ, ਤਾਂ ਇਸ ਪ੍ਰਕਿਰਿਆ ਦਾ ਕਾਨੂੰਨੀ ਆਧਾਰ ਤੁਹਾਡੇ ਅਤੇ ਸਾਡੇ ਵਿਚਕਾਰ ਇੱਕ ਇਕਰਾਰਨਾਮੇ ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ ਹੈ ਅਤੇ/ਜਾਂ ਤੁਹਾਡੀ ਬੇਨਤੀ 'ਤੇ, ਅਜਿਹੇ ਇਕਰਾਰਨਾਮੇ ਵਿੱਚ ਦਾਖਲ ਹੋਣ ਲਈ ਕਦਮ ਚੁੱਕਣਾ ਹੈ। .</li>
								</>
							)}
							{(locale == 'ur') && (
								<>
									<li>
										ہماری ویب سائٹ کا استعمال کرتے وقت آپ کو بہترین ممکنہ سروس اور تجربہ فراہم کرنے کے لیے ہمیں وقتاً فوقتاً مذکورہ بالا ڈیٹا میں سے کوئی بھی یا تمام کی ضرورت پڑ سکتی ہے۔ خاص طور پر، ڈیٹا ہمارے ذریعہ درج ذیل وجوہات کی بناء پر استعمال کیا جا سکتا ہے:
										<ol>
											<li>اندرونی ریکارڈ رکھنا؛</li>
											<li>ہماری مصنوعات / خدمات کی بہتری؛</li>
										</ol>
										<strong>ہر معاملے میں، اس رازداری کی پالیسی کے مطابق۔</strong>
									</li>
									<li>اگر ہم اپنے جائز مفادات کے لیے ایسا کرنا ضروری سمجھیں تو ہم آپ کا ڈیٹا مندرجہ بالا مقاصد کے لیے استعمال کر سکتے ہیں۔ اگر آپ اس سے مطمئن نہیں ہیں، تو آپ کو بعض حالات میں اعتراض کرنے کا حق ہے (نیچے "آپ کے حقوق" کے عنوان سے سیکشن دیکھیں)۔</li>
									<li>جب آپ ہمارے ساتھ رجسٹر ہوتے ہیں اور ہماری خدمات حاصل کرنے کے لیے ایک اکاؤنٹ بناتے ہیں، تو اس پروسیسنگ کی قانونی بنیاد آپ کے اور ہمارے درمیان ایک معاہدے کی کارکردگی ہے اور/یا آپ کی درخواست پر، اس طرح کے معاہدے میں داخل ہونے کے لیے اقدامات کرنا ہے۔ .</li>
								</>
							)}
						</ol>
					</p>
				</details>

				<details>
					<summary>{copy.Pages.About.PrivacyPolicy.sections.KeepingDataSecure.SectionTitle}</summary>
					<p>
						<h2>{copy.Pages.About.PrivacyPolicy.sections.KeepingDataSecure.SectionTitle}</h2>
						<ol>
							{(locale == 'en' || locale == '') && (
								<>
									<li>
										We will use technical and organizational measures to safeguard your Data, for example:
										<ol>
											<li>access to your account is controlled by a password and a user name that is unique to you.</li>
											<li>we store your Data on secure servers.</li>
											<li>you can view all the Data we have on your account at any time.</li>
											<li>you can delete all of the Data we have on your account and close the account.</li>
											<li>you can delete some of the Data we have about your account when technically possible.</li>
										</ol>
									</li>
									<li>We are certified to ISO 27001. This family of standards helps us manage your Data and keep it secure.</li>
									<li>Technical and organizational measures include measures to deal with any suspected data breach. If you suspect any misuse, loss or unauthorized access to your Data, please let us know immediately by contacting us via this e-mail address: <strong>{process.env.NEXT_PUBLIC_PRIVACY_POLICY_CONTACT!}</strong>.</li>
									<li>If you want detailed information from Get Safe Online on how to protect your information and your computers and devices against fraud, identity theft, viruses, and many other online problems, please visit www.getsafeonline.org. Get Safe Online is supported by HM Government and leading businesses.</li>
								</>
							)}
							{(locale == 'fr') && (
								<>
									<li>
										Nous utiliserons des mesures techniques et organisationnelles pour protéger vos données, par exemple:
										<ol>
											<li>l'accès à votre compte est contrôlé par un mot de passe et un nom d'utilisateur qui vous sont propres.</li>
											<li>nous stockons vos données sur des serveurs sécurisés.</li>
											<li>vous pouvez consulter toutes les données que nous avons sur votre compte à tout moment.</li>
											<li>vous pouvez supprimer toutes les données que nous avons sur votre compte et fermer le compte.</li>
											<li>vous pouvez supprimer certaines des données dont nous disposons sur votre compte lorsque cela est techniquement possible.</li>
										</ol>
									</li>
									<li>Nous sommes certifiés ISO 27001. Cette famille de normes nous aide à gérer vos données et à les sécuriser.</li>
									<li>Les mesures techniques et organisationnelles incluent des mesures permettant de faire face à toute suspicion de violation de données. Si vous soupçonnez une utilisation abusive, une perte ou un accès non autorisé à vos données, veuillez nous en informer immédiatement en nous contactant via cette adresse e-mail: <strong>{process.env.NEXT_PUBLIC_PRIVACY_POLICY_CONTACT!}</strong>.</li>
									<li>Si vous souhaitez obtenir des informations détaillées de Soyez en sécurité en ligne sur la façon de protéger vos informations ainsi que vos ordinateurs et appareils contre la fraude, le vol d'identité, les virus et bien d'autres problèmes en ligne, veuillez visiter www.getsafeonline.org. Get Safe Online est soutenu par le gouvernement de Sa Majesté et des entreprises de premier plan.</li>
								</>
							)}
							{(locale == 'pa') && (
								<>
									<li>
										ਅਸੀਂ ਤੁਹਾਡੇ ਡੇਟਾ ਦੀ ਸੁਰੱਖਿਆ ਲਈ ਤਕਨੀਕੀ ਅਤੇ ਸੰਗਠਨਾਤਮਕ ਉਪਾਵਾਂ ਦੀ ਵਰਤੋਂ ਕਰਾਂਗੇ, ਉਦਾਹਰਨ ਲਈ:
										<ol>
											<li>ਤੁਹਾਡੇ ਖਾਤੇ ਤੱਕ ਪਹੁੰਚ ਇੱਕ ਪਾਸਵਰਡ ਅਤੇ ਇੱਕ ਉਪਭੋਗਤਾ ਨਾਮ ਦੁਆਰਾ ਨਿਯੰਤਰਿਤ ਕੀਤੀ ਜਾਂਦੀ ਹੈ ਜੋ ਤੁਹਾਡੇ ਲਈ ਵਿਲੱਖਣ ਹੈ।</li>
											<li>ਅਸੀਂ ਤੁਹਾਡਾ ਡੇਟਾ ਸੁਰੱਖਿਅਤ ਸਰਵਰਾਂ 'ਤੇ ਸਟੋਰ ਕਰਦੇ ਹਾਂ।</li>
											<li>ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਤੁਹਾਡੇ ਖਾਤੇ ਵਿੱਚ ਸਾਡੇ ਕੋਲ ਮੌਜੂਦ ਸਾਰਾ ਡਾਟਾ ਦੇਖ ਸਕਦੇ ਹੋ।</li>
											<li>ਤੁਸੀਂ ਸਾਡੇ ਖਾਤੇ ਵਿੱਚ ਮੌਜੂਦ ਸਾਰਾ ਡਾਟਾ ਮਿਟਾ ਸਕਦੇ ਹੋ ਅਤੇ ਖਾਤਾ ਬੰਦ ਕਰ ਸਕਦੇ ਹੋ।</li>
											<li>ਤੁਸੀਂ ਤਕਨੀਕੀ ਤੌਰ 'ਤੇ ਸੰਭਵ ਹੋਣ 'ਤੇ ਤੁਹਾਡੇ ਖਾਤੇ ਬਾਰੇ ਸਾਡੇ ਕੋਲ ਮੌਜੂਦ ਕੁਝ ਡੇਟਾ ਨੂੰ ਮਿਟਾ ਸਕਦੇ ਹੋ।</li>
										</ol>
									</li>
									<li>ਅਸੀਂ ISO 27001 ਲਈ ਪ੍ਰਮਾਣਿਤ ਹਾਂ। ਮਿਆਰਾਂ ਦਾ ਇਹ ਪਰਿਵਾਰ ਤੁਹਾਡੇ ਡੇਟਾ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰਨ ਅਤੇ ਇਸਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਣ ਵਿੱਚ ਸਾਡੀ ਮਦਦ ਕਰਦਾ ਹੈ।</li>
									<li>ਤਕਨੀਕੀ ਅਤੇ ਸੰਗਠਨਾਤਮਕ ਉਪਾਵਾਂ ਵਿੱਚ ਕਿਸੇ ਵੀ ਸ਼ੱਕੀ ਡੇਟਾ ਉਲੰਘਣਾ ਨਾਲ ਨਜਿੱਠਣ ਲਈ ਉਪਾਅ ਸ਼ਾਮਲ ਹਨ। ਜੇਕਰ ਤੁਹਾਨੂੰ ਆਪਣੇ ਡੇਟਾ ਦੀ ਦੁਰਵਰਤੋਂ, ਨੁਕਸਾਨ ਜਾਂ ਅਣਅਧਿਕਾਰਤ ਪਹੁੰਚ ਦਾ ਸ਼ੱਕ ਹੈ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਇਸ ਈ-ਮੇਲ ਪਤੇ ਰਾਹੀਂ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਕੇ ਸਾਨੂੰ ਤੁਰੰਤ ਦੱਸੋ: <strong>{process.env.NEXT_PUBLIC_PRIVACY_POLICY_CONTACT!}</strong>।</li>
									<li>ਜੇਕਰ ਤੁਸੀਂ ਆਪਣੀ ਜਾਣਕਾਰੀ ਅਤੇ ਤੁਹਾਡੇ ਕੰਪਿਊਟਰਾਂ ਅਤੇ ਡਿਵਾਈਸਾਂ ਨੂੰ ਧੋਖਾਧੜੀ, ਪਛਾਣ ਦੀ ਚੋਰੀ, ਵਾਇਰਸਾਂ ਅਤੇ ਹੋਰ ਬਹੁਤ ਸਾਰੀਆਂ ਔਨਲਾਈਨ ਸਮੱਸਿਆਵਾਂ ਤੋਂ ਬਚਾਉਣ ਬਾਰੇ ਸੁਰੱਖਿਅਤ ਔਨਲਾਈਨ ਪ੍ਰਾਪਤ ਕਰੋ ਤੋਂ ਵਿਸਤ੍ਰਿਤ ਜਾਣਕਾਰੀ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ www.getsafeonline.org 'ਤੇ ਜਾਓ। ਸੁਰੱਖਿਅਤ ਔਨਲਾਈਨ ਪ੍ਰਾਪਤ ਕਰੋ ਨੂੰ HM ਸਰਕਾਰ ਅਤੇ ਪ੍ਰਮੁੱਖ ਕਾਰੋਬਾਰਾਂ ਦੁਆਰਾ ਸਮਰਥਨ ਪ੍ਰਾਪਤ ਹੈ।</li>
								</>
							)}
							{(locale == 'ur') && (
								<>
									<li>
										ہم آپ کے ڈیٹا کی حفاظت کے لیے تکنیکی اور تنظیمی اقدامات استعمال کریں گے، مثال کے طور پر:
										<ol>
											<li>آپ کے اکاؤنٹ تک رسائی کو پاس ورڈ اور صارف نام کے ذریعے کنٹرول کیا جاتا ہے جو آپ کے لیے منفرد ہے۔</li>
											<li>ہم آپ کا ڈیٹا محفوظ سرورز پر اسٹور کرتے ہیں۔</li>
											<li>آپ کسی بھی وقت اپنے اکاؤنٹ میں ہمارے پاس موجود تمام ڈیٹا کو دیکھ سکتے ہیں۔</li>
											<li>آپ اپنے اکاؤنٹ پر ہمارے پاس موجود تمام ڈیٹا کو حذف کر سکتے ہیں اور اکاؤنٹ بند کر سکتے ہیں۔</li>
											<li>تکنیکی طور پر ممکن ہونے پر آپ اپنے اکاؤنٹ کے بارے میں ہمارے پاس موجود کچھ ڈیٹا کو حذف کر سکتے ہیں۔</li>
										</ol>
									</li>
									<li>ہم ISO 27001 سے تصدیق شدہ ہیں۔ معیارات کا یہ خاندان آپ کے ڈیٹا کو منظم کرنے اور اسے محفوظ رکھنے میں ہماری مدد کرتا ہے۔</li>
									<li>تکنیکی اور تنظیمی اقدامات میں کسی بھی مشتبہ ڈیٹا کی خلاف ورزی سے نمٹنے کے اقدامات شامل ہیں۔ اگر آپ کو اپنے ڈیٹا تک کسی غلط استعمال، نقصان یا غیر مجاز رسائی کا شبہ ہے، تو براہ کرم اس ای میل ایڈریس کے ذریعے ہم سے رابطہ کرکے ہمیں فوری طور پر بتائیں: <strong>{process.env.NEXT_PUBLIC_PRIVACY_POLICY_CONTACT!}</strong>۔</li>
									<li>اگر آپ گیٹ سیف آن لائن سے اپنی معلومات اور اپنے کمپیوٹرز اور آلات کو دھوکہ دہی، شناخت کی چوری، وائرس اور دیگر بہت سے آن لائن مسائل سے بچانے کے بارے میں تفصیلی معلومات چاہتے ہیں، تو براہ کرم www.getsafeonline.org پر جائیں۔ گیٹ سیف آن لائن کو HM حکومت اور سرکردہ کاروباری اداروں کی مدد حاصل ہے۔</li>
								</>
							)}
						</ol>
					</p>
				</details>

				<details>
					<summary>{copy.Pages.About.PrivacyPolicy.sections.DataRetention.SectionTitle}</summary>
					<p>
						<h2>{copy.Pages.About.PrivacyPolicy.sections.DataRetention.SectionTitle}</h2>
						<ol>
							{(locale == 'en' || locale == '') && (
								<>
									<li>Unless a longer retention period is required or permitted by law, we will only hold your Data on our systems for the period necessary to fulfill the purposes outlined in this Privacy Policy or until you request that the Data be deleted.</li>
									<li>Even if we delete your Data, it may persist on backup or archival media for legal, tax, or regulatory purposes.</li>
								</>
							)}
							{(locale == 'fr') && (
								<>
									<li>À moins qu'une période de conservation plus longue ne soit requise ou autorisée par la loi, nous conserverons vos données sur nos systèmes uniquement pendant la période nécessaire pour atteindre les objectifs décrits dans la présente politique de confidentialité ou jusqu'à ce que vous demandiez la suppression des données.</li >
									<li>Même si nous supprimons vos données, elles peuvent persister sur des supports de sauvegarde ou d'archivage à des fins juridiques, fiscales ou réglementaires.</li>
								</>
							)}
							{(locale == 'pa') && (
								<>
									<li>ਜਦੋਂ ਤੱਕ ਕਿ ਇੱਕ ਲੰਮੀ ਧਾਰਨ ਦੀ ਮਿਆਦ ਦੀ ਲੋੜ ਨਹੀਂ ਹੈ ਜਾਂ ਕਨੂੰਨ ਦੁਆਰਾ ਇਜਾਜ਼ਤ ਨਹੀਂ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ, ਅਸੀਂ ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਵਿੱਚ ਦਰਸਾਏ ਉਦੇਸ਼ਾਂ ਨੂੰ ਪੂਰਾ ਕਰਨ ਲਈ ਜਾਂ ਜਦੋਂ ਤੱਕ ਤੁਸੀਂ ਡੇਟਾ ਨੂੰ ਮਿਟਾਉਣ ਦੀ ਬੇਨਤੀ ਨਹੀਂ ਕਰਦੇ, ਉਦੋਂ ਤੱਕ ਅਸੀਂ ਆਪਣੇ ਸਿਸਟਮਾਂ 'ਤੇ ਤੁਹਾਡੇ ਡੇਟਾ ਨੂੰ ਸਿਰਫ਼ ਉਸ ਸਮੇਂ ਲਈ ਰੱਖਾਂਗੇ। </li>
									<li>ਭਾਵੇਂ ਅਸੀਂ ਤੁਹਾਡੇ ਡੇਟਾ ਨੂੰ ਮਿਟਾ ਦਿੰਦੇ ਹਾਂ, ਇਹ ਕਾਨੂੰਨੀ, ਟੈਕਸ, ਜਾਂ ਰੈਗੂਲੇਟਰੀ ਉਦੇਸ਼ਾਂ ਲਈ ਬੈਕਅੱਪ ਜਾਂ ਪੁਰਾਲੇਖ ਮੀਡੀਆ 'ਤੇ ਕਾਇਮ ਰਹਿ ਸਕਦਾ ਹੈ।</li>
								</>
							)}
							{(locale == 'ur') && (
								<>
									<li>جب تک کہ لمبے عرصے تک برقرار رکھنے کی مدت درکار نہ ہو یا قانون کے ذریعہ اس کی اجازت نہ ہو، ہم آپ کا ڈیٹا اپنے سسٹمز پر صرف اس وقت تک رکھیں گے جو اس رازداری کی پالیسی میں بیان کردہ مقاصد کو پورا کرنے کے لیے ضروری ہے یا جب تک آپ ڈیٹا کو حذف کرنے کی درخواست نہیں کرتے۔</li >
									<li>اگر ہم آپ کا ڈیٹا حذف کر دیں تو بھی یہ قانونی، ٹیکس، یا ریگولیٹری مقاصد کے لیے بیک اپ یا آرکائیو میڈیا پر برقرار رہ سکتا ہے۔</li>
								</>
							)}
						</ol>

					</p>
				</details>

				<details>
					<summary>{copy.Pages.About.PrivacyPolicy.sections.YourRights.SectionTitle}</summary>
					<p>
						<section>
							<h2>{copy.Pages.About.PrivacyPolicy.sections.YourRights.SectionTitle}</h2>
							{(locale == 'en' || locale == '') && (
								<ol>
									<li>
										You have the following rights in relation to your Data:
										<ol>
											<li><b>Right to access</b> - the right to request (i) copies of the information we hold about you at any time, or (ii) that we modify, update or delete such information. If we provide you with access to the information we hold about you, we will not charge you for this, unless your request is "manifestly unfounded or excessive." Where we are legally permitted to do so, we may refuse your request. If we refuse your request, we will tell you the reasons why.</li>
											<li><b>Right to correct</b> - the right to have your Data rectified if it is inaccurate or incomplete.</li>
											<li><b>Right to erase</b> - the right to request that we delete or remove your Data from our systems.</li>
											<li><b>Right to restrict our use of your Data</b> - the right to "block" us from using your Data or limit the way in which we can use it.</li>
											<li><b>Right to data portability</b> - the right to request that we move, copy or transfer your Data.</li>
											<li><b>Right to object</b> - the right to object to our use of your Data including where we use it for our legitimate interests.</li>
										</ol>
									</li>
									<li>To make enquiries, exercise any of your rights set out above, or withdraw your consent to the processing of your Data (where consent is our legal basis for processing your Data), please contact us via this e-mail address: <strong>{process.env.NEXT_PUBLIC_PRIVACY_POLICY_CONTACT!}</strong>.</li>
									<li>If you are not satisfied with the way a complaint you make in relation to your Data is handled by us, you may be able to refer your complaint to the relevant data protection authority. For the UK, this is the Information Commissioner's Office (ICO). The ICO's contact details can be found on their website at https://ico.org.uk/.</li>
									<li>It is important that the Data we hold about you is accurate and current. Please keep us informed if your Data changes during the period for which we hold it.</li>
								</ol>
							)}
							{(locale == 'fr') && (
								<ol>
									<li>
										Vous disposez des droits suivants concernant vos Données :
										<ol>
											<li><b>Droit d'accès</b>: le droit de demander (i) des copies des informations que nous détenons à votre sujet à tout moment, ou (ii) que nous modifiions, mettons à jour ou supprimions ces informations. Si nous vous donnons accès aux informations que nous détenons à votre sujet, nous ne vous facturerons pas cela, sauf si votre demande est "manifestement infondée ou excessive". Lorsque nous sommes légalement autorisés à le faire, nous pouvons refuser votre demande. Si nous refusons votre demande, nous vous en indiquerons les raisons.</li>
											<li><b>Droit de rectification</b>: le droit de faire rectifier vos données si elles sont inexactes ou incomplètes.</li>
											<li><b>Droit d'effacement</b>: le droit de demander que nous supprimions ou supprimions vos données de nos systèmes.</li>
											<li><b>Droit de restreindre notre utilisation de vos données</b>: le droit de nous "bloquer" l'utilisation de vos données ou de limiter la manière dont nous pouvons les utiliser.</li>
											<li><b>Droit à la portabilité des données</b>: le droit de demander que nous déplacions, copions ou transférions vos données.</li>
											<li><b>Droit d'opposition</b>: le droit de vous opposer à notre utilisation de vos données, y compris lorsque nous les utilisons pour nos intérêts légitimes.</li>
										</ol>
									</li>
									<li>Pour poser des questions, exercer l'un de vos droits énoncés ci-dessus ou retirer votre consentement au traitement de vos données (le consentement constituant notre base juridique pour le traitement de vos données), veuillez nous contacter via cette adresse e-mail: <strong>{process.env.NEXT_PUBLIC_PRIVACY_POLICY_CONTACT!}</strong>.</li>
									<li>Si vous n'êtes pas satisfait de la manière dont nous traitons une réclamation que vous déposez concernant vos données, vous pourrez peut-être transmettre votre réclamation à l'autorité de protection des données compétente. Pour le Royaume-Uni, il s'agit de l'Information Commissioner's Office (ICO). Les coordonnées de l'ICO peuvent être trouvées sur leur site Web à l'adresse https://ico.org.uk/.</li>
									<li>Il est important que les données que nous détenons à votre sujet soient exactes et à jour. Veuillez nous tenir informés si vos Données évoluent pendant la période pendant laquelle nous les détenons.</li>
								</ol>
							)}
							{(locale == 'pa') && (
								<ol>
									<li>
										ਤੁਹਾਡੇ ਕੋਲ ਤੁਹਾਡੇ ਡੇਟਾ ਦੇ ਸਬੰਧ ਵਿੱਚ ਹੇਠਾਂ ਦਿੱਤੇ ਅਧਿਕਾਰ ਹਨ:
										<ol>
											<li><b>ਪਹੁੰਚ ਕਰਨ ਦਾ ਅਧਿਕਾਰ</b> - ਬੇਨਤੀ ਕਰਨ ਦਾ ਅਧਿਕਾਰ (i) ਕਿਸੇ ਵੀ ਸਮੇਂ ਤੁਹਾਡੇ ਬਾਰੇ ਸਾਡੇ ਕੋਲ ਰੱਖੀ ਜਾਣਕਾਰੀ ਦੀਆਂ ਕਾਪੀਆਂ, ਜਾਂ (ii) ਜੋ ਅਸੀਂ ਅਜਿਹੀ ਜਾਣਕਾਰੀ ਨੂੰ ਸੰਸ਼ੋਧਿਤ, ਅੱਪਡੇਟ ਜਾਂ ਮਿਟਾਉਂਦੇ ਹਾਂ। ਜੇਕਰ ਅਸੀਂ ਤੁਹਾਨੂੰ ਉਸ ਜਾਣਕਾਰੀ ਤੱਕ ਪਹੁੰਚ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ ਜੋ ਸਾਡੇ ਕੋਲ ਤੁਹਾਡੇ ਬਾਰੇ ਹੈ, ਤਾਂ ਅਸੀਂ ਇਸ ਲਈ ਤੁਹਾਡੇ ਤੋਂ ਕੋਈ ਚਾਰਜ ਨਹੀਂ ਲਵਾਂਗੇ, ਜਦੋਂ ਤੱਕ ਤੁਹਾਡੀ ਬੇਨਤੀ "ਪ੍ਰਤੱਖ ਤੌਰ 'ਤੇ ਬੇਬੁਨਿਆਦ ਜਾਂ ਬਹੁਤ ਜ਼ਿਆਦਾ" ਨਾ ਹੋਵੇ। ਜਿੱਥੇ ਸਾਨੂੰ ਕਾਨੂੰਨੀ ਤੌਰ 'ਤੇ ਅਜਿਹਾ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਹੈ, ਅਸੀਂ ਤੁਹਾਡੀ ਬੇਨਤੀ ਨੂੰ ਅਸਵੀਕਾਰ ਕਰ ਸਕਦੇ ਹਾਂ। ਜੇਕਰ ਅਸੀਂ ਤੁਹਾਡੀ ਬੇਨਤੀ ਨੂੰ ਇਨਕਾਰ ਕਰਦੇ ਹਾਂ, ਤਾਂ ਅਸੀਂ ਤੁਹਾਨੂੰ ਇਸਦੇ ਕਾਰਨ ਦੱਸਾਂਗੇ।</li>
											<li><b>ਸਹੀ ਕਰਨ ਦਾ ਅਧਿਕਾਰ</b> - ਤੁਹਾਡੇ ਡੇਟਾ ਨੂੰ ਠੀਕ ਕਰਨ ਦਾ ਅਧਿਕਾਰ ਜੇਕਰ ਇਹ ਗਲਤ ਜਾਂ ਅਧੂਰਾ ਹੈ।</li>
											<li><b>ਮਿਟਾਉਣ ਦਾ ਅਧਿਕਾਰ</b> - ਇਹ ਬੇਨਤੀ ਕਰਨ ਦਾ ਅਧਿਕਾਰ ਹੈ ਕਿ ਅਸੀਂ ਆਪਣੇ ਸਿਸਟਮਾਂ ਤੋਂ ਤੁਹਾਡਾ ਡੇਟਾ ਮਿਟਾ ਦੇਈਏ ਜਾਂ ਹਟਾ ਦੇਈਏ।</li>
											<li><b>ਤੁਹਾਡੇ ਡੇਟਾ ਦੀ ਸਾਡੀ ਵਰਤੋਂ ਨੂੰ ਸੀਮਤ ਕਰਨ ਦਾ ਅਧਿਕਾਰ</b> - ਸਾਨੂੰ ਤੁਹਾਡੇ ਡੇਟਾ ਦੀ ਵਰਤੋਂ ਕਰਨ ਤੋਂ "ਬਲੌਕ" ਕਰਨ ਦਾ ਅਧਿਕਾਰ ਜਾਂ ਅਸੀਂ ਇਸਦੀ ਵਰਤੋਂ ਕਰਨ ਦੇ ਤਰੀਕੇ ਨੂੰ ਸੀਮਤ ਕਰਨ ਦਾ ਅਧਿਕਾਰ।</li>
											<li><b>ਡਾਟਾ ਪੋਰਟੇਬਿਲਟੀ ਦਾ ਅਧਿਕਾਰ</b> - ਇਹ ਬੇਨਤੀ ਕਰਨ ਦਾ ਅਧਿਕਾਰ ਹੈ ਕਿ ਅਸੀਂ ਤੁਹਾਡੇ ਡੇਟਾ ਨੂੰ ਤਬਦੀਲ, ਕਾਪੀ ਜਾਂ ਟ੍ਰਾਂਸਫਰ ਕਰੀਏ।</li>
											<li><b>ਇਤਰਾਜ਼ ਕਰਨ ਦਾ ਅਧਿਕਾਰ</b> - ਤੁਹਾਡੇ ਡੇਟਾ ਦੀ ਸਾਡੀ ਵਰਤੋਂ 'ਤੇ ਇਤਰਾਜ਼ ਕਰਨ ਦਾ ਅਧਿਕਾਰ ਜਿਸ ਵਿੱਚ ਅਸੀਂ ਇਸਨੂੰ ਆਪਣੇ ਜਾਇਜ਼ ਹਿੱਤਾਂ ਲਈ ਵਰਤਦੇ ਹਾਂ।</li>
										</ol>
									</li>
									<li>ਪੁੱਛਗਿੱਛ ਕਰਨ ਲਈ, ਉੱਪਰ ਦੱਸੇ ਗਏ ਆਪਣੇ ਕਿਸੇ ਵੀ ਅਧਿਕਾਰ ਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ, ਜਾਂ ਤੁਹਾਡੇ ਡੇਟਾ ਦੀ ਪ੍ਰਕਿਰਿਆ ਲਈ ਆਪਣੀ ਸਹਿਮਤੀ ਵਾਪਸ ਲੈਣ ਲਈ (ਜਿੱਥੇ ਸਹਿਮਤੀ ਤੁਹਾਡੇ ਡੇਟਾ ਦੀ ਪ੍ਰਕਿਰਿਆ ਲਈ ਸਾਡਾ ਕਾਨੂੰਨੀ ਆਧਾਰ ਹੈ), ਕਿਰਪਾ ਕਰਕੇ ਇਸ ਈ-ਮੇਲ ਪਤੇ ਰਾਹੀਂ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ: <strong>{process.env.NEXT_PUBLIC_PRIVACY_POLICY_CONTACT!}</strong>।</li>
									<li>ਜੇਕਰ ਤੁਸੀਂ ਸਾਡੇ ਦੁਆਰਾ ਤੁਹਾਡੇ ਡੇਟਾ ਦੇ ਸਬੰਧ ਵਿੱਚ ਕੀਤੀ ਸ਼ਿਕਾਇਤ ਦੇ ਤਰੀਕੇ ਨਾਲ ਸੰਤੁਸ਼ਟ ਨਹੀਂ ਹੋ, ਤਾਂ ਤੁਸੀਂ ਆਪਣੀ ਸ਼ਿਕਾਇਤ ਨੂੰ ਸਬੰਧਤ ਡੇਟਾ ਸੁਰੱਖਿਆ ਅਥਾਰਟੀ ਕੋਲ ਭੇਜਣ ਦੇ ਯੋਗ ਹੋ ਸਕਦੇ ਹੋ। ਯੂਕੇ ਲਈ, ਇਹ ਸੂਚਨਾ ਕਮਿਸ਼ਨਰ ਦਫ਼ਤਰ (ICO) ਹੈ। ICO ਦੇ ਸੰਪਰਕ ਵੇਰਵੇ ਉਹਨਾਂ ਦੀ ਵੈੱਬਸਾਈਟ https://ico.org.uk/ 'ਤੇ ਮਿਲ ਸਕਦੇ ਹਨ।</li>
									<li>ਇਹ ਮਹੱਤਵਪੂਰਨ ਹੈ ਕਿ ਤੁਹਾਡੇ ਬਾਰੇ ਸਾਡੇ ਕੋਲ ਮੌਜੂਦ ਡੇਟਾ ਸਹੀ ਅਤੇ ਮੌਜੂਦਾ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਸਾਨੂੰ ਸੂਚਿਤ ਕਰੋ ਜੇਕਰ ਤੁਹਾਡਾ ਡੇਟਾ ਉਸ ਸਮੇਂ ਦੌਰਾਨ ਬਦਲਦਾ ਹੈ ਜਿਸ ਲਈ ਅਸੀਂ ਇਸਨੂੰ ਰੱਖਦੇ ਹਾਂ।</li>
								</ol>
							)}
							{(locale == 'ur') && (
								<ol>
									<li>
										آپ کو اپنے ڈیٹا کے سلسلے میں درج ذیل حقوق حاصل ہیں:
										<ol>
											<li><b>رسائی کا حق</b> - درخواست کرنے کا حق (i) کسی بھی وقت آپ کے بارے میں ہمارے پاس موجود معلومات کی کاپیاں، یا (ii) ہم ایسی معلومات میں ترمیم، اپ ڈیٹ یا حذف کرتے ہیں۔ اگر ہم آپ کو ان معلومات تک رسائی فراہم کرتے ہیں جو ہمارے پاس آپ کے بارے میں ہے، تو ہم آپ سے اس کے لیے کوئی معاوضہ نہیں لیں گے، جب تک کہ آپ کی درخواست "ظاہر طور پر بے بنیاد یا حد سے زیادہ" نہ ہو۔ جہاں ہمیں قانونی طور پر ایسا کرنے کی اجازت ہے، ہم آپ کی درخواست کو مسترد کر سکتے ہیں۔ اگر ہم آپ کی درخواست سے انکار کرتے ہیں، تو ہم آپ کو اس کی وجوہات بتائیں گے۔</li>
											<li><b>صحیح کرنے کا حق</b> - اگر آپ کا ڈیٹا غلط یا نامکمل ہے تو اسے درست کرنے کا حق۔</li>
											<li><b>مٹانے کا حق</b> - یہ درخواست کرنے کا حق کہ ہم آپ کے ڈیٹا کو اپنے سسٹم سے حذف یا ہٹا دیں۔</li>
											<li><b>اپنے ڈیٹا کے ہمارے استعمال کو محدود کرنے کا حق</b> - ہمیں اپنا ڈیٹا استعمال کرنے سے "بلاک" کرنے کا حق یا اس طریقے کو محدود کرنے کا حق جس میں ہم اسے استعمال کر سکتے ہیں۔</li>
											<li><b>ڈیٹا پورٹیبلٹی کا حق</b> - یہ درخواست کرنے کا حق کہ ہم آپ کا ڈیٹا منتقل، کاپی یا منتقل کریں۔</li>
											<li><b> اعتراض کرنے کا حق</b> - آپ کے ڈیٹا کے ہمارے استعمال پر اعتراض کرنے کا حق بشمول ہم اسے اپنے جائز مفادات کے لیے کہاں استعمال کرتے ہیں۔</li>
										</ol>
									</li>
									<li>پوچھ گچھ کرنے کے لیے، اوپر بیان کیے گئے اپنے حقوق میں سے کسی کو استعمال کرنے، یا اپنے ڈیٹا کی پروسیسنگ کے لیے اپنی رضامندی واپس لینے کے لیے (جہاں رضامندی آپ کے ڈیٹا پر کارروائی کرنے کی ہماری قانونی بنیاد ہے)، براہ کرم ہم سے اس ای میل ایڈریس کے ذریعے رابطہ کریں: <strong>{process.env.NEXT_PUBLIC_PRIVACY_POLICY_CONTACT!}</strong>۔</li>
									<li>برطانیہ کے لیے، یہ انفارمیشن کمشنر آفس (ICO) ہے۔ ICO کے رابطے کی تفصیلات ان کی ویب سائٹ https://ico.org.uk/ پر دیکھی جا سکتی ہیں۔</li>
									<li>یہ ضروری ہے کہ ہم آپ کے بارے میں جو ڈیٹا رکھتے ہیں وہ درست اور موجودہ ہو۔ براہ کرم ہمیں مطلع رکھیں اگر آپ کا ڈیٹا اس مدت کے دوران تبدیل ہوتا ہے جس کے لیے ہم اسے رکھتے ہیں۔</li>
								</ol>
							)}
						</section>
					</p>
				</details>

				<details>
					<summary>{copy.Pages.About.PrivacyPolicy.sections.LinksToOtherWebsitesAndMobileApps.SectionTitle}</summary>
					<p>
						<h2>{copy.Pages.About.PrivacyPolicy.sections.LinksToOtherWebsitesAndMobileApps.SectionTitle}</h2>
						{(locale == 'en' || locale == '') && (
							<ol>
								<li>This Website may, from time to time, provide links to other websites (and/or Mobile Apps). We have no control over such websites (and/or Mobile Apps) and are not responsible for the contents of these websites(and/or Mobile Apps). This Privacy Policy does not extend to your use of such websites (and/or Mobile Apps). You are advised to read the Privacy Policy or statement of other websites (and/or Mobile Apps) prior to using them.</li>
							</ol>
						)}
						{(locale == 'fr') && (
							<ol>
								<li>Ce site Web peut, de temps à autre, fournir des liens vers d'autres sites Web (et/ou applications mobiles). Nous n'avons aucun contrôle sur ces sites Web (et/ou applications mobiles) et ne sommes pas responsables du contenu de ces sites Web (et/ou applications mobiles). Cette politique de confidentialité ne s'étend pas à votre utilisation de ces sites Web (et/ou applications mobiles). Il vous est conseillé de lire la politique de confidentialité ou la déclaration d'autres sites Web (et/ou applications mobiles) avant de les utiliser.</li>
							</ol>
						)}
						{(locale == 'pa') && (
							<ol>
								<li>ਇਹ ਵੈੱਬਸਾਈਟ, ਸਮੇਂ-ਸਮੇਂ 'ਤੇ, ਹੋਰ ਵੈੱਬਸਾਈਟਾਂ (ਅਤੇ/ਜਾਂ ਮੋਬਾਈਲ ਐਪਾਂ) ਦੇ ਲਿੰਕ ਪ੍ਰਦਾਨ ਕਰ ਸਕਦੀ ਹੈ। ਸਾਡਾ ਅਜਿਹੀਆਂ ਵੈੱਬਸਾਈਟਾਂ (ਅਤੇ/ਜਾਂ ਮੋਬਾਈਲ ਐਪਾਂ) 'ਤੇ ਕੋਈ ਨਿਯੰਤਰਣ ਨਹੀਂ ਹੈ ਅਤੇ ਅਸੀਂ ਇਹਨਾਂ ਵੈੱਬਸਾਈਟਾਂ (ਅਤੇ/ਜਾਂ ਮੋਬਾਈਲ ਐਪਾਂ) ਦੀ ਸਮੱਗਰੀ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹਾਂ। ਇਹ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਅਜਿਹੀਆਂ ਵੈੱਬਸਾਈਟਾਂ (ਅਤੇ/ਜਾਂ ਮੋਬਾਈਲ ਐਪਾਂ) ਦੀ ਤੁਹਾਡੀ ਵਰਤੋਂ ਤੱਕ ਨਹੀਂ ਵਧਾਉਂਦੀ ਹੈ। ਤੁਹਾਨੂੰ ਹੋਰ ਵੈੱਬਸਾਈਟਾਂ (ਅਤੇ/ਜਾਂ ਮੋਬਾਈਲ ਐਪਾਂ) ਦੀ ਵਰਤੋਂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਜਾਂ ਸਟੇਟਮੈਂਟ ਨੂੰ ਪੜ੍ਹਨ ਦੀ ਸਲਾਹ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ।</li>
							</ol>
						)}
						{(locale == 'ur') && (
							<ol>
								<li>یہ ویب سائٹ، وقتاً فوقتاً، دوسری ویب سائٹس (اور/یا موبائل ایپس) کے لنکس فراہم کر سکتی ہے۔ ہمارا ایسی ویب سائٹس (اور/یا موبائل ایپس) پر کوئی کنٹرول نہیں ہے اور ہم ان ویب سائٹس (اور/یا موبائل ایپس) کے مواد کے لیے ذمہ دار نہیں ہیں۔ یہ رازداری کی پالیسی آپ کے ایسی ویب سائٹس (اور/یا موبائل ایپس) کے استعمال تک نہیں پھیلتی ہے۔ آپ کو مشورہ دیا جاتا ہے کہ دوسری ویب سائٹس (اور/یا موبائل ایپس) کو استعمال کرنے سے پہلے ان کی رازداری کی پالیسی یا بیان کو پڑھیں۔</li>
							</ol>
						)}
					</p>
				</details>

				<details>
					<summary>{copy.Pages.About.PrivacyPolicy.sections.Cookies.SectionTitle}</summary>
					<p>
						<h2>{copy.Pages.About.PrivacyPolicy.sections.Cookies.SectionTitle}</h2>
						{(locale == 'en' || locale == '') && (
							<>
								<ol>
									<li>This Website may place and access certain Cookies on your computer. <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> uses Cookies to improve your experience of using the Website and to improve our range of products and services. <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> has carefully chosen these Cookies and has taken steps to ensure that your privacy is protected and respected at all times.</li>
									<li>All Cookies used by this Website are used in accordance with current UK and EU Cookie Law.</li>
									<li>Before the Website places Cookies on your computer, you will be presented with a message bar requesting your consent to set those Cookies. By giving your consent to the placing of Cookies, you are enabling <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> to provide a better experience and service to you. You may, if you wish, deny consent to the placing of Cookies; however certain features of the Website may not function fully or as intended.</li>
									<li>
										This Website may place the following Cookies:

										<table style={{ width: '100%' }}>
											<thead>
												<tr>
													<th style={{ width: '25%' }}></th>
													<th style={{ width: '75%' }}></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><b>Type of Cookie</b></td>
													<td><b>Purpose</b></td>
												</tr>
												<tr>
													<td>Strictly necessary cookies</td>
													<td>These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services.</td>
												</tr>
												<tr>
													<td>Functionality cookies</td>
													<td>These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region). By using the Website, you agree to our placement of functionality cookie.</td>
												</tr>
												<tr>
													<td>Analytical/performance cookies</td>
													<td>They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</td>
												</tr>
											</tbody>
											<tfoot></tfoot>
										</table>
									</li>
									<li>You can find a list of Cookies that we use in the Cookies Schedule.</li>
									<li>You can choose to enable or disable Cookies in your internet browser. By default, most internet browsers accept Cookies but this can be changed. For further details, please see the help menu in your internet browser. You can switch off  Cookies at any time, however, you may lose any information that enables you to access the Website more quickly and efficiently.</li>
									<li>You can choose to delete Cookies at any time; however, you may lose any information that enables you to access the Website more quickly and efficiently including, but not limited to, personalisation settings.</li>
									<li>It is recommended that you ensure that your internet browser is up-to-date and that you consult the help and guidance provided by the developer of your internet browser if you are unsure about adjusting your privacy settings.</li>
									<li>For more information generally on cookies, including how to disable them, please refer to https://en.wikipedia.org/wiki/HTTP_cookie. You will also find details on how to delete cookies from your computer at https://www.wikihow.com/Clear-Your-Browser%27s-Cookies</li>
								</ol>
								<p>Below is a list of the cookies that we use. We have tried to ensure this is complete and up to date, but if you think that we have missed a cookie or there is any discrepancy, please let us know.</p>

								<table style={{ width: '100%' }}>
									<thead>
										<tr>
											<th style={{ width: '25%' }}></th>
											<th style={{ width: '15%' }}></th>
											<th style={{ width: '55%' }}></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><strong>Type</strong></td>
											<td><strong>Name</strong></td>
											<td><strong>Purpose</strong></td>
										</tr>
										<tr>
											<td>Strictly necessary</td>
											<td>docode</td>
											<td>Authentication, Authorization and Sessions</td>
										</tr>
										<tr>
											<td>Functionality</td>
											<td>docode</td>
											<td>Authentication, Authorization and Sessions</td>
										</tr>
										<tr>
											<td>Analytical/Performance</td>
											<td>docodeGoolgeAnalytics</td>
											<td>Analytical and product improvement</td>
										</tr>
										<tr>
											<td>Analytical/Performance</td>
											<td>docodeGoolgeAnalytics</td>
											<td>Analytical and product improvement</td>
										</tr>
									</tbody>
									<tfoot></tfoot>
								</table>
							</>
						)}
						{(locale == 'fr') && (
							<>
								<ol>
									<li>Ce site Web peut placer et accéder à certains cookies sur votre ordinateur. <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> utilise des cookies pour améliorer votre expérience d'utilisation du site Web et pour améliorer notre gamme de produits et services. <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> a soigneusement choisi ces cookies et a pris des mesures pour garantir que votre vie privée est protégée et respectée à tout moment.</li>
									<li>Tous les cookies utilisés par ce site Web sont utilisés conformément à la loi actuelle sur les cookies du Royaume-Uni et de l'Union européenne.</li>
									<li>Avant que le site Web ne place des cookies sur votre ordinateur, une barre de message vous demandera votre consentement pour définir ces cookies. En donnant votre consentement au placement de cookies, vous permettez à <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> de vous offrir une meilleure expérience et un meilleur service. Vous pouvez, si vous le souhaitez, refuser votre consentement au placement de cookies; cependant, certaines fonctionnalités du site Web peuvent ne pas fonctionner pleinement ou comme prévu.</li>
									<li>
										Ce site Web peut placer les cookies suivants:

										<table style={{ width: '100%' }}>
											<thead>
												<tr>
													<th style={{ width: '25%' }}></th>
													<th style={{ width: '75%' }}></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><b>Type de cookie</b></td>
													<td><b>Objectif</b></td>
												</tr>
												<tr>
													<td>Cookies strictement nécessaires</td>
													<td>Il s'agit de cookies nécessaires au fonctionnement de notre site Web. Ils incluent, par exemple, des cookies qui vous permettent de vous connecter à des zones sécurisées de notre site Web, d'utiliser un panier d'achat ou d'utiliser des services de facturation électronique.</td>
												</tr>
												<tr>
													<td>Cookies de fonctionnalité</td>
													<td>Ceux-ci sont utilisés pour vous reconnaître lorsque vous revenez sur notre site Web. Cela nous permet de personnaliser notre contenu pour vous, de vous saluer par votre nom et de mémoriser vos préférences (par exemple, votre choix de langue ou de région). En utilisant le site Web, vous acceptez le placement de cookies de fonctionnalité.</td>
												</tr>
												<tr>
													<td>Cookies d'analyse/de performance</td>
													<td>Ils nous permettent de reconnaître et de compter le nombre de visiteurs et de voir comment les visiteurs se déplacent sur notre site Web lorsqu'ils l'utilisent. Cela nous aide à améliorer le fonctionnement de notre site Web, par exemple en garantissant que les utilisateurs trouvent facilement ce qu'ils recherchent.</td>
												</tr>
											</tbody>
											<tfoot></tfoot>
										</table>
									</li>
									<li>Vous pouvez trouver une liste des cookies que nous utilisons dans le calendrier des cookies.</li>
									<li>Vous pouvez choisir d'activer ou de désactiver les cookies dans votre navigateur Internet. Par défaut, la plupart des navigateurs Internet acceptent les cookies mais cela peut être modifié. Pour plus de détails, veuillez consulter le menu d'aide de votre navigateur Internet. Vous pouvez désactiver les cookies à tout moment, cependant, vous risquez de perdre toute information vous permettant d'accéder au site Web plus rapidement et plus efficacement.</li>
									<li>Vous pouvez choisir de supprimer les cookies à tout moment; cependant, vous risquez de perdre toute information vous permettant d'accéder au site Web plus rapidement et plus efficacement, y compris, sans toutefois s'y limiter, les paramètres de personnalisation.</li>
									<li>Il est recommandé de vous assurer que votre navigateur Internet est à jour et de consulter l'aide et les conseils fournis par le développeur de votre navigateur Internet si vous n'êtes pas sûr de pouvoir ajuster vos paramètres de confidentialité.</li>
									<li>Pour plus d'informations générales sur les cookies, y compris sur la manière de les désactiver, veuillez consulter https://en.wikipedia.org/wiki/HTTP_cookie. Vous trouverez également des détails sur la façon de supprimer les cookies de votre ordinateur sur https://www.wikihow.com/Clear-Your-Browser%27s-Cookies</li>
								</ol>
								<p>Vous trouverez ci-dessous une liste des cookies que nous utilisons. Nous avons essayé de garantir que ces informations soient complètes et à jour, mais si vous pensez que nous avons manqué un cookie ou qu'il y a une anomalie, veuillez nous en informer.</p>
								<table style={{ width: '100%' }}>
									<thead>
										<tr>
											<th style={{ width: '25%' }}></th>
											<th style={{ width: '15%' }}></th>
											<th style={{ width: '55%' }}></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><strong>Type</strong></td>
											<td><strong>Nom</strong></td>
											<td><strong>Objectif</strong></td>
										</tr>
										<tr>
											<td>Strictement nécessaire</td>
											<td>docode</td>
											<td>Authentification, autorisation et sessions</td>
										</tr>
										<tr>
											<td>Fonctionnalité</td>
											<td>docode</td>
											<td>Authentification, autorisation et sessions</td>
										</tr>
										<tr>
											<td>Analyse/Performance</td>
											<td>docodeGoolgeAnalytics</td>
											<td>Analyse et amélioration des produits</td>
										</tr>
										<tr>
											<td>Analyse/Performance</td>
											<td>docodeGoolgeAnalytics</td>
											<td>Analyse et amélioration des produits</td>
										</tr>
									</tbody>
									<tfoot></tfoot>
								</table>
							</>
						)}
						{(locale == 'pa') && (
							<>
								<ol>
									<li>ਇਹ ਵੈੱਬਸਾਈਟ ਤੁਹਾਡੇ ਕੰਪਿਊਟਰ 'ਤੇ ਕੁਝ ਕੁਕੀਜ਼ ਰੱਖ ਸਕਦੀ ਹੈ ਅਤੇ ਇਸ ਤੱਕ ਪਹੁੰਚ ਕਰ ਸਕਦੀ ਹੈ। <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> ਵੈੱਬਸਾਈਟ ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੇ ਤੁਹਾਡੇ ਅਨੁਭਵ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਅਤੇ ਉਤਪਾਦਾਂ ਅਤੇ ਸੇਵਾਵਾਂ ਦੀ ਸਾਡੀ ਸ਼੍ਰੇਣੀ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਲਈ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ। <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> ਨੇ ਇਹਨਾਂ ਕੂਕੀਜ਼ ਨੂੰ ਸਾਵਧਾਨੀ ਨਾਲ ਚੁਣਿਆ ਹੈ ਅਤੇ ਇਹ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਕਦਮ ਚੁੱਕੇ ਹਨ ਕਿ ਤੁਹਾਡੀ ਗੋਪਨੀਯਤਾ ਨੂੰ ਹਰ ਸਮੇਂ ਸੁਰੱਖਿਅਤ ਅਤੇ ਸਤਿਕਾਰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।</li>
									<li>ਇਸ ਵੈੱਬਸਾਈਟ ਦੁਆਰਾ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਸਾਰੀਆਂ ਕੂਕੀਜ਼ ਵਰਤਮਾਨ ਯੂਕੇ ਅਤੇ ਈਯੂ ਕੂਕੀ ਕਾਨੂੰਨ ਦੇ ਅਨੁਸਾਰ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।</li>
									<li>ਇਸ ਤੋਂ ਪਹਿਲਾਂ ਕਿ ਵੈੱਬਸਾਈਟ ਤੁਹਾਡੇ ਕੰਪਿਊਟਰ 'ਤੇ ਕੂਕੀਜ਼ ਰੱਖਦੀ ਹੈ, ਤੁਹਾਨੂੰ ਉਹਨਾਂ ਕੂਕੀਜ਼ ਨੂੰ ਸੈੱਟ ਕਰਨ ਲਈ ਤੁਹਾਡੀ ਸਹਿਮਤੀ ਦੀ ਬੇਨਤੀ ਕਰਨ ਲਈ ਇੱਕ ਸੁਨੇਹਾ ਪੱਟੀ ਪੇਸ਼ ਕੀਤੀ ਜਾਵੇਗੀ। ਕੂਕੀਜ਼ ਨੂੰ ਰੱਖਣ ਲਈ ਆਪਣੀ ਸਹਿਮਤੀ ਦੇ ਕੇ, ਤੁਸੀਂ <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> ਨੂੰ ਇੱਕ ਬਿਹਤਰ ਅਨੁਭਵ ਅਤੇ ਸੇਵਾ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਸਮਰੱਥ ਕਰ ਰਹੇ ਹੋ। ਤੁਸੀਂ, ਜੇ ਤੁਸੀਂ ਚਾਹੋ, ਕੂਕੀਜ਼ ਰੱਖਣ ਲਈ ਸਹਿਮਤੀ ਤੋਂ ਇਨਕਾਰ ਕਰ ਸਕਦੇ ਹੋ; ਹਾਲਾਂਕਿ ਵੈੱਬਸਾਈਟ ਦੀਆਂ ਕੁਝ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਪੂਰੀ ਤਰ੍ਹਾਂ ਜਾਂ ਇਰਾਦੇ ਅਨੁਸਾਰ ਕੰਮ ਨਹੀਂ ਕਰ ਸਕਦੀਆਂ।</li>
									<li>
										ਇਹ ਵੈੱਬਸਾਈਟ ਹੇਠ ਲਿਖੀਆਂ ਕੂਕੀਜ਼ ਰੱਖ ਸਕਦੀ ਹੈ:

										<table style={{ width: '100%' }}>
											<thead>
												<tr>
													<th style={{ width: '25%' }}></th>
													<th style={{ width: '75%' }}></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><b>ਕੂਕੀ ਦੀ ਕਿਸਮ</b></td>
													<td><b>ਉਦੇਸ਼</b></td>
												</tr>
												<tr>
													<td>ਸਖਤ ਤੌਰ 'ਤੇ ਜ਼ਰੂਰੀ ਕੂਕੀਜ਼</td>
													<td>ਇਹ ਕੂਕੀਜ਼ ਹਨ ਜੋ ਸਾਡੀ ਵੈਬਸਾਈਟ ਦੇ ਸੰਚਾਲਨ ਲਈ ਲੋੜੀਂਦੀਆਂ ਹਨ। ਉਹਨਾਂ ਵਿੱਚ, ਉਦਾਹਰਨ ਲਈ, ਕੂਕੀਜ਼ ਸ਼ਾਮਲ ਹਨ ਜੋ ਤੁਹਾਨੂੰ ਸਾਡੀ ਵੈੱਬਸਾਈਟ ਦੇ ਸੁਰੱਖਿਅਤ ਖੇਤਰਾਂ ਵਿੱਚ ਲੌਗਇਨ ਕਰਨ, ਸ਼ਾਪਿੰਗ ਕਾਰਟ ਦੀ ਵਰਤੋਂ ਕਰਨ ਜਾਂ ਈ-ਬਿਲਿੰਗ ਸੇਵਾਵਾਂ ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੇ ਯੋਗ ਬਣਾਉਂਦੀਆਂ ਹਨ।</td>
												</tr>
												<tr>
													<td>ਕਾਰਜਸ਼ੀਲਤਾ ਕੁਕੀਜ਼</td>
													<td>ਜਦੋਂ ਤੁਸੀਂ ਸਾਡੀ ਵੈੱਬਸਾਈਟ 'ਤੇ ਵਾਪਸ ਆਉਂਦੇ ਹੋ ਤਾਂ ਇਹਨਾਂ ਦੀ ਵਰਤੋਂ ਤੁਹਾਨੂੰ ਪਛਾਣਨ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਇਹ ਸਾਨੂੰ ਤੁਹਾਡੇ ਲਈ ਸਾਡੀ ਸਮੱਗਰੀ ਨੂੰ ਵਿਅਕਤੀਗਤ ਬਣਾਉਣ, ਤੁਹਾਨੂੰ ਨਾਮ ਦੁਆਰਾ ਸ਼ੁਭਕਾਮਨਾਵਾਂ ਦੇਣ ਅਤੇ ਤੁਹਾਡੀਆਂ ਤਰਜੀਹਾਂ (ਉਦਾਹਰਨ ਲਈ, ਤੁਹਾਡੀ ਭਾਸ਼ਾ ਜਾਂ ਖੇਤਰ ਦੀ ਚੋਣ) ਨੂੰ ਯਾਦ ਰੱਖਣ ਦੇ ਯੋਗ ਬਣਾਉਂਦਾ ਹੈ। ਵੈੱਬਸਾਈਟ ਦੀ ਵਰਤੋਂ ਕਰਕੇ, ਤੁਸੀਂ ਸਾਡੀ ਕਾਰਜਕੁਸ਼ਲਤਾ ਕੁਕੀ ਦੀ ਪਲੇਸਮੈਂਟ ਲਈ ਸਹਿਮਤੀ ਦਿੰਦੇ ਹੋ।</td>
												</tr>
												<tr>
													<td>ਵਿਸ਼ਲੇਸ਼ਕ/ਪ੍ਰਦਰਸ਼ਨ ਕੁਕੀਜ਼</td>
													<td>ਉਹ ਸਾਨੂੰ ਵਿਜ਼ਿਟਰਾਂ ਦੀ ਗਿਣਤੀ ਨੂੰ ਪਛਾਣਨ ਅਤੇ ਗਿਣਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦੇ ਹਨ ਅਤੇ ਇਹ ਦੇਖਣ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦੇ ਹਨ ਕਿ ਵਿਜ਼ਿਟਰ ਸਾਡੀ ਵੈੱਬਸਾਈਟ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਕਿਵੇਂ ਘੁੰਮਦੇ ਹਨ ਜਦੋਂ ਉਹ ਇਸਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ। ਇਹ ਸਾਡੀ ਵੈੱਬਸਾਈਟ ਦੇ ਕੰਮ ਕਰਨ ਦੇ ਤਰੀਕੇ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਵਿੱਚ ਸਾਡੀ ਮਦਦ ਕਰਦਾ ਹੈ, ਉਦਾਹਰਨ ਲਈ, ਇਹ ਯਕੀਨੀ ਬਣਾ ਕੇ ਕਿ ਵਰਤੋਂਕਾਰ ਆਸਾਨੀ ਨਾਲ ਉਹ ਚੀਜ਼ ਲੱਭ ਰਹੇ ਹਨ ਜੋ ਉਹ ਲੱਭ ਰਹੇ ਹਨ।</td>
												</tr>
											</tbody>
											<tfoot></tfoot>
										</table>
									</li>
									<li>ਤੁਸੀਂ ਕੁਕੀਜ਼ ਦੀ ਸੂਚੀ ਲੱਭ ਸਕਦੇ ਹੋ ਜੋ ਅਸੀਂ ਕੂਕੀਜ਼ ਅਨੁਸੂਚੀ ਵਿੱਚ ਵਰਤਦੇ ਹਾਂ।</li>
									<li>ਤੁਸੀਂ ਆਪਣੇ ਇੰਟਰਨੈਟ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਕੂਕੀਜ਼ ਨੂੰ ਸਮਰੱਥ ਜਾਂ ਅਯੋਗ ਕਰਨ ਦੀ ਚੋਣ ਕਰ ਸਕਦੇ ਹੋ। ਮੂਲ ਰੂਪ ਵਿੱਚ, ਜ਼ਿਆਦਾਤਰ ਇੰਟਰਨੈਟ ਬ੍ਰਾਊਜ਼ਰ ਕੂਕੀਜ਼ ਨੂੰ ਸਵੀਕਾਰ ਕਰਦੇ ਹਨ ਪਰ ਇਸਨੂੰ ਬਦਲਿਆ ਜਾ ਸਕਦਾ ਹੈ। ਹੋਰ ਵੇਰਵਿਆਂ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਇੰਟਰਨੈੱਟ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਮਦਦ ਮੀਨੂ ਦੇਖੋ। ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਕੂਕੀਜ਼ ਨੂੰ ਬੰਦ ਕਰ ਸਕਦੇ ਹੋ, ਹਾਲਾਂਕਿ, ਤੁਸੀਂ ਕੋਈ ਵੀ ਜਾਣਕਾਰੀ ਗੁਆ ਸਕਦੇ ਹੋ ਜੋ ਤੁਹਾਨੂੰ ਵੈਬਸਾਈਟ ਨੂੰ ਵਧੇਰੇ ਤੇਜ਼ੀ ਅਤੇ ਕੁਸ਼ਲਤਾ ਨਾਲ ਐਕਸੈਸ ਕਰਨ ਦੇ ਯੋਗ ਬਣਾਉਂਦਾ ਹੈ।</li>
									<li>ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਕੂਕੀਜ਼ ਨੂੰ ਮਿਟਾਉਣ ਦੀ ਚੋਣ ਕਰ ਸਕਦੇ ਹੋ; ਹਾਲਾਂਕਿ, ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਜਾਣਕਾਰੀ ਨੂੰ ਗੁਆ ਸਕਦੇ ਹੋ ਜੋ ਤੁਹਾਨੂੰ ਵੈੱਬਸਾਈਟ ਨੂੰ ਵਧੇਰੇ ਤੇਜ਼ੀ ਨਾਲ ਅਤੇ ਕੁਸ਼ਲਤਾ ਨਾਲ ਐਕਸੈਸ ਕਰਨ ਦੇ ਯੋਗ ਬਣਾਉਂਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਵਿਅਕਤੀਗਤਕਰਨ ਸੈਟਿੰਗਾਂ ਸ਼ਾਮਲ ਹਨ, ਪਰ ਇਸ ਤੱਕ ਸੀਮਿਤ ਨਹੀਂ।</li>
									<li>ਇਹ ਸਿਫ਼ਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ ਕਿ ਤੁਸੀਂ ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡਾ ਇੰਟਰਨੈੱਟ ਬ੍ਰਾਊਜ਼ਰ ਅੱਪ-ਟੂ-ਡੇਟ ਹੈ ਅਤੇ ਜੇਕਰ ਤੁਸੀਂ ਆਪਣੀਆਂ ਗੋਪਨੀਯਤਾ ਸੈਟਿੰਗਾਂ ਨੂੰ ਐਡਜਸਟ ਕਰਨ ਬਾਰੇ ਪੱਕਾ ਨਹੀਂ ਹੋ ਤਾਂ ਤੁਸੀਂ ਆਪਣੇ ਇੰਟਰਨੈੱਟ ਬ੍ਰਾਊਜ਼ਰ ਦੇ ਡਿਵੈਲਪਰ ਦੁਆਰਾ ਮੁਹੱਈਆ ਕੀਤੀ ਮਦਦ ਅਤੇ ਮਾਰਗਦਰਸ਼ਨ ਦੀ ਸਲਾਹ ਲਓ।</li>
									<li>ਕੁਕੀਜ਼ ਬਾਰੇ ਆਮ ਤੌਰ 'ਤੇ ਵਧੇਰੇ ਜਾਣਕਾਰੀ ਲਈ, ਜਿਸ ਵਿੱਚ ਉਹਨਾਂ ਨੂੰ ਅਸਮਰੱਥ ਬਣਾਉਣਾ ਵੀ ਸ਼ਾਮਲ ਹੈ, ਕਿਰਪਾ ਕਰਕੇ https://en.wikipedia.org/wiki/HTTP_cookie ਵੇਖੋ। ਤੁਸੀਂ https://www.wikihow.com/Clear-Your-Browser%27s-Cookies</li> 'ਤੇ ਆਪਣੇ ਕੰਪਿਊਟਰ ਤੋਂ ਕੂਕੀਜ਼ ਨੂੰ ਕਿਵੇਂ ਮਿਟਾਉਣਾ ਹੈ ਇਸ ਬਾਰੇ ਵੇਰਵੇ ਵੀ ਪ੍ਰਾਪਤ ਕਰੋਗੇ
								</ol>
								<p>ਹੇਠਾਂ ਕੂਕੀਜ਼ ਦੀ ਸੂਚੀ ਹੈ ਜੋ ਅਸੀਂ ਵਰਤਦੇ ਹਾਂ। ਅਸੀਂ ਇਹ ਯਕੀਨੀ ਬਣਾਉਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕੀਤੀ ਹੈ ਕਿ ਇਹ ਸੰਪੂਰਨ ਅਤੇ ਅੱਪ ਟੂ ਡੇਟ ਹੈ, ਪਰ ਜੇਕਰ ਤੁਸੀਂ ਸੋਚਦੇ ਹੋ ਕਿ ਅਸੀਂ ਕੋਈ ਕੂਕੀ ਗੁਆ ਦਿੱਤੀ ਹੈ ਜਾਂ ਕੋਈ ਮਤਭੇਦ ਹੈ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਸਾਨੂੰ ਦੱਸੋ।</p>
								<table style={{ width: '100%' }}>
									<thead>
										<tr>
											<th style={{ width: '25%' }}></th>
											<th style={{ width: '15%' }}></th>
											<th style={{ width: '55%' }}></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><strong>ਕਿਸਮ</strong></td>
											<td><strong>ਨਾਮ</strong></td>
											<td><strong>ਉਦੇਸ਼</strong></td>
										</tr>
										<tr>
											<td>ਸਖਤ ਤੌਰ 'ਤੇ ਜ਼ਰੂਰੀ</td>
											<td>docode</td>
											<td>ਪ੍ਰਮਾਣੀਕਰਨ, ਪ੍ਰਮਾਣੀਕਰਨ ਅਤੇ ਸੈਸ਼ਨ</td>
										</tr>
										<tr>
											<td>ਕਾਰਜਸ਼ੀਲਤਾ</td>
											<td>docode</td>
											<td>ਪ੍ਰਮਾਣੀਕਰਨ, ਪ੍ਰਮਾਣੀਕਰਨ ਅਤੇ ਸੈਸ਼ਨ</td>
										</tr>
										<tr>
											<td>ਵਿਸ਼ਲੇਸ਼ਕ/ਪ੍ਰਦਰਸ਼ਨ</td>
											<td>docodeGoolgeAnalytics</td>
											<td>ਵਿਸ਼ਲੇਸ਼ਕ ਅਤੇ ਉਤਪਾਦ ਸੁਧਾਰ</td>
										</tr>
										<tr>
											<td>ਵਿਸ਼ਲੇਸ਼ਕ/ਪ੍ਰਦਰਸ਼ਨ</td>
											<td>docodeGoolgeAnalytics</td>
											<td>ਵਿਸ਼ਲੇਸ਼ਕ ਅਤੇ ਉਤਪਾਦ ਸੁਧਾਰ</td>
										</tr>
									</tbody>
									<tfoot></tfoot>
								</table>

							</>
						)}
						{(locale == 'ur') && (
							<>
								<ol>
									<li>یہ ویب سائٹ آپ کے کمپیوٹر پر کچھ کوکیز رکھ سکتی ہے اور اس تک رسائی حاصل کر سکتی ہے۔ <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> ویب سائٹ استعمال کرنے کے آپ کے تجربے کو بہتر بنانے اور ہماری مصنوعات اور خدمات کی حد کو بہتر بنانے کے لیے کوکیز کا استعمال کرتا ہے۔ <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> نے احتیاط سے ان کوکیز کا انتخاب کیا ہے اور اس بات کو یقینی بنانے کے لیے اقدامات کیے ہیں کہ آپ کی رازداری کا ہر وقت تحفظ اور احترام کیا جائے۔</li>
									<li>اس ویب سائٹ کے ذریعہ استعمال ہونے والی تمام کوکیز موجودہ UK اور EU Cookie Law کے مطابق استعمال ہوتی ہیں۔</li>
									<li>اس سے پہلے کہ ویب سائٹ آپ کے کمپیوٹر پر کوکیز رکھے، آپ کو ایک میسج بار پیش کیا جائے گا جس میں ان کوکیز کو سیٹ کرنے کے لیے آپ کی رضامندی کی درخواست کی جائے گی۔ کوکیز رکھنے پر اپنی رضامندی دے کر، آپ <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> کو فعال کر رہے ہیں تاکہ آپ کو ایک بہتر تجربہ اور سروس فراہم کی جا سکے۔ آپ، اگر آپ چاہیں تو، کوکیز رکھنے کی رضامندی سے انکار کر سکتے ہیں۔ تاہم ویب سائٹ کی کچھ خصوصیات مکمل طور پر یا مطلوبہ طور پر کام نہیں کرسکتی ہیں۔</li>
									<li>
										یہ ویب سائٹ درج ذیل کوکیز رکھ سکتی ہے:

										<table style={{ width: '100%' }}>
											<thead>
												<tr>
													<th style={{ width: '25%' }}></th>
													<th style={{ width: '75%' }}></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><b>کوکی کی قسم</b></td>
													<td><b>مقصد</b></td>
												</tr>
												<tr>
													<td>سخت ضروری کوکیز</td>
													<td>یہ وہ کوکیز ہیں جو ہماری ویب سائٹ کو چلانے کے لیے درکار ہیں۔ ان میں، مثال کے طور پر، کوکیز شامل ہیں جو آپ کو ہماری ویب سائٹ کے محفوظ علاقوں میں لاگ ان کرنے، شاپنگ کارٹ استعمال کرنے یا ای بلنگ سروسز کا استعمال کرنے کے قابل بناتی ہیں۔</td>
												</tr>
												<tr>
													<td>فنکشنلٹی کوکیز</td>
													<td>جب آپ ہماری ویب سائٹ پر واپس آتے ہیں تو یہ آپ کو پہچاننے کے لیے استعمال ہوتے ہیں۔ یہ ہمیں آپ کے لیے اپنے مواد کو ذاتی نوعیت کا بنانے، نام سے آپ کو سلام کرنے اور آپ کی ترجیحات کو یاد رکھنے کے قابل بناتا ہے (مثال کے طور پر، آپ کی زبان یا علاقے کا انتخاب)۔ ویب سائٹ استعمال کر کے، آپ ہماری فعالیت کوکی کی جگہ کے تعین سے اتفاق کرتے ہیں۔</td>
												</tr>
												<tr>
													<td>تجزیاتی/کارکردگی کوکیز</td>
													<td>وہ ہمیں دیکھنے والوں کی تعداد کو پہچاننے اور گننے کی اجازت دیتے ہیں اور یہ دیکھنے کی اجازت دیتے ہیں کہ وزیٹرز ہماری ویب سائٹ کا استعمال کرتے وقت کس طرح گھومتے ہیں۔ یہ ہماری ویب سائٹ کے کام کرنے کے طریقے کو بہتر بنانے میں ہماری مدد کرتا ہے، مثال کے طور پر، اس بات کو یقینی بنا کر کہ صارفین آسانی سے وہ چیز تلاش کر رہے ہیں جس کی وہ تلاش کر رہے ہیں۔</td>
												</tr>
											</tbody>
											<tfoot></tfoot>
										</table>
									</li>
									<li>آپ کوکیز کی فہرست تلاش کر سکتے ہیں جو ہم کوکیز کے شیڈول میں استعمال کرتے ہیں۔</li>
									<li>آپ اپنے انٹرنیٹ براؤزر میں کوکیز کو فعال یا غیر فعال کرنے کا انتخاب کر سکتے ہیں۔ پہلے سے طے شدہ طور پر، زیادہ تر انٹرنیٹ براؤزرز کوکیز کو قبول کرتے ہیں لیکن اسے تبدیل کیا جا سکتا ہے۔ مزید تفصیلات کے لیے، براہ کرم اپنے انٹرنیٹ براؤزر میں مدد کا مینو دیکھیں۔ آپ کسی بھی وقت کوکیز کو بند کر سکتے ہیں، تاہم، آپ کوئی بھی ایسی معلومات کھو سکتے ہیں جو آپ کو ویب سائٹ تک زیادہ تیزی اور مؤثر طریقے سے رسائی کے قابل بناتی ہے۔</li>
									<li>آپ کسی بھی وقت کوکیز کو حذف کرنے کا انتخاب کر سکتے ہیں۔ تاہم، آپ کسی بھی معلومات کو کھو سکتے ہیں جو آپ کو ویب سائٹ تک زیادہ تیزی اور مؤثر طریقے سے رسائی کے قابل بناتی ہے، بشمول ذاتی نوعیت کی ترتیبات، لیکن ان تک محدود نہیں۔</li>
									<li>یہ تجویز کی جاتی ہے کہ آپ اس بات کو یقینی بنائیں کہ آپ کا انٹرنیٹ براؤزر اپ ٹو ڈیٹ ہے اور اگر آپ کو اپنی رازداری کی ترتیبات کو ایڈجسٹ کرنے کے بارے میں یقین نہیں ہے تو آپ اپنے انٹرنیٹ براؤزر کے ڈویلپر کی طرف سے فراہم کردہ مدد اور رہنمائی سے مشورہ کریں۔</li>
									<li>عام طور پر کوکیز کے بارے میں مزید معلومات کے لیے، بشمول انہیں کیسے غیر فعال کیا جائے، براہ کرم https://en.wikipedia.org/wiki/HTTP_cookie سے رجوع کریں۔ آپ کو اپنے کمپیوٹر سے کوکیز کو حذف کرنے کے بارے میں تفصیلات https://www.wikihow.com/Clear-Your-Browser%27s-Cookies</li> پر بھی ملیں گی۔
								</ol>
								<p>ذیل میں ان کوکیز کی فہرست ہے جو ہم استعمال کرتے ہیں۔ ہم نے یہ یقینی بنانے کی کوشش کی ہے کہ یہ مکمل اور تازہ ترین ہے، لیکن اگر آپ کو لگتا ہے کہ ہم سے کوئی کوکی چھوٹ گئی ہے یا اس میں کوئی تضاد ہے، تو براہ کرم ہمیں بتائیں۔</p>
								<table style={{ width: '100%' }}>
									<thead>
										<tr>
											<th style={{ width: '25%' }}></th>
											<th style={{ width: '15%' }}></th>
											<th style={{ width: '55%' }}></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><strong>قسم</strong></td>
											<td><strong>نام</strong></td>
											<td><strong>مقصد</strong></td>
										</tr>
										<tr>
											<td>سختی سے ضروری</td>
											<td>docode</td>
											<td>توثیق، اجازت اور سیشنز</td>
										</tr>
										<tr>
											<td>فعالیت</td>
											<td>docode</td>
											<td>توثیق، اجازت اور سیشنز</td>
										</tr>
										<tr>
											<td>تجزیاتی/کارکردگی</td>
											<td>docodeGoolgeAnalytics</td>
											<td>تجزیاتی اور مصنوعات کی بہتری</td>
										</tr>
										<tr>
											<td>تجزیاتی/کارکردگی</td>
											<td>docodeGoolgeAnalytics</td>
											<td>تجزیاتی اور مصنوعات کی بہتری</td>
										</tr>
									</tbody>
									<tfoot></tfoot>
								</table>
							</>
						)}
					</p>
				</details>

				<details>
					<summary>{copy.Pages.About.PrivacyPolicy.sections.General.SectionTitle}</summary>
					<p>
						<h2>{copy.Pages.About.PrivacyPolicy.sections.General.SectionTitle}</h2>
						{(locale == 'en' || locale == '') && (
							<ol>
								<li>You may not transfer any of your rights under this Privacy Policy to any other person. We may transfer our rights under this Privacy Policy where we reasonably believe your rights will not be affected.</li>
								<li>If any court or competent authority finds that any provision of this Privacy Policy (or part of any provision) is invalid, illegal or unenforceable, that provision or part-provision will, to the extent required, be deemed to be deleted, and the validity and enforceability of the other provisions of this Privacy Policy will not be affected.</li>
								<li>Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy.</li>
								<li>This Agreement will be governed by and interpreted according to the law of England and Wales. All disputes arising under the Agreement will be subject to the exclusive jurisdiction of the English and Welsh courts.</li>
							</ol>
						)}
						{(locale == 'fr') && (
							<ol>
								<li>Vous ne pouvez transférer aucun de vos droits en vertu de cette politique de confidentialité à une autre personne. Nous pouvons transférer nos droits en vertu de cette politique de confidentialité lorsque nous pensons raisonnablement que vos droits ne seront pas affectés.</li>
								<li>Si un tribunal ou une autorité compétente estime qu'une disposition de la présente politique de confidentialité (ou une partie de toute disposition) est invalide, illégale ou inapplicable, cette disposition ou cette partie de disposition sera, dans la mesure nécessaire, considérée comme supprimée. et la validité et le caractère exécutoire des autres dispositions de la présente politique de confidentialité ne seront pas affectés.</li>
								<li>Sauf accord contraire, aucun retard, acte ou omission de la part d'une partie dans l'exercice d'un droit ou d'un recours ne sera considéré comme une renonciation à ce droit ou à tout autre droit ou recours.</li>
								<li>Le présent Contrat sera régi et interprété conformément au droit de l'Angleterre et du Pays de Galles. Tous les litiges découlant du Contrat seront soumis à la compétence exclusive des tribunaux anglais et gallois.</li>
							</ol>
						)}
						{(locale == 'pa') && (
							<ol>
								<li>ਤੁਸੀਂ ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਦੇ ਅਧੀਨ ਆਪਣੇ ਕਿਸੇ ਵੀ ਅਧਿਕਾਰ ਨੂੰ ਕਿਸੇ ਹੋਰ ਵਿਅਕਤੀ ਨੂੰ ਟ੍ਰਾਂਸਫਰ ਨਹੀਂ ਕਰ ਸਕਦੇ ਹੋ। ਅਸੀਂ ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਦੇ ਤਹਿਤ ਆਪਣੇ ਅਧਿਕਾਰਾਂ ਦਾ ਤਬਾਦਲਾ ਕਰ ਸਕਦੇ ਹਾਂ ਜਿੱਥੇ ਸਾਨੂੰ ਵਿਸ਼ਵਾਸ ਹੈ ਕਿ ਤੁਹਾਡੇ ਅਧਿਕਾਰ ਪ੍ਰਭਾਵਿਤ ਨਹੀਂ ਹੋਣਗੇ।</li>
								<li>ਜੇਕਰ ਕਿਸੇ ਅਦਾਲਤ ਜਾਂ ਸਮਰੱਥ ਅਥਾਰਟੀ ਨੂੰ ਪਤਾ ਲੱਗਦਾ ਹੈ ਕਿ ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਦਾ ਕੋਈ ਵੀ ਉਪਬੰਧ (ਜਾਂ ਕਿਸੇ ਵੀ ਵਿਵਸਥਾ ਦਾ ਹਿੱਸਾ) ਅਵੈਧ, ਗੈਰ-ਕਾਨੂੰਨੀ ਜਾਂ ਲਾਗੂ ਕਰਨ ਯੋਗ ਨਹੀਂ ਹੈ, ਤਾਂ ਉਸ ਵਿਵਸਥਾ ਜਾਂ ਅੰਸ਼ਕ-ਪ੍ਰਬੰਧ ਨੂੰ, ਲੋੜੀਂਦੀ ਹੱਦ ਤੱਕ, ਮਿਟਾਇਆ ਗਿਆ ਮੰਨਿਆ ਜਾਵੇਗਾ, ਅਤੇ ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਦੇ ਹੋਰ ਪ੍ਰਬੰਧਾਂ ਦੀ ਵੈਧਤਾ ਅਤੇ ਲਾਗੂ ਕਰਨਯੋਗਤਾ ਪ੍ਰਭਾਵਿਤ ਨਹੀਂ ਹੋਵੇਗੀ।</li>
								<li>ਜਦੋਂ ਤੱਕ ਸਹਿਮਤੀ ਨਹੀਂ ਹੁੰਦੀ, ਕਿਸੇ ਵੀ ਅਧਿਕਾਰ ਜਾਂ ਉਪਾਅ ਦੀ ਵਰਤੋਂ ਕਰਨ ਵਿੱਚ ਕਿਸੇ ਧਿਰ ਦੁਆਰਾ ਕਿਸੇ ਵੀ ਦੇਰੀ, ਕਾਰਵਾਈ ਜਾਂ ਭੁੱਲ ਨੂੰ ਉਸ ਤੋਂ ਛੋਟ, ਜਾਂ ਕੋਈ ਹੋਰ, ਸਹੀ ਜਾਂ ਉਪਾਅ ਮੰਨਿਆ ਜਾਵੇਗਾ।</li>
								<li>ਇਹ ਇਕਰਾਰਨਾਮਾ ਇੰਗਲੈਂਡ ਅਤੇ ਵੇਲਜ਼ ਦੇ ਕਾਨੂੰਨ ਦੁਆਰਾ ਨਿਯੰਤਰਿਤ ਅਤੇ ਵਿਆਖਿਆ ਕੀਤਾ ਜਾਵੇਗਾ। ਸਮਝੌਤੇ ਦੇ ਤਹਿਤ ਪੈਦਾ ਹੋਣ ਵਾਲੇ ਸਾਰੇ ਵਿਵਾਦ ਅੰਗਰੇਜ਼ੀ ਅਤੇ ਵੈਲਸ਼ ਅਦਾਲਤਾਂ ਦੇ ਵਿਸ਼ੇਸ਼ ਅਧਿਕਾਰ ਖੇਤਰ ਦੇ ਅਧੀਨ ਹੋਣਗੇ।</li>
							</ol>
						)}
						{(locale == 'ur') && (
							<ol>
								<li>آپ اس رازداری کی پالیسی کے تحت اپنے کسی بھی حقوق کو کسی دوسرے شخص کو منتقل نہیں کر سکتے ہیں۔ ہم اس رازداری کی پالیسی کے تحت اپنے حقوق کو منتقل کر سکتے ہیں جہاں ہمیں معقول طور پر یقین ہے کہ آپ کے حقوق متاثر نہیں ہوں گے۔</li>
								<li>اگر کسی عدالت یا مجاز اتھارٹی کو معلوم ہوتا ہے کہ اس پرائیویسی پالیسی کی کوئی شق (یا کسی بھی شق کا حصہ) غلط، غیر قانونی یا ناقابل نفاذ ہے، تو اس پروویژن یا جزوی پروویژن کو، مطلوبہ حد تک، حذف کر دیا جائے گا، اور اس پرائیویسی پالیسی کی دیگر دفعات کی درستگی اور ان کا نفاذ متاثر نہیں ہوگا۔</li>
								<li>جب تک کہ دوسری صورت میں اتفاق نہ ہو، کسی بھی حق یا علاج کے استعمال میں کسی فریق کی طرف سے کوئی تاخیر، عمل یا کوتاہی اس کی چھوٹ، یا کوئی اور، حق یا علاج سمجھا جائے گا۔</li>
								<li>یہ معاہدہ انگلینڈ اور ویلز کے قانون کے تحت چلایا جائے گا اور اس کی تشریح کی جائے گی۔ معاہدے کے تحت پیدا ہونے والے تمام تنازعات انگریزی اور ویلش عدالتوں کے خصوصی دائرہ اختیار کے تابع ہوں گے۔</li>
							</ol>
						)}
					</p>
				</details>

				<details>
					<summary>{copy.Pages.About.PrivacyPolicy.sections.ChangesOfBusinessOwnershipAndControl.SectionTitle}</summary>
					<p>
						<h2>{copy.Pages.About.PrivacyPolicy.sections.ChangesOfBusinessOwnershipAndControl.SectionTitle}</h2>
						<>
							{(locale == 'en' || locale == '') && (
								<ol>
									<li><strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> may, from time to time, expand or reduce our business and this may involve the sale and/or the transfer of control of all or part of <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong>. Data provided by Users will, where it is relevant to any part of our business so transferred, be transferred along with that part and the new owner or newly controlling party will, under the terms of this Privacy Policy, be permitted to use the Data for the purposes for which it was originally supplied to us.</li>
									<li>We may also disclose Data to a prospective purchaser of our business or any part of it.</li>
									<li>In the above instances, we will take steps with the aim of ensuring your privacy is protected.</li>
								</ol>
							)}
							{(locale == 'fr') && (
								<ol>
									<li><strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> peut, de temps à autre, développer ou réduire son activité et cela peut impliquer la vente et/ou le transfert de contrôle de tout ou partie de <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong>. Les données fournies par les utilisateurs seront, lorsqu'elles sont pertinentes pour une partie de notre entreprise ainsi transférée, être transférées avec cette partie et le nouveau propriétaire ou la nouvelle partie contrôlante sera, selon les termes de la présente politique de confidentialité, autorisé à utiliser les données pour les fins pour lesquelles il nous a été initialement fourni.</li>
									<li>Nous pouvons également divulguer des données à un acheteur potentiel de notre entreprise ou d'une partie de celle-ci.</li>
									<li>Dans les cas ci-dessus, nous prendrons des mesures dans le but de garantir la protection de votre vie privée.</li>
								</ol>
							)}
							{(locale == 'pa') && (
								<ol>
									<li><strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong>, ਸਮੇਂ-ਸਮੇਂ 'ਤੇ, ਸਾਡੇ ਕਾਰੋਬਾਰ ਨੂੰ ਵਧਾ ਜਾਂ ਘਟਾ ਸਕਦਾ ਹੈ ਅਤੇ ਇਸ ਵਿੱਚ <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> ਦੇ ਸਾਰੇ ਜਾਂ ਕੁਝ ਹਿੱਸੇ ਦੀ ਵਿਕਰੀ ਅਤੇ/ਜਾਂ ਨਿਯੰਤਰਣ ਦਾ ਤਬਾਦਲਾ ਸ਼ਾਮਲ ਹੋ ਸਕਦਾ ਹੈ। ਉਪਭੋਗਤਾਵਾਂ ਦੁਆਰਾ ਪ੍ਰਦਾਨ ਕੀਤਾ ਗਿਆ ਡੇਟਾ, ਜਿੱਥੇ ਇਹ ਸਾਡੇ ਕਾਰੋਬਾਰ ਦੇ ਕਿਸੇ ਵੀ ਹਿੱਸੇ ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ, ਇਸ ਲਈ ਟ੍ਰਾਂਸਫਰ ਕੀਤਾ ਗਿਆ ਹੈ, ਉਸ ਹਿੱਸੇ ਦੇ ਨਾਲ ਟ੍ਰਾਂਸਫਰ ਕੀਤਾ ਜਾਵੇਗਾ ਅਤੇ ਨਵੇਂ ਮਾਲਕ ਜਾਂ ਨਵੀਂ ਨਿਯੰਤਰਣ ਕਰਨ ਵਾਲੀ ਧਿਰ ਨੂੰ, ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਦੀਆਂ ਸ਼ਰਤਾਂ ਦੇ ਤਹਿਤ, ਡੇਟਾ ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੱਤੀ ਜਾਵੇਗੀ। ਉਹ ਉਦੇਸ਼ ਜਿਨ੍ਹਾਂ ਲਈ ਇਹ ਅਸਲ ਵਿੱਚ ਸਾਨੂੰ ਸਪਲਾਈ ਕੀਤਾ ਗਿਆ ਸੀ।</li>
									<li>ਅਸੀਂ ਆਪਣੇ ਕਾਰੋਬਾਰ ਜਾਂ ਇਸਦੇ ਕਿਸੇ ਹਿੱਸੇ ਦੇ ਸੰਭਾਵੀ ਖਰੀਦਦਾਰ ਨੂੰ ਵੀ ਡੇਟਾ ਦਾ ਖੁਲਾਸਾ ਕਰ ਸਕਦੇ ਹਾਂ।</li>
									<li>ਉਪਰੋਕਤ ਸਥਿਤੀਆਂ ਵਿੱਚ, ਅਸੀਂ ਤੁਹਾਡੀ ਗੋਪਨੀਯਤਾ ਦੀ ਸੁਰੱਖਿਆ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਣ ਦੇ ਉਦੇਸ਼ ਨਾਲ ਕਦਮ ਚੁੱਕਾਂਗੇ।</li>
								</ol>
							)}
							{(locale == 'ur') && (
								<ol>
									<li><strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> وقتاً فوقتاً ہمارے کاروبار کو بڑھا یا کم کر سکتا ہے اور اس میں <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> کے تمام یا کچھ حصے کی فروخت اور/یا کنٹرول کی منتقلی شامل ہو سکتی ہے۔ صارفین کی طرف سے فراہم کردہ ڈیٹا، جہاں یہ ہمارے کاروبار کے کسی بھی حصے سے متعلقہ ہے اس طرح منتقل کیا جائے گا، اس حصے کے ساتھ منتقل کیا جائے گا اور نئے مالک یا نئے کنٹرول کرنے والے فریق کو، اس پرائیویسی پالیسی کی شرائط کے تحت، ڈیٹا کو استعمال کرنے کی اجازت ہوگی۔ وہ مقاصد جن کے لیے یہ اصل میں ہمیں فراہم کیا گیا تھا۔</li>
									<li>ہم اپنے کاروبار یا اس کے کسی بھی حصے کے ممکنہ خریدار کو ڈیٹا بھی ظاہر کر سکتے ہیں۔</li>
									<li>مذکورہ بالا صورتوں میں، ہم آپ کی رازداری کے تحفظ کو یقینی بنانے کے مقصد سے اقدامات کریں گے۔</li>
								</ol>
							)}
						</>
					</p>
				</details>

				<details>
					<summary>{copy.Pages.About.PrivacyPolicy.sections.ChangesToThisPrivacyPolicy.SectionTitle}</summary>
					<p>
						<h2>{copy.Pages.About.PrivacyPolicy.sections.ChangesToThisPrivacyPolicy.SectionTitle}</h2>
						<>
							{(locale == 'en' || locale == '') && (
								<ol>
									<li><strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> reserves the right to change this Privacy Policy as we may deem necessary from time to time or as may be required by law. Any changes will be immediately posted on the Website and you are deemed to have accepted the terms of the Privacy Policy on your first use of the Website following the alterations. You may contact <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> by email at <strong>{process.env.NEXT_PUBLIC_PRIVACY_POLICY_CONTACT!}</strong>.</li>
								</ol>
							)}
							{(locale == 'fr') && (
								<ol>
									<li><strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> se réserve le droit de modifier cette politique de confidentialité si nous le jugeons nécessaire de temps à autre ou si la loi l'exige. Toute modification sera immédiatement publiée sur le site Web et vous êtes réputé avoir accepté les termes de la politique de confidentialité lors de votre première utilisation du site Web après les modifications. Vous pouvez contacter <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> par e-mail à <strong>{process.env.NEXT_PUBLIC_PRIVACY_POLICY_CONTACT!}</strong>.</li>
								</ol>
							)}
							{(locale == 'pa') && (
								<ol>
									<li><strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਨੂੰ ਬਦਲਣ ਦਾ ਅਧਿਕਾਰ ਰਾਖਵਾਂ ਰੱਖਦਾ ਹੈ ਜਿਵੇਂ ਕਿ ਅਸੀਂ ਸਮੇਂ-ਸਮੇਂ 'ਤੇ ਜ਼ਰੂਰੀ ਸਮਝ ਸਕਦੇ ਹਾਂ ਜਾਂ ਕਾਨੂੰਨ ਦੁਆਰਾ ਲੋੜੀਂਦਾ ਹੋ ਸਕਦਾ ਹੈ। ਕਿਸੇ ਵੀ ਤਬਦੀਲੀ ਨੂੰ ਤੁਰੰਤ ਵੈੱਬਸਾਈਟ 'ਤੇ ਪੋਸਟ ਕੀਤਾ ਜਾਵੇਗਾ ਅਤੇ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ ਕਿ ਤੁਸੀਂ ਤਬਦੀਲੀਆਂ ਤੋਂ ਬਾਅਦ ਵੈੱਬਸਾਈਟ ਦੀ ਪਹਿਲੀ ਵਰਤੋਂ 'ਤੇ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਦੀਆਂ ਸ਼ਰਤਾਂ ਨੂੰ ਸਵੀਕਾਰ ਕਰ ਲਿਆ ਹੈ। ਤੁਸੀਂ <strong>{process.env.NEXT_PUBLIC_PRIVACY_POLICY_CONTACT!}</strong> 'ਤੇ ਈਮੇਲ ਰਾਹੀਂ <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> ਨਾਲ ਸੰਪਰਕ ਕਰ ਸਕਦੇ ਹੋ।</li>
								</ol>
							)}
							{(locale == 'ur') && (
								<ol>
									<li><strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> اس پرائیویسی پالیسی کو تبدیل کرنے کا حق محفوظ رکھتا ہے جیسا کہ ہم وقتاً فوقتاً ضروری سمجھیں یا جیسا کہ قانون کی ضرورت ہو۔ کسی بھی تبدیلی کو فوری طور پر ویب سائٹ پر پوسٹ کر دیا جائے گا اور سمجھا جاتا ہے کہ آپ نے تبدیلیوں کے بعد ویب سائٹ کے اپنے پہلے استعمال پر رازداری کی پالیسی کی شرائط کو قبول کر لیا ہے۔ آپ <strong>{process.env.NEXT_PUBLIC_APP_NAME!}</strong> سے بذریعہ ای میل <strong>{process.env.NEXT_PUBLIC_PRIVACY_POLICY_CONTACT!}</strong> پر رابطہ کر سکتے ہیں۔</li>
								</ol>
							)}
						</>
					</p>
				</details>
			</div>
		</section>
	)
}