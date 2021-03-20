import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import Projet from './projet.js';
import Linkedin from "./img/linkedin.png";
import {
  LinkedinShareButton
} from "react-share";
import { Document, Page } from 'react-pdf';
import Pdf from "./img/mail-pro.pdf";

function Main() {
  return (
    <div class="main_index">
      <div class="context">
        <h1>Guillaume Leveque</h1>
        <p>Etudiant chez Web@cademie by EPITECH</p>
        <div class="button">
            <div class="button_linkedin">
            <LinkedinShareButton url={"https://www.linkedin.com/in/guillaume-leveque-47b941208"}>
              <div><img src={Linkedin} width='50' height='100'></img></div>
            </LinkedinShareButton>
            </div>
            <div class="button_cv">
              <a href = {Pdf} target = "_blank">View cv</a>
            </div>
            <div class="button_mail">
              <p>levequegui@gmail</p>
            </div>
            <div class="button_projet">
                <p><Link to="/Projet">Projet</Link></p>
            </div>
        </div>
      </div>
        <div class="area" >
          <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
        </div>
    </div>
  );
}

export default Main;