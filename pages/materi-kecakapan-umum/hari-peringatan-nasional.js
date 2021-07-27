import React from 'react'

import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import hariNasionalData from '../../data/hari-peringatan-nasional'
import { BASE_PATH } from '../../constants'
import Expansion from '../../components/Expansion'

const title = 'Hari Peringatan | Buku Saku Pramuka Digital'
const desc = 'Hari peringatan nasional, baca selengkapnya di Buku Saku Pramuka Digital'
const url = BASE_PATH + '/materi-kecakapan-umum/salam-pramuka/'

function HariPeringatanNasionalPage() {
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
      <BreadcrumbLevel3 text="Hari Peringatan Nasional" href={url} />
      <ChapterTitle subTitle="Hari Peringatan Nasional" title="Materi Kecakapan Umum" />

      <div className="text-left">
        <p>{hariNasionalData.meaning}</p>
        <div className="mt-4">
          {hariNasionalData.types.map((type, index) => (
            <Expansion
              key={index}
              index={index}
              title={type.title}
              value={
                <>
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
                </>
              }
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export function reportWebVitals({ id, name, label, value }) {
  // eslint-disable-next-line no-undef
  window.ga('send', 'event', {
    eventCategory: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  })
}

export default HariPeringatanNasionalPage
