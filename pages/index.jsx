import Layout from '../Layout/Layout'
import Home from '../components/Home'
import Menu from '../components/Menu'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import { getProviders, useSession } from 'next-auth/react'

const Index = ({ providers }) => {
  const { data: session } = useSession()
  console.log('session: ', session)
  return (
    <Layout title={'Foody'} home={true} providers={providers}>
      <Home />
      <Menu />
      <AboutUs />
      <Services />
    </Layout>
  )
}

export default Index

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
