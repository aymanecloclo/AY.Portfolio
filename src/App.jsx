import "./App.css";

import Hero from "./components/Hero";
import Services from "./components/Services";
import ProjectShowcase from "./components/Project";
import ContactForm from "./components/ContactForm";
import TestimonialsSection from "../src/components/TestimonialsSection";
import ProfessionalExperience from "./components/ProfessionalExperience";
import TopScroll from "./sous-components/TopScroll";
/**
 * Composant principal de l'application
 * @returns {JSX.Element} L'application complète avec navigation, contenu principal et pied de page
 */
import Home from "./pages/Home";
import Chatbot from "./components/Chatbot";
import { Import } from "lucide-react";

export default function App() {
  return (
    <>
   
      <section id="hero" className="relative   h-screen top-0  text-white pb-24 z-40">
        {/* Éléments décoratifs animés */}
        <Home />
        <div className="relative top-12 left-0 w-full h-full pointer-events-none z-40">
          <div className="shape circle-1"></div>
          <div className="shape circle-2"></div>
          <div className="shape circle-3"></div>
          <div className="shape square-1"></div>
        </div>

      </section>
    </>
  );
}
