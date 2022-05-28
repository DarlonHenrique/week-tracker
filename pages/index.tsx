import type { NextPage } from 'next'
import { Main } from '../components/Main'
import Head from 'next/head'
import { Header } from '../components/Header'
import { GlobalStyle } from '../styles/global'

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Week Track</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/hourglass.svg' />
      </Head>
      <Header />
      <Main />
    </>
  )
}

export default Home
