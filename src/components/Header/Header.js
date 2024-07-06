import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './_Header.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentLocation = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    // Fermer le menu quand la route change
    useEffect(() => {
      setMenuOpen(false);
    }, [currentLocation]);

  return (
    <nav className="header">
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active">
            Accueil
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/produits" activeClassName="active">
            Produits
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/degustation" activeClassName="active">
            Dégustation
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;