import './App.css';
import './style/modal.css';
import {Link, Route, Switch} from "react-router-dom";
import Projet from './projet.js';
import Linkedin from "./img/linkedin2.png";
import Github from "./img/githubpng.png";
import EPITECH from "./img/epitech.png";
import {
  LinkedinShareButton
} from "react-share";
import Modal from './modal.js';
import React, { Component } from "react";
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Cvhtml from "./cv.js";
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
    this.createNotification = this.createNotification.bind(this);
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
  };
  createNotification = (type) => {
    
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('E-mail envoy?? avec succes', 'Envoy?? !');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

  render() {
    return (
      <main>
    <div class="main_index">
      <div class="context">
        <h1>Guillaume LEVEQUE</h1>
        <p id="sub-title">Etudiant ?? la Web@cademie by EPITECH</p>
        <div class="button_linkedin">
            <LinkedinShareButton id="link_linkedin" url={"https://www.linkedin.com/in/guillaume-leveque-47b941208"}>
              <div><img src={Linkedin} width='30' height='30'></img></div>
            </LinkedinShareButton>
            <div id="link_github"><a href="https://github.com/guileveque"><img src={Github} width="30" height="30"></img></a></div>
        </div>
        <div class="button">
            <div class="button_cv">
              <div id="button_contact"><AnchorLink href="#cvmain">Voir cv</AnchorLink></div>
            </div>
            <div class="button_mail">
              <Modal show={this.state.show} handleClose={this.hideModal}>
                <div class="container_modal">
                  <div>
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
                  <form onSubmit={this.sendEmail}>
                    <div id="title_modal">Contactez moi par E-mail</div>
                    <input id="input_contact" type="text" name="name" placeholder="Votre nom..." required></input>
                    <input id="input_contact" type="email" name="email" placeholder="Votre email..." required></input>
                    <input id="input_contact" type="text" name="subject" placeholder="Sujet..." required></input>
                    <textarea id="input_contact_sujet" name="message" placeholder="Votre message..." rows="10" cols="30" required></textarea>
                    <input id="input_contact_submit" type="submit" value="Envoyer"  onClick={this.createNotification('success')}></input>
                  </form>
                </div>
              </Modal>
              <NotificationContainer/>
              <div type="button" id="button_contact" onClick={this.showModal}>
                Contact
              </div>
            </div>
            <div class="button_projet">
                <div id="button_contact"><Link to="/Projet">Projets</Link></div>
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
    <Cvhtml />
    <div class="footer">
      <div class="info_footer">
        <p>Guillaume LEVEQUE Portfolio 2021</p>
      </div>
      <div class="info2_footer">
        <p>Powered by REACT</p>
      </div>
    </div>
      </main>
    );
  }
}


export default Dashboard;