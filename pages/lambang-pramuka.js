import Layout from '../components/MainLayout';
import MetaHead from '../components/MetaHead';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import IconPramuka from '../components/IconPramuka';
import LambangPramuka from '../data/lambang-pramuka';
import { BASE_PATH } from '../constants';

const title = 'Lambang Pramuka | Buku Saku Pramuka Digital';
const desc =
  'Baca arti dan makna dari lambang pramuka di Buku Saku Pramuka Digital';
const url = BASE_PATH + '/lambang-pramuka/';

function LambangPramukaPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <ChapterNavigation nextLink="/salam-pramuka/" />
      <ChapterTitle subTitle="Lambang Pramuka" title="Materi Pramuka" />

      <div className="flex flex-col items-center justify-center text-center">
        <IconPramuka color="#000" />
      </div>

      <div className="text-left">
        <p className="mt-4">{LambangPramuka.preface}</p>
        <p className="mt-4">{LambangPramuka.prefix}</p>
        <div className="mt-4">
          {LambangPramuka.meanings.map((section, index) => (
            <div
              key={section}
              className="mt-4 flex items-center rounded overflow-hidden shadow-lg"
            >
              <div className="min-w-80 min-h-80 flex justify-center items-center text-center	 font-bold text-3xl md:text-4xl">
                {index + 1}
              </div>
              <div className="px-6 py-4">
                <p>{section}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4">{LambangPramuka.postfix}</p>
        <p className="mt-4">{LambangPramuka.overall_meaning}</p>
        <p className="mt-4">{LambangPramuka.usage}</p>
      </div>

      <ChapterNavigation nextLink="/salam-pramuka/" />
    </Layout>
  );
}

export default LambangPramukaPage;
