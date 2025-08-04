import { BookMarked } from "lucide-react";
import React from "react";
import BlobAbout from "/assets/svg/blobAbout.svg";
import { useTranslation } from "react-i18next";

export default function AboutCard({
  title,
  description,
  icon,
  color,
  filterImage,
  blob1,
  blob2,
  openModal,
}) {
  const handleOpenModal = () => {
    openModal();
  };

  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-700 shadow-bray-600/30 shadow-2xl rounded-2xl min-h-52 flex justify-center items-center min-w-52 relative overflow-hidden transition-all duration-300 mb-6">
      {/* <img
        src={BlobAbout}
        alt="blob"
        className="absolute -left-12 -top-10 w-40"
        style={{
          filter: filterImage,
        }}
      />
      <img
        src={BlobAbout}
        alt="blob"
        className="absolute -right-12 bottom-10 w-40 opacity-20"
        style={{
          filter: filterImage,
          // "invert(23%) sepia(98%) saturate(7492%) hue-rotate(202deg) brightness(92%) contrast(101%)",
        }}
      /> */}
      {blob1}
      {blob2}
      <div className="w-full flex flex-col justify-center items-center text-center p-4 gap-4">
        {/* <BookMarked className="bg-${color} text-white size-14 rounded-full h-18 w-18 p-3" /> */}
        {icon}
        <h1 className={`font-bold text-lg text-${color} dark:text-blue-500`}>
          {title}
        </h1>
        <p className="text-gray-950 dark:text-gray-100">{description}</p>
        <button
          className={`h-10 px-5 bg-${color} rounded-2xl font-semibold text-white`}
          onClick={handleOpenModal}
        >
          {t("detailTextButton")}
        </button>
      </div>
    </div>
  );
}
