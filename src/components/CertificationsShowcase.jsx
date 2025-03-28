import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiDownload,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const CertificationsShowcase = () => {
  // Données des certifications
  const certifications = [
    {
      id: 1,
      title: "Développeur Fullstack Avancé",
      issuer: "OpenClassrooms",
      date: "Mai 2023",
      image: "/certifications/fullstack.jpg",
      credentialUrl: "#",
      downloadUrl: "#",
      skills: ["React", "Node.js", "MongoDB", "API REST", "Redux"],
    },
    {
      id: 2,
      title: "Architecture Cloud AWS",
      issuer: "Amazon Web Services",
      date: "Novembre 2022",
      image: "/certifications/aws.jpg",
      credentialUrl: "#",
      downloadUrl: "#",
      skills: ["EC2", "S3", "Lambda", "RDS", "CloudFront"],
    },
    {
      id: 3,
      title: "Spécialiste React",
      issuer: "Meta",
      date: "Février 2023",
      image: "/certifications/react.jpg",
      credentialUrl: "#",
      downloadUrl: "#",
      skills: ["Hooks", "Context API", "Performance", "Testing", "SSR"],
    },
    {
      id: 4,
      title: "Data Science Fundamentals",
      issuer: "Google",
      date: "Septembre 2022",
      image: "/certifications/datascience.jpg",
      credentialUrl: "#",
      downloadUrl: "#",
      skills: ["Python", "Pandas", "NumPy", "Visualisation", "ML Basics"],
    },
  ];

  const [selectedCert, setSelectedCert] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openCert = (cert) => {
    setSelectedCert(cert);
    setCurrentIndex(certifications.findIndex((c) => c.id === cert.id));
  };

  const closeCert = () => setSelectedCert(null);

  const navigate = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        (currentIndex - 1 + certifications.length) % certifications.length;
    } else {
      newIndex = (currentIndex + 1) % certifications.length;
    }
    setCurrentIndex(newIndex);
    setSelectedCert(certifications[newIndex]);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Mes <span className="text-indigo-600">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Diplômes et accréditations qui valident mon expertise technique
          </motion.p>
        </div>

        {/* Grille des certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer"
              onClick={() => openCert(cert)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de détail */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeCert}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Boutons de navigation */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("prev");
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/80 dark:bg-gray-700/80 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-600 transition-colors"
                  aria-label="Certification précédente"
                >
                  <FiChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("next");
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/80 dark:bg-gray-700/80 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-600 transition-colors"
                  aria-label="Certification suivante"
                >
                  <FiChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
                </button>

                {/* Bouton fermer */}
                <button
                  onClick={closeCert}
                  className="absolute top-4 right-4 z-10 p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Fermer"
                >
                  <FiTimes className="w-5 h-5 text-gray-800 dark:text-white" />
                </button>

                {/* Contenu du modal */}
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="lg:w-1/2 bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-8">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="max-h-[70vh] object-contain rounded-lg shadow-md"
                    />
                  </div>

                  <div className="lg:w-1/2 p-8 overflow-y-auto">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium mb-4">
                        {selectedCert.date}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedCert.title}
                      </h3>
                      <p className="text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-6">
                        {selectedCert.issuer}
                      </p>

                      <div className="flex gap-4 mb-8">
                        <a
                          href={selectedCert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                        >
                          <FiExternalLink />
                          Voir la certification
                        </a>
                        <a
                          href={selectedCert.downloadUrl}
                          download
                          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                        >
                          <FiDownload />
                          Télécharger
                        </a>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Compétences validées
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-lg border border-indigo-100 dark:border-indigo-900/20">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        À propos de cette certification
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Cette certification atteste de ma maîtrise des concepts
                        avancés en développement Fullstack, incluant la création
                        d'applications complètes avec les dernières
                        technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CertificationsShowcase;
