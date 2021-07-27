import Layout from '../../components/MainLayout';
import MetaHead from '../../components/MetaHead';
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3';
import ChapterTitle from '../../components/ChapterTitle';
import ProklamasiData from '../../data/proklamasi';
import { BASE_PATH } from '../../constants';

const title = 'Proklamasi | Buku Saku Pramuka Digital';
const desc = 'Teks proklamasi di Buku Saku Pramuka Digital';
const url = BASE_PATH + '/materi-kenegaraan/proklamasi/';

function ProklamasiPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <BreadcrumbLevel3 text="Proklamasi" href={url} />
      <ChapterTitle subTitle="Proklamasi" title="Materi Kenegaraan" />

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
    </Layout>
  );
}

export function reportWebVitals({ id, name, label, value }) {
  // eslint-disable-next-line no-undef
  window.ga('send', 'event', {
    eventCategory:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  })
}

export default ProklamasiPage;
