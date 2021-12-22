import React, { useEffect, useState } from 'react'
import {
  BrowserRouter, Route, Switch,
} from "react-router-dom";
import "./assets/styles.css"


import NavbarPage from './components/Navbar';
import Home from './views/Home';


export default function App() {

  return (
    <BrowserRouter>
      <NavbarPage />

      <Switch>
        <Route path="/" exact component={Home} />

      </Switch>
    </BrowserRouter>
  )
}
