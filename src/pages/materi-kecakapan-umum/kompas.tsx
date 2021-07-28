import { useState } from 'react'
import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import KompasDataJson from '../../data/kompas'
import { BASE_PATH } from '../../constants'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Mengenal Kompas'
const desc = 'Kompas di Buku Saku Pramuka'
const url = BASE_PATH + '/materi-kecakapan-umum/kompas/'

function KompasPage() {
  const [collapsed, setCollapsed] = useState(-1)
  const [tableOpen, setTable] = useState(false)

  const handleCollapse = (index: number) => {
    if (collapsed === index) {
      setCollapsed(-1)
    } else {
      setCollapsed(index)
    }
  }
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Mengenal Kompas" href={url} />
        <ChapterTitle subTitle="Mengenal Kompas" title={KompasDataJson.title} />
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
            <div className="overflow-hidden mt-4 rounded shadow-lg bg-card">
              <div className="flex flex-wrap justify-between items-center py-4 px-6 w-full">
                <div className="font-semibold min-w-250">Tabel Arah Mata Angin</div>
                <button
                  onClick={() => {
                    setTable(!tableOpen)
                  }}
                  className="inline-flex items-center py-2 px-4 rounded bg-primary text-button hover:bg-secondary"
                >
                  {tableOpen ? 'Tutup tabel' : 'Lihat tabel'}
                  <svg
                    className={`w-4 h-4 ml-2 transition ease-in-out duration-500 transform ${
                      tableOpen ? '-rotate-180' : 'rotate-0'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
              <div
                className={`transition duration-150 ease-in-out ${tableOpen ? 'block' : 'hidden'}`}
              >
                <div className="py-4 px-6 w-full">
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
              </div>
            </div>
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
              {KompasDataJson.dataJenis.list.map((data, index) => (
                <div key={index} className="overflow-hidden mt-4 rounded shadow-lg bg-card">
                  <div className="flex flex-wrap justify-between items-center py-4 px-6 w-full">
                    <div className="font-semibold min-w-250">{data.title}</div>

                    <button
                      onClick={() => {
                        handleCollapse(index)
                      }}
                      className="inline-flex items-center py-2 px-4 rounded bg-primary text-button hover:bg-secondary"
                    >
                      {collapsed === index ? 'Tutup detail' : 'Lihat detail'}
                      <svg
                        className={`w-4 h-4 ml-2 transition ease-in-out duration-500 transform ${
                          collapsed === index ? '-rotate-180' : 'rotate-0'
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  </div>

                  <div
                    className={`transition duration-150 ease-in-out ${
                      collapsed === index ? 'block' : 'hidden'
                    }`}
                  >
                    <div key={'jenis-' + index}>
                      <div>
                        <img className="w-56" src={data.image} alt="cara-kerja" />
                      </div>
                      <p className="p-4 mt-4 mb-4">{data.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default KompasPage
