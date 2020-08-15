import Layout from '../components/MainLayout';
import MetaHead from '../components/MetaHead';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import DwiDharmaData from '../data/dwi-dharma';
import { BASE_PATH } from '../constants';

const title = 'Dwi Dharma Pramuka | Buku Saku Pramuka Digital';
const desc =
  'Penjelasan lengkap mengenai Dwi Dharma Pramuka di Buku Saku Pramuka Digital';
const url = BASE_PATH + '/dwi-dharma/';

function DwiDharmaPage() {
  return (
    <Layout>
			<MetaHead title={title} desc={desc} url={url}/>
      <ChapterNavigation nextLink="/tri-satya/" />
      <ChapterTitle subTitle="Dwi Dharma" title="Materi Pramuka" />

      <div className="text-left">
        <div
          className="mt-4 rounded overflow-hidden shadow-lg"
          id={DwiDharmaData.id}
        >
          <div className="relative">
            <img
              className="w-full"
              src="/assets/5930.jpg"
              alt="Anak-anak berkemah"
            />
          </div>
          <div className="px-6 py-4">
            <p>{DwiDharmaData.preface}</p>
            <div className="mt-4">
              <p>Isi {DwiDharmaData.title} adalah sebagai berikut :</p>
              <p className="mt-4 mb-2">{DwiDharmaData.data.origin.preface}</p>
              <ol>
                {DwiDharmaData.data.origin.data.map((li) => (
                  <li className="ml-8 list-decimal" key={li}>
                    {li}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <ChapterNavigation nextLink="/tri-satya/" />
    </Layout>
  );
}

export default DwiDharmaPage;
