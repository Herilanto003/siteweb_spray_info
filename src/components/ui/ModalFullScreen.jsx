import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Briefcase,
  Lightbulb,
  Settings,
  GraduationCap,
} from "lucide-react";

export default function ModalFullScreen({ title, children }) {
  const [isOpen, setIsOpen] = React.useState(true);

  const timeline = [
    {
      date: "Janvier 2022",
      title: "Fondation",
      content:
        "Fondation par trois ingénieurs de l'ENI Tuléar à Fianarantsoa, avec deux étudiants et une salle modeste.",
      icon: Users,
      color: "from-blue-500 to-purple-600",
    },
    {
      date: "Juillet 2022",
      title: "Expansion",
      content:
        "Acquisition d'un local pouvant accueillir plus de 100 étudiants avec des équipements améliorés.",
      icon: MapPin,
      color: "from-purple-500 to-pink-600",
    },
    {
      date: "2022 - 2023",
      title: "Spécialisation",
      content:
        "Spécialisation dans la formation informatique pour les étudiants universitaires.",
      icon: Briefcase,
      color: "from-pink-500 to-red-600",
    },
    {
      date: "Janvier 2024",
      title: "Diversification",
      content:
        "Diversification des formations : communication, développement personnel, marketing, leadership.",
      icon: Lightbulb,
      color: "from-red-500 to-orange-600",
    },
    {
      date: "Janvier 2025",
      title: "Spray_idea",
      content:
        "Lancement de Spray_idea, cabinet de conseil pour accompagner les entreprises et individus.",
      icon: Briefcase,
      color: "from-orange-500 to-yellow-600",
    },
    {
      date: "Mars 2025",
      title: "TechnoSupport",
      content:
        "Création de TechnoSupport, service de prestation numérique et support technique pour entreprises.",
      icon: Settings,
      color: "from-yellow-500 to-green-600",
    },
    {
      date: "Courant 2025",
      title: "Université Spray_X",
      content:
        "Naissance de l'université privée Spray_X avec deux filières : Génie Logiciel et Administration Système & Réseaux.",
      icon: GraduationCap,
      color: "from-green-500 to-blue-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed z-50 top-0 left-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 w-screen h-screen overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative h-full overflow-y-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Notre Parcours
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          className="relative max-w-6xl mx-auto pb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Line */}
          <div className="absolute left-1/2 top-0 w-1 -translate-x-1/2 bg-gradient-to-b from-blue-200 to-purple-200 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 to-purple-600"
              variants={lineVariants}
            />
          </div>

          {/* Timeline Items */}
          {timeline.map((item, index) => {
            const IconComponent = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`relative mb-16 flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
                variants={itemVariants}
              >
                {/* Content Card */}
                <motion.div
                  className={`w-full max-w-md ${
                    isLeft ? "mr-8 text-right" : "ml-8 text-left"
                  }`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                    {/* Date Badge */}
                    <motion.div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${item.color} mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      <Calendar size={16} />
                      {item.date}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {item.title}
                    </h3>

                    {/* Content */}
                    <p className="text-gray-600 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </motion.div>

                {/* Center Icon */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 z-20"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg border-4 border-white`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Connecting Line */}
                <motion.div
                  className={`absolute top-1/2 w-8 h-0.5 bg-gradient-to-r ${
                    item.color
                  } ${isLeft ? "right-1/2 mr-8" : "left-1/2 ml-8"}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200/30 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
