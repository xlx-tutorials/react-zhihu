import React from 'react'
import { css, Global } from '@emotion/react'
import Routes from './Routes'
import globalCss from './global.css'
import { Providers } from './components/Providers'

export function App() {
  return (
    <Providers>
      <Global
        styles={[
          globalCss,
          (theme) =>
            css`
              body {
                color: ${theme.colors.text};
                background-color: ${theme.colors.background};
              }
            `,
        ]}
      />
      <Routes />
    </Providers>
  )
}
