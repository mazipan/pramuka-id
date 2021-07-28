import Link from 'next/link'
import Head from 'next/head'

import IconPramuka from './IconPramuka'
import useTheme from '../hooks/useTheme'
import { BRAND_TITLE } from '../constants'

function Header() {
  const { NextThemeIcon, nextTheme, onSwitchTheme, theme } = useTheme()

  return (
    <>
      <Head>
        <meta name="theme-color" content={theme === 'light' ? '#7B341E' : '#101623'} />
      </Head>
      <header className="fixed top-0 z-10 w-full bg-pramuka">
        <div className="flex flex-wrap justify-between items-center p-2 mx-auto max-w-4xl md:flex-no-wrap">
          <div className="flex items-center">
            <IconPramuka color="#fff" className="w-10 h-10 text-nav" />

            <Link href="/">
              <a title={BRAND_TITLE} className="text-xl font-bold text-nav">
                {BRAND_TITLE}
              </a>
            </Link>
          </div>

          <div className="flex items-center">
            <button
              className="py-2 px-4 font-bold rounded hover:bg-opacity-10 focus:bg-opacity-10"
              onClick={onSwitchTheme}
              type="button"
              aria-label={`Switch to ${nextTheme}`}
            >
              {NextThemeIcon}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
