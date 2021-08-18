import { FiDownload } from 'react-icons/fi'

import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import { BASE_PATH } from '../../constants'

import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

import DataDownload from '../../data/download-sku'

const year = new Date().getFullYear()
const title = `Download Buku SKU Pramuka Terlengkap & Terbaru ${year} (PDF)`
const desc =
  'Download PDF: Buku SKU Pramuka & Buku Panduan Penyelesaian SKU. Tersedia untuk Pramuka Siaga, Penggalang, Penegak dan Pandega.'
const url = BASE_PATH + '/download/'

function DownloadPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <ChapterTitle subTitle="Unduh SKU dan Panduan Penyelesaian SKU" title="Unduh Materi" />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-left">
          <div className="mt-8 text-left">
            <div className="mb-8">
              {DataDownload.data.map((section) => (
                <div key={section.key} className="mb-8">
                  <p className="font-bold">{section.title}</p>
                  <div className="overflow-auto w-full">
                    <table className="mx-auto mt-5 w-full text-gray-800 bg-gray-100 rounded-t-lg dark:text-gray-200 dark:bg-gray-800">
                      <thead>
                        <tr className="text-left border-b-2 border-gray-300">
                          <th className="py-3 px-4">Pramuka</th>
                          <th className="py-3 px-4 text-center">Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        {DataDownload.types.map((type) => (
                          <tr key={type} className="text-left border-b border-gray-300">
                            <td className="py-3 px-4 capitalize">{type}</td>
                            <td className="flex justify-center py-3 px-4 text-yellow-700">
                              <a
                                // @ts-ignore
                                href={DataDownload[section.key][type]}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                              >
                                <FiDownload className="w-6 h-6" />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <SeoText text={desc} />
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default DownloadPage
