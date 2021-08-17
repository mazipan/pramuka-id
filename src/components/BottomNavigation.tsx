import { createElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FiHome, FiBriefcase, FiLayers, FiNavigation, FiDownload } from 'react-icons/fi'

const items = [
  {
    text: 'Beranda',
    icons: FiHome,
    href: '/'
  },
  {
    text: 'Kenegaraan',
    icons: FiBriefcase,
    href: '/materi-kenegaraan'
  },
  {
    text: 'Pramuka',
    icons: FiLayers,
    href: '/materi-pramuka'
  },
  {
    text: 'Kecakapan',
    icons: FiNavigation,
    href: '/materi-kecakapan-umum'
  },
  {
    text: 'Unduh',
    icons: FiDownload,
    href: '/download'
  }
]

function BottomNavigation() {
  const router = useRouter()
  const path = router.asPath

  const isActive = (p: string) => {
    return p === '/' ? p === path : path.indexOf(p) >= 0
  }

  return (
    <nav className="fixed bottom-0 z-10 p-1 w-full bg-white border-t border-gray-30 dark:bg-pramuka">
      <div className="flex flex-wrap justify-between items-center mx-auto sm:max-w-xl md:flex-no-wrap">
        <ul className="flex justify-evenly items-center w-full">
          {items.map((item) => (
            <li className="relative" key={item.href}>
              <Link href={item.href}>
                <a
                  title={item.text}
                  className={`inline-flex flex-col items-center justify-center text-center h-12 rounded-md ${
                    isActive(item.href)
                      ? 'text-yellow-900 dark:text-yellow-600'
                      : 'text-gray-600 dark:text-gray-300'
                  } font-semibold`}
                >
                  {createElement(item.icons, {
                    className: 'w-6 h-6',
                    'aria-hidden': true
                  })}
                  <span className="text-xs truncate">{item.text}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default BottomNavigation
