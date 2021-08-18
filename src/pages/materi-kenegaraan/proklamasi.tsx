import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import ProklamasiData from '../../data/proklamasi'
import { BASE_PATH } from '../../constants'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Proklamasi'
const desc = 'Teks dan audio proklamasi yang dibacakan pada saat kemerdekaan Indonesia'
const url = BASE_PATH + '/materi-kenegaraan/proklamasi/'

function ProklamasiPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Proklamasi" href={url} />
        <ChapterTitle subTitle="Proklamasi" title="Materi Kenegaraan" />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="flex flex-col justify-center items-center text-center">
          <img
            src="/assets/proklamasi/proklamasi-bung-karno.jpg"
            className="w-auto"
            alt="Pembacaan naskah proklamasi oleh Bung Karno"
          />
        </div>

        <div className="mt-8 text-left">
          {ProklamasiData.data.map((section) => (
            <p className="mt-4" key={section}>
              {section}
            </p>
          ))}
        </div>

        <audio controls className="mt-8 w-full">
          <source src={ProklamasiData.audio} type="audio/mpeg" />
        </audio>

        <div className="flex flex-col justify-center items-center mt-8 text-center">
          <img
            src="/assets/proklamasi/naskah-proklamasi.jpeg"
            className="w-auto"
            alt="Naskah proklamasi"
          />
        </div>
        <SeoText text={desc} />
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default ProklamasiPage
