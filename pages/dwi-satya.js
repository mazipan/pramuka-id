import Layout from '../components/MainLayout';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import DwiSatyaData from '../data/dwi-satya';

function DwiSatyaPage() {
  return (
    <Layout>
      <ChapterNavigation nextLink="/dwi-dharma/" />
      <ChapterTitle subTitle="Dwi Satya" title="Materi Pramuka" />

      <div className="text-left">
        <div
          className="mt-4 rounded overflow-hidden shadow-lg"
          id={DwiSatyaData.id}
        >
          <div className="relative">
            <img
              className="w-full"
              src="/assets/5766.jpg"
              alt="Anak-anak berkemah"
            />
          </div>
          <div className="px-6 py-4">
            <p>{DwiSatyaData.preface}</p>
            <div className="mt-4">
              <p>Isi {DwiSatyaData.title} adalah sebagai berikut :</p>
              <p className="mt-4 mb-2">{DwiSatyaData.data.origin.preface}</p>
              <ol>
                {DwiSatyaData.data.origin.data.map((li) => (
                  <li className="ml-8 list-decimal" key={li}>
                    {li}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <ChapterNavigation nextLink="/dwi-dharma/" />
    </Layout>
  );
}

export default DwiSatyaPage;
