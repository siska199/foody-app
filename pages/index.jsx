import Head from 'next/head'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div>
      <Head>
        <title>Foodyy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-auto max-w-[100vw]">
        <Navbar />
      </main>
    </div>
  )
}

export default Home
