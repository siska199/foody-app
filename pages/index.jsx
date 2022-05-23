import Head from 'next/head'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Menu from '../components/Menu'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Foodyy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-auto max-w-[100vw] flex-col justify-center bg-light-theme ">
        <Navbar />
        <Home />
        <Menu />
      </main>
    </div>
  )
}

export default Index
