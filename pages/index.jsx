import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Carts from '../components/Carts'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Index = () => {
  const [showCarts, setShowCarts] = useState(false)
  return (
    <div className="">
      <Head>
        <title>Foodyy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-dark flex flex-col justify-center overflow-y-hidden bg-light-theme px-[2rem]  lg:px-[5rem]">
        <Navbar />
        <Home />
        <Menu />
        {showCarts && <Carts />}
        <AboutUs />
        <Services />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Index
