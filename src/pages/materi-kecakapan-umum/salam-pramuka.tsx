import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import SalamPramukaData from '../../data/salam-pramuka'
import { BASE_PATH } from '../../constants'
import Expansion from '../../components/Expansion'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Salam Pramuka'
const desc =
  'Penjelasan jenis-jenis salam pramuka beserta artinya, kepada siapa disampaikan serta cara-cara memberikan salam.'
const url = BASE_PATH + '/materi-kecakapan-umum/salam-pramuka/'

function SalamPramukaPage() {
  const getHowTo = (key: string) => {
    return SalamPramukaData.howto.find((i) => i.key === key)
  }

  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Salam Pramuka" href={url} />
        <ChapterTitle subTitle="Salam Pramuka" title="Materi Pramuka" />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-left">
          <p>{SalamPramukaData.meaning}</p>
          <div className="mt-4">
            {SalamPramukaData.variant.map((section, index) => (
              <Expansion
                key={index}
                initialState={true}
                title={`${section.emoji} ${section.title}`}
                value={
                  <>
                    <p
                      className={`${
                        section.usage.length > 0 ? 'mb-4' : ''
                      } text-secondary text-base`}
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

                    <p className="mt-4 text-base text-secondary">Cara Melakukan {section.title}:</p>
                    {/*
                            // @ts-ignore */}
                    {getHowTo(section.key).steps.map((step) => (
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
                            <p className="mb-4 italic">{step.title}</p>
                            <ol className="mb-4 ml-6 list-lower-alpha">
                              {step.conditions.map((cond) => (
                                <li key={`${section.key}${cond.title}`}>
                                  <p className="pl-2 mb-4 font-bold">{cond.title}</p>
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
        <SeoText text={desc} />
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default SalamPramukaPage
