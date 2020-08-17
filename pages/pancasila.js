import Layout from '../components/MainLayout';
import MetaHead from '../components/MetaHead';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import PancasilaData from '../data/pancasila';
import { BASE_PATH } from '../constants';

const title = 'Pancasila | Buku Saku Pramuka Digital';
const desc = 'Isi dan Arti dari Pancasila di Buku Saku Pramuka Digital';
const url = BASE_PATH + '/pancasila/';

function PancasilaPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <ChapterNavigation nextLink="/uud1945/" />
      <ChapterTitle subTitle="Pancasila" title="Dasar Negara" />

      <div className="flex flex-col items-center justify-center text-center">
        <img
          src="/assets/pancasila/garuda.png"
          className="w-40"
          alt="Garuda Pancasila"
        />
      </div>

      <div className="text-left mt-8">
        <div className="mb-8">
          {PancasilaData.data.map((section, index) => (
            <div
              key={section}
              className="mt-4 flex items-center rounded overflow-hidden shadow-lg"
            >
              <img
                className="min-w-80 min-h-80"
                src={`/assets/pancasila/${index + 1}.png`}
              />
              <div className="px-6 py-4">
                <p>{section}</p>
              </div>
            </div>
          ))}
        </div>
        <p>{PancasilaData.meaning.preface}</p>
        <div className="mt-4">
          {PancasilaData.meaning.data.map((section, index) => (
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

      <ChapterNavigation nextLink="/uud1945/" />
    </Layout>
  );
}

export default PancasilaPage;
