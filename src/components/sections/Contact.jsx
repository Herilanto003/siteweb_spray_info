import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="pt-10 dark:bg-gray-950/95 relative bg-gray-50 overflow-hidden"
    >
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10 relative">
        <SectionTitle
          title={t("contact.title")}
          description={t("contact.description")}
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Informations entreprise */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 dark:border-blue-900/30">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                    <MapPin className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t("contact.info.address.title")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {t("contact.info.address.description")}
                      <br />
                      {t("contact.info.address.country")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Phone className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t("contact.info.phone.title")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      <a
                        href={`tel:${t("contact.info.phone.description")}`}
                        className="hover:text-blue-500 transition-colors"
                      >
                        {t("contact.info.phone.description")}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Mail className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t("contact.info.email.title")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      <a className="hover:text-blue-500 transition-colors">
                        {t("contact.info.email.description")}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Clock className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t("contact.info.hour.title")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {t("contact.info.hour.open1")}
                      <br />
                      {t("contact.info.hour.open2")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats ou informations supplémentaires */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <div className="text-2xl font-bold">
                  {t("contact.stat.hour.label")}
                </div>
                <div className="text-blue-100 text-sm">
                  {t("contact.stat.hour.description")}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
                <div className="text-2xl font-bold">
                  {t("contact.stat.client.number")}
                </div>
                <div className="text-blue-100 text-sm">
                  {t("contact.stat.client.description")}
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 dark:border-blue-900/30">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle
                  className="mx-auto text-green-500 mb-4"
                  size={48}
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t("contact.form.form.response.success")}
                </h3>
                {/* <p className="text-gray-600 dark:text-gray-300">
                  Nous vous répondrons dans les plus brefs délais.
                </p> */}
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t("contact.form.title")}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        {t("contact.form.form.fullName.label")} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 dark:text-white transition-all duration-200"
                        placeholder={t(
                          "contact.form.form.fullName.placeholder"
                        )}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        {t("contact.form.form.email.label")} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 dark:text-white transition-all duration-200"
                        placeholder={t("contact.form.form.email.placeholder")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t("contact.form.form.subject.label")} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 dark:text-white transition-all duration-200"
                      placeholder={t("contact.form.form.subject.placeholder")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t("contact.form.form.message.label")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 dark:text-white transition-all duration-200 resize-none"
                      placeholder={t("contact.form.form.message.placeholder")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>{t("contact.form.form.submit.submitting")}</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>{t("contact.form.form.submit.label")}</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
