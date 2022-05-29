import React from "react";
import {useLocation} from "react-router-dom";
import "./inscriptionDetails.css"
import ShowFileModal from "../ShowFileModal/showFileModal";

function InscriptionDetails() {

    const location = useLocation()
    return (
        <div className="cont m-5 ">
            <div className=" w-100 p-5 justify-content-center  ">
                <h4 className="w-100 fw-bold display-4">{location.state.titre}</h4>
                <table className="w-100 table table-bordered table-striped">
                    <tbody className="">
                    <tr>
                        <th className="w-auto">Description</th>
                        <th className="w-auto">{location.state.description}</th>
                    </tr>
                    <tr>
                        <th className="w-auto">Date Debut</th>
                        <th className="w-auto">{location.state.date_debut}</th>
                    </tr>
                    <tr>
                        <th className="w-auto">Date fin</th>
                        <th className="w-auto">{location.state.date_fin}</th>
                    </tr>
                    <tr>
                        <th className="w-auto">Nombre de jours</th>
                        <th className="w-auto">{location.state.nb_jours}</th>
                    </tr>
                    <tr>
                        <th className="w-auto">Nombre d'heures</th>
                        <th className="w-auto">{location.state.nb_heures}</th>
                    </tr>
                    <tr>
                        <th className="w-auto">Nombre des places disponible</th>
                        <th className="w-auto">{location.state.nb_places_dispo}</th>
                    </tr>

                    </tbody>
                </table>

            </div>

            <div className="containerr mt-5" >
                <h6 className="p-4 fw-bold">Course and exercises</h6>


                        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">



                            <table className="table m-3">
                                <thead>
                                <tr>
                                    <th scope="col">Cycle Formation</th>
                                    <th scope="col">Action</th>

                                </tr>
                                </thead>
                                <tbody>
                                {/*{*/}
                                {/*    cycleFomations.map(cycle=>(*/}
                                        <tr >
                                            <th scope="row">chapitre 1</th>
                                            <td>
                                                <div className="btn btn-primary btn-lg px-4 me-sm-3" data-bs-toggle="modal" data-bs-target="#showfilemodal">lire plus</div>
                                                <ShowFileModal path="https://drive.google.com/file/d/1ZdxB3drQCEE6qvBj-UAOD3UFMc2ryub5/preview"/>
                                            </td>
                                        </tr>
                                    {/*))}*/}




                                </tbody>
                            </table>
                        </div>

            </div>




        </div>
    )

}
export default InscriptionDetails;