import Layout from '../../components/MainLayout'
import MetaHead from '../../components/MetaHead'
import BreadcrumbLevel3 from '../../components/Breadcrumb/Level3'
import ChapterTitle from '../../components/ChapterTitle'
import SongsData from '../../data/lagu-lagu-pramuka'
import { BASE_PATH } from '../../constants'
import Expansion from '../../components/Expansion'

const title = `${SongsData.subtitle} | Buku Saku Pramuka Digital`
const desc = SongsData.description
const url = BASE_PATH + '/materi-kecakapan-umum/lagu-lagu-pramuka/'

function LaguLaguPramuka() {
  const renderAudio = (song) => {
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

  const renderLyric = (song) => {
    if (song.lyric in SongsData.lyrics) {
      return (
        <div className="mb-6">
          <p>Lirik:</p>
          <hr className="mb-2" />
          {SongsData.lyrics[song.lyric]?.map((section, sectionIndex) => (
            <div key={`section-${sectionIndex}`} className="mb-4">
              {section.map((lyric, lyricIndex) => (
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

  const renderYoutube = (song) => {
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
              className="text-red-600 font-bold hover:text-red-700"
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
    nonInteraction: true, // avoids affecting bounce rate.
  })
}

export default LaguLaguPramuka
