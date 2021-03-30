import "./style/projetStyle.css";
import DevCrush from "./img/DevCrush.png";
import CIEL from "./img/ciel.jpg";
import {Link, Route, Switch} from "react-router-dom";


function Projet(){
    return (
        <div>
            	<div class="section_title">
                    <div class="hero">
                        <h1 id="title_project">Projets</h1>
                        <h2 id="subtitle_project">Projets réalisé par guillaume pendant la formation web@cademie</h2>
                        <Link to="/"><div id="link_projet" >Retour au menu</div></Link>
                    </div>
                </div>
                <div class="container_main">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={DevCrush} alt="Avatar" height="600" width="600" ></img>
                                </div>
                                <div class="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Architect  Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={DevCrush} alt="Avatar" ></img>
                                </div>
                                <div class="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Architect  Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={DevCrush} alt="Avatar" ></img>
                                </div>
                                <div class="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Architect  Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={DevCrush} alt="Avatar" ></img>
                                </div>
                                <div class="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Architect  Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                        </div>
                    </div>
                </div>
        </div>

    );
}

export default Projet;