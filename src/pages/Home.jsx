import Layout from "../components/layout/home/Layout";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Equipe from "../components/sections/Equipe";
import Hero from "../components/sections/Hero";
import ParallaxContact from "../components/sections/ParallaxContact";
import ParallaxPartner from "../components/sections/ParallaxPartner";
import Partner from "../components/sections/Partner";
import Service from "../components/sections/Service";
import React from "react";

export default function Home() {
  const [activeSection, setActiveSection] = React.useState("home");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "service",
        "team",
        "partner",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Layout>
      <Hero />
      <About />
      <Service />
      <ParallaxContact setActiveSelection={setActiveSection} />
      <Equipe />
      <Partner />
      <ParallaxPartner setActiveSelection={setActiveSection} />
      <Contact />
    </Layout>
  );
}
