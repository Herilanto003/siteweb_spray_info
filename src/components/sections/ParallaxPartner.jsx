import React from "react";
import { useTranslation } from "react-i18next";

export default function ParallaxPartner({ setActiveSelection }) {
  const [offsetY, setOffsetY] = React.useState(0);

  const { t } = useTranslation();

  React.useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("parallax-partner");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setOffsetY(window.scrollY - section.offsetTop);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSelection("contact");
    }
  };

  return (
    <section
      id="parallax-partner"
      className="relative min-h-[350px] md:min-h-[500px] flex items-center justify-center overflow-hidden py-16"
    >
      {/* Parallax background image */}
      <img
        src="/assets/images/etudiant6.jpg"
        alt="Partner Parallax"
        className="absolute top-0 left-0 w-full h-full opacity-80 object-cover z-0 pointer-events-none select-none"
        style={{
          transform: `translateY(${offsetY * 0.3}px) scale(1.05)`,
          transition: "transform 0.2s linear",
        }}
      />
      {/* Overlay dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-blue-500/40 to-blue-200/20 z-0" />
      <div className="relative z-10 w-full max-w-2xl mx-auto text-center px-4 py-10 rounded-2xl backdrop-blur-md bg-white dark:bg-gray-900/60 shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 dark:text-blue-300 mb-4 animate-fade-in-up">
          {t("becomePartner.title")}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 animate-fade-in-up delay-100">
          {t("becomePartner.description")}
        </p>
        <button
          className="px-8 py-3 rounded-lg bg-blue-700 text-white font-bold text-lg shadow-lg hover:bg-blue-900 transition-colors duration-300 animate-fade-in-up delay-200"
          onClick={scrollToContact}
        >
          {t("becomePartner.button")}
        </button>
      </div>
      {/* Animation fade-in-up */}
      <style>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s forwards;
        }
        .animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
