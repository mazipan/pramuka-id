import Head from 'next/head'
import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { ChevronUpIcon } from '@heroicons/react/solid'

import Header from './HeaderSection'
import BottomNavigation from './BottomNavigation'
import { BASE_PATH } from '../constants'
import { scrollTo } from '../utils'

const title = 'Buku Saku Pramuka Digital'
const desc =
  'Buku saku pramuka digital dalam bentuk web, ✅ GRATIS, ✅ tanpa iklan, ❌ tidak perlu install Aplikasi lagi'
const url = BASE_PATH
const metaImg = BASE_PATH + '/assets/5930.jpg'
const authorName = 'Irfan Maulana'

function Layout(props) {
  const [upStyle, setUpStyle] = useState({
    transition: 'all 200ms ease-in',
    opacity: 0,
    transform: 'translate(0, -50%)',
  })

  useScrollPosition(({ currPos }) => {
    const isVisible = currPos.y < -400

    const shouldBeStyle = {
      opacity: isVisible ? 1 : 0,
      visibility: isVisible ? 'visible' : 'hidden',
      transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
      transform: isVisible ? 'none' : 'translate(0, -50%)',
    }

    if (JSON.stringify(shouldBeStyle) === JSON.stringify(upStyle)) return

    setUpStyle(shouldBeStyle)
  }, [])

  return (
    <>
      <Head>
        <meta name="theme-color" content={'#7B341E'} />
        <title key="title">{title}</title>

        <meta name="author" content={authorName} />
        <meta key="description" name="description" content={desc} />
        <meta name="keywords" content="Pramuka, Buku Saku, Buku Saku Digital" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={metaImg} />
        <meta name="twitter:image:alt" content={title} />
        <meta name="twitter:site" content="@Maz_Ipan" />
        <meta key="twitter:title" name="twitter:title" content={title} />
        <meta key="twitter:description" name="twitter:description" content={desc} />

        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:description" property="og:description" content={desc} />
        <meta key="og:url" property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metaImg} />

        <link rel="apple-touch-icon" sizes="180x180" href={`${url}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${url}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${url}/favicon-16x16.png`} />
        <link rel="manifest" href={`${url}/site.webmanifest`} />
      </Head>
      <div className={`flex flex-col min-h-screen text-primary`}>
        <Header />

        <main className="flex-1 w-full max-w-4xl p-4 mx-auto mb-16 mt-14">{props.children}</main>

        <BottomNavigation />

        <button
          className="fixed bg-card rounded-full shadow-lg p-2 focus:outline-none overflow-hidden"
          style={{ right: '1.5rem', bottom: '12%', ...upStyle }}
          onClick={() => scrollTo('__next')}
        >
          <ChevronUpIcon className="h-6 w-6"/>
        </button>
      </div>
    </>
  )
}

export default Layout
