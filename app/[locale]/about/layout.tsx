'use client'
import {ReactNode, Children, isValidElement, cloneElement, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { UseUserResponse } from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'

type AboutLayoutProps = {
  children: ReactNode;  
};

export default function AboutLayout({ children }: AboutLayoutProps ) {
  const pathname = usePathname();
  const parts = pathname.split('/');
  const localeParam = parts[1]; 
  const [locale, setLocale] = useState<string | undefined>(localeParam);
  const [Authenticating, UserResponse, ___] = UseUserResponse()  
  const [BackgroundVideoUrl, SetBackgroundVideoUrl] = useState<string>('')
  let theme = UserResponse?.Theme ?? process.env.NEXT_PUBLIC_ABOUT_THEME!
  let themeCSS = styles[`pk${theme.toLocaleLowerCase()}`]  
  let dontShowBackgroundVideoCSS = ''
  if (UserResponse && UserResponse.IsAuthenticated && !UserResponse!.UserDisplaySettings!.ShowBackgroundVideo ){
    dontShowBackgroundVideoCSS = styles.pkdontshowbackgroundvideo 
  }
  const [showVideoFilter, setShowVideoFilter] = useState( UserResponse?.Theme == 'light' && UserResponse?.UserDisplaySettings?.ShowBackgroundVideo)
  
  useEffect(() =>{    
    if (!Authenticating && UserResponse?.IsAuthenticated){      
      setShowVideoFilter(UserResponse?.Theme == 'light' && UserResponse?.UserDisplaySettings?.ShowBackgroundVideo)
      theme = UserResponse?.Theme ?? process.env.NEXT_PUBLIC_ABOUT_THEME!
    }
  }, [UserResponse, Authenticating])

  useEffect(() => {    
    const videoIndex = Math.floor(Date.now() % 20); 
    SetBackgroundVideoUrl(`/videos/sample${videoIndex}.mp4`);
  }, []); 
  
  return (
    <>
      <details  open={true} className={styles.pkcollapser}>            
        <summary className={styles.pkcollapsersummary}></summary>
        <aside className={`${styles.pktheme} ${themeCSS} ${dontShowBackgroundVideoCSS}`} >
          {children}                     
        </aside>
      </details>
      <aside>
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
      </aside>
    </>
  )
}
