import Head from 'next/head'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Carts from '../components/Carts'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Foodyy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-dark flex flex-col justify-center overflow-y-hidden bg-light-theme px-7 ">
        <Navbar />
        <Home />
        <Menu />
        {}
        <Carts />
      </main>
    </div>
  )
}

export default Index
