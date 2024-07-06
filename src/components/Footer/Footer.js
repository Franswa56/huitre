import React from "react";
import "./_Footer.scss";
import logo from '../../style/assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer__info">
          <div className="footer__info-contact">
            <p>
              <i className="fa-solid fa-location-dot footer__info-icone"></i>Prom. Jean le Besque, 56750 Damgan
            </p>
            <p>
            <i class="fa-solid fa-phone footer__info-icone"></i> 02 97 41 11 63
            </p>
            <p>
            <i class="fa-solid fa-envelope"></i> jardindeshuitres@gmail.com
            </p>
          </div>
          <div className="footer__info-hours">
            <p>
              <strong>Horaires d'ouverture :</strong>
            </p>
            <ul>
              <li>Mercredi : 09:00–18:00</li>
              <li>Jeudi : 09:00–18:00</li>
              <li>Vendredi : 09:00–17:00</li>
              <li>Samedi : 10:00–18:00</li>
              <li>Dimanche : 10:00–12:30</li>
              <li>Lundi : Fermé</li>
              <li>Mardi : 09:00–18:00</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
