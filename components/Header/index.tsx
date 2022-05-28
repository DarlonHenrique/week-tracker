import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logo} width={250} />
      <button>New Tracker</button>
    </HeaderContainer>
  )
}
