import React from 'react'

import Layout from '../components/MainLayout'
import MetaHead from '../components/MetaHead'
import ChapterNavigation from '../components/ChapterNavigation'
import ChapterTitle from '../components/ChapterTitle'
import hariNasionalData from '../data/hari-peringatan-nasional'
import { BASE_PATH } from '../constants'

const title = 'Hari Peringatan | Buku Saku Pramuka Digital'
const desc = 'Hari peringatan nasional, baca selengkapnya di Buku Saku Pramuka Digital'
const url = BASE_PATH + '/salam-pramuka/'

function HariPeringatanNasionalPage() {
  const [collapsed, setCollapsed] = React.useState(-1)

  const handleCollapse = (index) => {
    if (collapsed === index) {
      setCollapsed(-1)
    } else {
      setCollapsed(index)
    }
  }

  const renderList = (data, key) => (
    <ol className="list-disc">
      {data.map((dt, index) => (
        <li className="ml-4 text-secondary text-base" key={`${key}-${index}`}>
          {dt}
        </li>
      ))}
    </ol>
  )

  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <ChapterNavigation nextLink="/lagu-lagu-pramuka/" />
      <ChapterTitle subTitle="Hari Peringatan Nasional" title="Materi Kecakapan Umum" />

      <div className="text-left">
        <p>{hariNasionalData.meaning}</p>
        <div className="mt-4">
          {hariNasionalData.types.map((type, index) => (
            <div key={type.key} className="mt-4 rounded overflow-hidden shadow-lg bg-card">
              <div className="w-full px-6 py-4 flex items-center justify-between flex-wrap">
                <div className="font-bold text-xl min-w-250">{type.title}</div>

                <button
                  onClick={() => {
                    handleCollapse(index)
                  }}
                  className="bg-primary hover:bg-secondary text-button py-2 px-4 rounded inline-flex items-center"
                >
                  {collapsed === index ? 'Tutup detail' : 'Lihat detail'}
                  <svg
                    className={`w-4 h-4 ml-2 transition ease-in-out duration-500 transform ${
                      collapsed === index ? '-rotate-180' : 'rotate-0'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>

              <div className={`transition duration-150 ease-in-out ${collapsed === index ? 'block' : 'hidden'}`}>
                <div className="w-full px-6 py-4">
                  {hariNasionalData[type.key]?.description && (
                    <p className="mb-4 text-secondary text-base">{hariNasionalData[type.key].description}</p>
                  )}

                  {hariNasionalData[type.key]?.data
                    ? renderList(hariNasionalData[type.key].data, hariNasionalData[type.key])
                    : hariNasionalData[type.key].months.map((month) => (
                        <div className="mt-4 text-secondary" key={`${hariNasionalData[type.key]}-${month.key}`}>
                          <p className="mb-4 font-bold">{month.title}</p>
                          {renderList(
                            hariNasionalData[type.key][month.key],
                            `${hariNasionalData[type.key]}-${month.key}`
                          )}
                        </div>
                      ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ChapterNavigation nextLink="/lagu-lagu-pramuka/" />
    </Layout>
  )
}

export function reportWebVitals({ id, name, label, value }) {
  ga('send', 'event', {
    eventCategory: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  })
}

export default HariPeringatanNasionalPage
