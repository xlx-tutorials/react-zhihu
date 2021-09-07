import React from 'react'
import { HTMLPropsAs } from './types'

type ButtonProps = {
  children?: React.ReactNode
}

/** Button */
export function Button({
  children,
  ...props
}: HTMLPropsAs<'button', ButtonProps>) {
  return (
    <button type='button' className='Button' {...props}>
      {children}
    </button>
  )
}
