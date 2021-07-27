import { createElement } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

import { HomeIcon, BriefcaseIcon, GlobeAltIcon, HandIcon, DownloadIcon } from '@heroicons/react/solid'

const items = [{
  text: "Beranda",
  icons: HomeIcon,
  href: "/"
}, {
  text: "Kenegaraan",
  icons: BriefcaseIcon,
  href: "/materi-kenegaraan"
},{
  text: "Pramuka",
  icons: GlobeAltIcon,
  href: "/materi-pramuka"
},{
  text: "Kecakapan",
  icons: HandIcon,
  href: "/materi-kecakapan-umum"
},{
  text: "Unduh",
  icons: DownloadIcon,
  href: "/download"
}]

function BottomNavigation() {
  const router = useRouter()
  const path = router.asPath;

  const isActive = (p) => {
    return p === '/' ? (p === path) : (path.indexOf(p) >= 0) 
  }

  return (
    <nav className="fixed bottom-0 w-full p-1 z-10 bg-pramuka">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto md:flex-no-wrap">
        <ul className="flex items-center justify-evenly w-full">
          {items.map(item => (
            <li className="relative" key={item.href}>
              <Link href={item.href}>
                <a title={item.text} className={`inline-flex flex-col items-center justify-center text-center h-12 rounded-md ${isActive(item.href) ? 'text-gray-100' : 'text-gray-400'} font-semibold hover:text-gray-100`}>
                  {createElement(item.icons, {
                    className: "w-6 h-6",
                    "aria-hidden": true,
                  })}
                  <span className="text-xs truncate">{item.text}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default BottomNavigation;
