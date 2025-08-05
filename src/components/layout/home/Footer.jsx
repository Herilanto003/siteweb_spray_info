import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
} from "lucide-react";
import { useTranslation } from "react-i18next";

// SVG Blob décoratif
const Blob = ({ className }) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill="#FFFFFF"
      fillOpacity="0.15"
      d="M44.8,-67.2C56.7,-59.2,64.7,-45.2,69.2,-31.2C73.7,-17.2,74.7,-3.1,72.2,10.2C69.7,23.5,63.7,36.1,54.2,45.7C44.7,55.3,31.7,62,18.2,65.7C4.7,69.4,-9.3,70.1,-22.2,66.2C-35.1,62.3,-46.8,53.8,-56.2,42.5C-65.6,31.2,-72.7,17.1,-73.7,2.2C-74.7,-12.7,-69.7,-27.4,-60.2,-38.7C-50.7,-50,-36.7,-57.9,-22.1,-64.1C-7.5,-70.3,7.7,-74.8,22.2,-74.2C36.7,-73.6,44.8,-67.2,44.8,-67.2Z"
      transform="translate(100 100)"
    />
  </svg>
);

const Footer = ({ activeSection, setActiveSection }) => {
  const { t } = useTranslation();
  const menuItems = [
    { id: "home", label: t("header.navMenu.home") },
    { id: "about", label: t("header.navMenu.about") },
    { id: "service", label: t("header.navMenu.service") },
    { id: "team", label: t("header.navMenu.team") },
    { id: "partner", label: t("header.navMenu.partner") },
    { id: "contact", label: t("header.navMenu.contact") },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Blobs décoratifs */}
      <Blob className="absolute -top-24 -left-32 w-72 h-72 pointer-events-none animate-float" />
      <Blob className="absolute -bottom-32 -right-32 w-96 h-96 pointer-events-none animate-float2" />

      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* description */}
          <div className="space-y-4">
            <div className="flex justify-start items-center gap-4">
              <img src="/assets/images/logoWhite.png" alt="" className="w-14" />
              <h3 className="text-xl font-bold text-blue-100 mb-4 animate-fade-in">
                {t("footer.description.title")}
              </h3>
            </div>
            <p className="text-sm text-justify text-blue-100">
              {t("footer.description.description")}
            </p>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-100 mb-4 animate-fade-in">
              {t("footer.quickLinks.title")}
            </h3>
            <div className="flex flex-col items-start">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`cursor-pointer px-3 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-100 mb-4 animate-fade-in">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-blue-200 animate-fade-in delay-200">
                <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm">
                  {t("footer.contact.address.description")}{" "}
                  {t("footer.contact.address.country")}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200 animate-fade-in delay-300">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm">
                  {t("footer.contact.phone.description")}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200 animate-fade-in delay-400">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm">
                  {t("footer.contact.email.description")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-blue-700 bg-blue-950 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-blue-300 text-sm animate-fade-in delay-200">
              <span>{t("footer.copyright")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animations CSS */}
      <style>{`
        .animate-float {
          animation: float 8s ease-in-out infinite alternate;
        }
        .animate-float2 {
          animation: float2 10s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(30px) scale(1.05); }
        }
        @keyframes float2 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-40px) scale(1.08); }
        }
        .animate-fade-in {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
