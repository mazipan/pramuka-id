import React from 'react'

import Layout from '../components/MainLayout'
import MetaHead from '../components/MetaHead'
import ChapterNavigation from '../components/ChapterNavigation'
import ChapterTitle from '../components/ChapterTitle'
import PedomanSkuData from '../data/pedoman-sku'
import { BASE_PATH } from '../constants'

const title = 'Pedoman SKU | Buku Saku Pramuka Digital'
const desc = 'Baca pedoman umum untuk menyelesaikan SKU di Buku Saku Pramuka Digital'
const url = BASE_PATH + '/pedoman-sku/'

function PedomanSkuPage() {
  const [collapsed, setCollapsed] = React.useState(-1)

  const handleCollapse = (index) => {
    if (collapsed === index) {
      setCollapsed(-1)
    } else {
      setCollapsed(index)
    }
  }

  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <ChapterNavigation nextLink="/sandi-ambalan/" />
      <ChapterTitle subTitle="Pedoman SKU" title="Materi Pramuka" />

      <div className="text-left">
        {PedomanSkuData.map((section, index) => (
          <div key={section.typeDetail} className="mt-4 rounded overflow-hidden shadow-lg">
            <div className="w-full px-6 py-4 flex items-center justify-between flex-wrap">
              <div className="font-bold text-xl min-w-250">{section.typeDetail}</div>

              <button
                onClick={() => {
                  handleCollapse(index)
                }}
                className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded inline-flex items-center"
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
                <ul className="text-gray-700">
                  {section.data.map((step, indexStep) => (
                    <li key={step.title}>
                      <p className="font-bold">
                        {indexStep + 1}. {step.title}
                      </p>
                      <p className="ml-4 mb-4 mt-2 text-base">Artinya: {step.meaning}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ChapterNavigation nextLink="/seragam-pramuka/" />
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

export default PedomanSkuPage
