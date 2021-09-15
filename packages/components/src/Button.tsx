import React from 'react'
import { HTMLPropsAs } from './types'

type ButtonProps = {
  children?: React.ReactNode
}

/** Button */
export function Button({
  children,
  style,
  ...props
}: HTMLPropsAs<'button', ButtonProps>) {
  return (
    <button
      type='button'
      className='Button'
      style={{
        backgroundColor: 'royalblue',
        color: 'white',
        borderRadius: 20,
        border: 'none',
        padding: 12,
        fontSize: 15,
        cursor: 'pointer',
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  )
}
