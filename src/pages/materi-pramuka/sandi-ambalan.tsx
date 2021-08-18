import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import SandiAmbalanData from '../../data/sandi-ambalan'
import { BASE_PATH } from '../../constants'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Sandi Ambalan'
const desc = 'Sandi ambalan bagi anggota pramuka'
const url = BASE_PATH + '/materi-pramuka/sandi-ambalan/'

function SandiAmbalanPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Sandi Ambalan" href={url} />
        <ChapterTitle subTitle="Sandi Ambalan" title={SandiAmbalanData.title} />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-left">
          <div className="mt-4" id={SandiAmbalanData.id}>
            <div className="mt-6">
              {SandiAmbalanData.data.map((section, index) => (
                <div className="mt-2" key={'baris ke - ' + index}>
                  {section.map((value) => (
                    <p key={'larik ke: ' + index}>{value}</p>
                  ))}
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

export default SandiAmbalanPage
