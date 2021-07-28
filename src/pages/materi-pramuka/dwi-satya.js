import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import DwiSatyaData from '../../data/dwi-satya'
import { BASE_PATH } from '../../constants'

const title = 'Dwi Satya Pramuka | Buku Saku Pramuka Digital'
const desc = 'Penjelasan lengkap mengenai Dwi Satya Pramuka di Buku Saku Pramuka Digital'
const url = BASE_PATH + '/materi-pramuka/dwi-satya/'

function DwiSatyaPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <BreadcrumbLevel3 text="Dwi Satya" href="/materi-pramuka/dwi-satya/" />
      <ChapterTitle subTitle="Dwi Satya" title="Materi Pramuka" />

      <div className="text-left">
        <div className="overflow-hidden mt-4 rounded shadow-lg bg-card" id={DwiSatyaData.id}>
          <div className="relative">
            <img className="w-full" src="/assets/5766.jpg" alt="Anak-anak berkemah" />
          </div>
          <div className="py-4 px-6">
            <p>{DwiSatyaData.preface}</p>
            <div className="mt-4">
              <p>Isi {DwiSatyaData.title} adalah sebagai berikut :</p>
              <p className="mt-4 mb-2">{DwiSatyaData.data.origin.preface}</p>
              <ol>
                {DwiSatyaData.data.origin.data.map((li) => (
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

export default DwiSatyaPage
