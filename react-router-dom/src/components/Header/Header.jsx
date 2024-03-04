import "./Header.css";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Speisekarte</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
        <NavLink to="/oeffnungszeiten">Öffungszeiten</NavLink>
        <NavLink to="/galerie">Galerie</NavLink>
      </nav>
    </header>
  );
};

export default Header;
