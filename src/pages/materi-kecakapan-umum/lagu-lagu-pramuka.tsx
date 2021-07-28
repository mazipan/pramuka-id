import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SongsData, { Song } from '../../data/lagu-lagu-pramuka'
import { BASE_PATH } from '../../constants'
import Expansion from '../../components/Expansion'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = `${SongsData.subtitle}`
const desc = SongsData.description
const url = BASE_PATH + '/materi-kecakapan-umum/lagu-lagu-pramuka/'

function LaguLaguPramuka() {
  const renderAudio = (song: Song) => {
    if (song.audio) {
      return (
        <div className="mb-6">
          <audio controls className="w-full">
            <source src={song.audio} type="audio/mpeg" />
          </audio>
        </div>
      )
    }
  }

  const renderLyric = (song: Song) => {
    if (song.lyric in SongsData.lyrics) {
      return (
        <div className="mb-6">
          <p>Lirik:</p>
          <hr className="mb-2" />
          {/*
                            // @ts-ignore */}
          {SongsData.lyrics[song.lyric]?.map((section, sectionIndex) => (
            <div key={`section-${sectionIndex}`} className="mb-4">
              {section.map((lyric: any, lyricIndex: number) => (
                <p key={`section-${sectionIndex}-lyric-${lyricIndex}`} className="italic">
                  {lyric}
                </p>
              ))}
            </div>
          ))}
        </div>
      )
    }
  }

  const renderYoutube = (song: Song) => {
    if (song.youtube) {
      return (
        <div>
          <hr className="mb-2" />
          <p className="text-sm">
            Lihat video {song.title} di{' '}
            <a
              href={song.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-red-600 hover:text-red-700"
            >
              YouTube
            </a>
            .
          </p>
        </div>
      )
    }
  }

  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text={SongsData.subtitle} href={url} />
        <ChapterTitle subTitle={SongsData.subtitle} title={SongsData.title} />

        <div className="text-left">
          <div className="mt-4">
            {SongsData.songs.map((song, index) => (
              <Expansion
                key={index}
                index={index}
                title={song.title}
                value={
                  <>
                    {renderAudio(song)}
                    {renderLyric(song)}
                    {renderYoutube(song)}
                  </>
                }
              />
            ))}
          </div>
        </div>
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default LaguLaguPramuka
