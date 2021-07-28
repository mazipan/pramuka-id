import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ChapterTitle from '../../components/ChapterTitle'
import { BASE_PATH } from '../../constants'

import { reportCoreWebVitals, ReportCoreWebVitalsParams } from '../../utils/index'

import DataDownload from '../../data/download-sku'

const title = 'Download Buku SKU PDF | Buku Saku Pramuka Digital'
const desc = 'Download buku saku dan panduan dalam bentuk PDF di Buku Saku Pramuka Digital'
const url = BASE_PATH + '/download/'

function DwiDharmaPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <ChapterTitle subTitle="Unduh Buku SKU dan Panduan" title="Unduh Materi" />

        <div className="text-left">
          <div className="text-left mt-8">
            <div className="mb-8">
              {DataDownload.data.map((section) => (
                <div key={section.key} className="mb-8">
                  <p className="font-bold">{section.title}</p>
                  {DataDownload.types.map((type) => (
                    <div
                      className="mt-4 flex items-center rounded overflow-hidden shadow-lg"
                      key={`${section.key}${type}`}
                    >
                      <div className="px-6 py-4">
                        <p>
                          <a
                            className="text-orange-500 capitalize"
                            title={type}
                            // @ts-ignore
                            href={DataDownload[section.key][type]}
                            target="_blank"
                            rel="noopenner noreferrer"
                          >
                            👉&nbsp; {type}
                          </a>
                        </p>
                      </div>
                    </div>
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

export default DwiDharmaPage
