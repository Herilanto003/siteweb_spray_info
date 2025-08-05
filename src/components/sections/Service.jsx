import React from "react";
import SectionTitle from "../ui/SectionTitle";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";
import { BadgeCheck, Computer, Lightbulb } from "lucide-react";
import SprayLearn from "/assets/images/learn.png";
import SprayX from "/assets/images/spray_x.png";

export default function Service() {
  const { t } = useTranslation();

  return (
    <section id="service" className="pt-10 bg-gray-50 dark:bg-gray-950/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-16">
        <SectionTitle
          title={t("service.title")}
          description={
            <Trans i18nKey={"service.description"} components={{ 1: <br /> }} />
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {t("service.types", { returnObjects: true }).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all relative overflow-hidden"
            >
              {/* Blobs décoratifs */}
              <svg
                className="absolute -top-16 -right-16 w-40 h-40 opacity-30 z-0"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#3b82f6"
                  d="M41.3,-66.2C54.7,-59.7,66.7,-54.7,74.2,-45.6C81.7,-36.5,84.7,-23.2,85.2,-10.1C85.7,3,83.7,16,77.2,27.2C70.7,38.4,59.7,47.7,47.7,54.2C35.7,60.7,22.8,64.3,10.2,62.2C-2.4,60.1,-14.7,52.3,-27.2,45.8C-39.7,39.3,-52.3,34.1,-59.7,24.7C-67.1,15.3,-69.3,1.7,-67.2,-11.2C-65.1,-24.1,-58.7,-36.3,-49.2,-43.7C-39.7,-51.1,-27.2,-53.7,-15.1,-59.2C-3,-64.7,9.7,-73,22.7,-74.7C35.7,-76.4,48.7,-71.7,41.3,-66.2Z"
                  transform="translate(100 100)"
                />
              </svg>
              <svg
                className="absolute -bottom-16 -left-16 w-32 h-32 opacity-20 z-0"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#6366f1"
                  d="M54.7,-59.7C66.7,-54.7,74.2,-45.6,81.7,-36.5C84.7,-23.2,85.2,-10.1,85.7,3C83.7,16,77.2,27.2,70.7,38.4C59.7,47.7,47.7,54.2,35.7,60.7C22.8,64.3,10.2,62.2,-2.4,60.1C-14.7,52.3,-27.2,45.8,-39.7,39.3C-52.3,34.1,-59.7,24.7,-67.1,15.3C-69.3,1.7,-67.2,-11.2C-65.1,-24.1,-58.7,-36.3,-49.2,-43.7C-39.7,-51.1,-27.2,-53.7,-15.1,-59.2C-3,-64.7,9.7,-73,22.7,-74.7C35.7,-76.4,48.7,-71.7,54.7,-59.7Z"
                  transform="translate(100 100)"
                />
              </svg>
              <svg
                className="absolute top-1/2 left-1/2 w-24 h-24 opacity-10 z-0"
                style={{ transform: "translate(-50%, -50%)" }}
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#0ea5e9"
                  d="M59.7,-59.7C66.7,-54.7,74.2,-45.6,81.7,-36.5C84.7,-23.2,85.2,-10.1,85.7,3C83.7,16,77.2,27.2,70.7,38.4C59.7,47.7,47.7,54.2,35.7,60.7C22.8,64.3,10.2,62.2,-2.4,60.1C-14.7,52.3,-27.2,45.8,-39.7,39.3C-52.3,34.1,-59.7,24.7,-67.1,15.3C-69.3,1.7,-67.2,-11.2C-65.1,-24.1,-58.7,-36.3,-49.2,-43.7C-39.7,-51.1,-27.2,-53.7,-15.1,-59.2C-3,-64.7,9.7,-73,22.7,-74.7C35.7,-76.4,48.7,-71.7,59.7,-59.7Z"
                  transform="translate(100 100)"
                />
              </svg>
              <div className="flex items-center justify-between mb-2 relative z-10 gap-4">
                <div className="p-4 bg-white rounded-lg flex flex-col items-center">
                  {/* <img src={SprayLearn} className="w-8" alt="" /> */}
                  {service.icon === "spray_learn" ? (
                    <img src={SprayLearn} className="w-8" alt="" />
                  ) : service.icon === "spray_x" ? (
                    <img src={SprayX} className="w-8" alt="" />
                  ) : service.icon === "spray_idea" ? (
                    <Lightbulb size={32} className="text-blue-900" />
                  ) : service.icon === "solution" ? (
                    <Computer size={32} className="text-blue-900" />
                  ) : (
                    ""
                  )}
                  <h3 className="md:text-xl font-semibold text-blue-600 text-center">
                    {service.title}
                  </h3>
                </div>
                <span className="text-sm text-gray-400 italic">
                  {service.subTitle}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-left text-xs md:text-sm relative z-10">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {service.tag.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs md:text-sm px-3 py-1 rounded-full font-medium dark:bg-blue-900 dark:text-blue-200 flex items-center gap-1"
                  >
                    <BadgeCheck size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
