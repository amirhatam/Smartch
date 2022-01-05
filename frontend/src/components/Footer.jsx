import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavbarBrand, MDBView, MDBNavLink } from "mdbreact";



const Footer = () => {


    return (
        <MDBFooter color='info-color-dark' className=" text-white font-small  ">
            <MDBView className="bgc-blueDark ">
                <MDBContainer className=" text-center text-md-left pt-5">
                    <MDBRow className="justify-content-around">
                        <MDBCol className="col-6 pb-3" >
                            <MDBNavbarBrand className=" row">
                            </MDBNavbarBrand>
                            <div className="">
                                <p className="h6-fs m-0">
                                    The Movie Database
                                </p>
                                <p className="h6-fs m-0 mb-3">
                                    (TMDB) API
                                </p>
                                <br />
                                <p className="mb-1">More information on the link below :</p>
                                <a className="h6-fs" href="https://developers.themoviedb.org/3/getting-started/introduction" title="developers.themoviedb.org" >Developers.TheMovieDB.org</a>
                            </div>

                        </MDBCol>

                        <MDBCol md="6">
                            <ul className="pl-0">
                                <li className="list-unstyled  my-1">
                                    <a className="" href="true">
                                        <MDBNavLink className="h6-fs d-inline text-white py-0 px-0" to="/">Theaters</MDBNavLink>
                                    </a>
                                </li>
                                <li className="list-unstyled my-1">
                                    <a className="" href="true">
                                        <MDBNavLink className="h6-fs d-inline text-white py-0 px-0" to="/popularBattle">PopularBattle</MDBNavLink>
                                    </a>
                                </li>
                                <li className="list-unstyled my-1">
                                    <a className="" href="true">
                                        <MDBNavLink className="h6-fs d-inline text-white py-0 px-0" to="/favorites">Favorites</MDBNavLink>
                                    </a>
                                </li>
                                <li className="list-unstyled my-1">
                                    <a className="" href="true">
                                        <MDBNavLink className="h6-fs d-inline text-white py-0 px-0" to="/connexion">Connexion</MDBNavLink>
                                    </a>
                                </li>


                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="unique-color text-center py-3">
                    <MDBContainer fluid className="h6-fs">

                        &copy; 2021 Copyright : <a href="https://www.themoviedb.org/"> TheMovieDB.org </a>
                    </MDBContainer>

                </div>
            </MDBView>
        </MDBFooter >

    );
}

export default Footer;