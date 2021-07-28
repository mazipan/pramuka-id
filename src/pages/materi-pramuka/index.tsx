import Layout from '../../components/MainLayout'
import CardList from '../../components/Card/List'
import SubmitGhIssue from '../../components/SubmitGhIssue'
import DataDaftarIsi, { ContentItem } from '../../data/daftar-isi'

import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

function MateriKecakapanUmumPage() {
  const FilteredData: ContentItem | undefined = DataDaftarIsi.find(
    (bab) => bab.href === '/materi-pramuka/'
  )

  return (
    <Layout>
      <>
        <div className="text-center">
          <h1 className="mt-8 text-3xl font-bold md:text-4xl">{FilteredData?.text}</h1>
        </div>
        <div className="text-left">
          <ul>
            {FilteredData?.children?.map((babChild) => (
              <li className="mb-2" key={babChild.href}>
                <CardList title={babChild.text} href={babChild.href} />
              </li>
            ))}
          </ul>

          <SubmitGhIssue />
        </div>
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default MateriKecakapanUmumPage
