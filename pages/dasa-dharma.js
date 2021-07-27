import Layout from '../components/MainLayout';
import MetaHead from '../components/MetaHead';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import DasaDharmaData from '../data/dasa-dharma';
import { BASE_PATH } from '../constants';

const title = 'Dasa Dharma Pramuka | Buku Saku Pramuka Digital';
const desc =
  'Penjelasan lengkap mengenai Dasa Dharma Pramuka di Buku Saku Pramuka Digital';
const url = BASE_PATH + '/dasa-dharma/';

function DasaDharmaPage() {
  return (
    <Layout>
			<MetaHead title={title} desc={desc} url={url}/>
      <ChapterNavigation nextLink="/hymne-pramuka/" />
      <ChapterTitle subTitle="Dasa Dharma" title="Materi Pramuka" />

      <div className="text-left">
        <div
          className="mt-4 rounded overflow-hidden shadow-lg bg-card"
          id={DasaDharmaData.id}
        >
          <div className="relative">
            <img
              className="w-full"
              src="/assets/5930.jpg"
              alt="Anak-anak berkemah"
            />
          </div>
          <div className="px-6 py-4">
            <p>{DasaDharmaData.preface}</p>
            <div className="mt-4">
              <p>
                Isi dan Arti {DasaDharmaData.title} adalah sebagai berikut :
              </p>
              <p className="mt-4 mb-2">{DasaDharmaData.data.origin.preface}</p>
              <ol>
                {DasaDharmaData.data.origin.data.map((li) => (
                  <li className="ml-8 list-decimal" key={li}>
                    {li}
                  </li>
                ))}
              </ol>
              <p className="mt-4 mb-2">
                {DasaDharmaData.data.meanings.preface}
              </p>
              <ol>
                {DasaDharmaData.data.meanings.data.map((li, index) => (
                  <li
                    className="ml-8 list-decimal"
                    key={DasaDharmaData.data.origin.data[index]}
                  >
                    <p>{DasaDharmaData.data.origin.data[index]}</p>
                    <ol className="mb-2">
                      {li.details &&
                        li.details.length > 0 &&
                        li.details.map((liChild) => (
                          <li className="ml-4 list-disc" key={liChild}>
                            {liChild}
                          </li>
                        ))}
                    </ol>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <ChapterNavigation nextLink="/hymne-pramuka/" />
    </Layout>
  );
}

export function reportWebVitals({ id, name, label, value }) {
  // eslint-disable-next-line no-undef
  window.ga('send', 'event', {
    eventCategory:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  })
}

export default DasaDharmaPage;
