import React, { useState, useEffect } from 'react'
import { MDBRow, MDBContainer, MDBView, MDBIcon, MDBBtn } from 'mdbreact';
import axios from 'axios'


import Card from '../components/Cards/Card';
import Slider from "react-slick";
import Carousel from '../components/Carousel';
import { moviesFav } from '../utils/UserFavorites';
import SpinnerPage from '../components/SpinerPage';
import ReactPaginate from 'react-paginate';



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
    const [searchMovies, setSearchMovies] = useState("")
    const [movieName, setMovieName] = useState("");
    const [aveVote] = useState("Average vote:");
    const [numVotes] = useState("Number of votes:");

    const [moviesSlider, setMoviesSlider] = useState("")
    const [setItems] = useState([]);
    const [totalPage, setTotalPage] = useState([])


    const apiKey = "e441f8a3a151d588a4932d2c5d310769";


    // https://api.themoviedb.org/3/movie/now_playing?api_key=e441f8a3a151d588a4932d2c5d310769&language=en-US&page=1
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`)
                if (response.status === 200) {
                    console.log(response.data.total_pages);
                    // setMovies(response.data.results.slice(0, 10))
                    setMoviesSlider(response.data.results)
                    setMovies(response.data.results)
                    setTotalPage(response.data.total_pages);
                }
            } catch (error) {
                console.log(error)
            }
        })();
    }, [])

    const pagination = async (currentPage) => {
        try {
            let moviesData = []

            const moviesDB = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${currentPage}`)
            if (moviesDB.status === 200) {
                moviesData = Object.values(moviesDB.data.results)  //convert data format (objet to array)
                // const finalList = moviesData.filter(e => e.poster_path !== null)  //filter the movies without images 
                // setMovies(response.data.results.slice(0, 10))   
                setMovies(moviesData)
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


    const searchMovie = async () => {
        try {
            const apiKey = "e441f8a3a151d588a4932d2c5d310769";
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`)
            if (response.status === 200) {
                // setMovies(response.data.results.slice(0, 10))
                setSearchMovies(response.data.results)
            }

            if (!response) {
                console.error("response err:", response);
            }

        } catch (err) {
            console.error(err);
        }
    }


    if (!movies) {
        return <SpinnerPage />
    } else {
        return (
            <MDBView >
                <MDBContainer className='my-5'>
                    <h1 className="my-5 font-weight-light text-center" ><MDBIcon icon="film" /> Movies In Theaters</h1>

                    <Slider {...settings}>
                        {moviesSlider.map((elem) => {
                            return <Carousel
                                key={elem.id}
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

                    <MDBRow className="justify-content-around">
                        {searchMovies
                            ?
                            searchMovies.map((elem) => {
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
                                            aveVote={aveVote}
                                            numVotes={numVotes}
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
