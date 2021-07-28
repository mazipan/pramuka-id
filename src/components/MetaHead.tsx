import Head from 'next/head'

import { BRAND_TITLE } from '../constants'

interface MetaHeadProps {
  url: string
  title: string
  desc: string
}

function MetaHead({ title, desc, url }: MetaHeadProps) {
  const withBrand = `${title} | ${BRAND_TITLE}`

  return (
    <Head>
      <title key="title">{withBrand} </title>
      <meta key="description" name="description" content={desc} />
      <meta key="twitter:title" name="twitter:title" content={withBrand} />
      <meta key="twitter:description" name="twitter:description" content={desc} />
      <meta key="og:title" property="og:title" content={withBrand} />
      <meta key="og:description" property="og:description" content={desc} />
      <meta key="og:url" property="og:url" content={url} />

      <link rel="canonical" href={url} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                name: title,
                headline: title,
                url: url,
                mainEntityOfPage: url
              }
            ]
          })
        }}
      />
    </Head>
  )
}

export default MetaHead
