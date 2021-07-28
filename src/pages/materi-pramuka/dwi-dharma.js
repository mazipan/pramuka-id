import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import DwiDharmaData from '../../data/dwi-dharma'
import { BASE_PATH } from '../../constants'

const title = 'Dwi Dharma Pramuka'
const desc = 'Penjelasan lengkap mengenai Dwi Dharma Pramuka di Buku Saku Pramuka'
const url = BASE_PATH + '/materi-pramuka/dwi-dharma/'

function DwiDharmaPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <BreadcrumbLevel3 text="Dwi Dharma" href="/materi-pramuka/dwi-dharma/" />
      <ChapterTitle subTitle="Dwi Dharma" title="Materi Pramuka" />

      <div className="text-left">
        <div className="overflow-hidden mt-4 rounded shadow-lg bg-card" id={DwiDharmaData.id}>
          <div className="relative">
            <img className="w-full" src="/assets/5930.jpg" alt="Anak-anak berkemah" />
          </div>
          <div className="py-4 px-6">
            <p>{DwiDharmaData.preface}</p>
            <div className="mt-4">
              <p>Isi {DwiDharmaData.title} adalah sebagai berikut :</p>
              <p className="mt-4 mb-2">{DwiDharmaData.data.origin.preface}</p>
              <ol>
                {DwiDharmaData.data.origin.data.map((li) => (
                  <li className="ml-8 list-decimal" key={li}>
                    {li}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export function reportWebVitals({ id, name, label, value }) {
  // eslint-disable-next-line no-undef
  window.ga('send', 'event', {
    eventCategory: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true // avoids affecting bounce rate.
  })
}

export default DwiDharmaPage
