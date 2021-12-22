import { MDBRow, MDBContainer, MDBView } from 'mdbreact';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card';

export default function Home() {
    const [movies, setMovies] = useState("")
    // const [favorites, setFavorites] = useState([])

    const userFavorites = async (e) => {
        const favorites = [e.target.title]
        // favorites.push(e.target.title)

        // localStorage.setItem("favorites", JSON.stringify(favorites))

        // const idsFavorites = JSON.parse(localStorage.getItem("favorites")) || [];


        if (!favorites.includes(e.target.title)) {
            favorites.push(e.target.title);

            //  localStorage.setItem("favorites", JSON.stringify(favorites));
        }
        console.log("favorites", favorites);

        // console.log("localStorage", localStorage);

        // localStorage.setItem("favorites", JSON.stringify(favorites))



        // setFavorites(some)

    }
    // console.log("localStorage", localStorage);




    useEffect(() => {
        (async () => {
            try {
                const apiKey = "aa9f6ed99dc2087a9ba01eeb0cf2b20e"
                const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
                if (response.status === 200) {

                    setMovies(response.data.results.slice(0, 10))
                }

            } catch (error) {
                console.log(error)
            }
        })();
    }, [])

    // console.log(movies);
    // console.log("localStorage", localStorage);

    if (!movies) {
        return <h1>Loading...</h1>
    } else {
        return (
            <MDBView >
                <MDBContainer className='mt-5'>
                    <MDBRow className="justify-content-around">
                        {movies.map((elem) => {
                            return <Card
                                poster_path={elem.poster_path}
                                title={elem.title}
                                overview={elem.overview}
                                release_date={elem.release_date}
                                onClick={userFavorites}
                            //  {...elem} 
                            />
                        })
                        }
                    </MDBRow>
                </MDBContainer>
            </MDBView>
        )
    }
}
