import React from "react";
import SectionTitle from "../ui/SectionTitle";
import { useTranslation } from "react-i18next";

export default function Equipe() {
  const { t } = useTranslation();

  const members = t("team.members", { returnObjects: true });

  return (
    <section
      id="team"
      className="pt-10 dark:bg-gray-950/95 relative bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10">
        <SectionTitle
          title={t("team.title")}
          description={t("team.description")}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="relative dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col items-center group transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: "url(/assets/svg/wave3.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 mb-4 shadow-lg group-hover:scale-105 transition-transform duration-500 z-10"
              />
              <h3 className="text-lg font-bold text-blue-600 text-center z-10">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-50 mb-2 text-center z-10">
                {member.role}
              </p>
              {member.description && (
                <p className="text-xs text-gray-400 dark:text-gray-400 mb-2 text-center z-10">
                  {member.description}
                </p>
              )}
              <button
                className="mt-4 px-5 py-2 rounded-lg cursor-pointer bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-900 transition-colors duration-300 z-10"
                onClick={() =>
                  window.open(
                    `/portfolio/${member.name
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`,
                    "_blank"
                  )
                }
              >
                {t("portfolioBtn")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
