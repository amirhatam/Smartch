import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBFormInline,
  MDBIcon
} from 'mdbreact';
import { useHistory } from "react-router-dom";
import axios from 'axios'

const Login = (props) => {
  let history = useHistory()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const validLogin = async () => {
    try {
      // localStorage.clear();
      console.log("je suis validLogin")
      console.log("username", username)
      console.log("password", password)

      const response = await axios.post("http://localhost:8000/user/login", { username: username, password: password })
      console.log("Login User response", response)

      if (response.data.error) {

        alert("Username or password incorrect")
      } else {

        const token = response.data.token
        const userId = response.data.validUser._id

        // console.log("email :", email)

        localStorage.setItem("token", `${token}`)
        localStorage.setItem("username", `${username}`)
        localStorage.setItem("userId", `${userId}`)

        props.connectUser()

        console.log("localStorage :", localStorage.getItem("token"));

        // history.push("/")

        // return window.location.href = 
        return window.location.href = "http://localhost:3000"

      }
    } catch (error) {
      // alert("Email or password incorrect")
      console.error("error :", error)
    }
  }

  return (
    <MDBFormInline className="bgc-light">
      <MDBContainer className="mb-5" >
        <MDBRow className="justify-content-center my-5 ">
          <MDBCard className="col-5 my-5">
            <MDBCardBody>
              <p className="h4 text-center py-4">Login</p>
              <div className="grey-text">
                <MDBInput label="UserName" icon="envelope" group type="email" validate error="wrong" success="right"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <MDBInput label="Your Password" icon="lock" group type="password" validate
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center py-4 mt-3">
                <MDBBtn onClick={validLogin} color='blue' className="rounded-pill py-3 px-4">
                  <MDBIcon icon='user' className='mr-2 ' /> Login
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </MDBFormInline >
  );
};

export default Login;