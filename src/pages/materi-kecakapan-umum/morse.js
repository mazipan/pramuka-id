import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import MorseData from '../../data/morse'
import { BASE_PATH } from '../../constants'

const title = 'Kode Morse Lengkap'
const desc = 'Daftar lengkap kode morse beserta cara menghafalnya'
const url = BASE_PATH + '/materi-kecakapan-umum/morse/'

function LambangPramukaPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <BreadcrumbLevel3 text="Kode Morse" href={url} />
      <ChapterTitle subTitle="Kode Morse" title="Materi Kecakapan Umum" />

      <div className="text-center md:text-left">
        <div>
          {MorseData.sections.map((section) => (
            <div key={section.key} className="mb-4">
              <h3 className="text-xl font-bold">{section.title}</h3>
              <div className="flex flex-wrap justify-center items-center mb-4 md:justify-start">
                {MorseData[section.key].map((item) => (
                  <div
                    key={item.text}
                    className="flex overflow-hidden items-center w-1/2 rounded shadow-lg md:w-1/5"
                  >
                    <div className="flex items-center py-2 px-2">
                      <div className="w-10">{item.text}</div>{' '}
                      <div className="text-orange-500">{item.code}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

export default LambangPramukaPage
