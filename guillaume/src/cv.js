import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./style/cv.css";
import Profil from "./img/profil.jpg";
import GUILLAUME from "./img/GUILLAUMELEVEQUE.pdf";

function Cvhtml() {
    return (
        <div>
            <div class="main_cv" id="cvmain">
                <div class="wrapper">
                    <div class="header_cv">
                        <div class="header_cv_grid">
                            <div class="profil_picture">
                                <img src={Profil} height="280" width="220"></img>
                            </div>
                            <div class="profil_title">
                                <div>
                                    <p>Guillaume LEVEQUE</p><br></br>
                                    <p>Etudiant à la web@cademie by EPITECH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="navbar_cv">
                        <div class="navbar_cv_grid_skills">
                            <h2>SKILLS</h2><br></br>
                            <p>-PHP</p><br></br>
                            <p>-HTML/CSS</p><br></br>
                            <p>-SQL</p><br></br>
                            <p>-JAVASCRIPT</p><br></br>
                        </div>
                        <div class="navbar_cv_grid_personnel">
                            <h2>Profil Personnel</h2>
                            <p>Je suis motivé à ameliorer mes skills et mes connaissances.<br></br> J'aime réaliser des projets en équipe, tout en ayant la capacité d'être autonome.</p>
                        </div>
                    </div>
                    <div class="global_cv">
                        <div class="global_cv_diplomes">
                            <h2>Diplômes</h2>
                            <p>Baccalauréat Scientifique 2018</p><br></br>
                            <p>Web@cademie by EPITECH 2020 - en cours</p><br></br>
                            <h2>Contacts</h2>
                            <p>Téléphone : 06.16.68.36.57</p><br></br>
                            <p>E-mail : levequegui@gmail.com</p>
                        </div>
                        <div class="global_cv_pdf">
                            <div><a href={GUILLAUME}>CV PDF</a></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cvhtml