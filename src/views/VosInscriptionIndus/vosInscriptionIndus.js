import React, {useEffect} from "react";
import cycleFomations from "../../Data/CycleFormation/CycleFormation.json";
import {Link, Outlet, useNavigate} from "react-router-dom";
import IndusNavBar from "../../components/IndusNavBar/indusNavBar";
import swal from "sweetalert";

function VosInscriptionIndus() {

    let navigate = useNavigate();
    useEffect(()=>{
        if ((localStorage.getItem('auth_token') && localStorage.getItem('auth_type')!== 'client_indus')||(!localStorage.getItem('auth_token')))
        {
            navigate(-1);
            swal('Success',"Unhothorized", "success");
        }
    },[])


    return(
        <div className="cont">
            <IndusNavBar/>
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

export default VosInscriptionIndus;