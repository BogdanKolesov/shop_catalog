import React from 'react'
import { StyledContainer } from './Container.styles'

export default function Container({children, width, col}) {
  return (
    <StyledContainer width={width} col={col}>
      {children}
    </StyledContainer>
  )
}
