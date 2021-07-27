import Link from "next/link";

import Layout from '../components/MainLayout'

function NotFoundPage() {
  return (
    <Layout>
       <div className="px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="py-16 sm:py-24 max-w-max mx-auto">
            <div className="sm:flex">
              <p className="text-4xl font-extrabold text-primary sm:text-5xl">
                404
              </p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    Sepertinya kamu tersesat!
                  </h1>
                  <p className="mt-1 text-base text-gray-500">
                    Coba periksa kembali URL yang dimasukkan dan coba lagi.
                  </p>
                </div>
                <div className="mt-6 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
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

export function reportWebVitals({ id, name, label, value }) {
  // eslint-disable-next-line no-undef
  window.ga('send', 'event', {
    eventCategory: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  })
}

export default NotFoundPage
