import Layout from '../components/MainLayout';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import Uud45Data from '../data/uud45';

function UUD45Page() {
  return (
    <Layout>
      <ChapterNavigation nextLink="/proklamasi/" />
      <ChapterTitle subTitle="UUD 1945" title="Dasar Negara" />

      <div className="text-left">
        <div>
          {Uud45Data.map((section) => (
            <div key={section} className="mt-4 flex items-center rounded overflow-hidden shadow-lg">
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

export default UUD45Page;
