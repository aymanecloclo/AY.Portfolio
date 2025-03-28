import React, { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiMail,
  FiFileText,
  FiChevronDown,
} from "react-icons/fi";
import { SmartLink } from "./SmartLink";

import { 
  FaGlobeEurope, 
  FaGlobeAmericas,
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaServer,
  FaShapes,
  FaChartLine
} from "react-icons/fa";

import { SiWebcomponentsdotorg } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import languageData from "@/data/languageData";
import {
  MobileNavItem,
  NavLink,
  ServiceDropdown,
  ProjectDropdown,
} from "@/sous-components/NavHelper";
import { toggleLanguage } from "@/slicers/languageSlice";
import { toggleDarkMode } from "@/slicers/themeSlice";
import { Link } from "react-router-dom";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const language = useSelector((state) => state.language.currentLanguage);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentLanguage = languageData[language];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const handleToggleLanguage = () => {
    dispatch(toggleLanguage());
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getNavIcon = (title) => {
    const navIcons = {
      "Services": FaLaptopCode,
      "Projets": FaShapes,
      "Projects": FaShapes,
      "Contact": FiMail,
      "À propos": FaChartLine,
      "About": FaChartLine
    };
    
    return navIcons[title] || null;
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "dark:bg-gray-900/95 bg-white/95 backdrop-blur-md shadow-sm"
          : "dark:bg-gray-900/90 bg-white/90 backdrop-blur-sm"
      } border-b border-gray-200 dark:border-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200 flex items-center"
              >
                <span className="bg-indigo-600 text-white dark:bg-indigo-500 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                  AY
                </span>
                {currentLanguage.logo}
              </Link>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
       
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {currentLanguage.navItems.map((item) => {
                  const Icon = getNavIcon(item.title);
                  return (
                    <NavigationMenuItem key={item.title}>
                      {item.subItems.length > 0 ? (
                        <>
                          <NavigationMenuTrigger className="group bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-800 text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2">
                            {Icon && (
                              <Icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                            )}
                            {item.title}
                          </NavigationMenuTrigger>
                        
                          {item.title === "Services" ||
                          item.title === "Services" ? (
                            <ServiceDropdown
                              items={item.subItems}
                              language={language}
                            />
                          ) : (
                            <ProjectDropdown
                              items={item.subItems}
                              language={language}
                            />
                          )}
                        </>
                      ) : (
                        <NavLink href={item.href}>
                          {Icon && (
                            <Icon className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                          )}
                          {item.title}
                        </NavLink>
                      )}
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleDarkMode}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all"
              aria-label={darkMode ? "Light mode" : "Dark mode"}
            >
              {darkMode ? (
                <FiSun className="h-5 w-5" />
              ) : (
                <FiMoon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              onClick={handleToggleLanguage}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 rounded-lg px-3 transition-all"
              aria-label="Change language"
            >
              {language === "FR" ? (
                <>
                  <FaGlobeEurope className="h-4 w-4" />
                  <span className="font-medium text-sm">FR</span>
                </>
              ) : (
                <>
                  <FaGlobeAmericas className="h-4 w-4" />
                  <span className="font-medium text-sm">EN</span>
                </>
              )}
            </Button>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                className="min-w-[180px] rounded-full py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 dark:from-indigo-700 dark:to-indigo-600 dark:hover:from-indigo-600 dark:hover:to-indigo-500 text-white shadow-lg hover:shadow-indigo-500/20 transition-all"
              >
                <Link
                  to="/devis"
                  className="flex items-center justify-center gap-2 px-5"
                >
                  <FiMail className="h-4 w-4" />
                  <span className="font-medium text-sm truncate">
                    {currentLanguage.buttons.contact}
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleDarkMode}
              className="text-gray-700 dark:text-gray-300"
              aria-label={darkMode ? "Light mode" : "Dark mode"}
            >
              {darkMode ? (
                <FiSun className="h-5 w-5" />
              ) : (
                <FiMoon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleLanguage}
              className="text-gray-700 dark:text-gray-300"
              aria-label="Change language"
            >
              {language === "FR" ? (
                <FaGlobeEurope className="h-5 w-5" />
              ) : (
                <FaGlobeAmericas className="h-5 w-5" />
              )}
            </Button>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-700 dark:text-gray-300"
                  aria-label="Open menu"
                >
                  {isMobileMenuOpen ? (
                    <FiX className="h-6 w-6" />
                  ) : (
                    <FiMenu className="h-6 w-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="top"
                className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-screen"
              >
                <motion.div
                  className="flex flex-col h-full pt-4 pb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="flex-1 overflow-y-auto">
                    <div className="space-y-2">
                      {currentLanguage.navItems.map((item) => {
                        const Icon = getNavIcon(item.title);
                        return (
                          <MobileNavItem
                            key={item.title}
                            item={item}
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            onClose={closeMobileMenu}
                            icon={
                              Icon && (
                                <Icon className="h-5 w-5 mr-3 text-indigo-600 dark:text-indigo-400" />
                              )
                            }
                          />
                        );
                      })}
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-6 px-1">
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <Button
                          asChild
                          className="w-full"
                          variant="outline"
                          onClick={closeMobileMenu}
                        >
                          <a
                            href="#contact"
                            className="flex items-center justify-center gap-2 text-sm font-medium"
                          >
                            <FiMail className="h-4 w-4" />
                            Contact
                          </a>
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 dark:from-indigo-700 dark:to-indigo-600 dark:hover:from-indigo-600 dark:hover:to-indigo-500 text-white text-sm font-medium "
                          onClick={closeMobileMenu}
                        >
                          <Link
                            to="devis"
                            className="flex items-center justify-center gap-2"
                          >
                            <FiFileText className="h-4 w-4" />
                            {currentLanguage.buttons.devis}
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  <div className="flex justify-between px-1 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        handleToggleLanguage();
                        closeMobileMenu();
                      }}
                      className="text-gray-700 dark:text-gray-300 text-base font-medium flex items-center gap-3 px-4"
                    >
                      {language === "FR" ? (
                        <>
                          <FaGlobeEurope className="h-5 w-5" />
                          <span>Français</span>
                        </>
                      ) : (
                        <>
                          <FaGlobeAmericas className="h-5 w-5" />
                          <span>English</span>
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}