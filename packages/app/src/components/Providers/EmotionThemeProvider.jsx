import { ThemeProvider } from '@emotion/react'
import { useTheme } from 'contexts/ThemeContexts'

export function EmotionThemeProvider({ children }) {
  const { theme } = useTheme()

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
