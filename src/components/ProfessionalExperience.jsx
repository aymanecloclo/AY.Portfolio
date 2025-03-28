import React from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLink,
  FaArrowRight,
  FaUsers,
  FaCamera,
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
    // ... autres expériences professionnelles
  ];

  const events = [
    {
      id: 1,
      name: "Conférence Web Summit 2022",
      date: "15-17 Novembre 2022",
      location: "Lisbonne, Portugal",
      description:
        "Plus grande conférence tech d'Europe avec des keynotes sur l'avenir du web.",
      role: "Participant",
      photos: ["/events/websummit1.jpg", "/events/websummit2.jpg"],
      url: "https://websummit.com",
    },
    {
      id: 2,
      name: "Meetup React Paris",
      date: "10 Mars 2023",
      location: "Paris, France",
      description:
        "Rencontre mensuelle de la communauté React avec ateliers pratiques.",
      role: "Speaker - 'State Management en 2023'",
      photos: ["/events/react-meetup1.jpg"],
      url: "https://meetup.com/react-paris",
    },
    {
      id: 3,
      name: "Hackathon pour le Climat",
      date: "5-7 Mai 2023",
      location: "Lyon, France",
      description:
        "48h de codage pour développer des solutions tech contre le changement climatique.",
      role: "Membre de l'équipe gagnante",
      photos: [
        "/events/hackathon1.jpg",
        "/events/hackathon2.jpg",
        "/events/hackathon3.jpg",
      ],
      url: "#",
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
            Mes expériences, réalisations et participation à des événements
          </p>
        </motion.div>

        {/* Expériences professionnelles */}
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
              {/* ... (votre code existant pour les expériences pro) ... */}
            </motion.div>
          ))}
          <CommunityLeadership />
        </div>

        {/* Section Événements */}
        <div className="max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
              <FaUsers className="text-indigo-600 dark:text-indigo-400" />
              Événements & Conférences
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ma participation active à la communauté tech
            </p>
          </motion.div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-48 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                        {event.photos[0] && (
                          <img
                            src={event.photos[0]}
                            alt={`${event.name} - Photo 1`}
                            className="w-full h-full object-cover"
                          />
                        )}
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                          <FaCamera />
                          <span>
                            {event.photos.length} photo
                            {event.photos.length > 1 ? "s" : ""}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {event.name}
                        </h3>
                        {event.url && (
                          <a
                            href={event.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                          >
                            <FaLink className="text-xs" />
                            Site web
                          </a>
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-indigo-600 dark:text-indigo-400" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {event.description}
                      </p>

                      <div className="bg-indigo-100/50 dark:bg-indigo-900/20 px-3 py-2 rounded-lg inline-block">
                        <span className="text-indigo-700 dark:text-indigo-300 font-medium">
                          {event.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Galerie de photos */}
                  {event.photos.length > 1 && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                        GALERIE PHOTOS
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {event.photos.slice(1).map((photo, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="relative h-32 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer"
                          >
                            <img
                              src={photo}
                              alt={`${event.name} - Photo ${i + 2}`}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <CertificationsShowcase />
      </div>
    </section>
  );
};

export default ProfessionalExperience;
