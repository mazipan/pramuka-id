import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import { BASE_PATH } from '../../constants'
import dataSemaphore from '../../data/kwartir'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Kwartir di Indonesia'
const subtitle = 'Kwartir di Indonesia'
const desc = 'Penjelasan lengkap mengenai kwartir di Indonesia'
const url = BASE_PATH + '/materi-pramuka/kwartir/'

const KwartirPage = () => {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Kwartir" href="/materi-pramuka/kwartir/" />
        <ChapterTitle subTitle={subtitle} title="Materi Pramuka" />
        <div className="text-center md:text-left">
          <div className="mb-2">
            <p className="text-justify">{dataSemaphore.description}</p>
          </div>
          <div>
            {dataSemaphore.sections.map((section) => (
              <div key={section.key} className="mb-4">
                <h3 className="text-xl font-bold">{section.title}</h3>
                <div className="grid grid-cols-2 gap-5 mb-4 lg:grid-cols-5">
                  {/*
                            // @ts-ignore */}
                  {dataSemaphore[section.key].map((item) => (
                    <div
                      className="flex flex-col items-center p-2 rounded shadow-lg"
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
                {dataSemaphore.reference.map((data, key) => (
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
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default KwartirPage
