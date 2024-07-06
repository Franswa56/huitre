import React from "react";
import "./_Card.scss";
import oneCard from '../../style/assets/oneCard.jpg'
import twoCard from '../../style/assets/twoCard.jpg'
import threeCard from '../../style/assets/threeCard.jpg'
import fourCard from '../../style/assets/fourCard.jpg'
import menu from '../../style/assets/card.png'

const Card = () => {
    return (
        <div>
        <div className="banner">
            <div className="banner_container">
                <h1 className="banner_container-title">Dégustation d'huitres</h1>
                <p className="banner_container-text">AU BORD DE LA RIVIERE DE PENERF</p>
            </div>
        </div>
        <div className="card_container">
            <div className="card_container-img">
            <img src={oneCard} className="images_pic" alt="deco"></img>
            <img src={twoCard} className="images_pic" alt="deco2"></img>
            </div>
        <div className="card">
            <img className="card_img" src={menu} alt="menu"></img>
        </div>
        <div className="card_container-img">
            <img src={fourCard} className="images_pic" alt="deco3"></img>
            <img src={threeCard} className="images_pic" alt="deco4"></img>
        </div>
        </div>
        </div>
    )}

    export default Card