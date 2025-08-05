import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
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
    <div>
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>{props.children}</main>
      <Footer
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
  );
}
