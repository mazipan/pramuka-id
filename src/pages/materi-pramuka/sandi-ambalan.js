import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SandiAmbalanData from '../../data/sandi-ambalan'
import { BASE_PATH } from '../../constants'

const title = 'Sandi Ambalan | Buku Saku Pramuka Digital'
const desc = 'Sandi Ambalan di Buku Saku Pramuka Digital'
const url = BASE_PATH + '/materi-pramuka/sandi-ambalan/'

function SandiAmbalanPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <BreadcrumbLevel3 text="Sandi Ambalan" href={url} />
      <ChapterTitle subTitle="Sandi Ambalan" title={SandiAmbalanData.title} />

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

      <BreadcrumbLevel3 text="Dasa Dharma" href="/materi-pramuka/dasa-dharma/" />
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

export default SandiAmbalanPage
