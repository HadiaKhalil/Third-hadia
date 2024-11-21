import Layout from '@/Component/Layout'
import Hero from './Hero'
import Second from './Second'
import Navbar from './Navbar'



const Home = () => {
  return (
    <div>
      <Layout>
      <Navbar /> 
  <Hero />
  <Second />
      </Layout>
      </div>
  )
}

export default Home