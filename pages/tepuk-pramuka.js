import Layout from '../components/MainLayout'
import MetaHead from '../components/MetaHead'
import ChapterNavigation from '../components/ChapterNavigation'
import ChapterTitle from '../components/ChapterTitle'
import TepukData from '../data/tepuk-pramuka'
import { BASE_PATH } from '../constants'
import Expansion from '../components/Expansion'

const title = `${TepukData.subtitle} | Buku Saku Pramuka Digital`
const desc = TepukData.description
const url = BASE_PATH + '/tepuk-pramuka/'

function TepukPramuka() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <ChapterNavigation nextLink="/" />
      <ChapterTitle subTitle={TepukData.subtitle} title={TepukData.title} />

      <div className="text-left">
        <p>{TepukData.meaning}</p>
        <div className="mt-4">
          {TepukData.sections.map((section, sectionIndex) => (
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
                          <ol className="list-decimal flex flex-col">
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

      <ChapterNavigation nextLink="/" />
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

export default TepukPramuka
