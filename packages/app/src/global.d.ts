import { THEME } from 'constants/theme'

export type CustomTheme = typeof THEME

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
