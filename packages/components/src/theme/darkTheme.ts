const { PALETTE } = require('./palette')

const colors = {
  primary: PALETTE.primary,
  secondary: PALETTE.gray,
  text: PALETTE.white.base,
  background: PALETTE.black.base,
  black: PALETTE.white,
  white: PALETTE.black,
}

export const DARK_THEME = {
  colors,
}
