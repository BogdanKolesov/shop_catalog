import React from 'react'
import { TestText } from './Home.styles'
import { Button, Container } from '../../atoms'

export default function Home() {
  return (
    <Container width='10%'>
        <TestText>
         Home
        </TestText>
        <Button>Hello</Button>

    </Container>
  )
}
