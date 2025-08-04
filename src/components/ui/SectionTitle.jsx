import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function SectionTitle({ title, description }) {
  const { t } = useTranslation();

  // Animation fade-in + translateY
  const [visible, setVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current) return;
      const rect = titleRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center mb-6">
      <h1
        ref={titleRef}
        className={`font-extrabold text-transparent text-2xl md:text-4xl lg:text-6xl mb-4 bg-clip-text bg-gradient-to-r from-blue-500 via-blue-800 to-blue-500 drop-shadow-lg transition-all duration-1000 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <span>{title}</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-200 text-base md:text-lg">
        {description}
      </p>
    </div>
  );
}
