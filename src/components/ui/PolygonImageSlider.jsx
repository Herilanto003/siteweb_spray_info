import React, { useState, useEffect } from "react";

const PolygonImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    "/assets/images/spray.png",
    "/assets/images/etudiant5.jpg",
    "/assets/images/etudiant6.jpg",
    "/assets/images/etudiant7.jpg",
    "/assets/images/etudiant8.jpg",
  ];

  // Animation automatique
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsAnimating(false);
      }, 1000); // Durée correspondant à la durée de l'animation CSS
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setIsAnimating(false);
      }, 1000);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 1000);
    }
  };

  // Styles CSS-in-JS pour les animations
  const styles = `
    @keyframes zoomIn {
      0% { transform: scale(1.1); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }
    
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    
    // .polygon-shape {
    //   clip-path: polygon(
    //     0% 15%, 
    //     15% 0%, 
    //     85% 0%, 
    //     100% 15%, 
    //     100% 85%, 
    //     85% 100%, 
    //     15% 100%, 
    //     0% 85%
    //   );
    // }
    @keyframes breathing {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(59, 130, 246, 0.3);
  }
  50% {
    transform: scale(1.08);
    box-shadow: 0 0 40px rgba(59, 130, 246, 0.4);
  }
}

.animate-breathing {
  animation: breathing 6s ease-in-out infinite;
}


    
    .slide-enter {
      animation: zoomIn 1s ease-out forwards;
    }
    
    .slide-exit {
      animation: fadeIn 1s ease-out reverse forwards;
    }
    
    .slide-active {
      transform: scale(1);
      opacity: 1;
      transition: all 0.5s ease-in-out;
    }
    
    .slide-inactive {
      transform: scale(0.95);
      opacity: 0;
      transition: all 0.5s ease-in-out;
    }
    
    .nav-button:hover {
      transform: scale(1.1);
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
    }
    
    .dot-active {
      transform: scale(1.3);
      background: white;
      transition: all 0.3s ease;
    }
  `;

  return (
    <div className="w-full h-full flex items-center justify-center animate-">
      <style>{styles}</style>

      <div className="relative w-full max-w-6xl">
        {/* Container principal avec forme polygonale */}
        <div className="relative rounded-4xl h-96 md:h-[500px] polygon-shape overflow-hidden shadow-2xl animate-breathing">
          {/* Container des images avec animations */}
          <div className="relative h-full">
            {images.map((image, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 ${
                    isActive ? "slide-enter" : "slide-exit"
                  }`}
                  style={{
                    opacity: isActive ? 1 : 0,
                    zIndex: isActive ? 2 : 1,
                    pointerEvents: isActive ? "auto" : "none",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition:
                      "opacity 1s ease-in-out, transform 1s ease-in-out",
                    transform: isActive ? "scale(1)" : "scale(1.1)",
                  }}
                >
                  {/* Overlay avec effet de dégradé animé */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-blue-500/20"
                    style={{
                      transition: "all 1s ease-in-out",
                      opacity: isActive ? 1 : 0.7,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Contrôles de navigation améliorés */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 nav-button"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 nav-button"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Indicateurs de diapositives animés */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "dot-active bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolygonImageSlider;
