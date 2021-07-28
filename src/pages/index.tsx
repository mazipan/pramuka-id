import Link from 'next/link'
import Layout from '../components/MainLayout'
import SubmitGhIssue from '../components/SubmitGhIssue'
import DataDaftarIsi from '../data/daftar-isi'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../utils/index'

import MetaHead from '../components/MetaHead'
import { BASE_PATH, BRAND_TITLE, BRAND_LONG_DESC } from '../constants'

const title = `Beranda`
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
              <h2 className="mt-8 mb-4 text-xl font-medium md:text-2xl">{bab.text}</h2>
              {bab.children && bab.children.length > 0 && (
                <ul>
                  {bab.children.map((babChild) => (
                    <li className="mb-2" key={babChild.href}>
                      <h3 className="mb-2 font-medium text-link">
                        <Link href={babChild.href}>
                          <a title={babChild.text}>{babChild.text}</a>
                        </Link>
                      </h3>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <SubmitGhIssue />
        </div>
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default DaftarIsiPage
