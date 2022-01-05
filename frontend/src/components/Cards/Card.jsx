import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBIcon, MDBCol, MDBCardGroup, MDBBtn } from 'mdbreact';
import "../../assets/styles/Card.css"
import CollapsePage from '../CollapsePage';


const Card = (props) => {


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
                            overview={props.overview}
                        />
                        <hr className='mt-0' />
                        <h6>Release date : <strong className='text-info'> {props.release_date}</strong></h6>
                        <hr />
                        <p className='text-center mt-4'>
                            <MDBIcon className='text-muted fa-lg' icon="thumbs-up" />  {props.aveVote} <strong className='text-info h5 mr-3'>{props.vote_average}</strong>
                            <MDBIcon className='text-muted fa-lg ml-3' icon="users" />  {props.numVotes} <strong className='text-info h5 '>{props.vote_count}</strong>
                        </p>
                        <hr />

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







