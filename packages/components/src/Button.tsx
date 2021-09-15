import React from 'react'
import { HTMLPropsAs } from './types'

type ButtonProps = {
  children?: React.ReactNode
}

/** Button */
export function Button({
  children,
  onClick,
  ...props
}: HTMLPropsAs<'button', ButtonProps>) {
  return (
    <button type='button' className='Button' onClick={onClick} {...props}>
      {children}
    </button>
  )
}
