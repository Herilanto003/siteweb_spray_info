import React from "react";
import Logo from "/assets/images/spray.png";
import DotLoading from "./DotLoading";
import Aurora from "./Aurora";

export default function Loader() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col dark:bg-gray-900/95">
      {/* Logo */}
      <div>
        <img
          src={Logo}
          alt="logo"
          className="w-72 animate-bounce"
          style={{ animationDuration: "2s" }}
        />
      </div>

      {/* Chargement */}
      <DotLoading size="w-7 h-7" color="bg-blue-700" />
    </div>
  );
}
