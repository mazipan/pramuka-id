import { useState } from 'react'
import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import TkkData from '../../data/satuan-karya-pramuka'
import { BASE_PATH } from '../../constants'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = `${TkkData.subtitle}`
const desc = TkkData.description
const url = BASE_PATH + '/materi-pramuka/satuan-karya-pramuka/'

function SatuanKaryaPramukaPage() {
  const [collapsed, setCollapsed] = useState(-1)

  const handleCollapse = (index: number) => {
    if (collapsed === index) {
      setCollapsed(-1)
    } else {
      setCollapsed(index)
    }
  }

  const splitData = (data: any[]) => {
    const halfwayThrough = Math.ceil(data.length / 2)

    return [data.slice(0, halfwayThrough), data.slice(halfwayThrough, data.length)]
  }

  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text={TkkData.subtitle} href={url} />
        <ChapterTitle subTitle={TkkData.subtitle} title={TkkData.title} />

        <div className="text-left">
          <p>{TkkData.meaning}</p>
          <div className="mt-4">
            {TkkData.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mt-4">
                <p className="mb-1 w-full font-bold">{section.name}</p>
                <span>{section.description}</span>

                {section.groupType === 'group-object' && (
                  <div>
                    {section.groups.map((group, index) => (
                      <div
                        key={sectionIndex + index}
                        className="overflow-hidden mt-4 rounded shadow-lg bg-card"
                      >
                        <div className="flex flex-wrap justify-between items-center py-4 px-6 w-full">
                          <div className="flex items-center font-semibold">
                            {/*
                            // @ts-ignore */}
                            {group.logo ? (
                              <img
                                className="pr-5 w-auto h-32"
                                // @ts-ignore
                                src={`/assets/satuan-karya/${group.logo || ''}`}
                              />
                            ) : null}
                            {group.text}
                          </div>

                          <button
                            onClick={() => {
                              handleCollapse(sectionIndex + index)
                            }}
                            className="inline-flex items-center py-2 px-4 rounded bg-primary text-button hover:bg-secondary"
                          >
                            {collapsed === sectionIndex + index ? 'Tutup detail' : 'Lihat detail'}
                            <svg
                              className={`w-4 h-4 ml-2 transition ease-in-out duration-500 transform ${
                                collapsed === sectionIndex + index ? '-rotate-180' : 'rotate-0'
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </button>
                        </div>

                        <div
                          className={`transition duration-150 ease-in-out ${
                            collapsed === sectionIndex + index ? 'block' : 'hidden'
                          }`}
                        >
                          <div className="py-4 px-6 w-full">
                            {/*
              // @ts-ignore */}
                            {group.description && <p className="mb-2">{group.description}</p>}

                            <ol className="flex flex-col list-decimal">
                              {/*
              // @ts-ignore */}
                              {group.lists &&
                                splitData(group.lists).map((split, splitIndex) => (
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
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default SatuanKaryaPramukaPage
