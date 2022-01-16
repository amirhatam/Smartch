import React from 'react';
import { MDBCardImage, MDBCol, MDBCardGroup } from 'mdbreact';
import DeleteButtons from "../DeleteButtons";


const FavoritesCard = (props) => {

    const image = props.poster_path ?
        `https://image.tmdb.org/t/p/w300/${props.poster_path}` :
        "https://www.mupload.nl/img/zymrod6nqov9t.jpg";

    return (
        <MDBCol lg="2" className='mt-4 mb-5'>
            <MDBCardGroup>
                <div
                    title={props.overview}
                    className="view zoom "
                >

                    <MDBCardImage
                        top
                        src={image}
                        overlay='white-slight'
                        hover
                        waves
                        alt='MDBCard image cap'
                        className='img-fluid '
                    />
                </div>

                <div className='m-auto'>
                    <DeleteButtons
                        movies={props.movies}
                        movieId={props.movieId}
                    />
                </div>
            </MDBCardGroup>
        </MDBCol >

    )
}

export default FavoritesCard;








