import React, { useState, useEffect } from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBIcon, MDBCol, MDBCardGroup, MDBBtn } from 'mdbreact';
import "../../assets/styles/Card.css"
import CollapsePage from '../CollapsePage';



const Card = (props) => {
    const [movieGenres, setMovieGenres] = useState(props.genre_ids)
    const [genresIds, setGenresIds] = useState(props.genres)


    const [array1, setArray1] = useState([])



    useEffect(() => {
        (async () => {
            try {
                //First all of the genres movie
                if (movieGenres) {
                    for (let i = 0; i < movieGenres.length; i++) {
                        // console.log(movieGenres);
                        if (movieGenres[i] !== undefined) {
                            const movieIds = movieGenres[i]
                            // console.log(movieIds);
                            //
                            for (let j = 0; j <= genresIds.length; j++) {
                                if (genresIds[j] !== undefined && movieIds === genresIds[j].id) {

                                    // console.log(props.title, [genresIds[j].name]);

                                }

                            }
                        }
                    }
                }
            } catch (error) {
                console.log(error)
            }
        })();
    }, [])

    // console.log("array1", array1);

    // console.log("props.title", props.title);

    // console.log("props.genres", props.genres);
    // console.log("props.genre_ids", movieGenres);
    const review = props.overview ?
        props.overview :
        <p className='text-center'>Review Not Found !</p>

    const image = props.poster_path ?
        `https://image.tmdb.org/t/p/w300/${props.poster_path}` :
        "https://www.mupload.nl/img/zymrod6nqov9t.jpg";

    return (
        <MDBCol lg="5" className=' my-4'>
            <MDBCardGroup>
                <MDBCard>
                    <MDBCardImage
                        top
                        src={image}
                        overlay='white-slight'
                        hover
                        waves
                        alt='MDBCard image cap'
                        className='px-5 pt-5'
                    />
                    <MDBCardBody className='text-center px-0'>
                        <MDBCardTitle className='h5'>
                            {props.title}</MDBCardTitle>
                        <CollapsePage
                            overview={review}
                        />
                        <hr className='mt-0' />
                        <h6>Release date : <strong className='text-info'> {props.release_date}</strong></h6>
                        {props.aveVote && props.numVotes
                            ?
                            <>
                                <hr />
                                <p className='text-center mt-4'>
                                    <MDBIcon className='text-muted fa-lg' icon="thumbs-up" />  {props.aveVote} <strong className='text-info h5 mr-3'>{props.vote_average}</strong>
                                    <MDBIcon className='text-muted fa-lg ml-3' icon="users" />  {props.numVotes} <strong className='text-info h5 '>{props.vote_count}</strong>
                                </p>
                                <hr />
                            </>
                            :
                            null
                        }

                        <MDBBtn color="info" size="md" className=' rounded-pill px-3'
                            // onClick={props.userFavorites}
                            // onClick={function (e) { props.userFavorites(e); props.updateList(e) }}
                            onClick={(e) => props.moviesFav(props.movieId)}

                            value={props.movieId}
                        >
                            Add to Favorites
                        </MDBBtn>

                    </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
        </MDBCol >
    )
}

export default Card;