import { useState, useEffect } from 'react'
import { FiShare, FiLoader } from 'react-icons/fi'
import { SiWhatsapp, SiFacebook, SiTwitter } from 'react-icons/si'

interface ActionNavigationProps {
  text: string
  title: string
  url: string
}

type Provider = 'whatsapp' | 'twitter' | 'facebook'

function ActionNavigation({ title, text, url }: ActionNavigationProps) {
  const [isLoadingShare, setLoadingShare] = useState<boolean>(false)
  const [isSupportShare, setSupportShare] = useState<boolean>(false)

  useEffect (() => {
    const isSupport: boolean = typeof window !== 'undefined' ? navigator.share !== undefined : false
    setSupportShare(isSupport)
  }, [])

  const handleShare = async () => {
    if (isSupportShare) {
      setLoadingShare(true)
      const shareObj = {
        title: title,
        text: text,
        url: url
      }

      navigator
        .share(shareObj)
        // eslint-disable-next-line no-console
        .then(() => setLoadingShare(false))
        .catch((error) => {
          setLoadingShare(false)
          // eslint-disable-next-line no-console
          console.error('Error sharing', error, shareObj)
        })
    }
  }

  const handle3rdPartyShare = async (provider: Provider) => {
    setLoadingShare(true)
    const parsedUrl = encodeURIComponent(url)

    if (provider === 'whatsapp') {
      const wa = `https://api.whatsapp.com/send?text=${title}%3A%20${text}%20${parsedUrl}`
      window.open(wa)
    } else if (provider === 'facebook') {
      const fb = `https://www.facebook.com/sharer/sharer.php?u=${parsedUrl}&title=${title}%3A%20${text}&quote=${title}%3A%20${text}`
      window.open(fb)
    } else if (provider === 'twitter') {
      const twitter = `https://twitter.com/intent/tweet?text=${title}%20via%20&url=${parsedUrl}`
      window.open(twitter)
    }

    setTimeout(() => {
      setLoadingShare(false)
    }, 1000)
  }

  return (
    <aside className="flex flex-wrap justify-between items-center mx-auto sm:max-w-xl md:flex-no-wrap">
      <ul className="flex justify-evenly items-center w-full">
        {isSupportShare ? (
          <li className="relative">
            <button
              onClick={handleShare}
              type="button"
              aria-label="Bagikan"
              className={`inline-flex flex-col items-center justify-center text-center h-12 rounded-md text-gray-600 dark:text-gray-300 font-semibold`}
            >
              {isLoadingShare ? (
                <FiLoader aria-hidden="true" className="w-6 h-6" />
              ) : (
                <FiShare aria-hidden="true" className="w-6 h-6" />
              )}
              <span className="text-xs truncate">Bagikan</span>
            </button>
          </li>
        ) : (
          <>
            <li className="relative">
              <button
                onClick={() => {
                  handle3rdPartyShare('whatsapp')
                }}
                type="button"
                aria-label="Bagikan ke WhatsApp"
                className={`inline-flex flex-col items-center justify-center text-center h-12 rounded-md text-gray-600 dark:text-gray-300 font-semibold`}
              >
                {isLoadingShare ? (
                  <FiLoader aria-hidden="true" className="w-6 h-6" />
                ) : (
                  <SiWhatsapp aria-hidden="true" className="w-6 h-6" />
                )}
                <span className="text-xs truncate">Bagikan ke WhatsApp</span>
              </button>
            </li>
            <li className="relative">
              <button
                onClick={() => {
                  handle3rdPartyShare('facebook')
                }}
                type="button"
                aria-label="Bagikan ke Facebook"
                className={`inline-flex flex-col items-center justify-center text-center h-12 rounded-md text-gray-600 dark:text-gray-300 font-semibold`}
              >
                {isLoadingShare ? (
                  <FiLoader aria-hidden="true" className="w-6 h-6" />
                ) : (
                  <SiFacebook aria-hidden="true" className="w-6 h-6" />
                )}
                <span className="text-xs truncate">Bagikan ke Facebook</span>
              </button>
            </li>
            <li className="relative">
              <button
                onClick={() => {
                  handle3rdPartyShare('twitter')
                }}
                type="button"
                aria-label="Bagikan ke Twitter"
                className={`inline-flex flex-col items-center justify-center text-center h-12 rounded-md text-gray-600 dark:text-gray-300 font-semibold`}
              >
                {isLoadingShare ? (
                  <FiLoader aria-hidden="true" className="w-6 h-6" />
                ) : (
                  <SiTwitter aria-hidden="true" className="w-6 h-6" />
                )}
                <span className="text-xs truncate">Bagikan ke Twitter</span>
              </button>
            </li>
          </>
        )}
      </ul>
    </aside>
  )
}

export default ActionNavigation
