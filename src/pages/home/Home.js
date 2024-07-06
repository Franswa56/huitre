import React from "react";
import "./_Home.scss";
import logo from "../../style/assets/logo.png";
import degu from "../../style/assets/degu.png";
import buypic from "../../style/assets/buy.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {


  return (
    <div className="background">
      <div className="home">
        <section className="home_title">
          <img src={logo} className="home_title-img" alt="logo"></img>
          <div className="home_title-text">
            <h1>Bienvenue à notre chantier ostréicole de la rivière de Penerf !</h1>
            <p> Situé au cœur de la magnifique Bretagne, notre chantier d'ostréiculture vous offre une expérience unique. Venez découvrir notre savoir-faire et déguster nos huîtres directement sur place, avec une vue imprenable sur la rivière.</p>
            <NavLink exact to="/Produits" className="home_title-button">
              En savoir plus
              <i class="fa-solid fa-arrow-right home_title-icon"></i>
            </NavLink>
          </div>
        </section>
      </div>
      <section className="home_buy">
        <div className="home_buy-container">
          <NavLink exact to="/Produits" className="home_buy-button">
            Vente d'huitres a Penerf
            <i class="fa-solid fa-arrow-right home_buy-icon"></i>
          </NavLink>
          <h1 className="home_buy-title">Vente d'huîtres fraîches toute l'année</h1>
          <h2 className="home_buy-text">Toute l'année, nous mettons à votre disposition nos huîtres fraîches. Venez découvrir le goût authentique de nos produits, directement issus de la rivière de Penerf.

Alors, n'attendez plus et venez nous rendre visite pour une expérience inoubliable !</h2>
        </div>
        <img src={buypic} className="home_buy-img" alt="chantier"></img>
      </section>
      <section className="home_taste">
        <div className="home_taste-container">
          <NavLink exact to="/Degustation" className="home_taste-button">
            Voir la carte
            <i class="fa-solid fa-arrow-right home_taste-icon"></i>
          </NavLink>
          <h1 className="home_taste-title">Dégustation d'huitres sur place </h1>
          <h2 className="home_taste-text">Vous souhaitez déguster des huîtres dans un décor de carte postale ? Vous êtes au bon endroit ! Durant la saison estivale, vous pouvez profiter de notre terrasse avec vue sur la rivière de Pénerf !</h2>
        </div>
        <img src={degu} className="home_taste-img" alt="chantier"></img>
      </section>
      <section className="home_contact">
        <div className="home_contact-container">
          <NavLink exact to="/Produits" className="home_buy-button">
            Contact et Localisation
            <i class="fa-solid fa-arrow-right home_contact-icon"></i>
          </NavLink>
          <h1 className="home_contact-title">Comment nous trouver ?</h1>
          <h2 className="home_contact-text">Pour nous rendre visite et déguster nos huîtres fraîches directement à la source, suivez simplement notre carte. Nous sommes situés au cœur de la Bretagne, à proximité de la magnifique rivière de Penerf. Utilisez la carte ci-dessous pour obtenir des directions précises et nous rejoindre facilement. Nous avons hâte de vous accueillir</h2>
        </div>
        <div className="home_contact-map">
        <iframe title="map" className="home_contact-mapelement" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.766223803465!2d-2.6207176999999997!3d47.5139438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ffc1425379efd%3A0x18e38bc93d564c6b!2sJardins%20d&#39;huitres!5e0!3m2!1sfr!2sfr!4v1718894699664!5m2!1sfr!2sfr" 
        width="350" 
        height="350" 
        allowfullscreen="" 
        loading="lazy">
        </iframe>
        </div>
      </section>
    </div>
  );
};

export default Home;
