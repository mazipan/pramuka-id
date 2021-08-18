import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import IconPramuka from '../../components/IconPramuka'
import LambangPramukaJson from '../../data/lambang-pramuka'
import { BASE_PATH } from '../../constants'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Lambang Pramuka'
const desc = 'Penjelasan lengkap arti dan makna dari lambang pramuka'
const url = BASE_PATH + '/materi-pramuka/lambang-pramuka/'

function LambangPramukaPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Lambang Pramuka" href="/materi-pramuka/lambang-pramuka/" />
        <ChapterTitle subTitle="Lambang Pramuka" title="Materi Pramuka" />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="flex flex-col justify-center items-center text-center text-gray-900 dark:text-gray-100">
          <IconPramuka />
        </div>

        <div className="text-left">
          <p className="mt-4">{LambangPramukaJson.preface}</p>
          <p className="mt-4">{LambangPramukaJson.prefix}</p>
          <div className="mt-4">
            {LambangPramukaJson.meanings.map((section, index) => (
              <div
                key={section}
                className="flex overflow-hidden items-center mt-4 rounded-md shadow-lg dark:border bg-card dark:border-gray-30"
              >
                <div className="flex justify-center items-center text-3xl font-bold text-center md:text-4xl min-w-80 min-h-80">
                  {index + 1}
                </div>
                <div className="py-4 px-6">
                  <p>{section}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4">{LambangPramukaJson.postfix}</p>
          <p className="mt-4">{LambangPramukaJson.overall_meaning}</p>
          <p className="mt-4">{LambangPramukaJson.usage}</p>
        </div>

        <SeoText text={desc} />
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default LambangPramukaPage
