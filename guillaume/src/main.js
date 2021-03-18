import './App.css';
import {Link, Route, Switch} from "react-router-dom";

function Main() {
  return (
    <div class="main_index">
      <div class="context">
        <h1>Guillaume Leveque</h1>
        <p>Etudiant chez Web@cademie by EPITECH</p>
        <div class="button">
            <div class="button_contact">
                <nav id="toggle-infos">Conctact</nav>
                <div id="toggle-info-content">
                    <p>linkedin</p>
                    <p>twitter</p>
                    <p>mail</p>
                </div>
            </div>
            <div class="button_projet">
                <p><a href="#">Projet</a></p>
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
        <Switch>
            <Route path="/projet">
                <Projet />
            </Route>
        </Switch>
    </div>
  );
}

export default Main;