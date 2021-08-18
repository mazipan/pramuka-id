import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import PedomanSkuDataJson from '../../data/pedoman-sku'
import { BASE_PATH } from '../../constants'
import Expansion from '../../components/Expansion'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Pedoman SKU'
const desc = 'Baca pedoman umum untuk menyelesaikan SKU di Buku Saku Pramuka'
const url = BASE_PATH + '/materi-kecakapan-umum/pedoman-sku/'

function PedomanSkuPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Pedoman SKU" href="/materi-pramuka/pedoman-sku/" />
        <ChapterTitle subTitle="Pedoman SKU" title="Materi Pramuka" />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-left">
          {PedomanSkuDataJson.map((section, index) => (
            <Expansion
              key={index}
              initialState={true}
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
        <SeoText text={desc} />
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default PedomanSkuPage
