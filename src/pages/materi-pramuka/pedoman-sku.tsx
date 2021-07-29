import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import PedomanSkuDataJson from '../../data/pedoman-sku'
import { BASE_PATH } from '../../constants'
import Expansion from '../../components/Expansion'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Pedoman SKU'
const desc = 'Baca pedoman umum untuk menyelesaikan SKU di Buku Saku Pramuka'
const url = BASE_PATH + '/materi-pramuka/pedoman-sku/'

function PedomanSkuPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Pedoman SKU" href="/materi-pramuka/pedoman-sku/" />
        <ChapterTitle subTitle="Pedoman SKU" title="Materi Pramuka" />

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
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default PedomanSkuPage
