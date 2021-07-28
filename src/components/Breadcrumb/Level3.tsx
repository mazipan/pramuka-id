import Link from 'next/link'
import Head from 'next/head'

import { HomeIcon, ChevronRightIcon } from '@heroicons/react/solid'

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
                      item: parent.href
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: text,
                      item: href
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
            <HomeIcon className="p-1 w-8 h-8 rounded bg-primary" />
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
    </>
  )
}

export default BreadcrumbLevel3
