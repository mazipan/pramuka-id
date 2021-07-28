import { Fragment } from 'react'

import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeragamPramukaData from '../../data/seragam-pramuka'
import { BASE_PATH } from '../../constants'
import Text from '../../components/Text'
import Expansion from '../../components/Expansion'

const { title, subtitle, desc, data } = SeragamPramukaData
const title_ = `${subtitle} | Buku Saku Pramuka Digital`
const url = BASE_PATH + '/materi-pramuka/seragam-pramuka/'

function SeragamPramukaPage() {
  const renderSection = (section) => {
    return (
      <>
        {section.map(({ type, content }, idx) => {
          if (type === 'list') {
            return (
              <ul className="pb-4 ml-8 list-disc" key={idx}>
                {content.map(({ name, lists }, j) => (
                  <Fragment key={j}>
                    <li className="py-2">{name}</li>
                    <ol className="ml-8 list-disc">
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

  return (
    <Layout>
      <MetaHead title={title_} desc={desc} url={url} />
      <BreadcrumbLevel3 text={subtitle} href={url} />
      <ChapterTitle subTitle={subtitle} title={title} />

      <div className="text-left">
        {data.map((item, index) => (
          <Expansion
            key={index}
            index={index}
            title={item.title}
            value={renderSection(item.section)}
          />
        ))}
      </div>
    </Layout>
  )
}

export default SeragamPramukaPage
