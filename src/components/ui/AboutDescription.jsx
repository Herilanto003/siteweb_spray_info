import React from "react";
import { useTranslation } from "react-i18next";
import AboutCard from "./AboutCard";
import {
  Activity,
  BookMarked,
  CheckCircle,
  Goal,
  GraduationCap,
  Lightbulb,
  Settings,
  Tag,
  Users,
} from "lucide-react";
import Blob1 from "/assets/svg/blobAbout2.svg";
import Blob from "/assets/svg/blobAbout.svg";
import Modal from "./Modal";

import { motion } from "framer-motion";

const HistoryChildren = ({ t }) => (
  <>
    <div className="relative border-l-4 border-blue-900 dark:border-blue-600 pl-4 sm:pl-6 space-y-8 max-h-[60vh] overflow-y-auto">
      {t("about.history.timeline", { returnObjects: true }).map(
        (item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -left-3 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-900 dark:bg-blue-600 border-4 border-white group-hover:scale-110 transition-transform" />
            <div className="ml-4">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-700 dark:text-blue-500">
                {item.date}
              </h3>
              <p className="mt-2 text-gray-900 dark:text-gray-300 text-sm sm:text-base">
                {item.event}
              </p>
            </div>
          </motion.div>
        )
      )}
    </div>
  </>
);

const ObjectiveChildren = ({ t }) => (
  <div className="space-y-4 overflow-y-auto max-h-[70vh]">
    {t("about.objectives.points", { returnObjects: true }).map((obj, index) => (
      <div
        key={index}
        className="flex items-start gap-4 bg-blue-50 dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="text-blue-700 dark:text-blue-300">
          {obj.icon === "graduation" ? (
            <GraduationCap size={24} />
          ) : obj.icon === "light" ? (
            <Lightbulb size={24} />
          ) : obj.icon === "users" ? (
            <Users size={24} />
          ) : obj.icon === "settings" ? (
            <Settings size={24} />
          ) : (
            <Tag size={24} />
          )}
        </div>
        <div>
          <h3 className="font-semibold text-blue-900 dark:text-white">
            {obj.title}
          </h3>
          <p className="text-sm text-blue-800 dark:text-gray-300 mt-1">
            {obj.description}
          </p>
        </div>
      </div>
    ))}
  </div>
);

const MissionChildren = ({ t }) => (
  <div className="space-y-4 max-h-[65vh] overflow-y-auto">
    {t("about.missions.points", { returnObjects: true }).map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 dark:bg-gray-800 shadow-sm hover:bg-blue-100 dark:hover:bg-gray-700 transition"
      >
        <CheckCircle
          className="text-blue-700 dark:text-blue-300 mt-1"
          size={20}
        />
        <p className="text-blue-900 dark:text-gray-200 text-sm">{item}</p>
      </motion.div>
    ))}
  </div>
);

export default function AboutDescription() {
  const { t } = useTranslation();

  // --------- Début modal

  const [open, setOpen] = React.useState(false);
  const [titleModal, setTitleModal] = React.useState("");

  const handleOpenModal = (title) => {
    setOpen(true);
    setTitleModal(title);
  };

  // --------- Fin modal

  return (
    <div className="mt-16 md:flex md:justify-between md:items-center md:w-full md:gap-6">
      <Modal open={open} onClose={() => setOpen(false)} title={titleModal}>
        {titleModal === t("about.history.title") ? (
          <HistoryChildren t={t} />
        ) : titleModal === t("about.objectives.title") ? (
          <ObjectiveChildren t={t} />
        ) : titleModal === t("about.missions.title") ? (
          <MissionChildren t={t} />
        ) : (
          "default"
        )}
      </Modal>
      <AboutCard
        title={t("about.history.title")}
        description={t("about.history.description")}
        icon={
          <BookMarked className="bg-blue-700 text-white size-14 rounded-full h-18 w-18 p-3" />
        }
        color={"blue-700"}
        blob1={
          <img
            src={Blob}
            alt="blob"
            className="absolute -left-12 -top-10 w-40"
          />
        }
        blob2={
          <img
            src={Blob}
            alt="blob"
            className="absolute -right-12 bottom-10 w-40 opacity-20"
          />
        }
        openModal={() => handleOpenModal(t("about.history.title"))}
      />
      <AboutCard
        title={t("about.objectives.title")}
        description={t("about.objectives.description")}
        icon={
          <Goal className="bg-indigo-700 text-white size-14 rounded-full h-18 w-18 p-3" />
        }
        color={"indigo-700"}
        blob1={
          <img
            src={Blob1}
            alt="blob"
            className="absolute -left-12 -top-10 w-40"
          />
        }
        blob2={
          <img
            src={Blob1}
            alt="blob"
            className="absolute -right-12 bottom-10 w-40 opacity-20"
          />
        }
        openModal={() => handleOpenModal(t("about.objectives.title"))}
      />
      <AboutCard
        title={t("about.missions.title")}
        description={t("about.missions.description")}
        icon={
          <Activity className="bg-blue-700 text-white size-14 rounded-full h-18 w-18 p-3" />
        }
        color={"blue-700"}
        blob1={
          <img
            src={Blob}
            alt="blob"
            className="absolute -left-12 -top-10 w-40"
          />
        }
        blob2={
          <img
            src={Blob}
            alt="blob"
            className="absolute -right-12 bottom-10 w-40 opacity-20"
          />
        }
        openModal={() => handleOpenModal(t("about.missions.title"))}
      />
    </div>
  );
}
