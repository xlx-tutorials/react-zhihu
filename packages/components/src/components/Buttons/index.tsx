import styled from '@emotion/styled'
import React from 'react'

export const Btn = styled.button`
  color: red;
`

type ButtonProps = {
  children?: React.ReactNode
}

export const Button = styled.button<ButtonProps>``
