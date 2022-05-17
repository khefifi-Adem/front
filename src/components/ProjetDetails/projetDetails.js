import React from "react";
import {useLocation} from "react-router-dom";
import ShowFileModal from "../ShowFileModal/showFileModal";

function ProjetDetails() {
    const location = useLocation()
    return (
        <div className="cont ">
            <div className="p-5">
                <h1 className="fw-normal">{location.state.title}</h1>

                <p className="fw-normal">
                    {location.state.date_fin}
                </p>
                <p className="fw-normal">
                    {location.state.description}
                </p>

            </div>






        </div>
    )
}

export default ProjetDetails;