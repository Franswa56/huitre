import React from "react";
import "./_Contact.scss"; // Assure-toi de créer un fichier CSS correspondant pour les styles

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div className="contact">
        <div className="contact_container">
          <p className="form_title">Afin de mieux vous renseigner, merci de compléter le formulaire ci-dessous et de nous l'envoyer :</p>
          <form className="form" action="mailto:email@example.com" method="post" enctype="text/plain">
            <label className="form_input-title" htmlFor="nom">
              Nom <span className="mandatory">*</span> :
            </label>
            <input className="form_input" type="text" id="nom" name="nom" required />

            <label className="form_input-title" htmlFor="prenom">
              Prénom <span className="mandatory">*</span> :
            </label>
            <input className="form_input" type="text" id="prenom" name="prenom" required />

            <label className="form_input-title" htmlFor="email">
              Email <span className="mandatory">*</span> :
            </label>
            <input className="form_input" type="email" id="email" name="email" required />

            <label className="form_input-title" htmlFor="telephone">
              Téléphone :
            </label>
            <input className="form_input" type="tel" id="telephone" name="telephone" />

            <label className="form_input-title" htmlFor="message">
              Votre message <span className="mandatory">*</span> :
            </label>
            <textarea className="form_input" id="message" name="message" rows="5" required></textarea>

            <p>
              <span className="mandatory">*</span> Champ(s) obligatoire(s).
            </p>

            <label>
              <input type="checkbox" name="consentement" required />
              En cochant cette case, j'accepte que mes données personnelles soient utilisées pour me recontacter.
            </label>
            <label class="form_input-title" for="securite">
              Sécurité :
            </label>
            <p className="form_input-sec">(Veuillez saisir la lettre rouge)</p>
            <p className="form_input-sec">
              aucha<span class="red-letter">n</span>tier-baden.fr
            </p>
            <input className="form_input" type="text" id="securite" name="securite" required />
            <input className="form_input-submit" type="submit" value="Envoyer" />
          </form>
        </div>
        <div className="contact_container">
          <div class="contact_info">
            <h2>informations de contact</h2>
            <div className="contact_info-pair">
              <i className="fa-solid fa-location-dot contact_info-icone"></i>
              <p>Prom. Jean le Besque, 56750 Damgan</p>
            </div>
            <div className="contact_info-pair">
              <i class="fa-solid fa-phone contact_info-icone"></i>
              <a href="tel:+33297411163" class="contact_info-link">
                02 97 41 11 63
              </a>
            </div>
            <div className="contact_info-pair">
              <i class="fa-solid fa-envelope contact_info-icone"></i>
              <a href="mailto:jardindeshuitres@gmail.com" class="contact_info-link">
                jardindeshuitres@gmail.com
              </a>
            </div>
            <div className="contact_info-desc">
              <p>Contactez l'ostréiculteur traditionnel au bord de la rivière de Penerf près de Damgan pour la vente au détail d'huîtres, la dégustation d'huîtres.Nous pouvons également nous déplacer avec notre camion pour divers événements.</p>
            </div>
            <p>Vous pouvez aussi venir nous voir directement au chantier !</p>
            <div className="contact_info-map">
              <iframe title="map" className="contact_info-mapelement" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.766223803465!2d-2.6207176999999997!3d47.5139438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ffc1425379efd%3A0x18e38bc93d564c6b!2sJardins%20d&#39;huitres!5e0!3m2!1sfr!2sfr!4v1718894699664!5m2!1sfr!2sfr" width="350" height="350" allowfullscreen="" loading="lazy"></iframe>
              <div className="contact_info-map-hours">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
