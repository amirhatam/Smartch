import React, { Component } from "react";
import { MDBBtn, MDBIcon } from 'mdbreact';
import "../assets/styles/DeleteButton.css"
import axios from 'axios'


export default class deleteButtons extends Component {
    state = {
        userList: []
    }


    findAndDelete = async (e) => {
        // console.log("movie id", e);

        const userFav = this.props.movies.map((movie) => {
            return movie.id
        })


        const updateList = userFav.filter(function (elem) {
            console.log("list", elem);
            return elem !== e
            // return localStorage.setItem("favorites", JSON.stringify(idsFavorites));
        });
        // console.log("updateList", updateList);
        this.setState({
            userList: updateList,
        });

        axios.patch(`http://localhost:8000/users/${localStorage.userId}/favorites`, { favorites: updateList })

        return window.location.reload(false);
    }


    render() {

        // console.log("localStorage favorites", localStorage.favorites);
        // console.log("props movies", props.movies);

        return (
            <div>
                <MDBBtn color="danger" outline size="sm" className='btn-border rounded-pill px-1'
                    // onClick={props.userFavorites}
                    // onClick={function (e) { props.userFavorites(e); props.updateList(e) }}
                    onClick={(e) => this.findAndDelete(this.props.movieId)}

                // value={props.movieId}
                >
                    <MDBIcon icon="trash-alt" className="h4 mb-0" />
                </MDBBtn>
            </div >
        )
    }
}
