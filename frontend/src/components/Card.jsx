import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBCardGroup } from 'mdbreact';


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
                    <p className='text-center mt-4'>
                        {props.aveVote} <strong className='text-info h5 mr-3'>{props.vote_average}</strong>
                        {props.numVotes} <strong className='text-info h5 '>{props.vote_count}</strong>
                    </p>
                    <MDBCardBody className='text-center '>
                        <MDBCardTitle className='h5'>
                            {props.title}</MDBCardTitle>
                        <hr />
                        <h6>Release date : <strong className='text-info'> {props.release_date}</strong></h6>
                        <div className='my-4'
                            style={{ height: '200px' }}>
                            <MDBCardText className='text-justify'>
                                {props.overview}
                            </MDBCardText>
                        </div>

                    </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
        </MDBCol>
    )
}

export default Card;








