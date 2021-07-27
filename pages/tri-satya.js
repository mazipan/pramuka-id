import Layout from '../components/MainLayout';
import MetaHead from '../components/MetaHead';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import TriSatyaData from '../data/tri-satya';
import { BASE_PATH } from '../constants';

const title = 'Tri Satya Pramuka | Buku Saku Pramuka Digital';
const desc =
  'Penjelasan lengkap mengenai Tri Satya Pramuka di Buku Saku Pramuka Digital';
const url = BASE_PATH + '/tri-satya/';

function TriSatyaPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <ChapterNavigation nextLink="/dasa-dharma/" />
      <ChapterTitle subTitle="Tri Satya" title="Materi Pramuka" />

      <div className="text-left">
        <div
          className="mt-4 rounded overflow-hidden shadow-lg bg-card"
          id={TriSatyaData.id}
        >
          <div className="relative">
            <img
              className="w-full"
              src="/assets/5766.jpg"
              alt="Anak-anak berkemah"
            />
          </div>
          <div className="px-6 py-4">
            <p>{TriSatyaData.preface}</p>
            <div className="mt-4">
              <p>Isi dan Arti {TriSatyaData.title} adalah sebagai berikut :</p>
              <p className="mt-4 mb-2">{TriSatyaData.data.origin.preface}</p>
              <ol>
                {TriSatyaData.data.origin.data.map((li) => (
                  <li className="ml-8 list-decimal" key={li}>
                    {li}
                  </li>
                ))}
              </ol>
              <p className="mt-4 mb-2">{TriSatyaData.data.meanings.preface}</p>
              <ol>
                {TriSatyaData.data.meanings.data.map((li) => (
                  <li className="ml-8 list-decimal" key={li.short}>
                    <p>{li.short}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <ChapterNavigation nextLink="/dasa-dharma/" />
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

export default TriSatyaPage;
