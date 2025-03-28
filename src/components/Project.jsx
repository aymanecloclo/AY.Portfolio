import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiGraphql, SiTailwindcss } from "react-icons/si";
import ecommerce from "../assets/images/e-commerce.png";
import hotel from "../assets/images/hotel.png";
import genisus from "../assets/images/genisus.png";

const ProjectShowcase = () => {

  const projects = [
    {
      id: 1,
      title: "Application E-commerce",
      description:
        "Plateforme complète avec paiement en ligne, gestion de stock et tableau de bord admin.",
      tags: ["React", "Laravel", "MySQL", "Stripe", "Paypal"],
      image: ecommerce,
      github: "https://github.com/aymanecloclo/AY.SHOP",
      live: "https://github.com/aymanecloclo/AY.SHOP",
      features: [
        "Système de paiement sécurisé",
        "Interface administrateur complète",
        "Recherche et filtres avancés",
        "Notifications en temps réel",
      ],
    },

    {
      id: 3,
      title: "Site Web Paris Sud Appart Hotel",
      description:
        "Site vitrine et réservation pour un hôtel/appartement avec système de gestion des réservations.",
      tags: ["WordPress", "Elementor", "PHP", "MySQL", "Booking System"],
      image: hotel,
      github: null,
      live: "https://parissudapparthotel.fr",
      features: [
        "Interface de réservation en ligne",
        "Galerie photos interactive",
        "Système de gestion des disponibilités",
        "Optimisation SEO",
      ],
    },
    {
      id: 4,
      title: "Application de Gestion Scolaire",
      description:
        "Système complet de gestion d'une grande école avec suivi des étudiants, emplois du temps et notes.",
      tags: ["CodeIgniter", "PHP", "JavaScript", "MySQL", "Bootstrap"],
      image: genisus,
      github: "#",
      live: "https://gsdev.genisysplatforms.com/authentication",
      features: [
        "Gestion des inscriptions",
        "Espace enseignant et étudiant",
        "Génération automatique des emplois du temps",
        "Tableaux de bord analytiques",
        "Export des données en PDF/Excel",
      ],
    },
  ];



  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const techIcons = {
    React: <FaReact className="text-blue-500" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    TypeScript: <SiTypescript className="text-blue-600" />,
    GraphQL: <SiGraphql className="text-pink-500" />,
    MongoDB: <FaDatabase className="text-green-600" />,
    PostgreSQL: <FaDatabase className="text-blue-700" />,
    Stripe: <div className="w-5 h-5 bg-purple-500 rounded-full"></div>,
    AWS: <div className="w-5 h-5 bg-orange-500 rounded-full"></div>,
    Figma: <FaFigma className="text-purple-400" />,
    Tailwind: <SiTailwindcss className="text-cyan-400" />
  };

  return (
    <section id="projects" className="pb-16 px-4 sm:px-6 lg:px-8b ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes <span className="text-indigo-600 dark:text-indigo-400">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez une sélection de mes projets les plus aboutis et innovants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Liste des projets */}
          <div className="space-y-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(project)}
                className={`p-6 rounded-xl cursor-pointer transition-all ${selectedProject.id === project.id
                  ? "bg-indigo-50 dark:bg-gray-800 border-2 border-indigo-200 dark:border-indigo-900"
                  : "bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  }`}
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {techIcons[tag]}
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Détails du projet sélectionné */}
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="h-64 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                    >
                      <FiGithub /> Code source
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                    >
                      <FiExternalLink /> Voir en ligne
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Fonctionnalités clés
              </h4>
              <ul className="space-y-3 mb-6">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technologies utilisées
              </h4>
              <div className="flex flex-wrap gap-3">
                {selectedProject.tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="text-xl">{techIcons[tag]}</div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;