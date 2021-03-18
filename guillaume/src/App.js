import './App.css';
import Main from "./main.js";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="flex">
              <Main />
          </div>
      </Router>

  );
}

export default App;

