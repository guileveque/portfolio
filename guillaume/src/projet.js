import "./style/projetStyle.css";
import DevCrush from "./img/DevCrush.png";
import Cssgenerator from "./img/Spriteflag.png";
import P4 from "./img/p4.png";
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
                            <div id="button_contact"><Link to="/">Acceuil</Link></div>
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
                                    <p>Utilisation de:<br></br> -PHP<br></br> -JQUERY/AJAX</p><br></br>
                                    <p>Architecture du code en MVC avec plusieurs contrainte comme<br></br> la creation d'un systeme de login pour les utilisateurs</p><br></br>
                                    <p>Possibilité de mettre a jour son compte utilisateur depuis le menu</p><br></br>
                                    <p>systemede match entre les utilisateurs avec<br></br> la possibilité de mettre plusieurs filtres</p>
                                </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <h3>Css generator</h3>
                                    <img id="flag" src={Cssgenerator} alt="css generator" height="470" width="600"></img>
                                </div>
                                <div class="flip-card-back">
                                    <h1>CSS Generator</h1>
                                    <p>Création d'un sprite png</p>
                                    <p>Sprite generator est un script qui va générer<br></br> une png a partir de plusieurs images</p><br></br>
                                    <p>Au lancement du script plusieurs options sont<br></br> possible de passer en argument, comme la<br></br> récursiviter des sous dossiers,<br></br> un padding entre les images, et le choix<br></br> des noms des fichiers généré.</p>
                                </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <h2>Puissance 4</h2>
                                    <img id="p4" src={P4} alt="Avatar" height="550" width="600" ></img>
                                </div>
                                <div class="flip-card-back">
                                    <h1>Puissance 4</h1>
                                    <p>Puissance 4 en jQuery</p>
                                    <p>Création d'un puissnace 4 dans un navigateur <br></br>avec plusieurs contraintre comme l'effet du jeton,<br></br> un tableau de score et la taille de la grille</p><br></br>
                                    <p>Le script est appelé par un plugin en jQuery.</p>
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
                                    <p>Framework basé sur le systeme de bootstrap.</p><br></br>
                                    <p> Un systemes de grid principal et plusieurs autres<br></br> implémentation comme des options sur le text, image, buton ect</p>
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