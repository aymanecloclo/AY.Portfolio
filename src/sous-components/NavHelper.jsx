import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { FiChevronDown } from "react-icons/fi";
import {
  FaGlobeEurope,
  FaGlobeAmericas,
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaServer,
  FaShapes,
  FaChartLine,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { SiWebcomponentsdotorg } from "react-icons/si";
import { SmartLink } from "@/components/SmartLink";
import { useScrollToAnchor } from "@/hooks/useScrollToAnchor";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavLink as RouterNavLink } from "react-router-dom";



export const NavLink = ({ href, children, mobile = false }) => {
  const baseClasses =
    "block rounded-lg text-sm font-medium transition-colors duration-200";
  const desktopClasses =
    "text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2";
  const mobileClasses =
    "text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 text-base px-4 py-3 w-full";

  return (
    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
      <SmartLink
        to={href}
        className={({ isActive }) =>
          `${baseClasses} ${mobile ? mobileClasses : desktopClasses} ${
            isActive
              ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
              : ""
          }`
        }
      >
        {children}
      </SmartLink>
    </NavigationMenuLink>
  );
};
export const MobileNavItem = ({ item, onClose, isOpen, setIsOpen }) => {
  return (
    <div key={item.title} className="w-full">
      {item.subItems.length > 0 ? (
        <>
          <button onClick={() => setIsOpen(!isOpen)} className="...">
            {item.title}
            {/* ... Icône Chevron ... */}
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div {...animations}>
                {item.subItems.map((subItem) => (
                  <SheetClose asChild key={subItem.title}>
                    <SmartLink
                      to={subItem.href}
                      onClick={onClose}
                      className="..."
                    >
                      {subItem.title}
                    </SmartLink>
                  </SheetClose>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <SheetClose asChild>
          <SmartLink to={item.href} onClick={onClose} className="...">
            {item.title}
          </SmartLink>
        </SheetClose>
      )}
    </div>
  );
};
export const DropdownItem = ({
  icon: Icon,
  title,
  description,
  href,
  featured,
}) => {
  return (
    <motion.li
      className={`w-full ${featured ? "col-span-2" : ""}`}
      whileHover={{ y: -2 }}
    >
      <NavigationMenuLink asChild>
        <SmartLink
          to={href}
          className={`flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg ${
            featured
              ? "border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-900/10"
              : ""
          }`}
        >
          {/* ... Contenu existant ... */}
        </SmartLink>
      </NavigationMenuLink>
    </motion.li>
  );
};
export const ServiceDropdown = ({ items, language }) => {
  const getServiceIcon = (title) => {
    const serviceIcons = {
      "Développement Web": FaLaptopCode,
      "Web Development": FaLaptopCode,
      "Applications Mobiles": FaMobileAlt,
      "Mobile Apps": FaMobileAlt,
      "Solutions Cloud": FaCloud,
      "Cloud Solutions": FaCloud,
      "Bases de Données": FaDatabase,
      Databases: FaDatabase,
      "API & Backend": FaServer,
      "UI/UX Design": SiWebcomponentsdotorg,
      "Data Analytics": FaChartLine,
      Intégration: FaShapes,
    };

    return serviceIcons[title] || FaLaptopCode;
  };

  return (
    <NavigationMenuContent className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl rounded-xl overflow-hidden ">
      <div className="p-4 w-[500px]">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <FaLaptopCode className="text-indigo-600 dark:text-indigo-400" />
          {language === "FR"
            ? "Nos Services Professionnels"
            : "Our Professional Services"}
        </h3>

        <motion.ul
          className="grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {items.map((item, index) => {
            const Icon = getServiceIcon(item.title);
            return (
              <DropdownItem
                key={item.title}
                icon={Icon}
                title={item.title}
                description={item.description}
                href={item.href}
                featured={index === 0}
              />
            );
          })}
        </motion.ul>

        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
          <Button variant="outline" className="w-full">
            {language === "FR" ? "Voir tous les services" : "View all services"}
          </Button>
        </div>
      </div>
    </NavigationMenuContent>
  );
};

export const ProjectDropdown = ({ items, language }) => {
  const getProjectIcon = (type) => {
    const projectIcons = {
      web: FaLaptopCode,
      mobile: FaMobileAlt,
      cloud: FaCloud,
      design: SiWebcomponentsdotorg,
      default: FaShapes,
    };

    return projectIcons[type] || projectIcons.default;
  };

  return (
    <NavigationMenuContent className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl rounded-xl overflow-hidden w-[600px]">
      <div className="p-4 w-[500px]">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <FaShapes className="text-indigo-600 dark:text-indigo-400" />
          {language === "FR" ? "Nos Réalisations" : "Our Projects"}
        </h3>

        <div className="grid grid-cols-3 gap-4 mb-4">
          {items.slice(0, 3).map((item) => {
            const Icon = getProjectIcon(item.type);
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -5 }}
                className="group"
              >
                <a href={item.href} className="block">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg aspect-video overflow-hidden mb-2 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.category}
                  </p>
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {items.slice(3).map((item) => {
            const Icon = getProjectIcon(item.type);
            return (
              <DropdownItem
                key={item.title}
                icon={Icon}
                title={item.title}
                description={item.category}
                href={item.href}
              />
            );
          })}
        </div>
      </div>
    </NavigationMenuContent>
  );
};
