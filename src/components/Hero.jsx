import { useEffect, useRef } from "react";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { motion, useAnimation, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 z-40"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-10 dark:opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10 dark:opacity-20 animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-10 dark:opacity-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 rounded-full mb-6">
            Aymane Rachid -Développeur Full-Stack
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
        >
          Je transforme vos idées en <br />
          <TypeAnimation
            sequence={[
              "solutions digitales",
              2000,
              "applications web",
              2000,
              "expériences utilisateur",
              2000,
              "systèmes performants",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-indigo-600 dark:text-indigo-400"
            repeat={Infinity}
          />
        </motion.h1>

        <motion.p
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
        >
          Passionné par le développement web , je crée des applications
          modernes, performantes et évolutives qui répondent aux besoins de vos
          utilisateurs.
        </motion.p>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#contact"
            className="flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-semibold  rounded-xl  shadow-lg transition-all transform hover:scale-105"
          >
            Discutons de votre projet <FiArrowRight className="ml-2" />
          </a>
          <a
            href="/public/cv/Aymane_Rachid_cv.pdf"
            download
            className="flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            Télécharger mon CV <FiDownload className="ml-2" />
          </a>
        </motion.div>

        {/* Tech stack animated */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-6 opacity-90"
        >
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Tailwind",
            "GraphQL",
          ].map((tech) => (
            <div
              key={tech}
              className="px-4 py-2 bg-white dark:bg-gray-800 shadow-md rounded-full text-sm font-medium text-gray-800 dark:text-gray-200"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
