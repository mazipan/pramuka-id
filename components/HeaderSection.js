import Link from 'next/link'
import { useState } from 'react'
import IconPramuka from './IconPramuka'

function Header() {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header className="bg-pramuka">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:flex-no-wrap">
        <div className="flex items-center">
          <IconPramuka color="#fff" className="h-10 w-10 text-nav" />

          <Link href="/">
            <a className="text-xl font-bold text-nav">Buku Saku Pramuka</a>
          </Link>
        </div>

        <button
          className="flex items-center px-3 py-2 text-nav border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
        >
          {[
            { title: 'Beranda', route: '/' },
            { title: 'Tentang', route: '/tentang/' },
          ].map((navigationItem) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
              <Link href={navigationItem.route}>
                <a className="block text-nav">{navigationItem.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
