import { MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBView, MDBMask, MDBIcon, MDBContainer, MDBNavLink } from "mdbreact";
import React, { useEffect } from 'react';
import LogoSignup from "../assets/images/signup.png"
import LogoLogin from "../assets/images/login.png"
const ConnexionPage = () => {

  useEffect(() => {

  }, [])

  return (
    <MDBView className=" text-center" >
      <MDBContainer className="mb-5" >
        <h2 className="h1-responsive fontW my-5">
        </h2>
        <MDBRow className="d-flex justify-content-around">
          <MDBCol md="5" className="mb-4 ">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src={LogoLogin}
                alt=""
                className="img-fluid col-auto"
              />
              <a href="true">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="row justify-content-center pb-0">
              <MDBCol md="5">
                <MDBNavLink className="btn btn-primary rounded-pill" to="/connexion/login">
                  <MDBIcon icon='user' className='mr-2 ' />Login
                </MDBNavLink>
              </MDBCol>
              {/* <MDBBtn href="/connexion/login" color='blue' className="rounded-pill mb-5 " >
                <MDBIcon icon='user' className='mr-2 ' />Login
              </MDBBtn> */}
            </MDBCardBody>
          </MDBCol>

          <MDBCol md="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves >
              <img
                src={LogoSignup}
                alt=""
                className="img-fluid col-auto"
              />
              <a href="true">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="row justify-content-center pb-0">
              <MDBCol md="5">
                <MDBNavLink className="btn btn-primary rounded-pill" to="/connexion/signup">
                  <MDBIcon icon='user' className='mr-2 ' /> Signup
                </MDBNavLink>
              </MDBCol>

              {/* <MDBBtn href="/connexion/signup" color='blue' className="rounded-pill mb-5"  >
                <MDBIcon icon='user' className='mr-2 ' /> Signup
              </MDBBtn> */}
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBView>

  );
}

export default ConnexionPage;