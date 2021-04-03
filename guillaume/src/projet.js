import "./style/projetStyle.css";
import DevCrush from "./img/DevCrush.png";
import CIEL from "./img/ciel.jpg";
import {Link, Route, Switch} from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';



function Projet(){
    return (
        <div>
            	<div class="section_title" id="fff">
                    <div class="hero">
                        <h1 id="title_project">Projets</h1>
                        
                        <h2 id="subtitle_project">Projets réalisé par guillaume pendant la formation web@cademie</h2>
                        <div id="link_projet">
                            <div id="button_contact"><Link to="/">Projets</Link></div>
                        </div>                   
                    </div>
                </div>
                <div class="container_main">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={DevCrush} alt="Avatar" height="600" width="600" ></img>
                                </div>
                                <div class="flip-card-back">
                                    <h1>DevCrush</h1>
                                    <p>Création d'un site de rencontre</p>
                                    <p>Utilisation de:<br></br> -PHP<br></br> -JQUERY/AJAX</p>
                                </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={DevCrush} alt="Avatar" ></img>
                                </div>
                                <div class="flip-card-back">
                                    <h1>CSS Generator</h1>
                                    <p>Création d'un sprite</p>
                                    <p>Sprite generator est un script qui va générer<br></br> une png a partir de plusieurs images</p>
                                </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={DevCrush} alt="Avatar" ></img>
                                </div>
                                <div class="flip-card-back">
                                    <h1>Puissance 4</h1>
                                    <p>Puissance 4 en jQuery</p>
                                    <p>Création d'un puissnace 4 dans un navigateur avec plusieurs contraintre comme l'effet du jeton, un tableau de score et la taille de la grille</p>
                                </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={DevCrush} alt="Avatar" ></img>
                                </div>
                                <div class="flip-card-back">
                                    <h1>Framework SASS</h1>
                                    <p>Création du Framework CSS</p>
                                    <p>Framework basé sur le systeme de bootstrap. Un systemes de grid principal et plusieurs autres implémentation comme des options sur le text, image, buton ect</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="back_top">
                    <AnchorLink href="#fff"><div class="back_top_button">Back top</div></AnchorLink>
                </div>
        </div>

    );
}

export default Projet;