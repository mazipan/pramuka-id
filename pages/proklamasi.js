import Layout from '../components/MainLayout';
import MetaHead from '../components/MetaHead';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import ProklamasiData from '../data/proklamasi';
import { BASE_PATH } from '../constants';

const title = 'Proklamasi | Buku Saku Pramuka Digital';
const desc = 'Teks proklamasi di Buku Saku Pramuka Digital';
const url = BASE_PATH + '/proklamasi/';

function ProklamasiPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <ChapterNavigation nextLink="/dwi-satya/" />
      <ChapterTitle subTitle="Proklamasi" title="Dasar Negara" />

      <div className="flex flex-col items-center justify-center text-center">
        <img
          src="/assets/proklamasi/proklamasi-bung-karno.jpg"
          className="w-auto"
          alt="Pembacaan naskah proklamasi oleh Bung Karno"
        />
      </div>

      <div className="mt-8 text-left">
        {ProklamasiData.data.map((section) => (
          <p
            className="mt-4"
            key={section}
          >
            {section}
          </p>
        ))}
      </div>

			<audio controls className="mt-8">
				<source src={ProklamasiData.audio} type="audio/mpeg" />
			</audio>

      <div className="mt-8 flex flex-col items-center justify-center text-center">
        <img
          src="/assets/proklamasi/naskah-proklamasi.jpeg"
          className="w-auto"
          alt="Naskah proklamasi"
        />
      </div>

      <ChapterNavigation nextLink="/dwi-satya/" />
    </Layout>
  );
}

export default ProklamasiPage;
