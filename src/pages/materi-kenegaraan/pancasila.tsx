import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import PancasilaData from '../../data/pancasila'
import { BASE_PATH } from '../../constants'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Pancasila'
const desc = 'Isi dan Arti dari Pancasila di Buku Saku Pramuka'
const url = BASE_PATH + '/materi-kenegaraan/pancasila/'

function PancasilaPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Pancasila" href={url} />
        <ChapterTitle subTitle="Pancasila" title="Materi Kenegaraan" />

        <div className="flex flex-col justify-center items-center text-center">
          <img src="/assets/pancasila/garuda.png" className="w-40" alt="Garuda Pancasila" />
        </div>

        <div className="mt-8 text-left">
          <div className="mb-8">
            {PancasilaData.data.map((section, index) => (
              <div
                key={section}
                className="flex overflow-hidden items-center mt-4 rounded shadow-lg bg-card"
              >
                <img className="min-w-80 min-h-80" src={`/assets/pancasila/${index + 1}.png`} />
                <div className="py-4 px-6">
                  <p>{section}</p>
                </div>
              </div>
            ))}
          </div>
          <p>{PancasilaData.meaning.preface}</p>
          <div className="mt-4">
            {PancasilaData.meaning.data.map((section) => (
              <div
                key={section}
                className="flex overflow-hidden items-center mt-4 rounded shadow-lg bg-card"
              >
                <div className="py-4 px-6">
                  <p>{section}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default PancasilaPage
