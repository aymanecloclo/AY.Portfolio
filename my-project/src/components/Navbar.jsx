import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon, FiMail, FiFileText } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("FR");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "About", href: "#" },
    { name: "Skills", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#experiences" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Liens Centraux */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#"
                className="text-xl font-bold text-indigo-600 dark:text-indigo-400"
              >
                MonLogo
              </a>
            </div>

            {/* Liens Desktop (cachés sur mobile) */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Boutons Droite (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Langue */}
            <button
              onClick={() => setLanguage(language === "FR" ? "EN" : "FR")}
              className="text-gray-700 dark:text-gray-300 font-medium px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {language}
            </button>

            {/* Contact */}
   

            {/* Bouton "Demander un devis" (Nouveau) */}
            <a
              href="#devis"
              className="flex items-center gap-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <FiFileText size={16} />
              Demander un devis
            </a>
          </div>

          {/* Bouton Mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-gray-700 dark:text-gray-300"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 shadow-md`}
      >
        <div className="px-2 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
              onClick={() => setIsOpen(false)}
            >
              <FiMail size={16} />
              Contact
            </a>
            <a
              href="#devis"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-indigo-800 text-white hover:bg-indigo-900"
              onClick={() => setIsOpen(false)}
            >
              <FiFileText size={16} />
              Devis
            </a>
          </div>
          <div className="flex justify-between px-3 py-2">
            <button
              onClick={() => setLanguage(language === "FR" ? "EN" : "FR")}
              className="text-gray-700 dark:text-gray-300 font-medium"
            >
              {language === "FR" ? "Français" : "English"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
