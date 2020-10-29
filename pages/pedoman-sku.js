import React from 'react'

import Layout from '../components/MainLayout'
import MetaHead from '../components/MetaHead'
import ChapterNavigation from '../components/ChapterNavigation'
import ChapterTitle from '../components/ChapterTitle'
import PedomanSkuData from '../data/pedoman-sku'
import { BASE_PATH } from '../constants'
import Expansion from '../components/Expansion'

const title = 'Pedoman SKU | Buku Saku Pramuka Digital'
const desc = 'Baca pedoman umum untuk menyelesaikan SKU di Buku Saku Pramuka Digital'
const url = BASE_PATH + '/pedoman-sku/'

function PedomanSkuPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <ChapterNavigation nextLink="/seragam-pramuka/" />
      <ChapterTitle subTitle="Pedoman SKU" title="Materi Pramuka" />

      <div className="text-left">
        {PedomanSkuData.map((section, index) => (
          <Expansion
            key={index}
            index={index}
            title={section.typeDetail}
            value={section.data.map((step, indexStep) => (
              <li key={step.title}>
                <p className="font-bold">
                  {indexStep + 1}. {step.title}
                </p>
                <p className="ml-4 mb-4 mt-2 text-base">Artinya: {step.meaning}</p>
              </li>
            ))}
          />
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
