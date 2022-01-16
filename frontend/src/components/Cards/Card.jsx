import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBIcon, MDBCol, MDBCardGroup, MDBBtn, MDBNavLink, MDBRow } from 'mdbreact';
import "../../assets/styles/Card.css"
import CollapsePage from '../CollapsePage';



const Card = (props) => {



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
                        <MDBRow className='justify-content-center'>
                            <MDBCol size="5">
                                <MDBBtn color="info" size="md" className=' rounded-pill p-3 m-0'
                                    onClick={(e) => props.moviesFav(props.movieId)}
                                    value={props.movieId}
                                >
                                    Add to Favorites
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol size="4">
                                <MDBNavLink
                                    onClick={(e) => localStorage.setItem("movieId", JSON.stringify(props.movieId))}
                                    value={props.movieId}
                                    to="/trailer"
                                    className='btn btn-info rounded-pill px-0 m-0'
                                >Play Trailer
                                </MDBNavLink>
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
        </MDBCol >
    )
}

export default Card;