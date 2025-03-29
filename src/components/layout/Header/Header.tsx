import { FC } from "react";
import { useLocation, Link } from "react-router-dom";

const Header: FC = () => {
  const location = useLocation();

  return (
    <header>
      <Link to="/" className="logo">
        <img src="/assets/images/kasa_logo.svg" alt="kasa logo" />
      </Link>
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
