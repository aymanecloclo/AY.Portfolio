import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon, FiMail, FiFileText } from "react-icons/fi";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";

// Données de langue globales
const languageData = {
  FR: {
    logo: "AY.Portfolio",
    navItems: [
      { title: "À propos", href: "#about", subItems: [] },
      { 
        title: "Services", 
        href: "#services",
        subItems: [
          { title: "Web", href: "#web" },
          { title: "Mobile", href: "#mobile" },
          { title: "Design", href: "#design" }
        ]
      },
      { 
        title: "Projets", 
        href: "#projects",
        subItems: [
          { title: "Web", href: "#web" },
          { title: "Mobile", href: "#mobile" },
          { title: "Design", href: "#design" }
        ]
      },
      { title: "Expériences", href: "#experiences", subItems: [] },
      { title: "Blog", href: "#blog", subItems: [] },
      { title: "Contact", href: "#contact", subItems: [] }
    ],
    buttons: {
      contact: "DEMANDER UN DEVIS GRATUIT",
      devis: "Devis",
      language: "English"
    }
  },
  EN: {
    logo: "AY.Portfolio",
    navItems: [
      { title: "About", href: "#about", subItems: [] },
      { 
        title: "Services", 
        href: "#services",
        subItems: [
          { title: "Web", href: "#web" },
          { title: "Mobile", href: "#mobile" },
          { title: "Design", href: "#design" }
        ]
      },
      { 
        title: "Projects", 
        href: "#projects",
        subItems: [
          { title: "Web", href: "#web" },
          { title: "Mobile", href: "#mobile" },
          { title: "Design", href: "#design" }
        ]
      },
      { title: "Experiences", href: "#experiences", subItems: [] },
      { title: "Blog", href: "#blog", subItems: [] },
      { title: "Contact", href: "#contact", subItems: [] }
    ],
    buttons: {
      contact: "GET A FREE QUOTE",
      devis: "Quote",
      language: "Français"
    }
  }
};

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("FR");
  const currentLanguage = languageData[language];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === "FR" ? "EN" : "FR");
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <a href="#" className="text-xl font-bold text-[#5B5BD6] dark:text-indigo-400">
                {currentLanguage.logo}
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList className="gap-1 w-full">
                {currentLanguage.navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.subItems.length > 0 ? (
                      <>
                        <NavigationMenuTrigger 
                          className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent 
                          text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 
                          px-3 py-2 text-sm font-medium"
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                          <ul className="grid gap-1 p-2 w-[200px]">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.title}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={subItem.href}
                                    className="block px-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 
                                    hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
                                  >
                                    {subItem.title}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className="inline-flex px-3 py-2 rounded-md text-sm font-medium 
                          text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                        >
                          {item.title}
                        </a>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </Button>

            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {currentLanguage.buttons.language}
            </Button>

            <Button asChild className="rounded-full py-5 px-5 bg-[#5151CD] hover:bg-[#5B5BD6] max-w-8/12">
              <a href="#contact" className="flex items-center">
                <FiMail size={16} />
                {currentLanguage.buttons.contact}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-700 dark:text-gray-300"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700 dark:text-gray-300">
                  <FiMenu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full bg-white dark:bg-gray-800">
                <div className="flex flex-col gap-1 py-4">
                  {currentLanguage.navItems.map((item) => (
                    <div key={item.title}>
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 
                          hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 
                          text-sm font-medium"
                        >
                          {item.title}
                        </a>
                      </SheetClose>
                      
                      {item.subItems.length > 0 && (
                        <div className="pl-4">
                          {item.subItems.map((subItem) => (
                            <SheetClose asChild key={subItem.title}>
                              <a
                                href={subItem.href}
                                className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 
                                hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 
                                text-sm"
                              >
                                {subItem.title}
                              </a>
                            </SheetClose>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <div className="grid grid-cols-2 gap-2 pt-4">
                    <Button asChild className="w-full">
                      <a
                        href="#contact"
                        className="flex items-center justify-center gap-2 text-sm"
                      >
                        <FiMail size={16} />
                        Contact
                      </a>
                    </Button>
                    <Button 
                      asChild
                      className="w-full bg-indigo-800 hover:bg-indigo-900 text-white text-sm"
                    >
                      <a
                        href="#devis"
                        className="flex items-center justify-center gap-2"
                      >
                        <FiFileText size={16} />
                        {currentLanguage.buttons.devis}
                      </a>
                    </Button>
                  </div>
                  
                  <div className="flex justify-between px-3 py-4">
                    <Button
                      variant="ghost"
                      onClick={toggleLanguage}
                      className="text-gray-700 dark:text-gray-300 text-sm"
                    >
                      {currentLanguage.buttons.language}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}