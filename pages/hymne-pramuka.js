import Layout from '../components/MainLayout';
import MetaHead from '../components/MetaHead';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import HymneData from '../data/hymne-pramuka';
import { BASE_PATH } from '../constants';

const title = 'Hymne Pramuka | Buku Saku Pramuka Digital';
const desc = 'Lirik beserta audio Hymne Pramuka di Buku Saku Pramuka Digital';
const url = BASE_PATH + '/hymne-pramuka/';

function HymnePramukaPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <ChapterNavigation nextLink="/lambang-pramuka/" />
      <ChapterTitle subTitle="Hymne Pramuka" title="Materi Pramuka" />

      <div className="text-left">
        <div
          className="mt-4 rounded overflow-hidden shadow-lg"
          id={HymneData.id}
        >
          <div className="relative">
            <img
              className="w-full"
              src="/assets/6649.jpg"
              alt="Anak-anak bernyanyi"
            />
          </div>
          <div className="px-6 py-4">
            <ol>
              {HymneData.data.lyrics.map((li) => (
                <li className="mb-2" key={li}>
                  {li}
                </li>
              ))}
            </ol>

            <audio controls className="mt-8">
              <source src={HymneData.data.audio} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>

      <ChapterNavigation nextLink="/lambang-pramuka/" />
    </Layout>
  );
}

export default HymnePramukaPage;
