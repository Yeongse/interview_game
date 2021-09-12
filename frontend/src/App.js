import './App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from "./comp_home";
import Game from "./comp_game";
import Feedback from "./comp_feedback"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
