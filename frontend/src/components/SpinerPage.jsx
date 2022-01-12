import { MDBRow } from "mdbreact";
import React from "react";

const SpinnerPage = () => {
    return (
        <MDBRow className="justify-content-center height400">
            <div className="spinner-border text-primary my-5" role="status">
                <span className="text-center sr-only">Loading...</span>
            </div>
        </MDBRow>
    );
}

export default SpinnerPage;