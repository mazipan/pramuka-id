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

      <div className="text-left">
        <div>
          {PancasilaData.data.map((section, index) => (
            <div key={section} className="mt-4 flex items-center rounded overflow-hidden shadow-lg">
							<img className="min-w-80 min-h-80" src={`/assets/pancasila/${index+1}.png`} />
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
