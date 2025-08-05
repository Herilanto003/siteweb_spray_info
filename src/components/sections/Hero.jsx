import React, { useState, useEffect } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "/assets/images/spray.png";

const Hero = ({ setActiveSection }) => {
  // const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const { t } = useTranslation();

  // Background images for slider
  const backgroundImages = [
    "/assets/images/etudiant6.jpg",
    "/assets/images/etudiant5.jpg",
    "/assets/images/etudiant7.jpg",
    "/assets/images/etudiant8.jpg",
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const scrollToServices = () => {
    const element = document.getElementById("service");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection("service");
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection("contact");
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative pt-16 overflow-hidden"
    >
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-950/60 dark:bg-gray-900/60"></div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Left */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
                {t("landingPage.title")}
              </h1>
              <p className="text- text-blue-100 font-bold leading-relaxed">
                " {t("landingPage.slogan")} "
              </p>
              <p className="text-xl text-blue-100 font-bold leading-relaxed">
                {t("landingPage.subTitle")}
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                {t("landingPage.description")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToServices}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t("landingPage.homeButton1")}
                <ArrowRight className="ml-2" size={20} />
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                {t("landingPage.homeButton2")}
              </button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-sm text-blue-100">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-sm text-blue-100">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-blue-100">Clients satisfaits</div>
              </div>
            </div> */}
          </div>

          {/* Logo/Image Right */}

          {/* Logo animé - Droite */}
          <div
            className={`flex justify-center lg:justify-end relative z-10 transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Cercles d'animation en arrière-plan */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-dashed border-blue-400/30"></div>
              </div>

              <div className="absolute inset-4 animate-spin-reverse">
                <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-88 lg:h-88 rounded-full border border-dotted border-purple-400/40"></div>
              </div>

              {/* Logo principal */}
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center animate-float-gentle shadow-2xl group cursor-pointer">
                {/* Logo spray agrandi */}
                <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-80 lg:h-80 bg-transparent rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <img
                    src={Logo}
                    alt="Spray Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Particules orbitales avec vos couleurs */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-blue-600 opacity-70 rounded-full animate-bounce-gentle shadow-lg"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-blue-300 rounded-full animate-pulse-slow shadow-lg"></div>
                <div className="absolute top-1/2 left-4 w-5 h-5 bg-blue-200 rounded-full animate-bounce-gentle animation-delay-1s shadow-lg"></div>
                <div className="absolute bottom-1/3 right-8 w-3 h-3 bg-blue-500 rounded-full animate-pulse-slow animation-delay-2s shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(2deg);
          }
          66% {
            transform: translateY(-5px) rotate(-1deg);
          }
        }

        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
            opacity: 0.9;
          }
          75% {
            transform: translateY(-30px) translateX(5px);
            opacity: 0.4;
          }
        }

        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes scroll-indicator {
          0% {
            transform: translateY(0px);
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }

        .animate-fade-in-delayed {
          animation: slide-up 0.8s ease-out 0.3s both;
        }

        .animate-slide-up-delayed {
          animation: slide-up 0.8s ease-out 0.6s both;
        }

        .animate-slide-up-more-delayed {
          animation: slide-up 0.8s ease-out 0.9s both;
        }

        .animation-delay-1s {
          animation-delay: 1s;
        }

        .animation-delay-2s {
          animation-delay: 2s;
        }

        /* Responsive utilities */
        .w-88 {
          width: 22rem;
        }
        .h-88 {
          height: 22rem;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .animate-float-particle {
            display: none;
          }
        }

        /* Smooth scrolling behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced hover effects */
        @media (hover: hover) {
          .group:hover .animate-bounce-gentle {
            animation-duration: 1s;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
