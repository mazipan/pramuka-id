import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import { BASE_PATH } from '../../constants'
import dataSemaphore from '../../data/bendera-semaphore'

const title = 'Bendera Semaphore'
const desc = 'Penjelasan disertai gambar mengenai sandi menggunakan Bendera Semaphore di Pramuka'
const url = BASE_PATH + '/materi-kecakapan-umum/dasa-dharma/'

const BenderaSemaphore = () => {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Bendera Semaphore" href={url} />
        <ChapterTitle subTitle="Bendera Semaphore" title="Materi Kecakapan Umum" />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-center md:text-left">
          <div className="mb-2">
            <img
              className="m-auto w-9/12 lg:w-6/12"
              src={dataSemaphore.semaphoreImg}
              alt="bendera semaphore"
            />
            <p className="text-justify">{dataSemaphore.description}</p>
          </div>
          <div>
            {dataSemaphore.sections.map((section) => (
              <div key={section.key} className="mb-4">
                <h3 className="text-xl font-bold">{section.title}</h3>
                <div className="grid grid-cols-2 gap-5 mb-4 lg:grid-cols-5">
                  {/*
                  // @ts-ignore */}
                  {dataSemaphore[section.key].map((item) => (
                    <div
                      className="flex flex-col items-center p-2 rounded-md shadow-lg dark:border bg-card dark:border-gray-30"
                      key={item.text}
                    >
                      <img src={item.img} alt={'Semaphore ' + item.text} />
                      <div className="mt-2">{item.text}</div>{' '}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-4">
              <h3 className="text-xl font-bold">Referensi tambahan</h3>
              <ul className="pl-6 list-disc text-left">
                {dataSemaphore.reference.map((data, key) => (
                  <li key={key}>
                    <a
                      className="text-blue-500 underline hover:text-blue-700"
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <SeoText text={desc} />
      </>
    </Layout>
  )
}

export default BenderaSemaphore
