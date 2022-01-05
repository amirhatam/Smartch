import React, { Component } from "react";
import { MDBBtn, MDBCollapse, MDBIcon, MDBCardText } from "mdbreact";

class CollapsePage extends Component {
    state = {
        collapseID: ""
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }

    render() {
        return (
            <>
                <MDBBtn
                    color="danger"
                    onClick={this.toggleCollapse("basicCollapse")}
                    className="d-block w-100  text-dark light-blue lighten-4 my-0 mx-0"
                >
                    Review <MDBIcon icon="angle-down" />
                </MDBBtn>
                <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                    <MDBCardText className="text-justify py-4 px-4">
                        {this.props.overview}
                    </MDBCardText>
                </MDBCollapse>
            </>
        );
    }
}

export default CollapsePage;