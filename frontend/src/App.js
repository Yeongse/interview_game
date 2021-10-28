import './App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from "./pages/Home";
import Game from "./pages/Game";
import Feedback from "./pages/Feedback";


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
