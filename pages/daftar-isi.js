import Link from 'next/link';
import Layout from '../components/MainLayout';
import DataDaftarIsi from '../data/daftar-isi';

function DaftarIsiPage() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="mt-8 font-bold text-3xl md:text-4xl">Daftar Isi</h1>
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
                    <h3 className="mb-2 font-medium text-indigo-600">
                      <Link href={babChild.href}>
                        <a title={babChild.text}>{babChild.text}</a>
                      </Link>
                    </h3>

                    {babChild.children && babChild.children.length > 0 && (
                      <ol>
                        {babChild.children.map((li) => (
                          <li className="ml-4 text-indigo-500">
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
						className="text-indigo-500"
          >
            Github issue
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default DaftarIsiPage;
