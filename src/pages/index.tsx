import Link from 'next/link'
import Layout from '../components/MainLayout'
import DataDaftarIsi from '../data/daftar-isi'
import { reportCoreWebVitals, ReportCoreWebVitalsParams } from '../utils/index'

import { BASE_PATH } from '../constants'

import Head from 'next/head'

function DaftarIsiPage() {
  return (
    <Layout>
      <>
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'http://schema.org',
                '@type': 'WebSite',
                id: BASE_PATH,
                name: 'Buku Saku Pramuka',
                url: BASE_PATH
              })
            }}
          />
        </Head>

        <div className="text-center">
          <h1 className="mt-8 text-3xl font-bold md:text-4xl">Buku Saku Pramuka Digital</h1>
        </div>
        <div className="text-left">
          {DataDaftarIsi.map((bab) => (
            <div key={bab.text}>
              <h2 className="mt-8 mb-4 text-xl font-medium md:text-2xl">{bab.text}</h2>
              {bab.children && bab.children.length > 0 && (
                <ul>
                  {bab.children.map((babChild) => (
                    <li className="mb-2" key={babChild.href}>
                      <h3 className="mb-2 font-medium text-link">
                        <Link href={babChild.href}>
                          <a title={babChild.text}>{babChild.text}</a>
                        </Link>
                      </h3>

                      {/*
                      // @ts-ignore */}
                      {babChild.children && babChild.children.length > 0 && (
                        <ol>
                          {/*
                        // @ts-ignore */}
                          {babChild.children.map((li, index) => (
                            <li key={index} className="ml-4 text-link">
                              <Link href={li.href}>
                                <a title={li.text}>{li.text}</a>
                              </Link>
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-8">
            Tidak menemukan yang kamu cari? Kamu bisa membuat permintaan penambahan data baru
            melalui
            {` `}
            <a
              href="https://github.com/mazipan/buku-saku-pramuka/issues/new"
              target="_blank"
              rel="noopenner noreferrer"
              className="text-link-secondary"
            >
              Github issue
            </a>
          </div>
        </div>
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default DaftarIsiPage
