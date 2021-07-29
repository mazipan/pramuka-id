import Layout from '../components/MainLayout'
import MetaHead from '../components/MetaHead'

import Head from 'next/head'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../utils/index'

import { BASE_PATH, BRAND_TITLE, BRAND_LONG_DESC } from '../constants'

const title = `Tentang`
const desc = `Tentang ${BRAND_TITLE}: ${BRAND_LONG_DESC}`
const url = BASE_PATH + '/tentang'

function AboutPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'http://schema.org',
                '@graph': [
                  {
                    '@type': 'BreadcrumbList',
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
                        name: 'Tentang',
                        item: `${BASE_PATH}/tentang`
                      }
                    ]
                  }
                ]
              })
            }}
          />
        </Head>

        <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
          <div className="space-y-6 md:w-1/2">
            {[
              {
                heading: `Apa sebenarnya website ini?`,
                body: `Website ini merupakan Buku Saku Pramuka digital berupa website, berisikan materi yang telah dikumpulkan dari berbagai sumber.`
              }
            ].map((section) => (
              <div key={section.heading}>
                <h2 className="mb-3 text-xl font-bold">{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>

          <div className="md:w-1/2">
            <img alt="Berkemah" className="w-full rounded" src="/assets/5930.jpeg" />
          </div>
        </div>
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default AboutPage
