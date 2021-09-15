import { ThemeProvider } from '@emotion/react'
import { useTheme } from '@react-zhihu/components'

export function EmotionThemeProvider({ children }) {
  const { theme } = useTheme()

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
