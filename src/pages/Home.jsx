import Layout from "../components/layout/home/Layout";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
