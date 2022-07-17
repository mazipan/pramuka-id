import Link from 'next/link'
import Head from 'next/head'
import { createElement, useEffect, useRef, useState } from 'react'
import { FiDownloadCloud, FiLoader } from 'react-icons/fi'

import IconPramuka from './IconPramuka'
import useTheme from '../hooks/useTheme'
import { BRAND_TITLE } from '../constants'

interface UserChoice {
  outcome: 'accepted' | 'dismissed'
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => void
  userChoice: Promise<UserChoice>
}

function Header() {
  const { NextThemeIcon, nextTheme, onSwitchTheme, theme } = useTheme()

  const [isLoading, setLoading] = useState<boolean>(false)
  const [isShowInstallBtn, setShowInstallBtn] = useState<boolean>(false)
  const deferredPrompt = useRef<any | null>(null)

  const handler = (e: Event) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault()
    // Stash the event so it can be triggered later.
    deferredPrompt.current = e as BeforeInstallPromptEvent
    // Update UI notify the user they can install the PWA
    setShowInstallBtn(true)
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && !isShowInstallBtn) {
      window.addEventListener('beforeinstallprompt', handler)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [isShowInstallBtn])

  const handleClick = async () => {
    setLoading(true)
    const curr = deferredPrompt.current
    if (curr) {
      try {
        // Show the install prompt
        curr.prompt()
        // Wait for the user to respond to the prompt
        const { outcome } = await curr.userChoice
        // Optionally, send analytics event with outcome of user choice
        // eslint-disable-next-line no-console
        console.info(`User response to the install prompt: ${outcome}`)
        // We've used the prompt, and can't use it again, throw it away
        deferredPrompt.current = null
        // manual delay the process
        setTimeout(() => {
          setLoading(false)
          // Hide the app provided install promotion
          setShowInstallBtn(false)
        }, 1000)
      } catch {
        // do nothing
      }
    }
  }

  return (
    <>
      <Head>
        <meta name="theme-color" content={theme === 'light' ? '#7B341E' : '#101623'} />
        <meta name="msapplication-TileColor" content={theme === 'light' ? '#7B341E' : '#101623'} />
      </Head>
      <header className="fixed top-0 z-10 w-full bg-pramuka">
        <div className="flex flex-wrap justify-between items-center p-2 mx-auto sm:max-w-xl md:flex-no-wrap">
          <div className="flex items-center">
            <IconPramuka color="#fff" className="w-10 h-10 text-nav" />

            <Link href="/">
              <a title={BRAND_TITLE} className="text-xl font-bold text-nav">
                {BRAND_TITLE}
              </a>
            </Link>
          </div>

          <div className="flex items-center">
            {isShowInstallBtn ? (
              <button
                className="flex items-center py-2 px-4 mr-2 text-gray-100 bg-yellow-600 bg-opacity-10 rounded-md dark:text-yellow-500 dark:bg-gray-800 hover:bg-opacity-30 focus:bg-opacity-30"
                onClick={handleClick}
                type="button"
                aria-label={`Install`}
              >
                {isLoading ? (
                  <FiLoader aria-hidden={true} className="mr-2" />
                ) : (
                  <FiDownloadCloud aria-hidden={true} className="mr-2" />
                )}
                {isLoading ? 'Memasang...' : 'Install'}
              </button>
            ) : null}

            <button
              className="py-2 px-4 text-gray-100 bg-yellow-600 bg-opacity-10 rounded-md dark:text-yellow-500 dark:bg-gray-800 hover:bg-opacity-30 focus:bg-opacity-30"
              onClick={onSwitchTheme}
              type="button"
              aria-label={`Switch to ${nextTheme}`}
            >
              {createElement(NextThemeIcon, {
                className: '',
                'aria-hidden': true
              })}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
