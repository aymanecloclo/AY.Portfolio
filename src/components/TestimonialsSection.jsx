import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  FaQuoteLeft,
  FaStar,
  FaRegStar,
  FaDownload,
  FaExpand,
  FaTimes,
  FaSignature,
} from "react-icons/fa";
import { FiAward, FiThumbsUp, FiUserCheck, FiCode } from "react-icons/fi";
import { motion } from "framer-motion";

// Importez vos images
import ilyess from "../assets/images/ILYESS.jpg";
import sonia from "../assets/images/sonia.png";
import charaf from "../assets/images/charaf.jpg";
import rf from "../assets/images/rf.jpg";

// Données multilingues
const testimonialsData = {
  FR: {
    title: "Recommandations & Satisfaction",
    subtitle:
      "Ce que mes clients disent de notre collaboration et les résultats obtenus",
    statsTitle: "Mes indicateurs",
    documentsTitle: "Documents Officiels",
    stats: [
      { value: "100%", label: "Clients satisfaits", icon: <FiThumbsUp /> },
      { value: "4.9/5", label: "Note moyenne", icon: <FiAward /> },
      { value: "24", label: "Projets livrés", icon: <FiUserCheck /> },
    ],
    documents: {
      siret: {
        title: "Extrait SIRET",
        subtitle: "Document officiel",
        icon: <FaSignature />,
      },
      attestation: {
        title: "Attestation",
        subtitle: "Référencement",
        icon: <FiAward />,
      },
      diplome: {
        title: "Certification",
        subtitle: "Diplôme",
        icon: <FiCode />,
      },
      download: {
        title: "Télécharger",
        subtitle: "PDF complet",
        icon: <FaDownload />,
      },
    },
    signatureText: "Signature numérique certifiée",
    generatedText: "Document généré le",
    previewText: "Aperçu du document",
    testimonials: [
      {
        id: 1,
        name: "Ilyass Azeroual",
        position: "Tech Lead Senior",
        company: "Revontic Technologies",
        content:
          "Ayman RACHID est un développeur Fullstack (PHP/JS) compétent et passionné, toujours à la recherche de solutions optimales. Son professionnalisme et son esprit d'équipe en font un collaborateur exceptionnel.",
        rating: 5,
        date: "25/03/2025",
        avatar: ilyess,
        social: "https://www.linkedin.com/in/ilyass-azeroual",
      },
      {
        id: 2,
        name: "Charaf Eddine Zouhri",
        position: "Marketing & Digital Transformation Specialist",
        company: "Revontic Technologies",
        content:
          "Collaboration exceptionnelle avec Ayman. Ses livraisons étaient toujours dans les délais avec un code de haute qualité. Son approche méthodique et son souci du détail ont grandement contribué au succès de nos projets clients.",
        rating: 5,
        date: "01/04/2025",
        avatar: charaf,
        social: "https://www.linkedin.com/in/charaf-zouhri",
      },
      {
        id: 3,
        name: "Sonia DRIOUCH",
        position: "Gestionnaire Service Client",
        company: "Paris LOSANGE",
        content:
          "Aymane a développé notre site web avec une grande réactivité à nos besoins. L'interface de réservation qu'il a créée a augmenté nos conversions de 30%. Un professionnel que je recommande vivement pour ses solutions sur mesure.",
        rating: 5,
        date: "10/01/2024",
        avatar: sonia,
        social: "https://www.linkedin.com/in/sonia-driouch9825",
      },
    ],
  },
  EN: {
    title: "Testimonials & Satisfaction",
    subtitle:
      "What my clients say about our collaboration and the results achieved",
    statsTitle: "My Metrics",
    documentsTitle: "Official Documents",
    stats: [
      { value: "100%", label: "Satisfied clients", icon: <FiThumbsUp /> },
      { value: "4.9/5", label: "Average rating", icon: <FiAward /> },
      { value: "24", label: "Delivered projects", icon: <FiUserCheck /> },
    ],
    documents: {
      siret: {
        title: "SIRET Extract",
        subtitle: "Official document",
        icon: <FaSignature />,
      },
      attestation: {
        title: "Certificate",
        subtitle: "Accreditation",
        icon: <FiAward />,
      },
      diplome: {
        title: "Certification",
        subtitle: "Diploma",
        icon: <FiCode />,
      },
      download: {
        title: "Download",
        subtitle: "Complete PDF",
        icon: <FaDownload />,
      },
    },
    signatureText: "Certified digital signature",
    generatedText: "Document generated on",
    previewText: "Document preview",
    testimonials: [
      {
        id: 1,
        name: "Ilyass Azeroual",
        position: "Senior Tech Lead",
        company: "Revontic Technologies",
        content:
          "Ayman RACHID is a skilled and passionate Fullstack (PHP/JS) developer, always looking for optimal solutions. His professionalism and team spirit make him an exceptional collaborator.",
        rating: 5,
        date: "03/25/2025",
        avatar: ilyess,
        social: "https://www.linkedin.com/in/ilyass-azeroual",
      },
      {
        id: 2,
        name: "Charaf Eddine Zouhri",
        position: "Marketing & Digital Transformation Specialist",
        company: "Revontic Technologies",
        content:
          "Exceptional collaboration with Ayman. His deliveries were always on time with high quality code. His methodical approach and attention to detail greatly contributed to our clients' project success.",
        rating: 5,
        date: "04/01/2025",
        avatar: charaf,
        social: "https://www.linkedin.com/in/charaf-zouhri",
      },
      {
        id: 3,
        name: "Sonia DRIOUCH",
        position: "Customer Service Manager",
        company: "Paris LOSANGE",
        content:
          "Aymane developed our website with great responsiveness to our needs. The booking interface he created increased our conversions by 30%. A professional I highly recommend for his tailor-made solutions.",
        rating: 5,
        date: "01/10/2024",
        avatar: sonia,
        social: "https://www.linkedin.com/in/sonia-driouch9825",
      },
    ],
  },
};

const TestimonialsSection = () => {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [currentDoc, setCurrentDoc] = useState("");

  const {
    title,
    subtitle,
    statsTitle,
    documentsTitle,
    stats,
    documents,
    signatureText,
    generatedText,
    previewText,
    testimonials,
  } = testimonialsData[currentLanguage];

  const legalDocuments = {
    siret: rf,
    attestation: rf,
    diplome: rf,
  };

  const openModal = (docUrl) => {
    setCurrentDoc(docUrl);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  // Formatteur de date en fonction de la langue
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(
      currentLanguage === "FR" ? "fr-FR" : "en-US",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }
    );
  };

  return (
    <section
      className="py-16 bg-gray-50 dark:bg-gray-900/70 my-48"
      id="testimonials"
    >
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Colonne des statistiques */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {statsTitle}
            </h3>
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Colonne des témoignages */}
          <div className="lg:col-span-2 space-y-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                formatDate={formatDate}
              />
            ))}
          </div>
        </div>

        {/* Section des documents */}
        <DocumentsSection
          title={documentsTitle}
          documents={documents}
          legalDocuments={legalDocuments}
          signatureText={signatureText}
          generatedText={generatedText}
          previewText={previewText}
          onDocumentClick={openModal}
          currentLanguage={currentLanguage}
        />

        {/* Modal */}
        {modalOpen && (
          <DocumentModal
            documentUrl={currentDoc}
            onClose={closeModal}
            downloadText={currentLanguage === "FR" ? "Télécharger" : "Download"}
          />
        )}
      </div>
    </section>
  );
};

// Composant Carte de Témoignage
const TestimonialCard = ({ testimonial, formatDate }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
  >
    <div className="flex items-start gap-4">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <FaQuoteLeft className="text-xl text-indigo-600 dark:text-indigo-400 mb-2" />
        <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
          {testimonial.content}
        </p>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) =>
            i < testimonial.rating ? (
              <FaStar key={i} className="text-yellow-400" />
            ) : (
              <FaRegStar key={i} className="text-yellow-400" />
            )
          )}
        </div>
        <p className="font-semibold text-gray-900 dark:text-white">
          {testimonial.name}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {testimonial.position}, {testimonial.company}
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
          {formatDate(testimonial.date)}
        </p>
      </div>
    </div>
  </motion.div>
);

// Composant Section Documents
const DocumentsSection = ({
  title,
  documents,
  legalDocuments,
  signatureText,
  generatedText,
  previewText,
  onDocumentClick,
  currentLanguage,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto"
  >
    <div className="md:flex">
      <div className="p-8 md:p-10 md:w-2/3">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <DocumentButton
            icon={documents.siret.icon}
            title={documents.siret.title}
            subtitle={documents.siret.subtitle}
            onClick={() => onDocumentClick(legalDocuments.siret)}
          />

          <DocumentButton
            icon={documents.attestation.icon}
            title={documents.attestation.title}
            subtitle={documents.attestation.subtitle}
            onClick={() => onDocumentClick(legalDocuments.attestation)}
          />

          <DocumentButton
            icon={documents.diplome.icon}
            title={documents.diplome.title}
            subtitle={documents.diplome.subtitle}
            onClick={() => onDocumentClick(legalDocuments.diplome)}
          />

          <DocumentButton
            icon={documents.download.icon}
            title={documents.download.title}
            subtitle={documents.download.subtitle}
            isDownload
            href={legalDocuments.attestation}
            downloadText={currentLanguage === "FR" ? "Télécharger" : "Download"}
          />
        </div>

        <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <FaSignature className="text-indigo-600 dark:text-indigo-400 text-xl" />
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                {signatureText}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {generatedText}{" "}
                {new Date().toLocaleDateString(
                  currentLanguage === "FR" ? "fr-FR" : "en-US"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/10 p-8 md:p-10 md:w-1/3 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700">
        <DocumentPreview
          imageUrl={legalDocuments.siret}
          altText={documents.siret.title}
          onClick={() => onDocumentClick(legalDocuments.siret)}
          previewText={previewText}
        />
      </div>
    </div>
  </motion.div>
);

// Composant Bouton Document
const DocumentButton = ({
  icon,
  title,
  subtitle,
  onClick,
  isDownload = false,
  href,
  downloadText,
}) => {
  if (isDownload) {
    return (
      <a
        href={href}
        download
        className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/20 rounded-md text-indigo-600 dark:text-indigo-400">
          {icon}
        </div>
        <span className="text-left">
          <p className="font-medium text-gray-900 dark:text-white">{title}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
        </span>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
    >
      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/20 rounded-md text-indigo-600 dark:text-indigo-400">
        {icon}
      </div>
      <span>
        <p className="font-medium text-gray-900 dark:text-white">{title}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
      </span>
    </button>
  );
};

// Composant Aperçu Document
const DocumentPreview = ({ imageUrl, altText, onClick, previewText }) => (
  <div className="text-center">
    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 bg-white">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={onClick}
      />
      <button
        onClick={onClick}
        className="absolute top-2 right-2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
        aria-label="Agrandir"
      >
        <FaExpand className="text-gray-700 dark:text-gray-300 text-sm" />
      </button>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-300">{previewText}</p>
  </div>
);

// Composant Modal Document
const DocumentModal = ({ documentUrl, onClose, downloadText }) => (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
    <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors z-10"
        aria-label="Fermer"
      >
        <FaTimes className="text-gray-800 dark:text-gray-200 text-lg" />
      </button>

      <div className="p-4">
        <img
          src={documentUrl}
          alt="Document agrandi"
          className="w-full h-auto max-h-[70vh] object-contain mx-auto"
        />
      </div>

      <div className="sticky bottom-0 bg-white dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
        <a
          href={documentUrl}
          download
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
        >
          <FaDownload />
          {downloadText}
        </a>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
