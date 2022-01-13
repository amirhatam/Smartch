import React, { Component } from "react";
import axios from 'axios'

import BattleCard from "../components/Cards/BattleCard";
import SpinnerPage from "../components/SpinerPage";

class PopularBattle extends Component {
  state = {
    movies: [],
    indexFirstMovieOfCurrentBattle: 0,
  };

  componentDidMount(movieId) {
    const apiKey = "aa9f6ed99dc2087a9ba01eeb0cf2b20e"

    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
        });
      });

  }

  updateIndexMovieBattle = (movieId) => {
    const idsFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!idsFavorites.includes(movieId)) {
      idsFavorites.push(movieId);

      localStorage.setItem("favorites", JSON.stringify(idsFavorites));
    }

    if (localStorage.userId && localStorage.favorites) {

      axios.patch(`http://localhost:8000/users/${localStorage.userId}/favorites`, { favorites: JSON.parse(localStorage.getItem("favorites")) })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    } else {
      console.error();
    }

    this.setState({
      indexFirstMovieOfCurrentBattle:
        this.state.indexFirstMovieOfCurrentBattle + 2,
    });
  };

  renderTwoMovies() {
    const { indexFirstMovieOfCurrentBattle } = this.state;
    // console.log("localStorage.favorites", JSON.parse(localStorage.favorites));

    if (!this.state.movies) {
      return <SpinnerPage />
    } else {
      return (
        <>
          <div
            className="btn btn-outline-info offset-1 m-5 col-5"
            onClick={() =>
              this.updateIndexMovieBattle(
                this.state.movies[indexFirstMovieOfCurrentBattle].id
              )
            }
          >
            <BattleCard
              title={this.state.movies[indexFirstMovieOfCurrentBattle].title}
              poster_path={
                this.state.movies[indexFirstMovieOfCurrentBattle].poster_path
              }
              release_date={
                this.state.movies[indexFirstMovieOfCurrentBattle].release_date
              }
              overview={
                this.state.movies[indexFirstMovieOfCurrentBattle].overview
              }
            />
          </div>
          <div
            className="btn btn-outline-info m-5 col-5"
            onClick={() =>
              this.updateIndexMovieBattle(
                this.state.movies[indexFirstMovieOfCurrentBattle + 1].id
              )
            }
          >
            {/* <Favorites id={this.state.id} /> */}
            <BattleCard
              title={this.state.movies[indexFirstMovieOfCurrentBattle + 1].title}
              poster_path={
                this.state.movies[indexFirstMovieOfCurrentBattle + 1].poster_path
              }
              release_date={
                this.state.movies[indexFirstMovieOfCurrentBattle + 1].release_date
              }
              overview={
                this.state.movies[indexFirstMovieOfCurrentBattle + 1].overview
              }
            />
          </div>
        </>
      );
    }
  }

  render() {
    // console.log("localStorage", JSON.parse(localStorage.favorites));

    if (!localStorage.token) {
      return <h3 className="mt-5 font-weight-light text-center height400" >You must login to access the PopularBattle page !</h3>
    } else {
      return (
        <div className="container text-center">
          <h1 className="text-center mt-5 font-weight-light">Choose One</h1>
          <div className="row justify-content-center ">
            {this.state.indexFirstMovieOfCurrentBattle > 19 ? (
              "Vous avez parcouru tous les films "
            ) : (
              <div className="row ">
                {this.state.movies.length !== 0
                  ? this.renderTwoMovies()
                  : "Please wait until the movies are loaded"}
              </div>
            )}
          </div>
        </div>
      );
    }
  }
}

export default PopularBattle;
