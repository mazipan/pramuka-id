import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SalamPramukaData from '../../data/salam-pramuka'
import { BASE_PATH } from '../../constants'
import Expansion from '../../components/Expansion'

const title = 'Salam Pramuka'
const desc = 'Arti dan jenis salam pramuka, baca selengkapnya di Buku Saku Pramuka'
const url = BASE_PATH + '/materi-pramuka/salam-pramuka/'

function SalamPramukaPage() {
  const getHowTo = (key) => {
    return SalamPramukaData.howto.find((i) => i.key === key)
  }

  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <BreadcrumbLevel3 text="Salam Pramuka" href={url} />
      <ChapterTitle subTitle="Salam Pramuka" title="Materi Pramuka" />

      <div className="text-left">
        <p>{SalamPramukaData.meaning}</p>
        <div className="mt-4">
          {SalamPramukaData.variant.map((section, index) => (
            <Expansion
              key={index}
              index={index}
              title={`${section.emoji} ${section.title}`}
              value={
                <>
                  <p
                    className={`${section.usage.length > 0 ? 'mb-4' : ''} text-secondary text-base`}
                  >
                    {section.meaning}
                  </p>

                  {section.usage && section.usage.length > 0 && (
                    <ol className="list-disc">
                      {section.usage.map((usage) => (
                        <li
                          className="ml-4 text-base text-secondary"
                          key={`${section.key}${usage}`}
                        >
                          {usage}
                        </li>
                      ))}
                    </ol>
                  )}

                  <p className="mt-4 text-base text-secondary">Cara Melakukan:</p>
                  {getHowTo(section.key).steps.map((step, index) => (
                    <>
                      {!step.conditions && (
                        <p
                          className="mt-4 text-base text-secondary"
                          key={`${section.key}${step.title}-nocond`}
                        >
                          {step.title}
                        </p>
                      )}

                      {step.conditions && (
                        <div
                          className="mt-4 text-secondary"
                          key={`${section.key}${step.title}-w-cond`}
                        >
                          <p className="mb-4 font-bold">
                            {index + 1}. {step.title}
                          </p>
                          <ol className="ml-6 list-lower-alpha">
                            {step.conditions.map((cond) => (
                              <li key={`${section.key}${cond.title}`}>
                                {cond.title}
                                <ul>
                                  {cond.details.map((detail) => (
                                    <li className="pl-2 mb-4" key={`${section.key}${detail}`}>
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </>
                  ))}
                </>
              }
            />
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

export default SalamPramukaPage
