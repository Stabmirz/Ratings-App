import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Review from "./components/Review";
import Ratings from "./components/Ratings";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/review" component={Review} />
          <Route path="/ratings" component={Ratings} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
