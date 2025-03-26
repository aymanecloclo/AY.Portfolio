import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 w-full mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenu principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1 : À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4">À propos</h3>
            <p className="text-gray-400">
              Développeur full-stack passionné par la création d'applications
              performantes et intuitives.
            </p>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-indigo-500 transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-indigo-500 transition-colors"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-indigo-500 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-indigo-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Réseaux sociaux */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connectez-vous</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/votreprofil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/votreprofil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/votreprofil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Votre Nom. Tous droits réservés.</p>
          <p className="mt-2 text-sm">
            Construit avec <span className="text-indigo-500">React</span>,{" "}
            <span className="text-indigo-500">Tailwind CSS</span> et ❤️.
          </p>
        </div>
      </div>
    </footer>
  );
}
