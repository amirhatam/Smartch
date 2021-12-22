import { MDBRow, MDBContainer, MDBView } from 'mdbreact';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
    const [movies, setMovies] = useState("")


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

                    </MDBRow>
                </MDBContainer>
            </MDBView>
        )
    }
}
