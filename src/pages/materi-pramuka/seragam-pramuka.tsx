import { Fragment } from 'react'

import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import SeragamPramukaDataJson from '../../data/seragam-pramuka'
import { BASE_PATH } from '../../constants'
import Text from '../../components/Text'
import Expansion from '../../components/Expansion'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const { title, subtitle, description, data } = SeragamPramukaDataJson
const desc = description
const title_ = `${subtitle}`
const url = BASE_PATH + '/materi-pramuka/seragam-pramuka/'

// @ts-ignore
const renderSection = (section) => {
  return (
    <>
      {/*
      // @ts-ignore */}
      {section.map(({ type, content }, idx) => {
        if (type === 'list') {
          return (
            <ul className="pb-4 ml-8 list-disc" key={idx}>
              {/*
              // @ts-ignore */}
              {content.map(({ name, lists }, j) => (
                <Fragment key={j}>
                  <li className="py-2">{name}</li>
                  <ol className="ml-8 list-disc">
                    {/*
              // @ts-ignore */}
                    {lists && lists.map((list, k) => <li key={k}>{list}</li>)}
                  </ol>
                </Fragment>
              ))}
            </ul>
          )
        }

        if (type === 'img') {
          return <img key={idx} className="mx-auto mb-4" src={content} />
        }

        return (
          <Text
            tag={type}
            text={content}
            key={idx}
            className={`pb-4 ${type === 'h4' ? 'font-semibold' : ''}`}
          />
        )
      })}
    </>
  )
}

function SeragamPramukaPage() {
  return (
    <Layout>
      <>
        <MetaHead title={title_} desc={description} url={url} />
        <BreadcrumbLevel3 text={subtitle} href={url} />
        <ChapterTitle subTitle={subtitle} title={title} />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-left">
          {data.map((item, index) => (
            <Expansion
              key={index}
              initialState={true}
              title={item.title}
              value={renderSection(item.section)}
            />
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

export default SeragamPramukaPage
