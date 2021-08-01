import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ChapterTitle from '../../components/ChapterTitle'
import CardList from '../../components/Card/List'
import { BASE_PATH } from '../../constants'

import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

import DataDownload from '../../data/download-sku'

const title = 'Download PDF Buku SKU Pramuka'
const desc =
  'Download PDF buku SKU pramuka dan buku panduan penyelesaian SKU lengkap. Tersedia untuk Pramuka Siaga, Penggalang, Penegak dan Pandega.'
const url = BASE_PATH + '/download/'

function DownloadPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <ChapterTitle subTitle="Unduh SKU dan Panduan Penyelesaian SKU" title="Unduh Materi" />

        <div className="text-left">
          <div className="mt-8 text-left">
            <div className="mb-8">
              {DataDownload.data.map((section) => (
                <div key={section.key} className="mb-8">
                  <p className="font-bold">{section.title}</p>
                  {DataDownload.types.map((type) => (
                    <CardList
                      key={`${section.key}${type}`}
                      title={type}
                      subtitle={`${section.title} untuk ${type}`}
                      // @ts-ignore
                      href={DataDownload[section.key][type]}
                      external
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default DownloadPage
