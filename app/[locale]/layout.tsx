//TODO: See layout.module.css for reason multiple scss files are included here
import {ReactNode, Suspense} from 'react'
import Container from 'react-bootstrap/Container'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/@progress/kendo-theme-bootstrap/scss/all.scss'
import styles from '@/app/[locale]/layout.module.scss'
import { DataUtils, LocalisationUtils } from '@/lib'
import { Loading, TopMenu } from '@/components'

export async function generateStaticParams() {  
  try {    
    const languages = await DataUtils.GetLanguages(process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? LocalisationUtils.DefaultLocale)
    const locales = languages.map(language => language.Value)
    return locales.map((locale: string) => ({ locale: locale }))            
  } catch (error: any) {
    console.log(`RootLayout.generateStaticParams failed with this error:\t\n${error.toString()}`)
    throw new Error(`RootLayoutgenerateStaticParams failed`, error)
  }
}

export const metadata = {
  title: 'DecodeOnline - Home',
  description: 'David Ezechukwu',
}

export default async function RootLayout({ children, params}: {children: React.ReactNode, params: Promise<{ locale: string }>}  ) {  
  const _params = await params;
  const locale = Array.isArray(_params?.locale) ? _params.locale[0] : _params?.locale;  
  const languages = await DataUtils.GetLanguages(locale)
  const selectedLanguage = languages.find(l => l.Value == locale)
  return (
    <html dir={selectedLanguage?.IsRTL ? 'rtl' : 'ltl'} className={styles.html}>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
      <body className={styles.pkbody}>
        <Suspense fallback={Loading()}>                                    
          <ToastContainer
            closeButton={true}
            newestOnTop={true}
            hideProgressBar={false}
            position='top-center'
          />
          <Container className={styles.pkcontainer}>
            <TopMenu languages={languages} locale={locale as string} />          
            <main role='main' className={styles.pkmain}>                        
              {children}
            </main>          
          </Container>
          {/* {<article>
            <div className={styles.pkbubblecontainer}>
              <p className={styles.pkbubblex1}></p>
              <p className={styles.pkbubblex2}></p>
              <p className={styles.pkbubblex3}></p>
              <p className={styles.pkbubblex4}></p>
              <p className={styles.pkbubblex5}></p>
              <p className={styles.pkbubblex6}></p>
              <p className={styles.pkbubblex7}></p>
              <p className={styles.pkbubblex8}></p>
              <p className={styles.pkbubblex9}></p>
              <p className={styles.pkbubblex10}></p>
            </div>
          </article>} */}
        </Suspense>
      </body>
      <script src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js' type='application/javascript' defer={true} async={true} />
    </html>
  );
}



