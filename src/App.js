import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './home/Homepage';
import About from './about/About';
import Navbar from './common/Navbar';
import { Paper } from '@material-ui/core';


import "./styles.css";

function App() {
  return (
    <div>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body>
        <Router>
          <div>
            <Navbar/>
            <Switch>
              <Route path="/about">
                <div>
                  <h1>LEO XIA</h1>
                </div>
              </Route>
              <Route path="/">
                <Homepage />
              </Route>
            </Switch>
          </div>
        </Router>
        <Navbar/>
      </body>
    </div>
  );
}

export default App;
