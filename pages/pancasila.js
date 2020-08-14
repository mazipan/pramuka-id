import Layout from '../components/MainLayout';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import PancasilaData from '../data/pancasila';

function PancasilaPage() {
  return (
    <Layout>
      <ChapterNavigation nextLink="/uud1945/" />
      <ChapterTitle subTitle="Pancasila" title="Dasar Negara" />

      <div className="text-left">
        <div>
          {PancasilaData.map((section, index) => (
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
