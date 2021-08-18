import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import Expansion from '../../components/Expansion'
import TkkData from '../../data/satuan-karya-pramuka'
import { BASE_PATH } from '../../constants'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = `${TkkData.subtitle}`
const desc = TkkData.description
const url = BASE_PATH + '/materi-pramuka/satuan-karya-pramuka/'

// @ts-ignore
function renderSectionGroup(splitData, group) {
  return (
    <>
      {/*
      // @ts-ignore */}
      {group.logo ? (
        <div className="flex flex-wrap justify-center items-center py-4 px-6 w-full">
          <div className="flex items-center font-semibold">
            <img
              className="pr-5 w-auto h-32"
              // @ts-ignore
              src={`/assets/satuan-karya/${group.logo || ''}`}
            />
          </div>
        </div>
      ) : null}

      {/* content */}
      <div className={`transition duration-150 ease-in-out block`}>
        <div className="py-4 px-6 w-full">
          {/*
          // @ts-ignore */}
          {group.description && <p className="mb-2">{group.description}</p>}

          <ol className="flex flex-col list-decimal">
            {/*
            // @ts-ignore */}
            {group.lists &&
              // @ts-ignore
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

      <SeoText text={desc} />
    </>
  )
}

function SatuanKaryaPramukaPage() {
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
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-left">
          <p>{TkkData.meaning}</p>
          <div className="mt-4">
            {TkkData.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mt-8">
                <h3 className="mb-2 text-xl font-bold">{section.name}</h3>
                <span>{section.description}</span>

                {section.groupType === 'group-object' && (
                  <div>
                    {section.groups.map((group) => (
                      <>
                        <Expansion
                          initialState={true}
                          title={group.text}
                          value={renderSectionGroup(splitData, group)}
                          key={group.text}
                        />
                      </>
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
