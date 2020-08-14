import Layout from '../components/layout';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import Bab1Data from '../data/bab1';

function Bab1Page() {
  return (
    <Layout>
			<ChapterNavigation nextLink="/daftar-isi/" />
			<ChapterTitle babText={Bab1Data.title} babNumber={Bab1Data.num} />

			<div className="text-left">
        <p>{Bab1Data.preface}</p>
        <div>
          {Bab1Data.sections.map((section) => (
            <div
              className="mt-4 rounded overflow-hidden shadow-lg"
              key={section.id}
              id={section.id}
            >
              <div className="relative">
                <img
                  className="w-full"
                  src="/assets/sky.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="absolute inset-y-1/2 w-full text-center">
                  <h4 className="mb-4 text-white font-bold text-3xl md:text-4xl">
                    {section.title}
                  </h4>
                </div>
              </div>
              <div className="px-6 py-4">
                <p>{section.preface}</p>
                <div className="mt-4">
                  <p>Isi dan Arti {section.title} adalah sebagai berikut :</p>
                  <p className="mt-4 mb-2">{section.data.origin.preface}</p>
                  <ol>
                    {section.data.origin.data.map((li) => (
                      <li className="ml-8 list-decimal">{li}</li>
                    ))}
                  </ol>
                  <p className="mt-4 mb-2">{section.data.meanings.preface}</p>
                  <ol>
                    {section.data.meanings.data.map((li, index) => (
                      <li className="ml-8 list-decimal">
                        {section.data.meanings.refer && (
                          <>
                            <p>{section.data.origin.data[index]}</p>
                            <ol className="mb-2">
                              {li.details &&
                                li.details.length > 0 &&
                                li.details.map((liChild) => (
                                  <li className="ml-4 list-disc">{liChild}</li>
                                ))}
                            </ol>
                          </>
                        )}

                        {!section.data.meanings.refer && <p>{li.short}</p>}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


			<ChapterNavigation nextLink="/daftar-isi/" />
    </Layout>
  );
}

export default Bab1Page;
