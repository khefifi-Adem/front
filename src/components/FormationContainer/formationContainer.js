import React, {useEffect} from "react";
import formation_v1 from "../../assets/formation_v1.jpg";
import {useLocation} from "react-router-dom";

function FormationContainer(){
    const location = useLocation()
    useEffect(()=> {
    }, [])
    return(

            <div className=" px-5" id={location.state.id}>
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className=" btn-outline-dark col-lg-8 col-xl-7 col-xxl-6">
                        <div className="my-5 text-center text-xl-start">
                            <h6 className="display-6 fw-normal text-dark-50 mb-2">{location.state.titre}</h6>
                            <p className="lead fw-normal text-dark-50 mb-4">{location.state.description}</p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#!">En vedette</a>
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

export default FormationContainer;