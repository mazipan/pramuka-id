import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import DwiSatyaDataJson from '../../data/dwi-satya'
import { BASE_PATH } from '../../constants'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Dwi Satya Pramuka'
const desc = 'Penjelasan lengkap mengenai Dwi Satya Pramuka untuk anggota Pramuka Siaga'
const url = BASE_PATH + '/materi-pramuka/dwi-satya/'

function DwiSatyaPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Dwi Satya" href="/materi-pramuka/dwi-satya/" />
        <ChapterTitle subTitle="Dwi Satya" title="Materi Pramuka" />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-left">
          <div
            className="overflow-hidden mt-4 rounded-md shadow-lg dark:border bg-card dark:border-gray-30"
            id={DwiSatyaDataJson.id}
          >
            <div className="relative">
              <img className="w-full" src="/assets/5766.jpeg" alt="Anak-anak berkemah" />
            </div>
            <div className="py-4 px-6">
              <p>{DwiSatyaDataJson.preface}</p>
              <div className="mt-4">
                <p>Isi {DwiSatyaDataJson.title} adalah sebagai berikut :</p>
                <p className="mt-4 mb-2">{DwiSatyaDataJson.data.origin.preface}</p>
                <ol>
                  {DwiSatyaDataJson.data.origin.data.map((li) => (
                    <li className="ml-8 list-decimal" key={li}>
                      {li}
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

export default DwiSatyaPage
