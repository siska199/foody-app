import Head from 'next/head'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Carts from '../components/Carts'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import Footer from '../components/Footer'
import ChangeTheme from '../components/ChangeTheme'
import { useSelector } from 'react-redux'
const Index = () => {
  const theme = useSelector((state) => state.theme.value)
  const showCarts = useSelector((state) => state.carts.value.showCarts)
  return (
    <div className="">
      <Head>
        <title>Foodyy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex flex-col justify-center overflow-y-hidden ${theme.bg} px-[2rem]  lg:px-[5rem]`}
      >
        <Navbar />
        <Home />
        <Menu />
        {showCarts && <Carts />}
        <AboutUs />
        <Services />
        <ChangeTheme />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Index
