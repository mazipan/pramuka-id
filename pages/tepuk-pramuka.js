import Layout from '../components/MainLayout';
import MetaHead from '../components/MetaHead';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import TepukData from '../data/tepuk-pramuka';
import { BASE_PATH } from '../constants';

const title = `${TepukData.subtitle} | Buku Saku Pramuka Digital`;
const desc = TepukData.description;
const url = BASE_PATH + '/tepuk-pramuka/';

function TepukPramuka() {
  const [collapsed, setCollapsed] = React.useState(-1)

  const handleCollapse = (index) => {
    if (collapsed === index) {
      setCollapsed(-1)
    } else {
      setCollapsed(index)
    }
  }

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
                <p className='font-bold w-full mb-1'>{section.name}</p>
                <span>{section.description}</span>
                
                {section.groupType === 'array' && (
                  <ul className='list-disc'>
                    {section.groups.map((list, index) => (
                      <li key={index} className='ml-6'>{list}</li>
                    ))}
                  </ul>
                )}

                {section.groupType === 'object' && (
                  <div>
                    {section.groups.map((group, index) => (
                      <div key={index} className="mt-4 rounded overflow-hidden shadow-lg">
                        <div className="w-full px-6 py-4 flex items-center justify-between flex-wrap">
                          <div className="min-w-250 font-semibold">{group.text}</div>

                          <button
                            onClick={() => {
                              handleCollapse(index)
                            }}
                            className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded inline-flex items-center"
                          >
                            {collapsed === index ? 'Tutup detail' : 'Lihat detail'}
                            <svg
                              className={`w-4 h-4 ml-2 transition ease-in-out duration-500 transform ${
                                collapsed === index ? '-rotate-180' : 'rotate-0'
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

                        <div className={`transition duration-150 ease-in-out ${collapsed === index ? 'block' : 'hidden'}`}>
                          <div className="w-full px-6 py-4">

                            <ol className='list-decimal flex flex-col'>
                              {group.lists.map((list, listIndex) => (
                                <li key={listIndex} className='mb-1 ml-5'>{list}</li>
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

      <ChapterNavigation nextLink="/" />
    </Layout>
  );
}

export function reportWebVitals({ id, name, label, value }) {
  ga('send', 'event', {
    eventCategory:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

export default TepukPramuka;
