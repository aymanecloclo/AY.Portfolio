import React from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLink,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import CommunityLeadership from "./CommunityLeadership";
import CertificationsShowcase from "./CertificationsShowcase";
const ProfessionalExperience = () => {
  const experiences = [
    {
      id: 1,
      role: "Développeur Full Stack",
      company: "TechSolutions Inc.",
      period: "Janvier 2020 - Présent",
      location: "Paris, France (Remote)",
      description:
        "Conception et développement d'applications web et mobiles pour des clients internationaux.",
      achievements: [
        "Développement d'une plateforme SaaS avec React, Node.js et MongoDB",
        "Optimisation des performances réduisant le temps de chargement de 70%",
        "Mise en place de CI/CD avec GitHub Actions",
        "Encadrement d'une équipe de 3 développeurs juniors",
      ],
      technologies: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
      logo: "/company-logos/techsolutions.png",
      url: "https://techsolutions.com",
    },
    {
      id: 2,
      role: "Ingénieur Frontend",
      company: "DigitalWeb Agency",
      period: "Mars 2018 - Décembre 2019",
      location: "Lyon, France",
      description:
        "Développement d'interfaces utilisateur pour des grandes marques.",
      achievements: [
        "Refonte complète du site e-commerce d'un client (augmentation du CRO de 35%)",
        "Implémentation de tests automatisés avec Jest et Cypress",
        "Migration de JavaScript à TypeScript",
        "Formation des clients sur les nouvelles fonctionnalités",
      ],
      technologies: ["React", "Redux", "SCSS", "Jest", "Storybook"],
      logo: "/company-logos/digitalweb.png",
      url: "https://digitalweb-agency.fr",
    },
    {
      id: 3,
      role: "Développeur Web Junior",
      company: "StartUp Innovante",
      period: "Septembre 2016 - Février 2018",
      location: "Toulouse, France",
      description:
        "Participation au développement du produit principal de la startup.",
      achievements: [
        "Implémentation de nouvelles features utilisateur",
        "Collaboration étroite avec l'équipe design",
        "Participation aux sprints Agile",
        "Résolution de bugs critiques",
      ],
      technologies: ["JavaScript", "Vue.js", "PHP", "MySQL", "Bootstrap"],
      logo: "/company-logos/startup.png",
      url: "https://startup-innovante.fr",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mon Parcours Professionnel
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mes expériences et réalisations au fil des années
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-12 ${
                index !== experiences.length - 1
                  ? "pb-12 border-b border-gray-200 dark:border-gray-700"
                  : ""
              }`}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                      {exp.logo && (
                        <img
                          src={exp.logo}
                          alt={`Logo ${exp.company}`}
                          className="w-full h-full object-contain p-2"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {exp.company}
                      </h3>
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 group"
                      >
                        <FaLink className="text-xs" />
                        Visiter
                        <FaArrowRight className="ml-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <FaBriefcase className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                      <span>{exp.role}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <FaCalendarAlt className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="md:w-3/4">
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Missions et Réalisations
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <span className="inline-block w-2 h-2 mt-2 bg-indigo-600 dark:bg-indigo-400 rounded-full flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <h5 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                        TECHNOLOGIES UTILISÉES
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ y: -2 }}
                            className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <CommunityLeadership />
        </div>
        <CertificationsShowcase/>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
