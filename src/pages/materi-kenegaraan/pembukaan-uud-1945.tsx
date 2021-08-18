import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import Uud45Data from '../../data/uud45'
import { BASE_PATH } from '../../constants'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Pembukaan UUD 1945'
const desc = 'Bacaan lengkap pembukaan Undang-Undang Dasar (UUD) 1945'
const url = BASE_PATH + '/materi-kenegaraan/pembukaan-uud-1945/'

function UUD45Page() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="UUD 1945" href={url} />
        <ChapterTitle subTitle="UUD 1945" title="Materi Kenegaraan" />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-left">
          <div>
            {Uud45Data.map((section) => (
              <div
                key={section}
                className="flex overflow-hidden items-center mt-4 rounded-md shadow-lg dark:border bg-card dark:border-gray-30"
              >
                <div className="py-4 px-6">
                  <p>{section}</p>
                </div>
              </div>
            ))}
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

export default UUD45Page
