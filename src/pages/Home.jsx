import "../App.css";
import AboutPage from "./AboutPage";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProjectShowcase from "@/components/Project";
import ContactForm from "@/components/ContactForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScrollToAnchor } from "@/hooks/useScrollToAnchor";
/**
 * Composant principal de l'application
 * @returns {JSX.Element} L'application complète avec navigation, contenu principal et pied de page
 */
export default function Home() {
    useScrollToAnchor(); 
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }, [location]);

  return (
    <>
      <Hero />
      <AboutPage/>
      <Services />
      <ProjectShowcase />
      <TestimonialsSection />
      <ContactForm />
    </>
  );
}
