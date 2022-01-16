import React, { useState, useEffect } from 'react'
import axios from 'axios'
import YouTube from 'react-youtube';
import '../assets/styles/TrailerPlayer.css'

function TrailerPlayer(props) {
    const movieApi = "https://api.themoviedb.org/3";
    const apiKey = "e441f8a3a151d588a4932d2c5d310769";

    const [trailerMovie, setTrailerMovie] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`${movieApi}/movie/${localStorage.movieId}`, {
                    params: {
                        api_key: apiKey,
                        append_to_response: "videos"
                    }
                })

                if (data.videos && data.videos.results) {
                    const trailer = data.videos.results.find(vid => vid.name === "Trailer")
                    setTrailerMovie(trailer ? trailer : data.videos.results[0])
                    // localStorage.setItem("trailer", JSON.stringify(trailerMovie.key));
                    // localStorage.setItem("trailer", JSON.stringify(trailer ? trailer : data.videos.results[0]));

                }

            } catch (error) {
                console.log(error)
            }
        })();
    }, [])


    return (
        <div className='py-5 bgBlack '>
            {trailerMovie
                ?
                <YouTube
                    videoId={trailerMovie.key}
                    className={"youtube amru"}
                    containerClassName={"youtube-container amru"}
                    opts={
                        {
                            width: '100%',
                            height: `${window.innerHeight}px`,
                            playerVars: {
                                autoplay: 1,
                                controls: 1,
                                cc_load_policy: 0,
                                fs: 0,
                                iv_load_policy: 0,
                                modestbranding: 0,
                                rel: 0,
                                showinfo: 0,
                            },
                        }
                    }
                />
                :
                null
            }
        </div>
    )
}

export default TrailerPlayer
