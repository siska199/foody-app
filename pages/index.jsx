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
      <main className="flex overflow-y-hidden flex-col justify-center bg-light-theme px-7 bg-dark ">
        <Navbar />
        <Home />
        <Menu />
      </main>
    </div>
  )
}

export default Index
