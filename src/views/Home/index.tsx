import Section from "./threesection";
import Hero from "./Hero";
import Three from "./Cards"
import Layout from "@/components/Layout"
import Pic from "./Pic";
import Othercards from "./Othercards";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Othercards />
      <Pic />
   <Section />
  <Three />
    </Layout>
  );
};

export default Home;
