import { useSpeechAPI } from '../../hooks/useSpeechAPI'
import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import RadioData from '../../data/radio'
import { FaVolumeUp } from 'react-icons/fa'
import { BASE_PATH } from '../../constants'
import { useState } from 'react'

const title = 'Kode Radio Lengkap | Buku Saku Pramuka Digital'
const desc = 'Daftar lengkap kode radio'
const url = BASE_PATH + '/materi-kecakapan-umum/radio/'

function LambangPramukaPage() {
  const { canSpeak } = useSpeechAPI()
  const [isSpeak, setIsSpeak] = useState('')

  const playAudio = (word) => {
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
      <MetaHead title={title} desc={desc} url={url} />
      <BreadcrumbLevel3 text="Kode Radio" href={url} />
      <ChapterTitle subTitle="Kode Radio" title="Materi Kecakapan Umum" />

      <div className="text-center md:text-left">
        <div>
          {RadioData.sections.map((section) => (
            <div key={section.key} className="mb-4">
              <h3 className="text-xl font-bold">{section.title}</h3>
              <div className="flex flex-wrap justify-center items-center mb-4 md:justify-start">
                {RadioData[section.key].map((item) => (
                  <div
                    key={item.text}
                    onClick={() => canSpeak && playAudio(item.code.toLowerCase())}
                    className="flex overflow-hidden items-center w-1/2 rounded shadow-lg cursor-pointer md:w-1/5"
                  >
                    <div className="flex items-center py-2 px-2 w-full">
                      <div className="w-10">{item.text}</div>{' '}
                      <div className="text-orange-500">{item.code}</div>
                      {canSpeak && (
                        <div
                          className={
                            isSpeak === item.code.toLowerCase()
                              ? 'ml-auto text-orange-900'
                              : 'ml-auto text-gray-500'
                          }
                        >
                          <FaVolumeUp />
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
    nonInteraction: true // avoids affecting bounce rate.
  })
}

export default LambangPramukaPage
