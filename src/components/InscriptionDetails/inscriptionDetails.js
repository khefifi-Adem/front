import React from "react";
import {useLocation} from "react-router-dom";
import "./inscriptionDetails.css"
import ShowFileModal from "../ShowFileModal/showFileModal";

function InscriptionDetails() {

    const location = useLocation()

    console.log(location)
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
                        <th className="w-auto">Groupe Discussion</th>
                        <th className="w-auto"><a href={`${location.state.link}`} target="_blank">Visitez</a></th>
                    </tr>
                    <tr>
                        <th className="w-auto">Details</th>
                        <th className="w-auto"><a href={`http://127.0.0.1:8000/${location.state.file_details.file_path}`} >Lire plus</a></th>
                    </tr>
                    <tr>
                        <th className="w-auto">Programme</th>
                        <th className="w-auto"><a href={`http://127.0.0.1:8000/${location.state.file_programme.file_path}`} >Lire plus</a></th>
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
                                    <th scope="col">Fichierss</th>
                                    <th scope="col">Action</th>

                                </tr>
                                </thead>
                                <tbody>
                                {
                                    location.state.files.map(file=>
                                        (<tr>
                                                <th scope="row">{file.titre}</th>
                                                <td>
                                                    <a className="btn btn-primary btn-lg px-4 me-sm-3"  href={`http://127.0.0.1:8000/${file.file_path}`} target="_blank">
                                                        lire plus
                                                    </a>

                                                </td>
                                            </tr>)




                                    )}
                                </tbody>
                            </table>
                        </div>

            </div>




        </div>
    )

}
export default InscriptionDetails;