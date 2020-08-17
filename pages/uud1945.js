import Layout from '../components/MainLayout';
import MetaHead from '../components/MetaHead';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import Uud45Data from '../data/uud45';
import { BASE_PATH } from '../constants';

const title = 'UUD 1945 | Buku Saku Pramuka Digital';
const desc = 'UUD 1945 di Buku Saku Pramuka Digital';
const url = BASE_PATH + '/uud1945/';

function UUD45Page() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <ChapterNavigation nextLink="/proklamasi/" />
      <ChapterTitle subTitle="UUD 1945" title="Dasar Negara" />

      <div className="text-left">
        <div>
          {Uud45Data.map((section) => (
            <div
              key={section}
              className="mt-4 flex items-center rounded overflow-hidden shadow-lg"
            >
              <div className="px-6 py-4">
                <p>{section}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ChapterNavigation nextLink="/proklamasi/" />
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

export default UUD45Page;
