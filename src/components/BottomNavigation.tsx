import { createElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  BriefcaseIcon,
  DownloadIcon,
  GlobeAltIcon,
  HandIcon,
  HomeIcon
} from '@heroicons/react/solid'

const items = [
  {
    text: 'Beranda',
    icons: HomeIcon,
    href: '/'
  },
  {
    text: 'Kenegaraan',
    icons: BriefcaseIcon,
    href: '/materi-kenegaraan'
  },
  {
    text: 'Pramuka',
    icons: GlobeAltIcon,
    href: '/materi-pramuka'
  },
  {
    text: 'Kecakapan',
    icons: HandIcon,
    href: '/materi-kecakapan-umum'
  },
  {
    text: 'Unduh',
    icons: DownloadIcon,
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
    <nav className="fixed bottom-0 z-10 p-1 w-full bg-pramuka">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-4xl md:flex-no-wrap">
        <ul className="flex justify-evenly items-center w-full">
          {items.map((item) => (
            <li className="relative" key={item.href}>
              <Link href={item.href}>
                <a
                  title={item.text}
                  className={`inline-flex flex-col items-center justify-center text-center h-12 rounded-md ${
                    isActive(item.href) ? 'text-gray-100' : 'text-gray-400'
                  } font-semibold hover:text-gray-100`}
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
