import { useState } from 'react'

import { FiMoon, FiSun } from 'react-icons/fi'

const useTheme = () => {
  const isWindow = typeof window !== 'undefined'
  const currentTheme = isWindow && (localStorage.getItem('theme') || 'light')

  const [theme, setTheme] = useState(currentTheme)

  const onSwitchTheme = () => {
    const nTheme = theme === 'light' ? 'dark' : 'light'
    // @ts-ignore
    window.__setPreferredTheme && window.__setPreferredTheme(nTheme)
    setTheme(nTheme)
  }

  return {
    theme,
    nextTheme: theme === 'light' ? 'dark' : 'light',
    NextThemeIcon: theme === 'light' ? FiMoon : FiSun,
    onSwitchTheme
  }
}

export default useTheme
