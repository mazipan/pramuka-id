import Link from 'next/link'

import IconPramuka from './IconPramuka'

import useTheme from '../hooks/useTheme'

function Header() {
  const { NextThemeIcon, nextTheme, onSwitchTheme } = useTheme()

  return (
    <header className="fixed top-0 w-full z-10 bg-pramuka">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-2 mx-auto md:flex-no-wrap">
        <div className="flex items-center">
          <IconPramuka color="#fff" className="h-10 w-10 text-nav" />

          <Link href="/">
            <a className="text-xl font-bold text-nav">Buku Saku Pramuka</a>
          </Link>
        </div>

        <div className="flex items-center">
          <button
            className="hover:bg-opacity-10 focus:bg-opacity-10 font-bold py-2 px-4 rounded"
            onClick={onSwitchTheme}
            type="button"
            alt={`Switch to ${nextTheme}`}
          >
            {NextThemeIcon}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
