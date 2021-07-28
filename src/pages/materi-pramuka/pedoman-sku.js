import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import PedomanSkuData from '../../data/pedoman-sku'
import { BASE_PATH } from '../../constants'
import Expansion from '../../components/Expansion'

const title = 'Pedoman SKU'
const desc = 'Baca pedoman umum untuk menyelesaikan SKU di Buku Saku Pramuka'
const url = BASE_PATH + '/materi-pramuka/pedoman-sku/'

function PedomanSkuPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <BreadcrumbLevel3 text="Pedoman SKU" href="/materi-pramuka/pedoman-sku/" />
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
                <p className="mt-2 mb-4 ml-4 text-base">Artinya: {step.meaning}</p>
              </li>
            ))}
          />
        ))}
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
    nonInteraction: true // avoids affecting bounce rate.
  })
}

export default PedomanSkuPage
