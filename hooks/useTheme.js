import { useState } from 'react'

const useTheme = () => {
  const isWindow = typeof window !== 'undefined'
  const currentTheme = isWindow && (localStorage.getItem('theme') || 'light')

  const [theme, setTheme] = useState(currentTheme)

  const onSwitchTheme = () => {
    const nTheme = theme === 'light' ? 'dark' : 'light'
    window.__setPreferredTheme && window.__setPreferredTheme(nTheme)
    setTheme(nTheme)
  }

  return {
    theme,
    nextTheme: theme === 'light' ? 'dark' : 'light',
    NextThemeIcon: theme === 'light' ? '🌜' : '☀️',
    onSwitchTheme
  }
}

export default useTheme