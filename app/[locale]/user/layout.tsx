'use client'
import { ReactNode, Children, isValidElement, cloneElement, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { UseUserResponse } from '@/lib'
import styles from '@/app/[locale]/layout.module.scss'


export default function UserLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const parts = pathname.split('/');
  const localeParam = parts[1];
  const [locale, setLocale] = useState<string | undefined>(localeParam);
  const [_, UserResponse, ___] = UseUserResponse({ redirectToIfNotFound: true, redirectToIfNotFoundUrl: `/${locale}/security/login` })  
  const [BackgroundVideoUrl, SetBackgroundVideoUrl] = useState<string>('/videos/sample0.mp4')
  let theme = UserResponse?.Theme ?? process.env.NEXT_PUBLIC_DEFAULT_THEME!
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
        <aside className={`${styles.pktheme} ${themeCSS} ${dontShowBackgroundVideoCSS}  ${UserResponse?.Theme}`} >
          {children}
        </aside>
      </details>
      <aside>
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
        {showVideoFilter &&
          <figure className={styles.pklightpkfullscreenbackgroundlightfilter}>
            &nbsp;
          </figure>
        }
      </aside>
    </>
  )
}
