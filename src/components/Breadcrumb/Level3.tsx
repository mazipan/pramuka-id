import Link from 'next/link'
import Head from 'next/head'

import { FiChevronRight, FiHome } from 'react-icons/fi'

import { BASE_PATH } from '../../constants'

export interface BreadcrumbLevel3Props {
  text: string
  href: string
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
  const isHaveBasePath = href.indexOf(BASE_PATH) >= 0

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@graph': [
                {
                  '@type': 'BreadcrumbList',
                  name: 'Breadcrumbs',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: 'Beranda',
                      item: BASE_PATH
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: parent.text,
                      item: BASE_PATH + parent.href
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: text,
                      item: isHaveBasePath ? href : BASE_PATH + href
                    }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      <nav className="flex items-center">
        <Link href="/">
          <a title="Beranda">
            <FiHome className="p-1 w-6 h-6 rounded" />
          </a>
        </Link>

        <FiChevronRight className="mx-2 text-sm text-gray-400" />

        <Link href={parent.href}>
          <a title={parent.text}>
            <span className="text-sm truncate">{parent.text}</span>
          </a>
        </Link>

        <FiChevronRight className="mx-2 text-sm text-gray-400" />

        <Link href={href}>
          <a title={text}>
            <span className="text-sm truncate">{text}</span>
          </a>
        </Link>
      </nav>
    </>
  )
}

export default BreadcrumbLevel3
