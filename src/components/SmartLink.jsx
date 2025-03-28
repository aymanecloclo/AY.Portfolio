import { Link, useLocation } from "react-router-dom";

export const SmartLink = ({ to, children, ...props }) => {
  const location = useLocation();

  // Si c'est une ancre (ex: #services)
  if (to.includes("#")) {
    const [path, hash] = to.split("#");

    // Même page ? On scroll
    if (path === "" || path === location.pathname) {
      const handleClick = (e) => {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Met à jour l'URL sans recharger
          window.history.pushState({}, "", `${location.pathname}#${hash}`);
        }
      };

      return (
        <a href={to} onClick={handleClick} {...props}>
          {children}
        </a>
      );
    }
  }

  // Sinon, comportement normal (navigation entre pages)
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};
