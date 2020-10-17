import Layout from '../components/MainLayout'
import MetaHead from '../components/MetaHead'
import ChapterNavigation from '../components/ChapterNavigation'
import ChapterTitle from '../components/ChapterTitle'
import SandiAmbalanData from '../data/sandi-ambalan'
import { BASE_PATH } from '../constants'

const title = 'Sandi Ambalan | Buku Saku Pramuka Digital'
const desc = 'Sandi Ambalan di Buku Saku Pramuka Digital'
const url = BASE_PATH + '/sandi-ambalan/'

function SandiAmbalanPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <ChapterNavigation nextLink="/bendera-semaphore/" />
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

      <ChapterNavigation nextLink="/bendera-semaphore/" />
    </Layout>
  )
}

export function reportWebVitals({ id, name, label, value }) {
  ga('send', 'event', {
    eventCategory: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  })
}

export default SandiAmbalanPage
