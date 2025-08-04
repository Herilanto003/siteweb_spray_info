import React from "react";
import ImageAbout from "/assets/images/about1.jpg";

export default function AboutImages() {
  return (
    <div className="relative h-64 md:h-80 lg:h-96 group rounded-4xl overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-br from-blue-200/40 to-blue-400/10">
      {/* Effet de bordure lumineuse animée */}
      <div className="absolute inset-0 z-10 pointer-events-none rounded-4xl border-4 border-transparent group-hover:border-blue-500 group-hover:shadow-blue-400/40 group-hover:shadow-2xl transition-all duration-700" />
      {/* Image avec effet de zoom au survol */}
      <img
        src={ImageAbout}
        alt="Image about"
        className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out object-center"
      />
      {/* Overlay dégradé animé */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-blue-200/20 opacity-80 group-hover:opacity-60 transition-all duration-700" />
      {/* Effet de bulle animée */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-200 opacity-30 rounded-full blur-2xl animate-pulse" />
    </div>
  );
}
