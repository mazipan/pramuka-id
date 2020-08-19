import React from 'react';

import Layout from '../components/MainLayout';
import MetaHead from '../components/MetaHead';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import SalamPramukaData from '../data/salam-pramuka';
import { BASE_PATH } from '../constants';

const title = 'Salam Pramuka | Buku Saku Pramuka Digital';
const desc =
  'Arti dan jenis salam pramuka, baca selengkapnya di Buku Saku Pramuka Digital';
const url = BASE_PATH + '/salam-pramuka/';

function SalamPramukaPage() {
  const [collapsed, setCollapsed] = React.useState(-1);

  const handleCollapse = (index) => {
    if (collapsed === index) {
      setCollapsed(-1);
    } else {
      setCollapsed(index);
    }
  };

  const getHowTo = (key) => {
    return SalamPramukaData.howto.find((i) => i.key === key);
  };

  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <ChapterNavigation nextLink="/pedoman-sku/" />
      <ChapterTitle subTitle="Salam Pramuka" title="Materi Pramuka" />

      <div className="text-left">
        <p>{SalamPramukaData.meaning}</p>
        <div className="mt-4">
          {SalamPramukaData.variant.map((section, index) => (
            <div
              key={section.key}
              className="mt-4 rounded overflow-hidden shadow-lg"
            >
              <div className="w-full px-6 py-4 flex items-center justify-between flex-wrap">
                <div className="font-bold text-xl min-w-250">
                  {section.emoji} {section.title}
                </div>

                <button
                  onClick={() => {
                    handleCollapse(index);
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

              <div
                className={`transition duration-150 ease-in-out ${
                  collapsed === index ? 'block' : 'hidden'
                }`}
              >
                <div className="w-full px-6 py-4">
                  <p
                    className={`${
                      section.usage.length > 0 ? 'mb-4' : ''
                    } text-gray-700 text-base`}
                  >
                    {section.meaning}
                  </p>

                  {section.usage && section.usage.length > 0 && (
                    <ol className="list-disc">
                      {section.usage.map((usage) => (
                        <li
                          className="ml-4 text-gray-700 text-base"
                          key={`${section.key}${usage}`}
                        >
                          {usage}
                        </li>
                      ))}
                    </ol>
                  )}

                  <p className="mt-4 text-gray-700 text-base">
                    Cara Melakukan:
                  </p>
                  {getHowTo(section.key).steps.map((step, index) => (
                    <>
                      {!step.conditions && (
                        <p className="mt-4 text-gray-700 text-base" key={`${section.key}${step.title}-nocond`}>
                          {step.title}
                        </p>
                      )}

                      {step.conditions && (
                        <div className="mt-4 text-gray-700" key={`${section.key}${step.title}-w-cond`}>
                          <p className="mb-4 font-bold">{index + 1}. {step.title}</p>
                          <ol className="list-lower-alpha ml-6">
                            {step.conditions.map((cond) => (
                              <li key={`${section.key}${cond.title}`}>
                                {cond.title}
                                <ul>
                                  {cond.details.map((detail) => (
                                    <li className="mb-4 pl-2" key={`${section.key}${detail}`}>{detail}</li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ChapterNavigation nextLink="/pedoman-sku/" />
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
  })
}

export default SalamPramukaPage;
