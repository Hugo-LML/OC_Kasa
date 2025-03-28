import { FC } from "react";
import { useLocation, Link } from "react-router-dom";

const Header: FC = () => {
  const location = useLocation();

  return (
    <header>
      <img src="/assets/images/kasa_logo.svg" alt="kasa logo" />
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>Accueil</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active-link" : ""}>À Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
