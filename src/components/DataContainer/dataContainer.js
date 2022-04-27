import React from "react";
import formation_v1 from "../../assets/formation_v1.jpg";
import {useLocation} from "react-router-dom";
import ShowFileModal from "../ShowFileModal/showFileModal";
import "./dataContainer.css"

function DataContainer(){
    const location = useLocation()

    return(

            <div className=" px-0" id={location.state.id}>
                <div className="m-0 row gx-5 align-items-center justify-content-center">
                    <div className=" btn-outline-dark col-lg-6 col-xl-5 col-xxl-4">
                        <div className="my-5 text-center text-xl-start">
                            <h6 className="lead fw-normal text-dark-50 mb-5 text-uppercase">{location.state.titre}</h6>
                            <p className=" fw-normal text-dark-50 mb-4">{location.state.description}</p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                <div className="btn btn-primary btn-lg px-4 me-sm-3" data-bs-toggle="modal" data-bs-target="#showfilemodal">lire plus</div>
                                <ShowFileModal path="https://drive.google.com/file/d/1ZdxB3drQCEE6qvBj-UAOD3UFMc2ryub5/preview" id="showfilemodal"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-xxl-6 d-xl-block text-center">
                        <img className="img-fluid rounded-3 my-5" src={formation_v1} alt="..." />
                    </div>
                </div>
            </div>
    );
}

export default DataContainer;