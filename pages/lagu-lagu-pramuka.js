import Layout from '../components/MainLayout';
import MetaHead from '../components/MetaHead';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import SongsData from '../data/lagu-lagu-pramuka';
import { BASE_PATH } from '../constants';

const title = `${SongsData.subtitle} | Buku Saku Pramuka Digital`;
const desc = SongsData.description;
const url = BASE_PATH + '/lagu-lagu-pramuka/';

function LaguLaguPramuka() {
  const [collapsed, setCollapsed] = React.useState(-1)

  const handleCollapse = (index) => {
    if (collapsed === index) {
      setCollapsed(-1)
    } else {
      setCollapsed(index)
    }
  }

  const renderAudio = (song) => {
    if (song.audio) {
      return (
        <div className='mb-6'>
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
        <div className='mb-6'>
          <p>Lirik:</p>
            <hr className='mb-2'/>
            {SongsData.lyrics[song.lyric]?.map((section, sectionIndex) => (
              <div key={`section-${sectionIndex}`} className='mb-4'>
                {section.map((lyric, lyricIndex) => (
                  <p key={`section-${sectionIndex}-lyric-${lyricIndex}`} className="italic">{lyric}</p>
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
          <hr className='mb-2'/>
          <p className='text-sm'>
            Lihat video {song.title} di <a href={song.youtube} target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold hover:text-red-700">YouTube</a>.
          </p>
        </div>
      )
    }
  }

  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <ChapterNavigation nextLink="/tanda-kecakapan-khusus/" />
      <ChapterTitle subTitle={SongsData.subtitle} title={SongsData.title} />

      <div className="text-left">
        <div className="mt-4">
          {SongsData.songs.map((song, index) => (
            <div key={song.key} className="mt-4 rounded overflow-hidden shadow-lg">
              <div className="w-full px-6 py-4 flex items-center justify-between flex-wrap">
                <div className="font-bold text-xl min-w-250">{song.title}</div>

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
                <div className="w-full px-6 py-4">
                  {renderAudio(song)}
                  {renderLyric(song)}
                  {renderYoutube(song)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ChapterNavigation nextLink="/tanda-kecakapan-khusus/" />
    </Layout>
  );
}

export function reportWebVitals({ id, name, label, value }) {
  ga('send', 'event', {
    eventCategory:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

export default LaguLaguPramuka;
