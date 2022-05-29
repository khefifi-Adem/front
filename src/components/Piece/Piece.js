import React from "react";
import {useLocation} from "react-router-dom";
import automation from "../../assets/automation.jpg";

function Piece({}) {
    const piece = useLocation()

    return(
        <div className="py5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-10 col-xl-9 col-xxl-8">
                            <div className="my-5 text-center text-xl-start">
                                <ul className="align-items-center ">
                                    <li className="display-6 list-unstyled">
                                        {`Marque: ${piece.state.marque.marque}`}
                                    </li>
                                    <li className="display-6 list-unstyled">
                                        {`Model: ${piece.state.model}`}
                                    </li>
                                    <li className="display-6 list-unstyled">
                                        {`Edition: ${piece.state.edition}`}
                                    </li>
                                </ul>
                                <p className="lead fw-normal">{piece.state.description}</p>

                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6d-xl-block text-center">
                            <img className="img-fluid rounded-3 my-1" src={`http://localhost:8000/${piece.state.image_path}`} alt="..." />
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Piece;