import React, { useEffect, useState } from 'react'
import {
  BrowserRouter, Route, Switch,
} from "react-router-dom";
import "./assets/styles.css"


import NavbarPage from './components/Navbar';
import Theaters from './views/Theaters';
import Favorites from './views/Favorites';
import ConnexionPage from './views/Connexion';
import Signup from './views/Signup';
import Login from './views/Login';
import PopularBattle from './views/PopularBattle';
import Footer from './components/Footer';
import ComingSoon from './views/ComingSoon';

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


  const logout = () => {
    localStorage.clear();
    setUserConnected(false)
  }

  // console.log("localStorage.favorites:", localStorage.favorites);
  return (
    <BrowserRouter>
      <NavbarPage logout={logout} userConnected={userConnected} />

      <Switch>
        <Route path="/" exact component={Theaters} />
        <Route path="/coming-soon" exact component={ComingSoon} />
        <Route path="/favorites" exact component={Favorites} />
        <Route path="/popularBattle" exact component={PopularBattle} fav={favorites} />
        <Route path="/connexion" exact component={ConnexionPage} />
        <Route path="/connexion/signup" exact component={Signup} />
        {/* <Route path="/connexion/login" exact component={Login} /> */}
        <Route path="/connexion/login">
          <Login connectUser={() => setUserConnected(true)} />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  )
}
