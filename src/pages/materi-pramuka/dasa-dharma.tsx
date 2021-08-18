import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import DasaDharmaData from '../../data/dasa-dharma'
import { BASE_PATH } from '../../constants'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Dasa Dharma Pramuka'
const desc = 'Penjelasan lengkap mengenai Dasa Dharma Pramuka untuk anggota pramuka'
const url = BASE_PATH + '/materi-pramuka/dasa-dharma/'

function DasaDharmaPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Dasa Dharma" href="/materi-pramuka/dasa-dharma/" />
        <ChapterTitle subTitle="Dasa Dharma" title="Materi Pramuka" />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-left">
          <div
            className="overflow-hidden mt-4 rounded-md shadow-lg dark:border bg-card dark:border-gray-30"
            id={DasaDharmaData.id}
          >
            <div className="relative">
              <img className="w-full" src="/assets/5930.jpeg" alt="Anak-anak berkemah" />
            </div>
            <div className="py-4 px-6">
              <p>{DasaDharmaData.preface}</p>
              <div className="mt-4">
                <p>Isi dan Arti {DasaDharmaData.title} adalah sebagai berikut :</p>
                <p className="mt-4 mb-2">{DasaDharmaData.data.origin.preface}</p>
                <ol>
                  {DasaDharmaData.data.origin.data.map((li) => (
                    <li className="ml-8 list-decimal" key={li}>
                      {li}
                    </li>
                  ))}
                </ol>
                <p className="mt-4 mb-2">{DasaDharmaData.data.meanings.preface}</p>
                <ol>
                  {DasaDharmaData.data.meanings.data.map((li, index) => (
                    <li className="ml-8 list-decimal" key={DasaDharmaData.data.origin.data[index]}>
                      <p>{DasaDharmaData.data.origin.data[index]}</p>
                      <ol className="mb-2">
                        {li.details &&
                          li.details.length > 0 &&
                          li.details.map((liChild) => (
                            <li className="ml-4 list-disc" key={liChild}>
                              {liChild}
                            </li>
                          ))}
                      </ol>
                    </li>
                  ))}
                </ol>
              </div>
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

export default DasaDharmaPage
