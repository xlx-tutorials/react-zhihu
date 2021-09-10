import { globalHistory } from '@reach/router'
import { DARK_THEME } from 'constants/darkTheme'
import { THEME } from 'constants/theme'
import { ThemeProvider } from 'contexts/ThemeContexts'
import { QueryParamProvider } from 'use-query-params'
import { EmotionThemeProvider } from './EmotionThemeProvider'

export function Providers({ children }) {
  return (
    <ThemeProvider
      themes={{
        light: THEME,
        dark: DARK_THEME,
      }}
      defaultThemeKey='dark'
    >
      <EmotionThemeProvider>
        <QueryParamProvider reachHistory={globalHistory}>
          {children}
        </QueryParamProvider>
      </EmotionThemeProvider>
    </ThemeProvider>
  )
}
