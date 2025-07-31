import { useTranslation } from "react-i18next";
import React from "react";
import { PhoneCall, Quote, RocketIcon } from "lucide-react";
import Particles from "../ui/Particles";
import VariableProximity from "../ui/VariableProximity";
import HeroImage from "../ui/HeroImage";
import PolygonImageSlider from "../ui/PolygonImageSlider";

export default function Hero() {
  const { t } = useTranslation();
  const titleRef = React.useRef(null);

  return (
    <section
      id="home"
      className="mt-16 overflow-hidden relative z-40 flex items-center  mx-auto px-4 sm:px-6 lg:px-10 justify-start bg-gray-50 dark:bg-gray-900/95"
    >
      <Particles />
      {/* <div className="absolute top-0 left-0 w-full h-full dark:bg-gray-900/50 bg-blue-200/50 -z-10"></div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="text-center lg:text-left">
            <h4 className="font-bold text-2xl md:text-3xl text-indigo-950 dark:text-blue-100 dark:text-">
              {t("landingPage.welcome")},
            </h4>

            <div
              className="text-5xl md:text-8xl cursor-context-menu font-extrabold text-blue-800 dark:text-blue-500"
              ref={titleRef}
            >
              <VariableProximity
                label={t("landingPage.title")}
                className={"variable-proximity-demo font-extrabold"}
                fromFontVariationSettings="'wght' 700, 'opsz' 9"
                toFontVariationSettings="'wght' 1200, 'opsz' 40"
                containerRef={titleRef}
                radius={100}
                falloff="linear"
              />
            </div>

            <div className="flex justify-center lg:justify-start mt-5 text-2xl md:text-4xl">
              <Quote className="text-blue-700" />
              <h4 className="font-bold italic text-indigo-950 dark:text-blue-100">
                {t("landingPage.slogan")}
              </h4>
              <Quote className="text-blue-700" />
            </div>

            <div className="mt-6">
              <h4 className="text-xl md:text-4xl font-extrabold text-gray-950 dark:text-gray-50">
                {t("landingPage.subTitle")}
              </h4>
              <p className="mt-4 text-lg text-center lg:text-xl lg:text-justify font-semibold text-gray-950 dark:text-gray-50">
                {t("landingPage.description")}
              </p>
            </div>

            <div className="mt-6 flex flex-col md:flex-row md:justify-center lg:justify-start gap-6">
              <button className="px-6 py-4 text-white transition-colors duration-300 hover:from-blue-200 hover:to-blue-400 hover:text-gray-800 bg-gradient-to-r from-blue-500 to-blue-800 rounded-4xl font-semibold flex justify-center gap-4">
                <span>{t("landingPage.homeButton1")}</span>
                <RocketIcon />
              </button>
              <button className="px-6 py-4 text-white transition-colors duration-300 hover:from-blue-200 hover:to-blue-400 hover:text-gray-800 bg-gradient-to-r from-blue-500 to-blue-800 rounded-4xl font-semibold flex justify-center gap-4">
                <span>{t("landingPage.homeButton2")}</span>
                <PhoneCall />
              </button>
            </div>
          </div>
          <div className="relative min-h-96 w-full">
            <PolygonImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
