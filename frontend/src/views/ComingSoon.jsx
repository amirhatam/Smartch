import React, { useState, useEffect } from 'react'
import { MDBRow, MDBContainer, MDBView, MDBIcon } from 'mdbreact';
import axios from 'axios'
import Slider from "react-slick";
import ReactPaginate from 'react-paginate';

import Card from '../components/Cards/Card';
import Carousel from '../components/Carousel';


const moment = require("moment");


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

function ComingSoon() {
    const [movies, setMovies] = useState("")
    const [moviesPage, setMoviesPage] = useState("")
    const [genres, setGenres] = useState("")
    const [totalPage, setTotalPage] = useState([])
    const [items, setItems] = useState([]);


    const apiKey = "e441f8a3a151d588a4932d2c5d310769";
    const today = moment().format("YYYY-MM-DD");
    const lastWeek = moment().add(30, "days").format("YYYY-MM-DD");



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


    const pagination = async (currentPage) => {
        try {
            let moviesData = []

            const moviesDB = await axios.get(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${today}&primary_release_date.lte=${lastWeek}&api_key=${apiKey}&page=${currentPage}`)
            if (moviesDB.status === 200) {
                moviesData = Object.values(moviesDB.data.results)  //convert data format (objet to array)
                // const finalList = moviesData.filter(e => e.poster_path !== null)  //filter the movies without images 
                // setMovies(response.data.results.slice(0, 10))   
                setMoviesPage(moviesData)
            }
        } catch (err) {
            console.error(err);
        }
    }


    const handlePageClick = async (data) => {
        // console.log("data", data.selected);

        let currentPage = data.selected + 1;

        const commentsFormServer = await pagination(currentPage)
        setItems(commentsFormServer);
    }

    //API MoviesDB: 
    // https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-01-05&primary_release_date.lte=2022-02-04&api_key=e441f8a3a151d588a4932d2c5d310769

    //API Genres:
    // https://api.themoviedb.org/3/genre/movie/list?api_key=e441f8a3a151d588a4932d2c5d310769&language=en-US

    useEffect(() => {
        (async () => {
            try {
                let moviesData = []
                // const genresDB = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
                // if (genresDB.status === 200) {
                //     const finalList = genresDB.data.genres

                //     setGenres(finalList)
                // }

                const moviesDB = await axios.get(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${today}&primary_release_date.lte=${lastWeek}&api_key=${apiKey}`)
                if (moviesDB.status === 200) {
                    // console.log(moviesDB.data.total_pages);
                    moviesData = Object.values(moviesDB.data.results)  //convert data format (objet to array)

                    const finalList = moviesData.filter(e => e.poster_path !== null)  //filter the movies without images 
                    // setMovies(response.data.results.slice(0, 10))   
                    setMovies(finalList)
                    setTotalPage(moviesDB.data.total_pages);
                }


            } catch (error) {
                console.log(error)
            }
        })();
    }, [])


    if (!movies) {
        return <h3 className="mt-5 font-weight-light text-center">Loading...</h3>
    } else {
        return (
            <MDBView >
                <MDBContainer className='my-5'>
                    <h1 className="my-5 font-weight-light text-center" ><MDBIcon icon="film" /> Coming Soon</h1>

                    <Slider {...settings}>
                        {movies.map((elem) => {
                            return <Carousel
                                key={elem.id}
                                poster_path={elem.poster_path}
                            />
                        })}
                        <div>
                        </div>
                        <div>
                        </div>
                    </Slider>
                    <div>
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            breakLabel={"..."}
                            pageCount={totalPage}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            //Styles
                            containerClassName={"pagination justify-content-center mt-5"}
                            pageClassName={"page-item"}
                            pageLinkClassName={"page-link"}
                            previousClassName={"page-item "}
                            previousLinkClassName={"page-link"}
                            nextClassName={"page-item "}
                            nextLinkClassName={"page-link"}
                            breakClassName={"page-item"}
                            breakLinkClassName={"page-link"}
                            activeClassName={"active"}
                        />
                    </div>

                    <MDBRow className="justify-content-around ">
                        {moviesPage
                            ?
                            moviesPage.map((elem) => {
                                return (
                                    <>
                                        <Card
                                            key={elem.id}
                                            poster_path={elem.poster_path}
                                            title={elem.title}
                                            overview={elem.overview}
                                            release_date={elem.release_date}
                                            movieId={elem.id}
                                            vote_average={elem.vote_average}
                                            vote_count={elem.vote_count}
                                            genre_ids={elem.genre_ids}

                                            genres={genres}
                                            moviesFav={moviesFav}
                                        //  {...elem} 
                                        />
                                    </>
                                )
                            })
                            :
                            movies.map((elem) => {
                                return (
                                    <>
                                        <Card
                                            key={elem.id}
                                            poster_path={elem.poster_path}
                                            title={elem.title}
                                            overview={elem.overview}
                                            release_date={elem.release_date}
                                            movieId={elem.id}
                                            vote_average={elem.vote_average}
                                            vote_count={elem.vote_count}
                                            genre_ids={elem.genre_ids}

                                            genres={genres}
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

export default ComingSoon
