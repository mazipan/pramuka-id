import Link from 'next/link'

import { HomeIcon, ChevronRightIcon } from '@heroicons/react/solid'

export interface BreadcrumbLevel3Props {
  text: string;
  href: string;
}

function findParent(str: string): BreadcrumbLevel3Props {
  if (str.indexOf('materi-pramuka') >= 0) {
    return {
      text: 'Pramuka',
      href: '/materi-pramuka/'
    }
  }

  if (str.indexOf('materi-kenegaraan') >= 0) {
    return {
      text: 'Kenegaraan',
      href: '/materi-kenegaraan/'
    }
  }

  if (str.indexOf('materi-kecakapan-umum') >= 0) {
    return {
      text: 'Kecakapan Umum',
      href: '/materi-kecakapan-umum/'
    }
  }

  return {
    text: 'Pramuka',
    href: '/materi-pramuka/'
  }
}

function BreadcrumbLevel3({ text, href }: BreadcrumbLevel3Props) {
  const parent = findParent(href)

  return (
    <nav className="flex items-center">
      <Link href="/">
        <a title="Beranda">
          <HomeIcon className="w-8 h-8 bg-primary rounded p-1" />
        </a>
      </Link>

      <ChevronRightIcon className="w-8 h-8" />

      <Link href={parent.href}>
        <a title={parent.text}>
          <span className="">{parent.text}</span>
        </a>
      </Link>

      <ChevronRightIcon className="w-8 h-8" />

      <Link href={href}>
        <a title={text}>
          <span className="">{text}</span>
        </a>
      </Link>
    </nav>
  )
}

export default BreadcrumbLevel3
