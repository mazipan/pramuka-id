import Layout from '../components/MainLayout'
import Head from 'next/head'

function AboutPage() {
  return (
    <Layout>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@graph': [
                {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: 'Buku Saku Pramuka',
                      item: 'https://buku-saku-pramuka.vercel.app',
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: 'Tentang',
                      item: 'https://buku-saku-pramuka.vercel.app/tentang',
                    },
                  ],
                },
                {
                  '@type': 'AboutPage',
                  name: 'Tentang Buku Saku Pramuka',
                  headline: 'Tentang Buku Saku Pramuka Digital',
                  url: 'https://buku-saku-pramuka.vercel.app/tentang',
                  mainEntityOfPage: 'https://buku-saku-pramuka.vercel.app/tentang',
                  image: {
                    '@type': 'ImageObject',
                    url: 'https://buku-saku-pramuka.vercel.app/assets/5930.jpg',
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
        <div className="space-y-6 md:w-1/2">
          {[
            {
              heading: `Apa sebenarnya website ini?`,
              body: `Website ini merupakan Buku Saku Pramuka digital berupa website, berisikan materi yang telah dikumpulkan dari berbagai sumber.`,
            },
          ].map((section) => (
            <div key={section.heading}>
              <h2 className="mb-3 text-xl font-bold">{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>

        <div className="md:w-1/2">
          <img alt="Berkemah" className="w-full rounded" src="/assets/5930.jpg" />
        </div>
      </div>
    </Layout>
  )
}

export function reportWebVitals({ id, name, label, value }) {
  ga('send', 'event', {
    eventCategory: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  })
}

export default AboutPage
