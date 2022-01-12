import React, { useEffect } from "react";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";

const PaginationPage = (props) => {
    const pageNumbers = [];

    for (let i = 1; i <= props.totalPage; i++) {
        pageNumbers.push(i);
    }

    console.log(pageNumbers);
    return (
        <MDBRow className="justify-content-center ">
            <MDBCol className="col-2 mt-5">
                {/* <h4 className="title my-5 text-left">Bootstrap MDBPagination</h4> */}
                <MDBPagination circle>
                    <MDBPageItem >
                        <MDBPageNav
                            onClick={props.previousPage}
                            className="page-link"
                        >
                            Previous
                        </MDBPageNav>
                    </MDBPageItem>
                    <div className="mr-2 ml-1">
                        <h4>{props.page}</h4>
                    </div>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <a
                                //  onClick={() => paginate(number)} 
                                href='!#' className='page-link'>
                                {number}
                            </a>
                        </li>
                    ))}

                    <MDBPageItem>
                        <MDBPageNav
                            onClick={props.nextPage}
                            className="page-link"
                        >
                            Next
                        </MDBPageNav>
                    </MDBPageItem>
                    {/* <MDBPageItem disabled>
                        <MDBPageNav className="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </MDBPageNav>
                    </MDBPageItem>  
                    <MDBPageItem active>
                        <MDBPageNav className="page-link">
                            1 <span className="sr-only">(current)</span>
                        </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBPageNav className="page-link">
                            2
                        </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBPageNav className="page-link">
                            3
                        </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBPageNav className="page-link">
                            4
                        </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBPageNav className="page-link">
                            5
                        </MDBPageNav>
                    </MDBPageItem>

                      <MDBPageItem>
                        <MDBPageNav className="page-link">
                            &raquo;
                        </MDBPageNav>
                    </MDBPageItem> */}

                </MDBPagination>
            </MDBCol>
        </MDBRow>
    )
}

export default PaginationPage;