import React from 'react';
import { NavLink } from 'react-router-dom';
import './_Header.scss';

const Header = () => {
  return (
    <nav className="header">
      <ul className="nav-list">
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