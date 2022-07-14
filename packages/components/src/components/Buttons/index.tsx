import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

export const Btn = styled.button`
  color: red;
`

type ButtonProps = {
  children?: React.ReactNode
}

/** Button */
export function Button({ children }: ButtonProps) {
  return (
    <button
      css={css`
        color: royalblue;
      `}
    >
      {children}
    </button>
  )
}
