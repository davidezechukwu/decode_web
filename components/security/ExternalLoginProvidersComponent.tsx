"use client"
import Image from 'next/image'
import Link from 'next/link'
import { LocalisationUtils } from "@/lib/utils/LocalisationUtils";
import GoogleSVG from '/public/images/google.svg'
import FacebookSVG from '/public/images/facebook.svg'
import NextSVG from '/public/images/next.svg'
import { Copy } from "@/lib/localisation/Copy";
import styles from '@/app/[locale]/layout.module.scss'


export type ExternalLoginProvidersComponentProps = {
    locale: string
    showUsernameLogin: boolean
}

export function ExternalLoginProvidersComponent(props: ExternalLoginProvidersComponentProps) {
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(props.locale)
    const logInAnotehrWay = props.showUsernameLogin ? `/${props.locale}/security/login` : `/${props.locale}/security/externallogin`    
    return (
        <article className={`${styles.pkformcomponent} ${styles.pkExternalLoginProvidersComponent}`}>
            <aside>
                <a
                    href={`${process.env.NEXT_PUBLIC_CORE_API_HOST}/security/externallogin/google`}
                    title={copy.Menus[3].items[8].items[0].Value}
                >
                    <Image src={GoogleSVG} alt={copy.Menus[3].items[8].items[0].Value} width={60} height={60} />
                </a>
                <a
                    href={`${process.env.NEXT_PUBLIC_CORE_API_HOST}/security/externallogin/google`}
                    title={copy.Menus[3].items[8].items[0].Value}
                >
                    <h5>{copy.Menus[3].items[8].items[0].Value}</h5>
                </a>
            </aside>
            {/* <aside>
                <a
                    href={`${process.env.NEXT_PUBLIC_CORE_API_HOST}/security/externallogin/facebook`}
                    title={copy.Menus[3].items[8].items[1].Value}
                >
                    <Image src={FacebookSVG} alt={copy.Menus[3].items[8].items[1].Value} width={60} height={60} />
                </a>
                <a
                    href={`${process.env.NEXT_PUBLIC_CORE_API_HOST}/security/externallogin/facebook`}
                    title={copy.Menus[3].items[8].items[1].Value}
                >
                    <h5>{copy.Menus[3].items[8].items[1].Value}</h5>
                </a>
            </aside> */}
            <aside>
                <Link href={logInAnotehrWay}>
                    <h5>{copy.Common.LoginAnotherWay}</h5>
                </Link>
                <Image src={NextSVG} alt={copy.Common.LoginAnotherWay} width={60} height={60} />
            </aside>
        </article>
    )
}