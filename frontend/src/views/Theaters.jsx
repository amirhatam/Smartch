import React, { useState, useEffect } from 'react'
import { MDBRow, MDBContainer, MDBView, MDBIcon, MDBBtn } from 'mdbreact';
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from '../components/Cards/Card';
import Slider from "react-slick";
import Carousel from '../components/Carousel';





const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    cssEase: "linear",
};
export default function Home() {
    const [movies, setMovies] = useState("")
    const [movieName, setMovieName] = useState("");
    const [aveVote, setAveVote] = useState("Average vote:");
    const [numVotes, setNumVotes] = useState("Number of votes:");



    const moviesFav = async (e) => {
        if (localStorage.userId) {
            const idsFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

            console.log("idsFavorites", idsFavorites);
            console.log("movie id", e);
            if (!idsFavorites.includes(e)) {
                idsFavorites.push(e);

                localStorage.setItem("favorites", JSON.stringify(idsFavorites));
            }
        } else {

            return window.location.href = "http://localhost:3000/connexion/login"
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

    };



    useEffect(() => {
        (async () => {
            try {
                const apiKey = "e441f8a3a151d588a4932d2c5d310769";
                const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
                if (response.status === 200) {

                    // setMovies(response.data.results.slice(0, 10))
                    setMovies(response.data.results)
                }

            } catch (error) {
                console.log(error)
            }
        })();
    }, [])

    // console.log("localStorage", localStorage);

    //
    const searchMovie = async () => {
        try {
            const apiKey = "e441f8a3a151d588a4932d2c5d310769";
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`)
            if (response.status === 200) {

                setMovies(response.data.results.slice(0, 10))
            }

            if (!response) {
                console.error("response err:", response);
            }

        } catch (err) {
            console.error(err);
        }
    }



    if (!movies) {
        return <h3 className="mt-5 font-weight-light text-center">Loading...</h3>
    } else {
        return (
            <MDBView >
                <MDBContainer className='my-5'>
                    <h1 className="mt-5 font-weight-light text-center" ><MDBIcon icon="film" /> Movies In Theaters</h1>

                    <Slider {...settings}>
                        {movies.map((elem) => {
                            return <Carousel
                                poster_path={elem.poster_path}
                                vote_average={elem.vote_average}
                                vote_count={elem.vote_count}
                                aveVote={aveVote}
                                numVotes={numVotes}
                            />
                        })}
                        <div>
                        </div>
                        <div>
                        </div>
                    </Slider>

                    <MDBRow className="justify-content-center my-5">
                        <div>
                            <input type="text"
                                onChange={(event) => setMovieName(event.target.value)}
                                className="form-control " name="name" placeholder="Search Movie" />
                        </div>
                        <div>
                            <MDBBtn size="md" color="info" rounded className="m-0"
                                onClick={searchMovie}
                            >
                                <MDBIcon icon="search" />
                            </MDBBtn>
                        </div>
                    </MDBRow>

                    <MDBRow className="justify-content-around">
                        {movies.map((elem, index) => {
                            return (
                                <>
                                    <Card
                                        key={index}
                                        poster_path={elem.poster_path}
                                        title={elem.title}
                                        overview={elem.overview}
                                        release_date={elem.release_date}
                                        movieId={elem.id}
                                        vote_average={elem.vote_average}
                                        vote_count={elem.vote_count}
                                        aveVote={aveVote}
                                        numVotes={numVotes}
                                        moviesFav={moviesFav}
                                    //  {...elem} 
                                    />


                                </>
                            )
                        })
                        }

                    </MDBRow>
                </MDBContainer>
            </MDBView>
        )
    }



}
