import React, { Component } from "react";
import { MDBContainer, MDBRow } from 'mdbreact';

import Card from "../components/Card";
import axios from 'axios'


export default class Favorites extends Component {
    state = {
        movies: [],
        // favIDs: this.getStorage(),
        favIDs: [],
        message: "",
        indexFirstMovieOfCurrentBattle: 0,
    };


    onClick = () => {
        this.setState({
            movies: [],
        });
        return localStorage.clear();
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

                    for (let i = 0; i <= favorites.length; i++) {

                        favorites.push(parseInt(favorites))
                        favorites.shift()
                    }

                    console.log("favorites", favorites);

                    favorites.map((item) => {
                        return this.getMovie(item);
                    });

                    this.setState({
                        favIDs: favorites
                    });

                })
        }
    }
    render() {
        // console.log("localStorage.favorites", JSON.parse(localStorage.favorites));
        // console.log("favIDs", this.state.favIDs);
        // console.log("message", this.state.message);


        if (!localStorage.token) {
            return <h3 className="mt-5 font-weight-light text-center" >You must login to access the Favorites page !</h3>
        } else if (this.state.favIDs.length === 0) {
            return (
                <>
                    <h1 className="text-center mt-5 font-weight-light"><strong className="text-uppercase"> {localStorage.username}</strong>'s favorite movie</h1>
                    <h3 className="mt-5 font-weight-light text-center">
                        Try to Select Movie on page Papular Battle ...
                    </h3>
                </>
            )
        } else {
            return (
                <div>
                    <h1 className="text-center mt-5 font-weight-light"><strong className="text-uppercase"> {localStorage.username}</strong>'s favorite movie</h1>

                    <MDBContainer >
                        <MDBRow className="justify-content-center">
                            {this.state.movies.map((elem, index) => {
                                return (
                                    <Card
                                        key={index}
                                        poster_path={elem.poster_path}
                                        title={elem.title}
                                        release_date={elem.release_date}
                                        overview={elem.overview}
                                    />
                                );
                            })}
                        </MDBRow>
                    </MDBContainer>
                </div>
            );
        }
    }
}
