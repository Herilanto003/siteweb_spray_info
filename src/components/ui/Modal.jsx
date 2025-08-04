import React, { useState } from "react";

export default function Modal({ open, onClose, title, children }) {
  // Animation d'ouverture/fermeture
  console.log(title);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/65 transition-opacity duration-500 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white dark:bg-gray-700 rounded-2xl shadow-2xl w-full max-w-lg mx-4 sm:mx-0 transition-transform duration-500 ease-out
        ${open ? "scale-100 translate-y-0" : "scale-90 translate-y-8"}`}
        style={{ minHeight: 120 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-blue-700 transition-colors duration-200"
            aria-label="Fermer"
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        {/* Body */}
        <div className="px-6 py-6">{children}</div>
      </div>
    </div>
  );
}
