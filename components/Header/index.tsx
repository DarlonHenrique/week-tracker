import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'

export function Header() {
  return (
    <header>
      <Image src={logo} width={250} />
    </header>
  )
}
