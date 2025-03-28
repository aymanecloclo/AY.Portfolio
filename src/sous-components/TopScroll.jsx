import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronUp } from "react-icons/fi";

const TopScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-28  right-9 z-50 p-3 rounded-full shadow-xl
                    bg-gradient-to-br from-indigo-600 to-purple-600
                    hover:from-indigo-700 hover:to-purple-700
                    focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50
                    transition-all duration-300 group"
          aria-label="Retour en haut"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white"
          >
            <FiChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.div>

          {/* Effet de halo moderne */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                        border-2 border-indigo-300 animate-ping-slow pointer-events-none
                        transition-opacity duration-300"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default TopScroll;
