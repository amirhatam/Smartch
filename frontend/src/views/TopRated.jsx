import React, { useState, useEffect } from 'react'
import { MDBRow, MDBContainer, MDBView, MDBIcon } from 'mdbreact';
import ReactPaginate from 'react-paginate';
import axios from 'axios'
import { moviesFav } from '../utils/UserFavorites';
import SpinnerPage from '../components/SpinerPage';
import Card from '../components/Cards/Card';


export default function TopRated() {
    const movieApi = "https://api.themoviedb.org/3";
    const topRatedApi = movieApi + "/movie/top_rated?api_key=";
    const apiKey = "e441f8a3a151d588a4932d2c5d310769";

    const [movies, setMovies] = useState("")
    const [totalPage, setTotalPage] = useState([])
    const [setItems] = useState([]);
    const [aveVote] = useState("Average vote:");
    const [numVotes] = useState("Number of votes:");

    // https://api.themoviedb.org/3/movie/278/videos?api_key=e441f8a3a151d588a4932d2c5d310769

    // https://api.themoviedb.org/3/movie/top_rated?api_key=e441f8a3a151d588a4932d2c5d310769&language=en-US
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`${topRatedApi}${apiKey}&language=en-US`)
                if (response.status === 200) {
                    // console.log(response.data.total_pages);
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

            const moviesDB = await axios.get(`${topRatedApi}${apiKey}&language=en-US&page=${currentPage}`)
            if (moviesDB.status === 200) {
                moviesData = Object.values(moviesDB.data.results)  //convert data format (objet to array)
                // const finalList = moviesData.filter(e => e.poster_path !== null)  //filter the movies without images 
                setMovies(moviesData)
            }
        } catch (err) {
            console.error(err);
        }
    }

    const handlePageClick = async (data) => {

        let currentPage = data.selected + 1;

        const commentsFormServer = await pagination(currentPage)
        setItems(commentsFormServer);
    }

    if (!movies) {
        return <SpinnerPage />
    } else {
        return (
            <MDBView >
                <MDBContainer className='my-5'>
                    <h1 className="my-5 font-weight-light text-center" ><MDBIcon icon="film" /> Top Rated Movies on The MovieDB</h1>

                    <div className='my-5 pt-3'>
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
                        {movies.map((elem) => {
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
                        })}

                    </MDBRow>
                </MDBContainer>
            </MDBView>
        )
    }
}
