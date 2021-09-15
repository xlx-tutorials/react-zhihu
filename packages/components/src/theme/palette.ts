import { rgba } from 'polished'

export const PALETTE = {
  primary: '#06f',
  gray: '#8590a6',
  get black() {
    const base = '#121212'
    return {
      base,
      90: rgba(base, 0.9),
      80: rgba(base, 0.8),
      70: rgba(base, 0.7),
      60: rgba(base, 0.6),
      50: rgba(base, 0.5),
      40: rgba(base, 0.4),
      30: rgba(base, 0.3),
      20: rgba(base, 0.2),
      10: rgba(base, 0.1),
      6: rgba(base, 0.06),
    }
  },
  get white() {
    const base = '#ffffff'
    return {
      base,
      90: rgba(base, 0.9),
      80: rgba(base, 0.8),
      70: rgba(base, 0.7),
      60: rgba(base, 0.6),
      50: rgba(base, 0.5),
      40: rgba(base, 0.4),
      30: rgba(base, 0.3),
      20: rgba(base, 0.2),
      10: rgba(base, 0.1),
      6: rgba(base, 0.06),
    }
  },
}
