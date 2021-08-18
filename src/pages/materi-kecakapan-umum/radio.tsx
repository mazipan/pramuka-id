import { useSpeechAPI } from '../../hooks/useSpeechAPI'
import Layout from '../../components/MainLayout'
import ActionNavigation from '../../components/ActionNavigation'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import RadioData from '../../data/radio'
import { FiVolume2 } from 'react-icons/fi'
import { BASE_PATH } from '../../constants'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

import { useState } from 'react'

const title = 'Kode Radio Lengkap'
const desc = 'Daftar lengkap kode radio untuk anggota pramuka dan umum, dilengkapi dengan audio'
const url = BASE_PATH + '/materi-kecakapan-umum/radio/'

function LambangPramukaPage() {
  const { canSpeak } = useSpeechAPI()
  const [isSpeak, setIsSpeak] = useState('')

  const playAudio = (word: string) => {
    try {
      const utterance = new SpeechSynthesisUtterance(word)
      utterance.lang = 'en-US'
      utterance.onstart = () => setIsSpeak(word) // when starting to play audio
      utterance.onend = () => setIsSpeak('') // when finished playing audio
      speechSynthesis.speak(utterance)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text="Kode Radio" href={url} />
        <ChapterTitle subTitle="Kode Radio" title="Materi Kecakapan Umum" />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-center md:text-left">
          <div>
            {RadioData.sections.map((section) => (
              <div key={section.key} className="mb-4">
                <h3 className="text-xl font-bold">{section.title}</h3>
                <div className="grid grid-cols-1 gap-3 my-4 md:grid-cols-3">
                  {/*
                            // @ts-ignore */}
                  {RadioData[section.key].map((item) => (
                    <div
                      key={item.text}
                      onClick={() => canSpeak && playAudio(item.code.toLowerCase())}
                      className="flex overflow-hidden items-center rounded-md shadow-lg dark:border bg-card cursor-pointerz dark:border-gray-30"
                    >
                      <div className="flex items-center py-4 px-2 w-full">
                        <div className="w-10 font-bold">{item.text}</div>{' '}
                        <div className="text-yellow-500">{item.code}</div>
                        {canSpeak && (
                          <div
                            className={
                              isSpeak === item.code.toLowerCase()
                                ? 'ml-auto text-yellow-900'
                                : 'ml-auto text-gray-500'
                            }
                          >
                            <FiVolume2 />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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

export default LambangPramukaPage
