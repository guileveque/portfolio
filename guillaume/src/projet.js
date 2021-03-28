import "./style/projetStyle.css";
import DevCrush from "./img/DevCrush.png";
import CIEL from "./img/ciel.jpg";
import {Link, Route, Switch} from "react-router-dom";


function Projet(){
    return (
        <div>
            	<div class="section_title">
                    <div class="hero">
                        <h1>Projet</h1>
                        <h2>Projets réalisé par guillaume pendant la formation web@cademie</h2>
                        <Link to="/"><div id="link_projet" >Retour au menu</div></Link>
                    </div>
                </div>
                <div class="container_main">
                    <div id="projet1">
                        <div id="picture_project1">
                            <img src={DevCrush}>
                            </img>
                        </div>
                        <div id='comment_picture1'>
                            <p>Réalisation d'un site de rencontre</p><br></br>
                            <p>Structure MVC et requettes ajax</p>
                        </div>
                    </div>
                    <div id="projet1">
                        <div id="picture_project1">
                            <img src={DevCrush}>
                            </img>
                        </div>
                        <div id='comment_picture1'>
                            <p>Création d'un jeu puissance 4</p><br></br>
                            <p>Utilisation de jQuery</p>
                        </div>
                    </div>
                </div>
        </div>

    );
}

export default Projet;