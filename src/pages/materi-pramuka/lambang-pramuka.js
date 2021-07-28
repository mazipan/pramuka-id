import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import IconPramuka from '../../components/IconPramuka'
import LambangPramuka from '../../data/lambang-pramuka'
import { BASE_PATH } from '../../constants'

const title = 'Lambang Pramuka'
const desc = 'Baca arti dan makna dari lambang pramuka di Buku Saku Pramuka'
const url = BASE_PATH + '/materi-pramuka/lambang-pramuka/'

function LambangPramukaPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <BreadcrumbLevel3 text="Lambang Pramuka" href="/materi-pramuka/lambang-pramuka/" />
      <ChapterTitle subTitle="Lambang Pramuka" title="Materi Pramuka" />

      <div className="flex flex-col justify-center items-center text-center">
        <IconPramuka color="#000" />
      </div>

      <div className="text-left">
        <p className="mt-4">{LambangPramuka.preface}</p>
        <p className="mt-4">{LambangPramuka.prefix}</p>
        <div className="mt-4">
          {LambangPramuka.meanings.map((section, index) => (
            <div
              key={section}
              className="flex overflow-hidden items-center mt-4 rounded shadow-lg bg-card"
            >
              <div className="flex justify-center items-center text-3xl font-bold text-center md:text-4xl min-w-80 min-h-80">
                {index + 1}
              </div>
              <div className="py-4 px-6">
                <p>{section}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4">{LambangPramuka.postfix}</p>
        <p className="mt-4">{LambangPramuka.overall_meaning}</p>
        <p className="mt-4">{LambangPramuka.usage}</p>
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
