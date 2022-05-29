import React from 'react'
import { ActiveTrackers } from '../ActiveTrackers'
import { MainContainer } from './styles'
import { MainContent } from '../MainContent'

export function Main() {
  return (
    <MainContainer>
      <ActiveTrackers />
      <MainContent />
    </MainContainer>
  )
}
