/* eslint-disable import/no-named-as-default-member */
import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import hariNasionalData, {
  HARI_LIBUR_NASIONAL,
  HARI_PENTING_LAINNYA
} from '../../data/hari-peringatan-nasional'
import { BASE_PATH } from '../../constants'
import Expansion from '../../components/Expansion'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = 'Hari Peringatan'
const desc = 'Hari peringatan nasional dan hari penting lainnya'
const url = BASE_PATH + '/materi-kecakapan-umum/salam-pramuka/'

function HariPeringatanNasionalPage() {
  const renderList = (data: string[], key: string) => (
    <ol className="list-disc">
      {data.map((dt, index) => (
        <li className="ml-4 text-base text-secondary" key={`${key}-${index}`}>
          {dt}
        </li>
      ))}
    </ol>
  )

  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Hari Peringatan Nasional" href={url} />
        <ChapterTitle subTitle="Hari Peringatan Nasional" title="Materi Kecakapan Umum" />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-left">
          <p>{hariNasionalData.meaning}</p>
          <div className="mt-4">
            {hariNasionalData.types.map((type, index) => (
              <Expansion
                key={index}
                initialState={true}
                title={type.title}
                value={
                  <>
                    {/*
                    // @ts-ignore */}
                    {hariNasionalData[type.key]?.description && (
                      <p className="mb-4 text-base text-secondary">
                        {/*
                        // @ts-ignore */}
                        {hariNasionalData[type.key].description}
                      </p>
                    )}

                    {type.key === HARI_LIBUR_NASIONAL
                      ? renderList(hariNasionalData[HARI_LIBUR_NASIONAL].data, HARI_LIBUR_NASIONAL)
                      : hariNasionalData[HARI_PENTING_LAINNYA].months.map((month) => (
                          <div
                            className="mt-4 text-secondary"
                            key={`${hariNasionalData[type.key]}-${month.key}`}
                          >
                            <p className="mb-4 font-bold">{month.title}</p>
                            {/*
                          // @ts-ignore */}
                            {renderList(
                              // @ts-ignore
                              hariNasionalData[HARI_PENTING_LAINNYA][month.key],
                              `${HARI_PENTING_LAINNYA}-${month.key}`
                            )}
                          </div>
                        ))}
                  </>
                }
              />
            ))}
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

export default HariPeringatanNasionalPage
