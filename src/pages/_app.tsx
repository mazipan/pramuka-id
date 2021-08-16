import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import NProgress from 'nprogress'
import { DefaultSeo } from 'next-seo'

import 'nprogress/nprogress.css'
import '../css/index.css'

import { BRAND_TITLE, BRAND_LONG_DESC, BASE_PATH } from '../constants'

const metaImg = BASE_PATH + '/assets/5930.jpeg'

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleStart = (_: string, { shallow }: { shallow: boolean }) => {
      if (!shallow) {
        NProgress.start()
      }
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <>
      <DefaultSeo
        canonical={`${BASE_PATH}${router.asPath || '/'}`}
        description={BRAND_LONG_DESC}
        openGraph={{
          type: 'website',
          locale: 'id_ID',
          title: BRAND_TITLE,
          description: BRAND_LONG_DESC,
          site_name: BRAND_TITLE,
          images: [
            {
              url: metaImg,
              alt: BRAND_TITLE,
              height: 495,
              width: 800
            }
          ]
        }}
        title={BRAND_TITLE}
        titleTemplate={`%s | ${BRAND_TITLE}`}
        twitter={{
          handle: '@Maz_Ipan',
          site: '@Maz_Ipan',
          cardType: 'summary_large_image'
        }}
      />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
