import React from 'react'

import Layout from '../components/MainLayout'
import MetaHead from '../components/MetaHead'
import ChapterNavigation from '../components/ChapterNavigation'
import ChapterTitle from '../components/ChapterTitle'
import SeragamPramukaData from '../data/seragam-pramuka'
import { BASE_PATH } from '../constants'
import Text from '../components/Text'

const { title, subtitle, desc, data } = SeragamPramukaData
const title_ = `${subtitle} | Buku Saku Pramuka Digital`
const url = BASE_PATH + '/seragam-pramuka/'
const nextLink = '/satuan-karya-pramuka/'

function SeragamPramukaPage() {
  const [collapsed, setCollapsed] = React.useState(-1)

  const handleCollapse = (index) => {
    if (collapsed === index) {
      setCollapsed(-1)
    } else {
      setCollapsed(index)
    }
  }

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
          <div key={index} className="mt-4 rounded overflow-hidden shadow-lg">
            <div className="w-full px-6 py-4 flex items-center justify-between flex-wrap">
              <div className="font-bold text-xl min-w-250">{item.title}</div>

              <button
                onClick={() => {
                  handleCollapse(index)
                }}
                className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded inline-flex items-center"
              >
                {collapsed === index ? 'Tutup detail' : 'Lihat detail'}
                <svg
                  className={`w-4 h-4 ml-2 transition ease-in-out duration-500 transform ${
                    collapsed === index ? '-rotate-180' : 'rotate-0'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <div className={`transition duration-150 ease-in-out ${collapsed === index ? 'block' : 'hidden'}`}>
              <div className="w-full px-6 py-4 text-justify">{renderSection(item.section)}</div>
            </div>
          </div>
        ))}
      </div>

      <ChapterNavigation nextLink={nextLink} />
    </Layout>
  )
}

export default SeragamPramukaPage
