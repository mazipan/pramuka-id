import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import ActionNavigation from '../../components/ActionNavigation'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SeoText from '../../components/SeoText'
import SongsData, { Song } from '../../data/lagu-lagu-pramuka'
import { BASE_PATH } from '../../constants'
import Expansion from '../../components/Expansion'
import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

const title = `${SongsData.subtitle}`
const desc =
  'Kumpulan lagu-lagu yang sering dinyanyikan pada saat kegiatan pramuka, disertai audio MP3'
const url = BASE_PATH + '/materi-kecakapan-umum/lagu-lagu-pramuka/'

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
        {/*
        // @ts-ignore */}
        {SongsData.lyrics[song.lyric]?.map((section, sectionIndex) => (
          <div key={`section-${sectionIndex}`} className="mb-4 italic text-center">
            {section.map((lyric: any, lyricIndex: number) => (
              <p key={`section-${sectionIndex}-lyric-${lyricIndex}`}>{lyric}</p>
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
        <p className="text-sm text-gray-400">
          Tonton video{' '}
          <a
            href={song.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-red-600 hover:text-red-700"
          >
            &quot;{song.title}&quot; di YouTube
          </a>
          .
        </p>
      </div>
    )
  }
}

function LaguLaguPramuka() {
  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <BreadcrumbLevel3 text={SongsData.subtitle} href={url} />
        <ChapterTitle subTitle={SongsData.subtitle} title={SongsData.title} />
        <ActionNavigation title={title} text={desc} url={url} />

        <div className="text-left">
          <div className="mt-4">
            {SongsData.songs.map((song, index) => (
              <Expansion
                key={index}
                initialState={true}
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
        <SeoText text={desc} />
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default LaguLaguPramuka
