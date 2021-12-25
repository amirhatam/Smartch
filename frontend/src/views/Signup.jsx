import React, { useState, useEffect } from "react";
import {
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBView
} from 'mdbreact';

import { useHistory } from 'react-router-dom'
import { postSignup } from '../utils/network';


const Signup = () => {

  let history = useHistory()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userCreated, setUserCreated] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("token") || false

    if (token) {
      // localStorage.clear();
      // history.push("/admin")
    }
  }, [])



  const signup = async () => {
    try {
      const result = await postSignup({
        username,
        password,
      })

      if (result) {
        setUserCreated(true)
      } else {
        alert("There was a problem")
      }

    } catch (error) {
      alert("There was a problem")
    }
  }

  if (userCreated) {
    // return ("User created!")
    return window.location.href = "http://localhost:3000/connexion/login"
  } else {

    return (
      <MDBView >
        <MDBContainer>
          <MDBRow className="justify-content-center my-5 ">
            <MDBCard className="col-5 my-5">
              <MDBCardBody>
                <p className="h4 text-center py-4">SignUp</p>
                <div className="grey-text">
                  <MDBInput
                    label="Username"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <MDBInput
                    label="Votre mot de passe"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center py-4 mt-3">

                  <MDBBtn
                    onClick={signup}
                    color='blue' className="rounded-pill py-3 px-4" >
                    <MDBIcon icon='user' className='mr-2 ' />
                    Create
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    );
  }
}

export default Signup;