import Image from 'next/image'
import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import { BASE_PATH } from '../../constants'
import TaliTemaliData from '../../data/tali-temali'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'
import Expansion from '../../components/Expansion'

const title = 'Tali temali'
const desc =
  'Kumpulan tali - temali'
const url = BASE_PATH + '/materi-kecakapan-umum/tali-temali/'

function TaliTemali() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Tali Temali" href={url} />
        <ChapterTitle subTitle="Tali Temali" title="Materi Kecakapan Umum" />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-left">
          <div className="mt-4">
            {TaliTemaliData.title}
          </div>
        </div>
        <SeoText text={TaliTemaliData.prefaces} />

        <div className='mt-4'>
        {TaliTemaliData.knots.map((section, index) => (
          <Expansion
            key={index}
            initialState={true}
            title={section.title}
            value={
              <>
                {section.description.length ? (
                  <p className="mb-4 text-base leading-7 text-secondary">
                    {section.description}
                  </p>
                ) : null}


                {section?.steps?.length ? (
                  <>
                    <p className="font-semibold">Caranya membuat:</p>

                    <ul className='pt-2 pl-8 list-disc list'>
                      {section.steps.map((item, index) => (
                        <li className="pb-4" key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}

                <div className="flex justify-center pb-4">
                  {section.imageUrl && (<Image src={section.imageUrl} alt={section?.imageUrl} width={500} height={300} />)}
                </div>

                <div>
                  <p className="pb-2 font-semibold">Fungsi:</p>
                  {section.utility}
                </div>
              </>
            }
          />
        ))}
        </div>
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default TaliTemali
