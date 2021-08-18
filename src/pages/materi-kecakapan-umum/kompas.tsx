import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import Expansion from '../../components/Expansion'
import KompasDataJson from '../../data/kompas'
import { BASE_PATH } from '../../constants'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Mengenal Kompas'
const desc =
  'Memahami Kompas: sejarah, fungsi, cara kerja dan jenis-jenis kompas untuk anggota pramuka'
const url = BASE_PATH + '/materi-kecakapan-umum/kompas/'

function KompasPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Mengenal Kompas" href={url} />
        <ChapterTitle subTitle="Mengenal Kompas" title={KompasDataJson.title} />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-left">
          <div className="mt-4 sectionIntro" id={KompasDataJson.id}>
            <div className="mt-6">
              {KompasDataJson.dataIntro.map((data, index) => (
                <div key={'sectionIntro-' + index}>
                  <p className="mt-2 mb-2 text-xl font-bold md:text-2xl">{data.heading}</p>
                  {data.paragraph.map((paragraph, index) => (
                    <p key={'paragraph-' + index}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="sectionFungsi">
            <p className="mt-2 mb-2 text-xl font-bold md:text-2xl">
              {KompasDataJson.dataFungsi.heading}
            </p>
            <p>{KompasDataJson.dataFungsi.paragraph}</p>
            {KompasDataJson.dataFungsi.list.map((list, index) => (
              <ol className="fungsi-kompas-list" key={index}>
                <li key={'list-fungsi-' + index}>{`${index + 1}. ${list}`}</li>
              </ol>
            ))}
          </div>
          <div className="sectionCarKer">
            <p className="mt-2 mb-4 text-xl font-bold md:text-2xl">
              {KompasDataJson.dataCarKer.heading}
            </p>
            <div>
              <img src={KompasDataJson.dataCarKer.image} alt="cara-kerja" />
            </div>
            <p className="mt-2">{KompasDataJson.dataCarKer.paragraph}</p>

            <Expansion
              initialState={true}
              title="Tabel Arah Mata Angin"
              value={
                <div className="overflow-auto py-4 px-6 w-full">
                  <table className="table-auto">
                    <thead>
                      <tr>
                        {KompasDataJson.dataCarKer.table.th.map((heading, index) => (
                          <th key={index} className="py-2 px-4 border">
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {KompasDataJson.dataCarKer.table.td.map((td, index) => (
                        <tr key={index}>
                          {td.map((data, index) => (
                            <td className="py-2 px-4 border" key={index}>
                              {data}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }
            />
          </div>

          <div className="mt-4 sectionBagian">
            <p className="mt-2 mb-4 text-xl font-bold md:text-2xl">
              {KompasDataJson.dataBagian.heading}
            </p>
            <div>
              <img src={KompasDataJson.dataBagian.image} alt="cara-kerja" />
            </div>
            <div className="mt-2 list-bagian">
              <ol>
                {KompasDataJson.dataBagian.list.map((list, index) => (
                  <li key={index}>{`${index + 1}. ${list}`}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="mt-4 sectionCara">
            <p className="mt-2 mb-4 text-xl font-bold md:text-2xl">
              {KompasDataJson.dataCara.heading}
            </p>
            <p className="mt-2">{KompasDataJson.dataCara.paragraph}</p>
            <div className="mt-2 list-bagian">
              <ol>
                {KompasDataJson.dataCara.list.map((list, index) => (
                  <li key={index}>{`${index + 1}. ${list}`}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="mt-4 sectionJenis">
            <p className="mt-2 mb-4 text-xl font-bold md:text-2xl">
              {KompasDataJson.dataJenis.heading}
            </p>

            <div>
              {KompasDataJson.dataJenis.list.map((data) => (
                <Expansion
                  initialState={true}
                  title={data.title}
                  value={
                    <>
                      <div className="flex justify-center w-full">
                        <img className="w-56 rounded-md" src={data.image} alt="cara-kerja" />
                      </div>
                      <p className="p-4 mt-4 mb-4">{data.desc}</p>
                    </>
                  }
                  key={data.title}
                />
              ))}
            </div>
          </div>
        </div>
        <SeoText text={desc} />
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default KompasPage
