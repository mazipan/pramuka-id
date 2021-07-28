import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import TkkData from '../../data/tanda-kecakapan-khusus'
import { BASE_PATH } from '../../constants'
import Expansion from '../../components/Expansion'

const title = `${TkkData.subtitle} | Buku Saku Pramuka Digital`
const desc = TkkData.description
const url = BASE_PATH + '/materi-kecakapan-umum/tanda-kecakapan-khusus/'

function TandaKecakapanKhusus() {
  const splitData = (data) => {
    const halfwayThrough = Math.ceil(data.length / 2)

    return [data.slice(0, halfwayThrough), data.slice(halfwayThrough, data.length)]
  }

  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <BreadcrumbLevel3 text={TkkData.subtitle} href={url} />
      <ChapterTitle subTitle={TkkData.subtitle} title={TkkData.title} />

      <div className="text-left">
        <p>{TkkData.meaning}</p>
        <div className="mt-4">
          {TkkData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mt-4">
              <p className="font-bold w-full mb-1">{section.name}</p>
              <span>{section.description}</span>

              {section.groupType === 'array' && (
                <ul className="list-disc">
                  {section.groups.map((list, index) => (
                    <li key={index} className="ml-6">
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
                      index={index}
                      title={group.text}
                      value={
                        <>
                          <p className="mb-2">{group.description}</p>

                          <ol className="list-decimal flex flex-col md:flex-row">
                            {splitData(group.lists).map((split, splitIndex) => (
                              <div key={splitIndex} className="w-full">
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

export default TandaKecakapanKhusus
