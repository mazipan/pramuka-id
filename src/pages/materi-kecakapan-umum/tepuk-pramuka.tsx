import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import TepukData from '../../data/tepuk-pramuka'
import { BASE_PATH } from '../../constants'
import Expansion from '../../components/Expansion'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = `${TepukData.subtitle}`
const desc = 'Penjelasan macam-macam tepuk pramuka beserta aturan cara mengerjakannya'
const url = BASE_PATH + '/materi-kecakapan-umum/tepuk-pramuka'

function TepukPramuka() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text={TepukData.subtitle} href={url} />
        <ChapterTitle subTitle={TepukData.subtitle} title={TepukData.title} />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-left">
          <p>{TepukData.meaning}</p>
          <div className="mt-4">
            {TepukData.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mt-4">
                <p className="mb-1 w-full font-bold">{section.name}</p>
                <span>{section.description}</span>

                {section.groupType === 'array' && (
                  <ul className="list-disc">
                    {section.groups.map((list, index) => (
                      <li key={index} className="ml-6">
                        {/*
                              // @ts-ignore */}
                        {list}
                      </li>
                    ))}
                  </ul>
                )}

                {section.groupType === 'object' && (
                  <div>
                    {section.groups.map((group, index) => (
                      <Expansion
                        key={index}
                        initialState={true}
                        title={group.text}
                        value={
                          <>
                            <ol className="flex flex-col list-decimal">
                              {group.lists.map((list, listIndex) => (
                                <li key={listIndex} className="mb-1 ml-5">
                                  {list}
                                </li>
                              ))}
                            </ol>
                          </>
                        }
                      />
                    ))}
                  </div>
                )}
              </div>
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

export default TepukPramuka
