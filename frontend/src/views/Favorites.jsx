import React, { Component } from "react";
import { MDBContainer, MDBRow } from 'mdbreact';

import FavoritesCard from "../components/Cards/FavoritesCard";
import axios from 'axios'
import SpinnerPage from "../components/SpinerPage";


export default class Favorites extends Component {
    state = {
        movies: [],
        // favIDs: this.getStorage(),
        favIDs: [],
        indexFirstMovieOfCurrentBattle: 0,
    };

    updateIndexMovieBattle = (movieId) => {
        // console.log("updateIndexMovieBattle", movieId);

        const idsFavorites = JSON.parse(localStorage.getItem("favorites")) || [];


        if (idsFavorites.includes(movieId)) {
            idsFavorites.pop(movieId);

            localStorage.setItem("favorites", JSON.stringify(idsFavorites));
        }

    };

    getMovie(id) {
        const apiKey = "e441f8a3a151d588a4932d2c5d310769";

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log("Favorites fetch", data)
                this.setState({
                    movies: [...this.state.movies, data],
                });
            });
    }

    componentDidMount() {

        if (localStorage.userId) {
            axios.get(`http://localhost:8000/users/${localStorage.userId}`)
                .then(res => {

                    const favorites = res.data.user.favorites

                    // console.log("favorites", favorites);
                    for (let i = 0; i <= favorites.length; i++) {

                        favorites.push(parseInt(favorites))
                        favorites.shift()
                    }


                    favorites.map((item) => {
                        return this.getMovie(item);
                    });

                    this.setState({
                        favIDs: favorites
                    });

                })
        } else {
            console.error();
        }


    }
    render() {
        // console.log("localStorage.favorites", localStorage.favorites);
        // console.log("favIDs", this.state.favIDs);
        // console.log("message", this.state.message);


        if (!localStorage.token) {
            return <h3 className="mt-5 font-weight-light text-center height400" >You must login to access the Favorites page !</h3>
        } else if (this.state.favIDs.length === 0) {
            return (
                <>
                    <h1 className="text-center mt-5 font-weight-light" >
                        <strong className="text-uppercase"> {localStorage.username}</strong>
                        's favorite movie
                    </h1>

                    <h3 className="mt-5 font-weight-light text-center height300" >
                        Try to Select Movie on page Papular Battle ...
                    </h3>
                </>
            )
        } else if (!this.state.movies) {
            <SpinnerPage />
        }
        else {
            return (
                <div>
                    <h1 className="text-center mt-5 font-weight-light height300" ><strong className="text-uppercase"> {localStorage.username}</strong>'s favorite movie</h1>
                    <MDBContainer >
                        <MDBRow className="justify-content-center mb-5">
                            {this.state.movies.map((elem) => {
                                return (
                                    <>
                                        <FavoritesCard
                                            key={elem.id}
                                            poster_path={elem.poster_path}
                                            title={elem.title}
                                            release_date={elem.release_date}
                                            overview={elem.overview}
                                            movieId={elem.id}
                                            movies={this.state.movies}

                                        />
                                    </>

                                );
                            })}
                        </MDBRow>
                    </MDBContainer>
                </div>
            );
        }
    }
}
