import './App.css';
import './style/modal.css';
import {Link, Route, Switch} from "react-router-dom";
import Projet from './projet.js';
import Linkedin from "./img/linkedin.png";
import {
  LinkedinShareButton
} from "react-share";
import { Document, Page } from 'react-pdf';
import Pdf from "./img/mail-pro.pdf";
import Modal from './modal.js';
import React, { Component } from "react";
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
init("user_tkxypSsomPEpESZcwelDY");

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  sendEmail =(e) => {
    e.preventDefault();
    alert("test");

    emailjs.sendForm('service_opq364p', 'template_eb9f3pp', e.target, 'user_tkxypSsomPEpESZcwelDY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
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
              <div><img src={Linkedin} width='50' height='100'></img></div>
            </LinkedinShareButton>
            </div>
            <div class="button_cv">
              <a href = {Pdf} target = "_blank">View cv</a>
            </div>
            <div class="button_mail">
              <Modal show={this.state.show} handleClose={this.hideModal}>
                <div class="container_modal">
                  <form onSubmit={this.sendEmail}>
                    <input id="input_contact" type="text" name="name" placeholder="name"></input>
                    <input id="input_contact" type="email" name="email" placeholder="email"></input>
                    <input id="input_contact" type="text" name="subject" placeholder="sujet"></input>
                    <textarea id="input_contact" name="message" placeholder="Votre message" rows="10" cols="30"></textarea>
                    <input id="input_contact_submit" type="submit" value="Envoyer"></input>
                  </form>
                </div>
              </Modal>
              <button type="button" id="button_contact" onClick={this.showModal}>
                Contact
              </button>
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
      </main>
    );
  }
}


export default Dashboard;