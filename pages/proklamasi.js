import Layout from '../components/MainLayout';
import MetaHead from '../components/MetaHead';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import ProklamasiData from '../data/proklamasi';
import { BASE_PATH } from '../constants';

const title = 'Proklamasi | Buku Saku Pramuka Digital';
const desc = 'Teks proklamasi di Buku Saku Pramuka Digital';
const url = BASE_PATH + '/proklamasi/';

function ProklamasiPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <ChapterNavigation nextLink="/dwi-satya/" />
      <ChapterTitle subTitle="Proklamasi" title="Dasar Negara" />

      <div className="text-left">
        <div>
          {ProklamasiData.map((section) => (
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

      <ChapterNavigation nextLink="/dwi-satya/" />
    </Layout>
  );
}

export default ProklamasiPage;
