import Layout from '../Layout/Layout'
import Home from '../components/Home'
import Menu from '../components/Menu'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import { getProviders} from 'next-auth/react'

const Index = ({ providers }) => {
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
