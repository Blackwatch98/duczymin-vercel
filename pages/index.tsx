import Head from 'next/head'
import NavBar from '../components/navbar'
import MyHome from '../components/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Duczymin</title>
        <meta name="description" content="Created by Daniel Duczymiński" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyHome/>
    </>
  )
}
