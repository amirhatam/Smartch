import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBCardGroup } from 'mdbreact';
import axios from 'axios'


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
                    <MDBCardBody className='text-center '>
                        <MDBCardTitle className='h5'>{props.title}</MDBCardTitle>
                        <hr />
                        <div style={{ height: '200px' }}>
                            <MDBCardText className='text-justify'>
                                {props.overview}
                            </MDBCardText>
                        </div>
                        <h5>Release date : {props.release_date}</h5>
                        {/* <MDBBtn size="md"
                            color="blue"
                            href="#"
                            title={props.title}
                            className='rounded-pill btn btn-info my-3'
                            // onClick={props.setFavorites}
                            onClick={props.onClick}
                        // onClick={() => setFavorites(props.value)}

                        >Like</MDBBtn> */}
                    </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
        </MDBCol>
    )
}

export default Card;








