import React from "react";
import {
  FaUsers,
  FaChartLine,
  FaMedal,
  FaLightbulb,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const CommunityLeadership = () => {
  // Données pour les graphiques
  const communityStats = {
    members: 1250,
    activeMembers: 850,
    projects: 42,
    events: 28,
    satisfaction: 97,
    growthRate: 78,
  };

  const communityData = {
    labels: ["Membres Totaux", "Membres Actifs", "Projets", "Événements"],
    datasets: [
      {
        data: [
          communityStats.members,
          communityStats.activeMembers,
          communityStats.projects,
          communityStats.events,
        ],
        backgroundColor: [
          "rgba(99, 102, 241, 0.8)",
          "rgba(167, 139, 250, 0.8)",
          "rgba(236, 72, 153, 0.8)",
          "rgba(16, 185, 129, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const growthData = {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Croissance de la communauté",
        data: [150, 400, 750, 950, communityStats.members],
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const achievements = [
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Animation Communautaire",
      description: "Gestion quotidienne et animation des 1250 membres KONIX",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Croissance Exceptionnelle",
      description: "+78% de croissance en 6 mois grâce à nos stratégies",
    },
    {
      icon: <FaMedal className="text-3xl" />,
      title: "Reconnaissance",
      description: "Élu meilleur leader communautaire tech 2022-2023",
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Innovation",
      description: "Lancement du programme de mentorat KONIX",
    },
  ];

  const events = [
    { name: "KONIX Hackathon", date: "15-17 Mars 2023", participants: 120 },
    {
      name: "Tech Talks Mensuels",
      date: "Tous les 1ers Jeudis",
      participants: "60-80",
    },
    { name: "Ateliers Coding", date: "2 Samedis/mois", participants: 40 },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Leadership Communautaire{" "}
            <span className="text-indigo-600">KONIX</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mon engagement pour développer la communauté tech la plus dynamique
          </p>
        </motion.div>

        {/* Statistiques Principales */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <StatCard
            value={communityStats.members}
            label="Membres"
            icon={<FaUsers />}
            isPrimary
          />
          <StatCard
            value={`${communityStats.growthRate}%`}
            label="Croissance"
            icon={<FaChartLine />}
          />
          <StatCard
            value={`${communityStats.satisfaction}%`}
            label="Satisfaction"
            icon={<FaMedal />}
          />
        </div>

        {/* Graphiques */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Répartition Communauté
            </h3>
            <div className="h-64">
              <Pie
                data={communityData}
                options={{
                  plugins: {
                    legend: { position: "bottom" },
                  },
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Évolution
            </h3>
            <div className="h-64">
              <Bar
                data={growthData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: { beginAtZero: true },
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* Réalisations */}
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Mes Contributions Clés
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Événements */}
        <div className="bg-indigo-50 dark:bg-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Événements Organisés
          </h3>
          <div className="space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg"
              >
                <div className="bg-indigo-100 dark:bg-indigo-900/20 p-3 rounded-full">
                  <FaCalendarAlt className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {event.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {event.date} • {event.participants} participants
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant Carte de Statistique
const StatCard = ({ value, label, icon, isPrimary = false }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`p-6 rounded-xl shadow-md ${
      isPrimary ? "bg-indigo-600 text-white" : "bg-white dark:bg-gray-800"
    }`}
  >
    <div
      className={`text-2xl mb-2 ${
        isPrimary ? "text-white" : "text-indigo-600 dark:text-indigo-400"
      }`}
    >
      {icon}
    </div>
    <p
      className={`text-3xl font-bold mb-1 ${
        isPrimary ? "text-white" : "text-gray-900 dark:text-white"
      }`}
    >
      {value}
    </p>
    <p
      className={`text-sm ${
        isPrimary ? "text-indigo-100" : "text-gray-500 dark:text-gray-400"
      }`}
    >
      {label}
    </p>
  </motion.div>
);

export default CommunityLeadership;
