import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./inscriptionDetails.css"
import ShowFileModal from "../ShowFileModal/showFileModal";
import cycleFomations from "../../Data/CycleFormation/CycleFormation.json";
function InscriptionDetails() {

    const location = useLocation()
    return (
        <div className="cont m-5">
            <div>
            <h1>{location.state.titre}</h1>
            <p>
                {location.state.description}
            </p>
            <p>
                {location.state.date_debut}
            </p>
            <p>
                {location.state.date_fin}
            </p>
            <a href={location.state.lien_teams}>
               Consulter le groupe de discussion de formation
            </a>
            </div>

            <div className="containerr mt-5" >
                <h6>Course and exercises</h6>


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