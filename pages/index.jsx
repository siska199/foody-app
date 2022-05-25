import Head from 'next/head'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Carts from '../components/Carts'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import Footer from '../components/Footer'
import ChangeTheme from '../components/ChangeTheme'
import ModalSignIn from '../components/ModalSignIn'
import { useSelector } from 'react-redux'
import { useSession } from 'next-auth/react'
import { getProviders } from 'next-auth/react'

const Index = ({ providers }) => {
  const theme = useSelector((state) => state.theme.value)
  const showCarts = useSelector((state) => state.carts.value.showCarts)
  const showModalAuth = useSelector((state) => state.auth.value.showModal)
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
        {showModalAuth && <ModalSignIn providers={providers} />}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Index

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
