import React from "react";
import {useLocation} from "react-router-dom";

function CycleFormationDetails() {
    const location = useLocation()
    console.log(location.state);



    return (
        <div className="cont w-100 ">
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
                    <tr>
                        <th className="w-auto">Niveau</th>
                        <th className="w-auto">{location.state.niveaux.titre}</th>
                    </tr>
                    <tr>
                        <th className="w-auto">Formateur</th>
                        <th className="w-auto">{location.state.formateur.nom+" "+ location.state.formateur.prenom}</th>
                    </tr>
                    <tr>
                        <th className="w-auto">Programe</th>
                        <th className="w-auto"><a href={`http://127.0.0.1:8000/${location.state.file_programme.file_path}`}>ouvrir</a></th>
                    </tr>
                    <tr>
                        <th className="w-auto">Details</th>
                        <th className="w-auto"><a href={`http://127.0.0.1:8000/${location.state.file_details.file_path}`}>ouvrir</a></th>
                    </tr>

            </tbody>
        </table>

            </div>






        </div>
    )

}
export default CycleFormationDetails