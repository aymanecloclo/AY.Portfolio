import { motion } from "framer-motion";
import { FiDownload, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import aymane from '../assets/images/aymane.png'
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* En-tête avec photo moderne */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-12 items-center mb-20"
        >
          {/* Photo avec effet moderne */}
          <div className="relative group w-64 h-64 lg:w-80 lg:h-80">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <img
              src={aymane}
              alt="Ayman RACHID"
              className="relative w-full h-full object-cover rounded-2xl border-4 border-white dark:border-gray-800 shadow-xl"
            />
            {/* Effet hover */}
            <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
          </div>

          {/* Titre et présentation */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Ayman <span className="text-indigo-600">RACHID</span>
            </h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Développeur Fullstack & Consultant Tech
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Passionné par la création de solutions digitales innovantes, je
              combine expertise technique et vision produit pour livrer des
              applications performantes et centrées sur l'expérience
              utilisateur.
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/cv-ayman-rachid.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg transition-all"
              >
                <FiDownload className="w-5 h-5" />
                Télécharger mon CV
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-lg shadow transition-all"
              >
                <FiMail className="w-5 h-5" />
                Me contacter
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Section Expertise */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 relative inline-block">
            <span className="relative z-10">Mes Expertises</span>
            <span className="absolute bottom-1 left-0 w-full h-2 bg-indigo-200 dark:bg-indigo-900/50 z-0"></span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Développement Fullstack",
                skills: [
                  "JavaScript/TypeScript",
                  "React/Next.js",
                  "Node.js",
                  "PHP/Laravel",
                  "Bases de données",
                ],
                icon: "💻",
              },
              {
                title: "Architecture Logicielle",
                skills: [
                  "Microservices",
                  "API REST/GraphQL",
                  "Serverless",
                  "Design Patterns",
                  "Tests automatisés",
                ],
                icon: "🏗️",
              },
              {
                title: "UI/UX Performant",
                skills: [
                  "Framer Motion",
                  "Tailwind CSS",
                  "Responsive Design",
                  "Optimisation Core Web Vitals",
                  "Accessibilité",
                ],
                icon: "🎨",
              },
            ].map((expertise, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="text-3xl mb-4">{expertise.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {expertise.title}
                </h4>
                <ul className="space-y-2">
                  {expertise.skills.map((skill, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

    
      </div>
    </div>
  );
};

export default AboutPage;
