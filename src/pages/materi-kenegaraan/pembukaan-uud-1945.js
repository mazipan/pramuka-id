import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import Uud45Data from '../../data/uud45'
import { BASE_PATH } from '../../constants'

const title = 'UUD 1945 | Buku Saku Pramuka Digital'
const desc = 'UUD 1945 di Buku Saku Pramuka Digital'
const url = BASE_PATH + '/materi-kenegaraan/pembukaan-uud-1945/'

function UUD45Page() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <BreadcrumbLevel3 text="UUD 1945" href={url} />
      <ChapterTitle subTitle="UUD 1945" title="Materi Kenegaraan" />

      <div className="text-left">
        <div>
          {Uud45Data.map((section) => (
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

export default UUD45Page