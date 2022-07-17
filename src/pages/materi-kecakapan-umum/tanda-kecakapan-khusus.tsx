import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import TkkData from '../../data/tanda-kecakapan-khusus'
import { BASE_PATH } from '../../constants'
import Expansion from '../../components/Expansion'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = `${TkkData.subtitle}`
const desc = TkkData.description
const url = BASE_PATH + '/materi-kecakapan-umum/tanda-kecakapan-khusus/'

function TandaKecakapanKhusus() {
  const splitData = (data: any[]) => {
    const halfwayThrough = Math.ceil(data.length / 2)
    return [data.slice(0, halfwayThrough), data.slice(halfwayThrough, data.length)]
  }

  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Kecakapan Khusus" href={url} />
        <ChapterTitle subTitle={TkkData.subtitle} title={TkkData.title} />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-left">
          <p>{TkkData.meaning}</p>
          <div className="mt-4">
            {TkkData.sections.map((section, sectionIndex) => (
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
                        // @ts-ignore
                        title={group?.text || ''}
                        value={
                          <>
                            {/*
                        // @ts-ignore */}
                            <p className="mb-2">{group.description}</p>

                            <ol className="flex flex-col list-decimal md:flex-row">
                              {/*
                            // @ts-ignore */}
                              {splitData(group.lists).map((split, splitIndex) => (
                                <div key={splitIndex} className="w-full">
                                  {/*
                            // @ts-ignore */}
                                  {split.map((list, listIndex) => (
                                    <li key={listIndex} className="ml-6">
                                      {list}
                                    </li>
                                  ))}
                                </div>
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

export default TandaKecakapanKhusus
