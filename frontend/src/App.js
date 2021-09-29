import './App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from "./components/Home";
import Game from "./components/Game";
import Feedback from "./components/Feedback";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"   component={Home} />
        <Route path="/game"     component={Game} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
