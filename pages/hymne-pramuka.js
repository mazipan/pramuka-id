import Layout from '../components/MainLayout';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import HymneData from '../data/hymne-pramuka';

function HymnePramukaPage() {
  return (
    <Layout>
      <ChapterNavigation nextLink="/dwi-dharma/" />
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

            <audio controls>
              <source src={HymneData.data.audio} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>

      <ChapterNavigation nextLink="/dwi-dharma/" />
    </Layout>
  );
}

export default HymnePramukaPage;
