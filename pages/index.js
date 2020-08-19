import Link from 'next/link';
import Layout from '../components/MainLayout';
import DataDaftarIsi from '../data/daftar-isi';

function DaftarIsiPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src="/assets/5930.jpg"
          className="mt-8 w-full max-w-xl rounded"
          alt="Para pramuka"
        />
      </div>
      <div className="text-center">
        <h1 className="mt-8 font-bold text-3xl md:text-4xl">Buku Saku Pramuka Digital</h1>
      </div>
      <div className="text-left">
        {DataDaftarIsi.map((bab) => (
          <div key={bab.text}>
            <h2 className="mt-8 mb-4 font-medium text-xl md:text-2xl">
              {bab.text}
            </h2>
            {bab.children && bab.children.length > 0 && (
              <ul>
                {bab.children.map((babChild) => (
                  <li className="mb-2" key={babChild.href}>
                    <h3 className="mb-2 font-medium text-orange-600">
                      <Link href={babChild.href}>
                        <a title={babChild.text}>{babChild.text}</a>
                      </Link>
                    </h3>

                    {babChild.children && babChild.children.length > 0 && (
                      <ol>
                        {babChild.children.map((li) => (
                          <li className="ml-4 text-orange-500">
                            <Link href={li.href}>
                              <a title={li.text}>{li.text}</a>
                            </Link>
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="mt-8">
          Tidak menemukan yang kamu cari? Kamu bisa membuat permintaan
          penambahan data baru melalui{` `}
          <a
            href="https://github.com/mazipan/buku-saku-pramuka/issues/new"
            target="_blank"
            rel="noopenner noreferrer"
            className="text-orange-500"
          >
            Github issue
          </a>
        </div>
      </div>
    </Layout>
  );
}

export function reportWebVitals({ id, name, label, value }) {
  ga('send', 'event', {
    eventCategory:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  })
}

export default DaftarIsiPage;
