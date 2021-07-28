import Link from 'next/link'

import IconPramuka from './IconPramuka'

import useTheme from '../hooks/useTheme'

function Header() {
  const { NextThemeIcon, nextTheme, onSwitchTheme } = useTheme()

  return (
    <header className="fixed top-0 z-10 w-full bg-pramuka">
      <div className="flex flex-wrap justify-between items-center p-2 mx-auto max-w-4xl md:flex-no-wrap">
        <div className="flex items-center">
          <IconPramuka color="#fff" className="w-10 h-10 text-nav" />

          <Link href="/">
            <a className="text-xl font-bold text-nav">Buku Saku Pramuka</a>
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
  )
}

export default Header
