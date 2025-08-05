import React from "react";
import SectionTitle from "../ui/SectionTitle";
import { useTranslation } from "react-i18next";
import AboutImages from "../ui/AboutImages";
import AboutDescription from "../ui/AboutDescription";
import ModalFullScreen from "../ui/ModalFullScreen";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="pt-16 bg-gray-50 dark:bg-gray-950/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-16">
        <SectionTitle
          title={t("about.title")}
          description={t("about.description")}
        />
        <div>
          <AboutImages />
          <AboutDescription />
        </div>
      </div>
    </section>
  );
}
