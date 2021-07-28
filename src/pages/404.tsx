import Link from 'next/link'

import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../utils/index'
import Layout from '../components/MainLayout'

function NotFoundPage() {
  return (
    <Layout>
      <div className="py-16 px-4 sm:py-24 sm:px-6 md:grid md:place-items-center lg:px-8">
        <div className="py-16 mx-auto max-w-max sm:py-24">
          <div className="sm:flex">
            <p className="text-4xl font-extrabold sm:text-5xl text-primary">404</p>
            <div className="sm:ml-6">
              <div className="sm:pl-6 sm:border-l sm:border-gray-200">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  Sepertinya kamu tersesat!
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  Coba periksa kembali URL yang dimasukkan dan coba lagi.
                </p>
              </div>
              <div className="flex mt-6 space-x-3 sm:pl-6 sm:border-l sm:border-transparent">
                <Link href="/">
                  <a className="text-base font-medium text-primary">
                    <span aria-hidden="true"> &larr;</span> Kembali ke Beranda
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default NotFoundPage
