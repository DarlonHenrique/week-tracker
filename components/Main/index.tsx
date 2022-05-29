import React from 'react'
import { Chart } from '../Chart'
import { Nav } from '../Nav'
import { MainContainer } from './styles'

export function Main() {
  return (
    <MainContainer>
      <Nav />
      <Chart />
    </MainContainer>
  )
}
