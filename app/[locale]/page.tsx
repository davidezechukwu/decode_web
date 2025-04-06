'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import {
    gearIcon, /*create*/
    wrenchIcon, /*innovate**/
    gearsIcon, /* simplify */
    linkIcon,  /* unify */    
} from "@progress/kendo-svg-icons";

import { Copy, LocalisationUtils, UseUserResponse } from '@/lib'
import { Stepper, Step, StepProps } from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";
import styles from '@/app/[locale]/layout.module.scss'
import { useEffect, useState } from 'react'


export default function HomePage() {
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
    const [Authenticating, UserResponse, SetUserResponse] = UseUserResponse()
    const backgroundVideoUrl = `/videos/sample${(new Date().getTime() % +process.env.NEXT_PUBLIC_MAX_BACKGROUND_VIDEOS!).toString()}.mp4`
    let theme = UserResponse?.Theme ?? process.env.NEXT_PUBLIC_HOME_THEME!
    let themeCSS = styles[`pk${theme.toLocaleLowerCase()}`]
    let dontShowBackgroundVideoCSS = ''
    if (UserResponse && UserResponse.IsAuthenticated && !UserResponse!.UserDisplaySettings!.ShowBackgroundVideo) {
        dontShowBackgroundVideoCSS = styles.pkdontshowbackgroundvideo
    }
    const [showVideoFilter, setShowVideoFilter] = useState(UserResponse?.Theme == 'light' && UserResponse?.UserDisplaySettings?.ShowBackgroundVideo)

    const items = [
        {
            label: `${copy.Pages.Index.Create}`,
            svgIcon: <SvgIcon icon={gearIcon} />,
            disabled: true
        },
        {
            label: `${copy.Pages.Index.Innovate}`,
            svgIcon: <SvgIcon icon={wrenchIcon} />
        },
        {
            label: `${copy.Pages.Index.Simplify}`,
            svgIcon: <SvgIcon icon={gearsIcon} />
        },
        {
            label: `${copy.Pages.Index.Unify}`,
            svgIcon: <SvgIcon icon={linkIcon} />
        }
    ] as any

    const [Items, SetItems] = useState(items)
    const [ShowStep0, SetShowStep0] = useState(true)
    const [ShowStep1, SetShowStep1] = useState(false)
    const [ShowStep2, SetShowStep2] = useState(false)
    const [ShowStep3, SetShowStep3] = useState(false)
    
    const DisableFirstStep = (step: number) => {
        SetItems((prevItems: any) =>
            prevItems.map((item: any, index: number) =>            
            index === 0 ? { ...item, disabled: (step === 0 ? true : false)} : { ...item, disabled: false}
        ))
    }

    const [Value, SetValue] = useState(0)
    const HandleStepChange = (e : any) => {        
        SetValue(e.value);
        SetShowStep0(false)
        SetShowStep1(false)    
        SetShowStep2(false)    
        SetShowStep3(false)        
        if (e.value === 0)SetShowStep0(true)
        if (e.value === 1)SetShowStep1(true)    
        if (e.value === 2)SetShowStep2(true)    
        if (e.value === 3)SetShowStep3(true)            
        
        DisableFirstStep(e.value)
    }

    const BigStep = (props: any)  => {
        return (
          <Step {...props}>
            <div className={`pkbigstepperstepicon`} >
              <span>{props.svgIcon}</span>
            </div>
            <span className={`pkbigsteppersteplabel`}>{props.label}</span>
          </Step>
        );
    }

    useEffect(() => {
        if (UserResponse?.IsAuthenticated) {
            setShowVideoFilter(UserResponse?.Theme == 'light' && UserResponse?.UserDisplaySettings?.ShowBackgroundVideo)
        }
    }, [UserResponse])

    
    return (
        <>
            <details open={true} className={styles.pkcollapser}>
                <summary className={styles.pkcollapsersummary}></summary>
                <section className={`${styles.pktheme} ${themeCSS} ${dontShowBackgroundVideoCSS} ${styles.pkhomepagemaincontent}`}>
                    <h1>{copy.Pages.Index.MainHeading}</h1>
                    <div>
                        <Stepper 
                            value={Value} 
                            onChange={HandleStepChange}  
                            items={Items}  
                            item={BigStep} 
                            className={`pkbigstepperstep`}                                                       
                        />
                    </div>
                    <div className={`pkstepperinfo`} >
                        {ShowStep0 &&                         
                            <aside className={`pkclearinfo`} >
                                <h2><SvgIcon icon={gearIcon} className={`pkstepperheadingicon`} />{copy.Pages.Index.Create}</h2>
                                {`${copy.Pages.Index.CreateInfo1}`}
                                <ul id='pkfeatureslist'>
                                    <li>{`${copy.Pages.Index.CreateInfo2}`}</li>
                                    <li>{`${copy.Pages.Index.CreateInfo3}`}</li>
                                    <li>{`${copy.Pages.Index.CreateInfo4}`}</li>
                                    <li>{`${copy.Pages.Index.CreateInfo5}`}</li>
                                    <li>{`${copy.Pages.Index.CreateInfo6}`}</li>
                                    <li>{`${copy.Pages.Index.CreateInfo7}`}</li>
                                    <li>{`${copy.Pages.Index.CreateInfo8}`}</li>
                                    <li>{`${copy.Pages.Index.CreateInfo9}`}</li>
                                    <li>{`${copy.Pages.Index.CreateInfo10}`}</li>                                    
                                </ul>
                                {!Authenticating && !UserResponse?.IsAuthenticated && 
                                    <>                                        
                                        <h6>
                                        <Link className='pkwhitebackground' href={`/${locale}/security/register`}>{copy.Common.Register}</Link>&nbsp;{`${copy.Pages.Index.Log1}`}&nbsp;
                                        <Link className='pkwhitebackground' href={`/${locale}/security/login`}>{copy.Pages.Authentication.Login.PageTitle}</Link>&nbsp;{`${copy.Pages.Index.Log2}`}&nbsp;
                                        <Link className='pkwhitebackground' href={`/${locale}/security/externallogin`}>{copy.Pages.Authentication.Login.PageTitle}</Link>&nbsp;{`${copy.Pages.Index.Log3}`}&nbsp;
                                        </h6>
                                    </>
                                }
                            </aside>
                        }
                        {ShowStep1 && 
                            <aside>
                                <h2><SvgIcon icon={wrenchIcon} className={`pkstepperheadingicon`} />{copy.Pages.Index.Innovate}</h2>
                                {`${copy.Pages.Index.InnovateInfo}`}
                            </aside>
                        }
                        {ShowStep2 && 
                             <aside>
                                <h2><SvgIcon icon={gearsIcon} className={`pkstepperheadingicon`} />{copy.Pages.Index.Simplify}</h2>
                                {`${copy.Pages.Index.SimplifyInfo}`}
                                {!Authenticating && !UserResponse?.IsAuthenticated && 
                                    <>                                        
                                       <strong>&nbsp;<Link href={`/${locale}/security/register`}>{copy.Common.Register}</Link>&nbsp;</strong>{`${copy.Pages.Index.Log1}`}<strong>&nbsp;<Link href={`/${locale}/security/login`}>{copy.Pages.Authentication.Login.PageTitle}</Link>&nbsp;</strong>{`${copy.Pages.Index.Log2}`}&nbsp;<strong><Link href={`/${locale}/security/externallogin`}>{copy.Pages.Authentication.Login.PageTitle}</Link>&nbsp;</strong>{`${copy.Pages.Index.Log3}`}&nbsp;                                        
                                    </>
                                }
                            </aside>
                        }
                        {ShowStep3 && 
                            <aside>
                                <h2><SvgIcon icon={linkIcon} className={`pkstepperheadingicon`} />{copy.Pages.Index.Unify}</h2>
                                <>
                                    {`${copy.Pages.Index.UnifyInfo1}`}&nbsp;<Link href={process.env.NEXT_PUBLIC_CORE_API_HOST!} title={copy.Common.Api} target='_blank'>{copy.Common.Api}</Link>&nbsp;{`${copy.Pages.Index.UnifyInfo2}`}
                                </>                                
                            </aside>
                        }
                    </div>
                    {!Authenticating && !UserResponse?.IsAuthenticated && (
                        <>
                            <div className={`pksimplepagelinks`}>
                                <h5><Link href={`${process.env.NEXT_PUBLIC_CORE_API_HOST}/explorer/`} target='_blank'>{copy.Common.Api}</Link></h5>
                                <h5><Link href={`/${locale}/security/login`}>{copy.Pages.Authentication.Login.PageTitle}</Link></h5>
                                <h5><Link href={`/${locale}/security/register`}>{copy.Pages.Authentication.Register.PageTitle}</Link></h5>
                                <h5><Link href={`/${locale}/security/forgotpassword`}>{copy.Pages.Authentication.ForgotPassword.PageTitle}</Link></h5>                                
                                <h5><Link href={`/${locale}/security/externallogin`}>{copy.Pages.Authentication.ExternalLogin.PageTitle}</Link></h5>                            
                            </div>

                            <figure className={styles.pkcomponent}>
                                <div className={styles.pkfullscreenbackground}>
                                    <video loop={true} muted={true} autoPlay={true} className={styles.pkfullscreenbackgroundvideo} >
                                        <source src={backgroundVideoUrl} type="video/mp4" />
                                    </video>
                                </div>
                            </figure>
                        </>
                    )}
                    {UserResponse?.IsAuthenticated && (
                        <>
                            <div className={`pksimplepagelinks`}>
                                <h5><Link href={`/${locale}/user`}>{copy.Pages.User.IndexPageMainHeading}</Link></h5>                                
                            </div>
                            {UserResponse?.UserDisplaySettings?.ShowBackgroundVideo &&
                                <figure className={styles.pkcomponent}>
                                    <div className={styles.pkfullscreenbackground}>
                                        <video loop={true} muted={true} autoPlay={true} className={styles.pkfullscreenbackgroundvideo} >
                                            <source src={backgroundVideoUrl} type="video/mp4" />
                                        </video>
                                    </div>
                                </figure>
                            }
                        </>
                    )}
                </section>
            </details>
            <section>
                <figure className={styles.pkcomponent}>
                    <div className={styles.pkfullscreenbackground}>
                        <video loop={true} muted={true} autoPlay={true} className={styles.pkfullscreenbackgroundvideo} >
                            <source src={backgroundVideoUrl} type="video/mp4" />
                        </video>
                    </div>
                </figure>
                {showVideoFilter &&
                    <figure className={styles.pklightpkfullscreenbackgroundlightfilter}>
                        &nbsp;
                    </figure>
                }
            </section>
            <style>{`
            .pkwhitebackground,
            a.pkwhitebackground,
            p ul li a.pkwhitebackground,
            #pkfeatureslist p ul li a.pkwhitebackground
            {
                color: blue !important;
            }

            p a {
                color: blue !important;
            }
            p a:hover {
                color: royalblue !important;                
            }
            #pkfeatureslist{
                list-style: square;
                li{
                    margin: 0 1rem;
                    font-size: smaller;
                }
            }
            .pksimplepagelinks{
                margin: 3rem 3rem;
                gap: 2rem
            }            

            .pksimplepagelinks{
                margin: 3rem 3rem;
                gap: 2rem
            }            
         

            @media (max-width: 999px) {
                .pkstepperheadingicon{
                    width: 24px;
                    height: 24px;
                }
            }


            @media (min-width: 1000px) {
                .pkstepperheadingicon{
                    width: 36px;
                    height: 36px;
                }
            }
           
            .pkbigstepperstepicon:hover{
                border-color: #ff9933;
                background: -webkit-linear-gradient(-180deg, #ffffcc, #ffffff, #ccccff);
                background: -o-linear-gradient(-180deg, #ffffcc, #ffffff, #ccccff);
                background: -moz-linear-gradient(-180deg, #ffffcc, #ffffff, #ccccff);
                background: linear-gradient(-180deg, #ffffcc, #ffffff, #ccccff);
                .k-svg-i-gear{
                    svg {
                        -ms-transform: rotate(90deg); /* IE 9 */
                        -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
                        transform: rotate(90deg);
                    }
                }

            }
            .pkstepperinfo{
                margin: 3rem 3rem;
                padding: 2rem;
                h2 {
                    .k-svg-icon { height: 36px; height: 36px;} 
                }
            }

            @media (max-width: 999px) {
                .pkbigstepperstep .k-progressbar {
                    height: 4px;
                    top: 20px;
                }
                .selector:not(*:root){
                    .pkbigstepperstep .k-progressbar {
                        height: 4px;
                        top: 40px;
                    }
                }
            }
            @media (min-width: 1000px) {
                .pkbigstepperstep .k-progressbar {
                    height: 4px;
                    top: 55px;
                }
            }
            // .pkbigstepperstepicon {
            //     width: 50px;
            //     height: 50px;
            //     border-radius: 25px;                    
            // }

            
            @media (max-width: 999px) {                            
                .pkbigstepperstepicon .k-svg-icon {
                    width:36px !important;
                    height: 36px !important;                    
                }
                .selector:not(*:root){
                    .pkbigstepperstepicon .k-svg-icon {
                        width:80px !important;
                        height: 80px !important;                    
                    }
                }
            }

            @media (min-width: 1000px) {
                .pkbigstepperstepicon .k-svg-icon {
                    width:92px !important;
                    height: 92px !important;                    
                }
            }


            .pksimplepagelinks{
                margin: 3rem 3rem;
                display: flex;
                direction: row;
                gap: 2rem
            }
            .pkstepperheadingicon{
                width: 42px;
                height: 42px;
            }
            .pkstepperinfo{
                margin: 3rem 3rem;
                background-color: white;
                color: #222;
                padding: 2rem;
                h2 {
                    .k-svg-icon { height: 36px; height: 36px;} 
                }
            }
            // .pkbigstepperstep .k-progressbar {
            //     height: 4px;
            //     top: 50px;
            // }

            .pkbigstepperstep .k-progressbar .k-selected {
                background: linear-gradient(to right, #ffc837, #ff8008);                
            }

            .pkbigstepperstepicon {
                cursor: pointer;
                border: 2px solid blue;                                
                background-clip: padding-box;                
                box-sizing: border-box;
                text-align: center;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background-color: #fff !important;
            }
            
            @media (max-width: 999px) {                            
                .pkbigstepperstepicon {
                    border-radius: 20px;                
                    width: 40px;
                    height: 40px;                    
                }
                .selector:not(*:root){
                    .pkbigstepperstepicon {
                        border-radius: 40px;                
                        width: 80px;
                        height: 80px;                    
                    }
                  }
            }

            @media (min-width: 1000px) {
                .pkbigstepperstepicon {
                    border-radius: 50px;                
                    width: 100px;
                    height: 100px;                    
                }
            }

            .k-step-done .pkbigstepperstepicon{
                border: 2px solid #ffa837;
                background-image: radial-gradient(circle at center, #ffC837 10px, #ff8008);                
            }

            .k-step-current .pkbigstepperstepicon {
                background-image: radial-gradient(circle at center, #ffC837 10px, #ff8008);                
            }

            .k-step-current.k-step-first .pkbigstepperstepicon {
                border: 2px solid blue;
                background-image: unset;
            }

            
            @media (max-width: 999px) {                            
                .pkbigstepperstepicon .k-svg-icon {
                    width: 24px !important;
                    height: 24px !important;
                    color: #00F;
                }
                .selector:not(*:root){
                    .pkbigstepperstepicon .k-svg-icon {
                        width:60px !important;
                        height: 60px !important;
                        color: #00F;
                    }   
                  }
            }

            @media (min-width: 1000px) {
                .pkbigstepperstepicon .k-svg-icon {
                    width: 80px !important;
                    height: 80px !important;
                    color: #00F;
                }
            }

            .pkbigsteppersteplabel {
                cursor: pointer;
                color: #ffffff;
                font-weight: bold;
                text-transform: lowercase;
            }
            .pkbigsteppersteplabel::after {
                content:'.'
            }
            .pkbigsteppersteplabel:hover {                
                color: #ff8008;
                text-decoration: underline;
            }
            `}</style>
        </>
    )
}