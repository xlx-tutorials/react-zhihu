import { createContext, Dispatch, useContext, useState } from 'react'
import { THEME } from '../..'

export type Theme = typeof THEME
type Themes = {
  light: Theme
  dark: Theme
  [K: string]: Theme
}

type DefaultThemeKey = keyof Themes
type SetTheme = Dispatch<Theme>

type ThemeProviderProps = {
  children: React.ReactNode
  themes: Themes
  defaultThemeKey: DefaultThemeKey
}

const ThemeContext = createContext<
  | {
      themes: Themes
      defaultThemeKey: DefaultThemeKey
      theme: Theme
      setTheme: SetTheme
    }
  | undefined
>(undefined)

// /** ThemeProvider
//  * @template T
//  * @param {{
//  *  themes: T
//  *  defaultThemeKey: keyof T
//  *  defaultFollowSystem: boolean
//  * }}
//  */
export function ThemeProvider({
  children,
  themes,
  defaultThemeKey,
}: ThemeProviderProps) {
  // must provide themes
  if (themes === undefined) {
    throw new Error(`Please make your themes prop a plain object`)
  }

  // must provide light and dark themes
  if (themes.light === undefined && themes.dark === undefined) {
    throw new Error('Must provide `light` and `dark` themes')
  }

  // set default theme key
  if (defaultThemeKey === undefined && themes !== undefined) {
    // eslint-disable-next-line no-param-reassign
    defaultThemeKey = Object.keys(themes)[0]
  }

  // current theme state
  const [theme, setTheme] = useState<Theme>(themes[defaultThemeKey])

  // pack value
  const value = {
    themes,
    defaultThemeKey,
    theme,
    setTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

/**
 * useTheme
 * @returns {{
 *  theme: import('global').CustomTheme
 *  switchTheme: (key: string)=>void
 *  toggleThemeMode: function
 *  curThemeKey: string
 * }}
 */
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error(`useTheme must be used within ${ThemeProvider.name}`)
  }

  const { themes, theme, setTheme } = context

  console.log(undefined ?? 222)

  const curThemeKey =
    Object.entries(themes).find(([key, val]) => val === theme)?.[0] || 'light'
  // Object.entries(themes).find(([key, val]) => val === theme)?.[0] ?? 'light'

  function switchTheme(key: keyof Theme) {
    setTheme(themes[key])
  }

  function toggleThemeMode() {
    if (curThemeKey === 'dark') {
      if (themes.light) setTheme(themes.light)
    } else if (themes.dark) setTheme(themes.dark)
  }

  return {
    theme,
    setTheme,
    switchTheme,
    toggleThemeMode,
    curThemeKey,
  }
}
