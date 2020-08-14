import Layout from '../components/MainLayout';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import DasaDharmaData from '../data/dasa-dharma';

function DasaDharmaPage() {
  return (
    <Layout>
      <ChapterNavigation nextLink="/hymne-pramuka/" />
      <ChapterTitle subTitle="Dasa Dharma" title="Materi Pramuka" />

      <div className="text-left">
        <div
          className="mt-4 rounded overflow-hidden shadow-lg"
          id={DasaDharmaData.id}
        >
          <div className="relative">
            <img
              className="w-full"
              src="/assets/5930.jpg"
              alt="Anak-anak berkemah"
            />
          </div>
          <div className="px-6 py-4">
            <p>{DasaDharmaData.preface}</p>
            <div className="mt-4">
              <p>
                Isi dan Arti {DasaDharmaData.title} adalah sebagai berikut :
              </p>
              <p className="mt-4 mb-2">{DasaDharmaData.data.origin.preface}</p>
              <ol>
                {DasaDharmaData.data.origin.data.map((li) => (
                  <li className="ml-8 list-decimal" key={li}>{li}</li>
                ))}
              </ol>
              <p className="mt-4 mb-2">
                {DasaDharmaData.data.meanings.preface}
              </p>
              <ol>
                {DasaDharmaData.data.meanings.data.map((li, index) => (
                  <li className="ml-8 list-decimal" key={DasaDharmaData.data.origin.data[index]}>
                    <p>{DasaDharmaData.data.origin.data[index]}</p>
                    <ol className="mb-2">
                      {li.details &&
                        li.details.length > 0 &&
                        li.details.map((liChild) => (
                          <li className="ml-4 list-disc" key={liChild}>{liChild}</li>
                        ))}
                    </ol>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <ChapterNavigation nextLink="/hymne-pramuka/" />
    </Layout>
  );
}

export default DasaDharmaPage;
