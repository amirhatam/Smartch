import React from "react";


const Carousel = (props) => {


    const image = props.poster_path ?
        `https://image.tmdb.org/t/p/w300/${props.poster_path}` :
        "https://www.mupload.nl/img/zymrod6nqov9t.jpg";
    return (

        <div className="row justify-content-center text-center my-3 mx-0">
            <img src={image} alt="posters" />
            <p className=' mt-4'>
                {props.aveVote} <strong className='text-info h5 mr-3'>{props.vote_average}</strong>
                {props.numVotes} <strong className='text-info h5 '>{props.vote_count}</strong>
            </p>
        </div>

    );
}
export default (Carousel)