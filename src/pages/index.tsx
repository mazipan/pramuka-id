import Layout from '../components/MainLayout'
import SeoText from '../components/SeoText'
import CardList from '../components/Card/List'

import DataDaftarIsi from '../data/daftar-isi'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../utils/index'

import MetaHead from '../components/MetaHead'
import { BASE_PATH, BRAND_TITLE, BRAND_LONG_DESC } from '../constants'

const title = `Materi Pramuka, Materi Kecakapan Umum & Materi Kenegaraan`
const desc = BRAND_LONG_DESC
const url = `${BASE_PATH}`

function DaftarIsiPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <div className="text-center">
          <h1 className="mt-8 text-3xl font-bold md:text-4xl">{BRAND_TITLE}</h1>
        </div>
        <div className="text-left">
          {DataDaftarIsi.map((bab) => (
            <div key={bab.text}>
              <h2 className="mt-8 mb-4 text-xl font-medium font-bold text-center md:text-2xl">
                {bab.text}
              </h2>
              {bab.children && bab.children.length > 0 && (
                <ul>
                  {bab.children.map((babChild) => (
                    <li className="mb-2" key={babChild.href}>
                      <CardList title={babChild.text} href={babChild.href} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <SeoText text={desc} />
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default DaftarIsiPage
