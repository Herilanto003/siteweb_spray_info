import React from "react";
import SectionTitle from "../ui/SectionTitle";
import { useTranslation } from "react-i18next";

const partners = [
  { image: "/assets/images/partner1.jpg", title: "Microsoft" },
  { image: "/assets/images/partner2.jpg", title: "Google" },
  { image: "/assets/images/partner3.jpg", title: "Amazon" },
  { image: "/assets/images/partner4.jpg", title: "Meta" },
  { image: "/assets/images/partner5.jpg", title: "OVHcloud" },
];

export default function Partner() {
  const { t } = useTranslation();
  const [current, setCurrent] = React.useState(0);
  const timeoutRef = React.useRef(null);

  // Animation automatique
  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % partners.length);
    }, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + partners.length) % partners.length);
  const next = () => setCurrent((prev) => (prev + 1) % partners.length);

  return (
    <section
      id="partner"
      className="pt-10 bg-gray-50 dark:bg-gray-950/95 relative"
    >
      {/* bg waves */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: "url(/assets/svg/wave4.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-16">
        <SectionTitle
          title={t("partner.title")}
          description={t("partner.description")}
        />
        <div className="relative w-full max-w-3xl mx-auto mt-10">
          {/* Flèche gauche */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/70 dark:bg-gray-900/70 rounded-full flex items-center justify-center shadow hover:bg-blue-700 hover:text-white transition-all duration-300"
            aria-label="Previous"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Flèche droite */}
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/70 dark:bg-gray-900/70 rounded-full flex items-center justify-center shadow hover:bg-blue-700 hover:text-white transition-all duration-300"
            aria-label="Next"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Carrousel */}
          <div className="overflow-hidden rounded-2xl shadow-xl bg-white/60 backdrop-blur-md dark:bg-gray-800/60">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {t("partner.list", { returnObjects: true }).map(
                (partner, idx) => (
                  <div
                    key={idx}
                    className="min-w-full flex flex-col items-center justify-center p-8 relative overflow-hidden"
                  >
                    {/* Blob décoratif */}
                    <svg
                      className="absolute -top-8 -right-8 w-20 h-20 opacity-20 z-0"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#1e3a8a"
                        d="M41.3,-66.2C54.7,-59.7,66.7,-54.7,74.2,-45.6C81.7,-36.5,84.7,-23.2,85.2,-10.1C85.7,3,83.7,16,77.2,27.2C70.7,38.4,59.7,47.7,47.7,54.2C35.7,60.7,22.8,64.3,10.2,62.2C-2.4,60.1,-14.7,52.3,-27.2,45.8C-39.7,39.3,-52.3,34.1,-59.7,24.7C-67.1,15.3,-69.3,1.7,-67.2,-11.2C-65.1,-24.1,-58.7,-36.3,-49.2,-43.7C-39.7,-51.1,-27.2,-53.7,-15.1,-59.2C-3,-64.7,9.7,-73,22.7,-74.7C35.7,-76.4,48.7,-71.7,41.3,-66.2Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                    <img
                      src={partner.image}
                      alt={partner.title}
                      className="w-32 h-32 object-contain rounded-xl mb-4 shadow-lg z-10"
                    />
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 text-center mb-2 animate-fade-in-up z-10">
                      {partner.title}
                    </h3>
                  </div>
                )
              )}
            </div>
          </div>
          {/* Indicateurs */}
          <div className="flex justify-center mt-6 gap-3">
            {partners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  current === idx
                    ? "bg-gray-700 scale-125"
                    : "bg-blue-300 hover:bg-blue-500"
                }`}
                aria-label={`Go to partner ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Animation fade-in-up */}
        <style>{`
          .animate-fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s forwards;
          }
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
