import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="  bg-white dark:bg-gray-900 text-gray-800 dark:text-white w-full mt-auto border-t border-gray-200 dark:border-gray-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contenu principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Colonne 1 : À propos */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              À propos
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Développeur full-stack avec une expertise solide, spécialisé dans
              la création d’applications web modernes et performantes. Passionné
              par les technologies front-end et back-end.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/aymanecloclo"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
              >
                <FaGithub size={24} aria-label="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/aymane-rachid-106700317/"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
              >
                <FaLinkedin size={24} aria-label="LinkedIn" />
              </a>
              <a
                href="https://www.instagram.com/aymane.rd.dev/"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
              >
                <FaInstagram size={24} aria-label="Twitter" />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Navigation
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg flex items-center"
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/#projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg flex items-center"
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg flex items-center"
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg flex items-center"
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  RES DIAR BLOB B22
                  <br />
                  11100, RABAT
                </p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-indigo-600 dark:text-indigo-400 mr-3  text-lg" />

                <a
                  href="mailto:contact@example.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg"
                >
                  aymane.rachid.web@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-indigo-600 dark:text-indigo-400 mr-3" />
                <a
                  href="tel:+33123456789"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg"
                >
                  +33 6 18 94 1000
                </a>
              </div>
              <div className="flex items-center">
                <FaClock className="text-indigo-600 dark:text-indigo-400 mr-3" />
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Lun-Sam: 24/24h - 7j/7j
                </p>
              </div>
            </div>
          </div>

          {/* Colonne 4 : Carte */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Localisation
            </h3>
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.6035083136123!2d-6.832554184791538!3d34.02088242727405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9b8b3e4c0e00b3%3A0x6fb85f5db1eb2a02!2sRabat%2C%20Morocco!5e0!3m2!1sfr!2sfr!4v1711487740000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="dark:grayscale dark:opacity-90 transition-all"
                aria-label="Carte de localisation"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            © {currentYear} Aymane RACHID. Tous droits réservés.
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-lg">
            Construit avec{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              React
            </span>
            ,{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              Tailwind CSS
            </span>{" "}
            et{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              Shadcn
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
