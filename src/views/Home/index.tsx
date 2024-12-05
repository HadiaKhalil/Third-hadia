import Hero from "./Hero";
import Second from "./Second";
import Cards from "./Cards";
import Skills from "./Skills";
import Project from "./Project";
import Myproject from "./Myproject";
import Lastsection from "./Lastsection";
import Form from "./Form";

import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Second />
      <Cards />
      <Skills />
      <Project />
      <Myproject />
      <Lastsection />
      <Form />
    </Layout>
  );
};

export default Home;
