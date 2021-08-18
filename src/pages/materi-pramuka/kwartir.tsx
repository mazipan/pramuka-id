import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import { BASE_PATH } from '../../constants'
import dataKwartirJson from '../../data/kwartir'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Kwartir di Indonesia'
const subtitle = 'Kwartir di Indonesia'
const desc = 'Penjelasan lengkap mengenai berbagai Kwartir Pramuka di Indonesia'
const url = BASE_PATH + '/materi-pramuka/kwartir/'

const KwartirPage = () => {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Kwartir" href="/materi-pramuka/kwartir/" />
        <ChapterTitle subTitle={subtitle} title="Materi Pramuka" />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-center md:text-left">
          <div className="mb-2">
            <p className="text-justify">{dataKwartirJson.description}</p>
          </div>
          <div>
            {dataKwartirJson.sections.map((section) => (
              <div key={section.key} className="mb-8">
                <h3 className="mb-8 text-xl font-bold text-center">{section.title}</h3>
                <div className="grid grid-cols-2 gap-5 mb-4 lg:grid-cols-5">
                  {/*
                            // @ts-ignore */}
                  {dataKwartirJson[section.key].map((item) => (
                    <div
                      className="flex flex-col items-center p-2 rounded-md shadow-lg dark:border bg-card dark:border-gray-30"
                      key={item.text}
                    >
                      <img className="w-auto h-40" src={item.img} alt={item.text} />
                      <div className="mt-2">{item.text}</div>{' '}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-4">
              <h3 className="text-xl font-bold">Referensi tambahan</h3>
              <ul className="pl-6 list-disc text-left">
                {dataKwartirJson.reference.map((data, key) => (
                  <li key={key}>
                    <a
                      className="text-blue-500 underline hover:text-blue-700"
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data.text}
                    </a>
                  </li>
                ))}
              </ul>
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

export default KwartirPage
