import React from "react";
import ClientNavBar from "../../components/ClientNavBar/clientNavBar";
import {Link, Outlet} from "react-router-dom";
import cycleFomations from "../../Data/CycleFormation/CycleFormation.json"
function VosInscriptions() {

    return(
        <div className="cont">
            <ClientNavBar/>
            <section className="py-5 m-5">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Cycle Formation</th>
                        <th scope="col">Action</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        cycleFomations.map(cycle=>(
                            <tr key={cycle.id}>
                                <th scope="row">{cycle.titre}</th>
                                <td>
                                    <Link  className="btn btn-outline-primary" to={`${cycle.id}`} state={cycle} >
                                        Consulter
                                    </Link>
                                </td>
                            </tr>
                        ))}




                    </tbody>
                </table>
            </section>

            <section className="py-5">
                <Outlet/>
            </section>
        </div>
    )

}
export default VosInscriptions;