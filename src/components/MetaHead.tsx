import Head from 'next/head'

import { BASE_PATH } from '../constants'

interface MetaHeadProps {
  url: string
  title: string
  desc: string
}

function MetaHead({ title, desc, url }: MetaHeadProps) {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="description" name="description" content={desc} />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="twitter:description" name="twitter:description" content={desc} />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={desc} />
      <meta key="og:url" property="og:url" content={url} />

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
                    name: 'Buku Saku Pramuka',
                    item: BASE_PATH
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: { title },
                    item: { url }
                  }
                ]
              },
              {
                '@type': 'WebPage',
                name: { title },
                headline: { title },
                url: { url },
                mainEntityOfPage: { url }
              }
            ]
          })
        }}
      />
    </Head>
  )
}

export default MetaHead
