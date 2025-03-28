import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FiSend,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiLinkedin,
  FiGithub,


} from "react-icons/fi";
import {

  FaInstagram,
} from "react-icons/fa";
import { motion } from 'framer-motion';

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ success: false, error: false, message: '' });
  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    const newErrors = {};
    
    if (!data.name.trim()) {
      newErrors.name = 'Le nom est requis';
    } else if (data.name.length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    }

    if (!data.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Veuillez entrer un email valide';
    }

    if (!data.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (data.message.length < 20) {
      newErrors.message = 'Le message doit contenir au moins 20 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ success: false, error: false, message: '' });

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    if (!validateForm(data)) {
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(
      'service_i0welv9', 
      'template_9px3uig', 
      form.current,
      'uxWKIwBThJlF-L6GU'
    )
    .then((result) => {
      setFormStatus({ 
        success: true, 
        error: false, 
        message: 'Message envoyé avec succès ! Je vous répondrai dans les 24 heures.' 
      });
      form.current.reset();
    })
    .catch((error) => {
      setFormStatus({ 
        success: false, 
        error: true, 
        message: 'Une erreur est survenue. Veuillez réessayer ou me contacter directement via les liens ci-dessous.' 
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="w-10/12  my-24 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 z-50">
      {/* Section Contact Form */}
      <div className="p-8 lg:p-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Contact Professionnel
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Discutons de votre projet ou opportunité. Je réponds sous 24 heures.
          </p>

          {formStatus.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 mb-6 rounded-lg border ${
                formStatus.success
                  ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800"
                  : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800"
              }`}
            >
              {formStatus.message}
            </motion.div>
          )}

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Nom Complet *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`pl-10 w-full px-4 py-3 rounded-lg border ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500 bg-red-50 dark:bg-red-900/10"
                      : "border-gray-300 dark:border-gray-700 focus:ring-indigo-500 bg-white dark:bg-gray-800"
                  } focus:outline-none focus:ring-2 text-gray-900 dark:text-white`}
                  placeholder="Votre nom complet"
                />
              </div>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {errors.name}
                </motion.p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Professionnel *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`pl-10 w-full px-4 py-3 rounded-lg border ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500 bg-red-50 dark:bg-red-900/10"
                      : "border-gray-300 dark:border-gray-700 focus:ring-indigo-500 bg-white dark:bg-gray-800"
                  } focus:outline-none focus:ring-2 text-gray-900 dark:text-white`}
                  placeholder="email@professionnel.com"
                />
              </div>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {errors.email}
                </motion.p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Votre Message *
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3">
                  <FiMessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`pl-10 w-full px-4 py-3 rounded-lg border ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500 bg-red-50 dark:bg-red-900/10"
                      : "border-gray-300 dark:border-gray-700 focus:ring-indigo-500 bg-white dark:bg-gray-800"
                  } focus:outline-none focus:ring-2 text-gray-900 dark:text-white`}
                  placeholder="Décrivez en détail votre projet, vos besoins et vos objectifs..."
                />
              </div>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {errors.message}
                </motion.p>
              )}
            </div>

            <div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex justify-center items-center gap-2 px-6 py-4 rounded-lg text-white font-medium ${
                  isSubmitting
                    ? "bg-indigo-400 dark:bg-indigo-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 dark:from-indigo-700 dark:to-indigo-600 dark:hover:from-indigo-600 dark:hover:to-indigo-500"
                } transition-all shadow-lg hover:shadow-indigo-500/20`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
                    <FiSend className="h-5 w-5" />
                    Envoyer le message
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Section Informations & Réseaux */}
      <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-900/10 p-8 lg:p-10 flex flex-col">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-300 mb-6">
            Autres moyens de contact
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Email Direct
              </h4>
              <a
                href="mailto:contact@exemple.com"
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
              >
                <FiMail className="h-5 w-5" />
                aymane.rachid.web@gmail.com
              </a>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Réseaux Professionnels
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/aymane-rachid-106700317/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/aymanecloclo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  aria-label="GitHub"
                >
                  <FiGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/votreprofil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                  aria-label="Twitter"
                >
                    <FaInstagram size={24} className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Disponibilité
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Réponse sous 24h en semaine
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Réponse le week-end sous 48h
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-indigo-200 dark:border-indigo-900/50"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Vous pouvez aussi me contacter directement par téléphone au{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              +XX XXX XXX XXX
            </span>{" "}
            de 9h à 18h du lundi au vendredi.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;