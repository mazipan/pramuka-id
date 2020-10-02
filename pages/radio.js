import Layout from '../components/MainLayout';
import MetaHead from '../components/MetaHead';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import RadioData from '../data/radio';
import { BASE_PATH } from '../constants';

const title = 'Kode Radio Lengkap | Buku Saku Pramuka Digital';
const desc = 'Daftar lengkap kode radio';
const url = BASE_PATH + '/radio/';

function LambangPramukaPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <ChapterNavigation nextLink="/" />
      <ChapterTitle subTitle="Kode Radio" title="Materi Pramuka" />

      <div className="text-center md:text-left">
        <div>
          {RadioData.sections.map((section) => (
            <div key={section.key} className="mb-4">
              <h3 className="font-bold text-xl">{section.title}</h3>
              <div className="mb-4 flex items-center flex-wrap justify-center md:justify-start">
                {RadioData[section.key].map((item) => (
                  <div
                    key={item.text}
                    className="w-1/2 md:w-1/5 flex items-center rounded overflow-hidden shadow-lg"
                  >
                    <div className="px-2 py-2 flex items-center">
                      <div className="w-10">{item.text}</div>{' '}
                      <div className="text-orange-500">{item.code}</div>
                    </div>
                  </div>
                ))}
              </div>
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

export default LambangPramukaPage;