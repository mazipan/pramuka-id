import React from 'react'

import Layout from '../components/MainLayout'
import MetaHead from '../components/MetaHead'
import ChapterNavigation from '../components/ChapterNavigation'
import ChapterTitle from '../components/ChapterTitle'
import SeragamPramukaData from '../data/seragam-pramuka'
import { BASE_PATH } from '../constants'
import Text from '../components/Text'
import Expansion from '../components/Expansion'

const { title, subtitle, desc, data } = SeragamPramukaData
const title_ = `${subtitle} | Buku Saku Pramuka Digital`
const url = BASE_PATH + '/seragam-pramuka/'
const nextLink = '/satuan-karya-pramuka/'

function SeragamPramukaPage() {
  const renderSection = (section) => {
    return (
      <>
        {section.map(({ type, content }, idx) => {
          if (type === 'list') {
            return (
              <ul className="list-disc ml-8 pb-4" key={idx}>
                {content.map(({ name, lists }, j) => (
                  <React.Fragment key={j}>
                    <li className="py-2">{name}</li>
                    <ol className="list-disc ml-8">{lists && lists.map((list, k) => <li key={k}>{list}</li>)}</ol>
                  </React.Fragment>
                ))}
              </ul>
            )
          }

          if (type === 'img') {
            return <img key={idx} className="mx-auto mb-4" src={content} />
          }

          return <Text tag={type} text={content} key={idx} className={`pb-4 ${type === 'h4' ? 'font-semibold' : ''}`} />
        })}
      </>
    )
  }

  return (
    <Layout>
      <MetaHead title={title_} desc={desc} url={url} />
      <ChapterNavigation nextLink={nextLink} />
      <ChapterTitle subTitle={subtitle} title={title} />

      <div className="text-left">
        {data.map((item, index) => (
          <Expansion key={index} index={index} title={item.title} value={renderSection(item.section)} />
        ))}
      </div>

      <ChapterNavigation nextLink={nextLink} />
    </Layout>
  )
}

export default SeragamPramukaPage
