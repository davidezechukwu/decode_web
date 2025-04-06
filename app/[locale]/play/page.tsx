'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Copy, LocalisationUtils, UseUserResponse } from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'
import { useEffect, useState } from 'react'
import { PlayComponent } from '@/components/pikinco/PlayComponent';
export default function PlayPage() {
    const params = useParams()
    const locale = (String)(params.locale)
    const copy: Copy = LocalisationUtils.GetLocalisedCopy(locale)
    const [Authenticating, UserResponse, SetUserResponse] = UseUserResponse()
    //const backgroundVideoUrl = `/videos/sample${(new Date().getTime() % +process.env.NEXT_PUBLIC_MAX_BACKGROUND_VIDEOS!).toString()}.mp4`
    const [BackgroundVideoUrl, SetBackgroundVideoUrl] = useState<string>('')
    let theme = UserResponse?.Theme ?? process.env.NEXT_PUBLIC_HOME_THEME!
    let themeCSS = styles[`pk${theme.toLocaleLowerCase()}`]
    let dontShowBackgroundVideoCSS = ''
    if (UserResponse && UserResponse.IsAuthenticated && !UserResponse!.UserDisplaySettings!.ShowBackgroundVideo) {
        dontShowBackgroundVideoCSS = styles.pkdontshowbackgroundvideo
    }
    const [showVideoFilter, setShowVideoFilter] = useState(UserResponse?.Theme == 'light' && UserResponse?.UserDisplaySettings?.ShowBackgroundVideo)
    
   useEffect(() => {
        if (UserResponse?.IsAuthenticated) {
            setShowVideoFilter(UserResponse?.Theme == 'light' && UserResponse?.UserDisplaySettings?.ShowBackgroundVideo)
        }
    }, [UserResponse])

    useEffect(() => {    
        const videoIndex = Math.floor(Date.now() % 20); 
        SetBackgroundVideoUrl(`/videos/sample${videoIndex}.mp4`);
    }, []); 

    return (
        <>
            <details open={true} className={styles.pkcollapser}>
                <summary className={styles.pkcollapsersummary}></summary>
                <section className={`${styles.pktheme} ${themeCSS} ${dontShowBackgroundVideoCSS} ${styles.pkhomepagemaincontent}`}>
                    <h1>{copy.Pages.Index.MainHeading}</h1>
                    <div>
                        <PlayComponent></PlayComponent>
                    </div>
                    
                    {!Authenticating && !UserResponse?.IsAuthenticated && (
                        <>
                            <div className={`pksimplepagelinks`}>
                                <h5><Link href={`/${locale}/security/login`}>{copy.Pages.Authentication.Login.PageTitle}</Link></h5>
                                <h5><Link href={`/${locale}/security/register`}>{copy.Pages.Authentication.Register.PageTitle}</Link></h5>
                                {/* <h5><Link href={`/${locale}/security/forgotpassword`}>{copy.Pages.Authentication.ForgotPassword.PageTitle}</Link></h5>                                
                                <h5><Link href={`/${locale}/security/externallogin`}>{copy.Pages.Authentication.ExternalLogin.PageTitle}</Link></h5>                             */}                          
                            </div>

                            <figure className={styles.pkcomponent}>
                                <div className={styles.pkfullscreenbackground}>
                                    {BackgroundVideoUrl && (
                                        <video loop={true} muted={true} autoPlay={true} className={styles.pkfullscreenbackgroundvideo} >
                                        <source src={BackgroundVideoUrl} type="video/mp4" />
                                        </video>
                                    )}
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
                                    {BackgroundVideoUrl && (
                                        <video loop={true} muted={true} autoPlay={true} className={styles.pkfullscreenbackgroundvideo} >
                                        <source src={BackgroundVideoUrl} type="video/mp4" />
                                        </video>
                                    )}
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
                        {BackgroundVideoUrl && (
                            <video loop={true} muted={true} autoPlay={true} className={styles.pkfullscreenbackgroundvideo} >
                            <source src={BackgroundVideoUrl} type="video/mp4" />
                            </video>
                        )}
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