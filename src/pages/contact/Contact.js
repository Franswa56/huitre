import React from "react";
import "./_Contact.scss"; // Assure-toi de créer un fichier CSS correspondant pour les styles

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div className="contact">
        <div className="contact_container">
          <p className="form_title">Afin de mieux vous renseigner, merci de compléter le formulaire ci-dessous et de nous l'envoyer</p>
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
              En cochant cette case et en soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter dans le cadre de ma demande indiquée dans ce formulaire. Aucun autre traitement ne sera effectué avec mes informations.
            </label>
            <input className="form_input-submit" type="submit" value="Envoyer" />
          </form>
        </div>
        <div className="contact_container">
          <div class="contact_info">
            <h2>Contact Informations</h2>
            <p>Prom. Jean le Besque, 56750 Damgan</p>
              <a href="tel:+33297411163" class="contact_info-link">02 97 41 11 63</a>
              <a href="mailto:jardindeshuitres@gmail.com" class="contact_info-link">jardindeshuitres@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
