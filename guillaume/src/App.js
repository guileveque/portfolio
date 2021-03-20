import "./App.css";
import Main from "./main.js";
import Projet from "./projet.js";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function App() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/projet">
              <Projet />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

