import Head from 'next/head'
import { ReactChild, useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { FiChevronUp } from 'react-icons/fi'

import Header from './HeaderSection'
import FooterSection from './FooterSection'
import BottomNavigation from './BottomNavigation'
import SubmitGhIssue from './SubmitGhIssue'
import { BASE_PATH } from '../constants'
import { scrollTo } from '../utils'
import Script from 'next/script'

const url = BASE_PATH
const authorName = 'Irfan Maulana'

interface LayoutProps {
  children: ReactChild
}

function Layout({ children }: LayoutProps) {
  const [upStyle, setUpStyle] = useState({
    transition: 'all 200ms ease-in',
    opacity: 0,
    transform: 'translate(0, -50%)'
  })

  useScrollPosition(({ currPos }) => {
    const isVisible = currPos.y < -400

    const shouldBeStyle = {
      opacity: isVisible ? 1 : 0,
      visibility: isVisible ? 'visible' : 'hidden',
      transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
      transform: isVisible ? 'none' : 'translate(0, -50%)'
    }

    if (JSON.stringify(shouldBeStyle) === JSON.stringify(upStyle)) return

    setUpStyle(shouldBeStyle)
  }, [])

  return (
    <>
      <Head>
        <meta name="author" content={authorName} />

        <link rel="apple-touch-icon" sizes="72x72" href={`${url}/favicon-72x72.png`} />

        <link rel="icon" type="image/png" sizes="96x96" href={`${url}/favicon-96x96.png`} />
        <link rel="icon" type="image/png" sizes="48x48" href={`${url}/favicon-48x48.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${url}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${url}/favicon-16x16.png`} />

        <meta name="msapplication-TileImage" content={`${url}/favicon-128x128.png`} />

        <link rel="manifest" href={`${url}/manifest.json`} />
      </Head>
      <div className={`flex flex-col min-h-screen text-primary`}>
        <Header />

        <main className="flex-1 p-4 mx-auto mt-14 mb-16 w-full sm:max-w-xl">
          <>
            {children}
            <SubmitGhIssue />
            <FooterSection />
            <Script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5442972248172818"
              crossOrigin="anonymous"
            />
            <ins
              className="adsbygoogle"
              // @ts-ignore
              style="display:block"
              data-ad-format="fluid"
              data-ad-layout-key="-gu-18+5g-2f-83"
              data-ad-client="ca-pub-5442972248172818"
              data-ad-slot="6146990157"
            ></ins>
            <Script
              dangerouslySetInnerHTML={{
                __html: `(adsbygoogle = window.adsbygoogle || []).push({});`
              }}
            />
          </>
        </main>

        <BottomNavigation />

        <button
          type="button"
          aria-label="Scroll to top"
          className="overflow-hidden fixed p-2 rounded-full shadow-lg focus:outline-none bg-card"
          style={{ right: '1.5rem', bottom: '12%', ...upStyle }}
          onClick={() => scrollTo('__next')}
        >
          <FiChevronUp className="w-6 h-6" />
        </button>
      </div>
    </>
  )
}

export default Layout
