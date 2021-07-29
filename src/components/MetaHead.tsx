import Head from 'next/head'
import { NextSeo } from 'next-seo'

interface MetaHeadProps {
  url: string
  title: string
  desc: string
}

function MetaHead({ title, desc, url }: MetaHeadProps) {
  return (
    <>
      <NextSeo
        openGraph={{
          title: title,
          url: url,
          description: desc
        }}
        title={title}
        description={desc}
        canonical={url}
      />

      <Head>
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
    </>
  )
}

export default MetaHead
