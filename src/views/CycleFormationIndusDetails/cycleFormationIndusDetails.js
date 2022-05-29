import React from "react";
import {useLocation} from "react-router-dom";

function CycleFormationIndusDetails() {
    const location = useLocation()




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
                        <th className="w-auto">Client</th>
                        <th className="w-auto">{location.state.client.nom_jurdique}</th>
                    </tr>

                    </tbody>
                </table>

            </div>






        </div>
    )

}
export default CycleFormationIndusDetails