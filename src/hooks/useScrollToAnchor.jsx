// useScrollToAnchor.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export  const useScrollToAnchor = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          // Compense la hauteur de votre navbar (ex: 80px)
          const offset = 80;
          const top = element.offsetTop - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100); // Délai pour le chargement
    }
  }, [hash]);
};

