import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiClock,
  FiDollarSign,
  FiAward,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";

const DevisPage = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    message: "",
    budget: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    "Développement Web",
    "Application Mobile",
    "Design UI/UX",
    "Marketing Digital",
    "Consulting IT",
    "Autre",
  ];

  const budgets = [
    "Moins de 1 000€",
    "1 000€ - 3 000€",
    "3 000€ - 5 000€",
    "5 000€ - 10 000€",
    "Plus de 10 000€",
    "À définir",
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.nom.trim()) newErrors.nom = "Nom requis";
    if (!formData.email.trim()) {
      newErrors.email = "Email requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }
    if (!formData.telephone.trim()) newErrors.telephone = "Téléphone requis";
    if (!formData.service) newErrors.service = "Service requis";
    if (!formData.message.trim()) newErrors.message = "Message requis";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_your_service_id",
        "template_your_template_id",
        formData,
        "user_your_user_id"
      );

      setSubmitStatus("success");
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        service: "",
        message: "",
        budget: "",
      });
    } catch (error) {
      console.error("Erreur envoi:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Demande de Devis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Obtenez une estimation précise pour votre projet en moins de 24h
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 transform skew-y-1 origin-top-left"></div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Notre Processus Simple
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md text-center"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiSend className="text-blue-600 dark:text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                1. Demande
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Remplissez notre formulaire détaillé pour nous expliquer votre
                projet
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md text-center"
            >
              <div className="bg-indigo-100 dark:bg-indigo-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiClock className="text-indigo-600 dark:text-indigo-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                2. Analyse
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Notre équipe étudie votre demande et prépare une estimation
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md text-center"
            >
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiDollarSign className="text-purple-600 dark:text-purple-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                3. Devis
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Vous recevez une proposition détaillée sous 24h
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Formulaire de Devis
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Remplissez ce formulaire pour recevoir une estimation
                  personnalisée
                </p>
              </div>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg flex items-center"
                >
                  <FiCheckCircle className="text-xl mr-2" />
                  Votre demande a bien été envoyée ! Nous vous contacterons
                  rapidement.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg flex items-center"
                >
                  <FiAlertCircle className="text-xl mr-2" />
                  Une erreur est survenue. Veuillez réessayer ou nous contacter
                  directement.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nom */}
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.nom
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                      placeholder="Votre nom"
                    />
                    {errors.nom && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.nom}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.telephone
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                      placeholder="06 12 34 56 78"
                    />
                    {errors.telephone && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.telephone}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Service demandé *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.service
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Budget */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Budget estimé
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {budgets.map((budget, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            id={`budget-${index}`}
                            name="budget"
                            type="radio"
                            value={budget}
                            checked={formData.budget === budget}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                          />
                          <label
                            htmlFor={`budget-${index}`}
                            className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                          >
                            {budget}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Décrivez votre projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                      placeholder="Décrivez en détail votre projet, vos besoins, vos attentes et toute spécificité importante..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:opacity-90 transition-opacity disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Envoyer la demande de devis
                      </>
                    )}
                  </motion.button>

                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">
                    * Champs obligatoires. Vos données sont sécurisées et ne
                    seront pas partagées.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Assurance Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-700 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <FiAward className="text-4xl text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Pourquoi choisir nos services ?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Nous nous engageons à fournir des solutions sur mesure avec une
                transparence totale sur les coûts et les délais.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    100% Personnalisé
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Des solutions adaptées spécifiquement à vos besoins
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Transparent
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Pas de frais cachés, devis détaillé et clair
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Réactif
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Réponse garantie sous 24h ouvrées
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevisPage;
