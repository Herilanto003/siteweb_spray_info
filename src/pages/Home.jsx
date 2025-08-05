import Layout from "../components/layout/home/Layout";
import About from "../components/sections/About";
import Equipe from "../components/sections/Equipe";
import Hero from "../components/sections/Hero";
import ParallaxContact from "../components/sections/ParallaxContact";
import Service from "../components/sections/Service";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Service />
      <ParallaxContact />
      <Equipe />
    </Layout>
  );
}
