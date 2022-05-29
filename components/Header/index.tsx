import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import { HeaderContainer } from './styles'

interface HeaderProps {
  onOpenNewTrackerModal: () => void
}

export function Header({ onOpenNewTrackerModal }: HeaderProps) {
  return (
    <HeaderContainer>
      <Image src={logo} width={250} />
      <button type='button' onClick={onOpenNewTrackerModal}>
        New Tracker
      </button>
    </HeaderContainer>
  )
}
