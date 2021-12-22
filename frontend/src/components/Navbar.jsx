import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
  MDBContainer, MDBBtn, MDBIcon
} from "mdbreact";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render(props) {
    return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBContainer>
          <MDBNavbarBrand>
            <strong className="white-text">Movies</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/popularBattle">PopularBattle</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/favorites">Favorites</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBBtn color="" className='rounded-pill btn btn-info btn-sm px-3'>
                  {this.props.userConnected
                    ?
                    <MDBNavLink className='loco-con text-white' to="/" onClick={this.props.logout}><MDBIcon icon="power-off" className="pr-2" />  Disconnect</MDBNavLink>
                    :
                    <MDBNavLink className='loco-con text-white' to="/connexion"><MDBIcon icon="sign-in-alt" className="pr-2" /> Connection</MDBNavLink>
                  }
                </MDBBtn>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;