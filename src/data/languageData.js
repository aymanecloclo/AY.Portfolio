const languageData = {
  FR: {
    logo: "AY.Portfolio",
    navItems: [
      { title: "À propos", href: "#about", subItems: [] },
      {
        title: "Services",
        href: "#services",
        subItems: [
          { title: "Développement Web", href: "#web" },
          { title: "Applications Mobile", href: "#mobile" },
          { title: "Design UI/UX", href: "#design" },
        ],
      },
      {
        title: "Projets",
        href: "#projects",
        subItems: [
          { title: "Sites Web", href: "#web-projects" },
          { title: "Applications", href: "#app-projects" },
          { title: "Designs", href: "#design-projects" },
        ],
      },
      { title: "Expériences", href: "/experience", subItems: [] },
      { title: "Blog", href: "/blog", subItems: [] },
      { title: "Contact", href: "#contact", subItems: [] },
    ],
    buttons: {
      contact: "DEVIS GRATUIT",
      devis: "Devis",
      language: "EN",
    },
  },
  EN: {
    logo: "AY.Portfolio",
    navItems: [
      { title: "About", href: "#about", subItems: [] },
      {
        title: "Services",
        href: "#services",
        subItems: [
          { title: "Web Development", href: "#web" },
          { title: "Mobile Apps", href: "#mobile" },
          { title: "UI/UX Design", href: "#design" },
        ],
      },
      {
        title: "Projects",
        href: "#projects",
        subItems: [
          { title: "Websites", href: "#web-projects" },
          { title: "Applications", href: "#app-projects" },
          { title: "Designs", href: "#design-projects" },
        ],
      },
      { title: "Experiences", href: "#experiences", subItems: [] },
      { title: "Blog", href: "#blog", subItems: [] },
      { title: "Contact", href: "#contact", subItems: [] },
    ],
    buttons: {
      contact: "FREE QUOTE",
      devis: "Quote",
      language: "FR",
    },
  },
};
export default languageData;