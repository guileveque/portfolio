import './App.css';
import './style/modal.css';
import {Link, Route, Switch} from "react-router-dom";
import Projet from './projet.js';
import Linkedin from "./img/linkedin.png";
import EPITECH from "./img/epitech.png";
import {
  LinkedinShareButton
} from "react-share";
import { Document, Page } from 'react-pdf';
import Pdf from "./img/mail-pro.pdf";
import Modal from './modal.js';
import React, { Component } from "react";
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
import Bgimage from "./img/bg-image.jpg";
import CV from "./img/cv.png";
init("user_tkxypSsomPEpESZcwelDY");

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      show2: false
    };
    this.showModal = this.showModal.bind(this);
    this.showModal2 = this.showModal2.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.hideModal2 = this.hideModal2.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };
  showModal2 = () => {
    this.setState({show2 : true});
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  hideModal2 = () => {
    this.setState({show2 : false});
  };
  sendEmail =(e) => {
    e.preventDefault();

    emailjs.sendForm('service_opq364p', 'template_eb9f3pp', e.target, 'user_tkxypSsomPEpESZcwelDY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      let a = document.getElementById("input_contact_submit");
      //a.innerHTML("ee")
      this.setState({show: false});
      
  }
  render() {
    return (
      <main>
    <div class="main_index">
      <div class="context">
        <h1>Guillaume Leveque</h1>
        <p>Etudiant chez Web@cademie by EPITECH</p>
        <div class="button">
            <div class="button_linkedin">
            <LinkedinShareButton url={"https://www.linkedin.com/in/guillaume-leveque-47b941208"}>
              <div><img src={Linkedin} width='30' height='30'></img></div>
            </LinkedinShareButton>
            </div>
            <div class="button_cv">
              <div id="button_contact" onClick={this.showModal2}>View cv</div>
              <Modal show={this.state.show2} handleClose={this.hideModal2}><img id="cv_image" src={CV}></img></Modal>
            </div>
            <div class="button_mail">
              <Modal show={this.state.show} handleClose={this.hideModal}>
                <div class="container_modal">
                  <form onSubmit={this.sendEmail}>
                    <div id="title_modal">Contacter moi par E_mail</div>
                    <input id="input_contact" type="text" name="name" placeholder="name"></input>
                    <input id="input_contact" type="email" name="email" placeholder="email"></input>
                    <input id="input_contact" type="text" name="subject" placeholder="sujet"></input>
                    <textarea id="input_contact_sujet" name="message" placeholder="Votre message" rows="10" cols="30"></textarea>
                    <input id="input_contact_submit" type="submit" value="Envoyer"></input>
                  </form>
                </div>
              </Modal>
              <div type="button" id="button_contact" onClick={this.showModal}>
                Contact
              </div>
            </div>
            <div class="button_projet">
                <div id="button_contact"><Link to="/Projet">Projet</Link></div>
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
              <li><img id="epitech_image" src={EPITECH} height="149" width="149"></img></li>
          </ul>
        </div>
    </div>
      </main>
    );
  }
}


export default Dashboard;