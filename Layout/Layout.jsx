import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import ChangeTheme from '../components/ChangeTheme'
import ModalAuth from '../components/ModalAuth'
import Carts from '../components/Carts'
import Footer from '../components/Footer'

const Layout = ({ title, children, home, providers }) => {
  const showCarts = useSelector((state) => state.carts.value.showCarts)
  const showModalAuth = useSelector((state) => state.auth.value.showModal)
  const theme = useSelector((state) => state.theme.value)

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${theme.bg} px-[2rem] lg:px-[5rem]`}
      >
        <Navbar home={home} />
        {children}
        {showCarts && <Carts />}
        <ChangeTheme />
        {showModalAuth && <ModalAuth providers={providers} />}
      </main>
      {home && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  )
}
export default Layout
