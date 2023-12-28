import React from 'react'
import { StyledButton } from './Button.styles'

export default function Button({children}) {
  return (
    <div><StyledButton>{children}</StyledButton></div>
  )
}
