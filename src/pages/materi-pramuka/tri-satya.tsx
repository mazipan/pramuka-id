import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import TriSatyaDataJson from '../../data/tri-satya'
import { BASE_PATH } from '../../constants'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Tri Satya Pramuka'
const desc = 'Penjelasan lengkap mengenai Tri Satya Pramuka di Buku Saku Pramuka'
const url = BASE_PATH + '/materi-pramuka/tri-satya/'

function TriSatyaPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Tri Satya" href="/materi-pramuka/tri-satya/" />
        <ChapterTitle subTitle="Tri Satya" title="Materi Pramuka" />

        <div className="text-left">
          <div className="overflow-hidden mt-4 rounded shadow-lg bg-card" id={TriSatyaDataJson.id}>
            <div className="relative">
              <img className="w-full" src="/assets/5766.jpg" alt="Anak-anak berkemah" />
            </div>
            <div className="py-4 px-6">
              <p>{TriSatyaDataJson.preface}</p>
              <div className="mt-4">
                <p>Isi dan Arti {TriSatyaDataJson.title} adalah sebagai berikut :</p>
                <p className="mt-4 mb-2">{TriSatyaDataJson.data.origin.preface}</p>
                <ol>
                  {TriSatyaDataJson.data.origin.data.map((li) => (
                    <li className="ml-8 list-decimal" key={li}>
                      {li}
                    </li>
                  ))}
                </ol>
                <p className="mt-4 mb-2">{TriSatyaDataJson.data.meanings.preface}</p>
                <ol>
                  {TriSatyaDataJson.data.meanings.data.map((li) => (
                    <li className="ml-8 list-decimal" key={li.short}>
                      <p>{li.short}</p>
                    </li>
                  ))}
                </ol>
              </div>
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

export default TriSatyaPage
