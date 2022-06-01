import React from "react";
import {useLocation} from "react-router-dom";
import ShowFileModal from "../ShowFileModal/showFileModal";

function ProjetDetails() {
    const location = useLocation()
    return (
        <div className="cont ">
            <div className="p-5">
                <h1 className="fw-normal">{location.state.title}</h1>
                <div className="row">
                <div className='col-6'>
                    <img src={`http://127.0.0.1:8000/${location.state.image}`}/>
                </div>
                    <div className="col-6">
                <p className="fw-normal">
                    {location.state.description}
                </p>
                    </div>
                </div>

            </div>






        </div>
    )
}

export default ProjetDetails;