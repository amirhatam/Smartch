import React, { useEffect, useState } from 'react'
import {
  BrowserRouter, Route, Switch,
} from "react-router-dom";
import "./assets/styles.css"


import NavbarPage from './components/Navbar';
import Home from './views/Home';
import ConnexionPage from './views/Connexion';
import Signup from './views/Signup';
import Login from './views/Login';


export default function App() {
  const [favorites, setFavorites] = useState([])

  const [userConnected, setUserConnected] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token") || false
    if (token) {
      setUserConnected(true)
    }
    setFavorites(JSON.parse(localStorage.getItem("favorites")))

  }, [])
  console.log("favorites", favorites);
  const logout = () => {
    localStorage.clear();
    setUserConnected(false)
  }
  return (
    <BrowserRouter>
      <NavbarPage logout={logout} userConnected={userConnected} />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/connexion" exact component={ConnexionPage} />
        <Route path="/connexion/signup" exact component={Signup} />
        {/* <Route path="/connexion/login" exact component={Login} /> */}
        <Route path="/connexion/login">
          <Login connectUser={() => setUserConnected(true)} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
