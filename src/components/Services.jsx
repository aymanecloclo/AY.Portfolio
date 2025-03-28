import { useState } from "react";
import {
  FiCode,
  FiShoppingCart,
  FiSearch,
  FiLayout,
  FiEdit,
  FiBarChart2,
} from "react-icons/fi";
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Développement de Sites Web",
    description:
      "Création de sites vitrines et institutionnels sur mesure, optimisés pour la performance et le référencement.",
    icon: <FiCode className="text-3xl text-indigo-600 dark:text-indigo-400" />,
    tags: ["HTML/CSS", "React", "Next.js", "Tailwind"],
  },
  {
    title: "E-Commerce",
    description:
      "Solutions e-commerce complètes avec paiements sécurisés et gestion de catalogue produit.",
    icon: (
      <FiShoppingCart className="text-3xl text-indigo-600 dark:text-indigo-400" />
    ),
    tags: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
  },
  {
    title: "SEO & Optimisation",
    description:
      "Amélioration de votre visibilité sur les moteurs de recherche avec des techniques white-hat.",
    icon: (
      <FiSearch className="text-3xl text-indigo-600 dark:text-indigo-400" />
    ),
    tags: ["Audit SEO", "Keywords", "Backlinks", "Analytics"],
  },
  {
    title: "UX/UI Design",
    description:
      "Designs intuitifs et esthétiques qui améliorent l'expérience utilisateur et les conversions.",
    icon: (
      <FiLayout className="text-3xl text-indigo-600 dark:text-indigo-400" />
    ),
    tags: ["Figma", "Prototypage", "Wireframes", "User Testing"],
  },
  {
    title: "Rédaction Web",
    description:
      "Contenu optimisé SEO, engageant et adapté à votre audience cible.",
    icon: <FiEdit className="text-3xl text-indigo-600 dark:text-indigo-400" />,
    tags: ["Articles", "Fiches produit", "Blogs", "Newsletters"],
  },
  {
    title: "Marketing Digital",
    description:
      "Stratégies digitales complètes pour augmenter votre présence en ligne et vos ventes.",
    icon: (
      <FiBarChart2 className="text-3xl text-indigo-600 dark:text-indigo-400" />
    ),
    tags: ["Réseaux sociaux", "Google Ads", "Emailing", "Analytics"],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("Tous");

  const categories = [
    "Tous",
    "Développement",
    "Marketing",
    "Design",
    "Rédaction",
  ];

  const filteredServices =
    activeTab === "Tous"
      ? servicesData
      : servicesData.filter((service) => {
          if (activeTab === "Développement")
            return (
              service.tags.includes("React") || service.tags.includes("Next.js") ||  service.tags.includes("WooCommerce"));
          
          if (activeTab === "Marketing")
            return (
              service.tags.includes("Analytics") ||
              service.tags.includes("Google Ads")
            );
          if (activeTab === "Design")
            return (
              service.tags.includes("Figma") ||
              service.tags.includes("Wireframes")
            );
          if (activeTab === "Rédaction")
            return (
              service.tags.includes("Articles") ||
              service.tags.includes("Blogs")
            );
          return true;
        });

  return (
    <section
      id="services"
      className="py-12 px-4 sm:px-6 lg:px-8 
        "
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Services Professionnels
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des solutions complètes pour votre présence digitale
          </p>
        </motion.div>

        {/* Filtres par catégorie */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === category
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grille de services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 dark:bg-gray-700 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Prêt à transformer votre présence digitale ?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-medium rounded-full shadow-lg transition-all duration-300"
          >
            Discutons de votre projet
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
