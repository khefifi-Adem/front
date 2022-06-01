import React, {useEffect, useState} from "react";
import cycleFomations from "../../Data/CycleFormation/CycleFormation.json";
import {Link, Outlet, useNavigate} from "react-router-dom";
import IndusNavBar from "../../components/IndusNavBar/indusNavBar";
import swal from "sweetalert";
import axios from "axios";

function VosInscriptionIndus() {

    const [cycles, setCycles] = useState([]);


    let navigate = useNavigate();
    useEffect(()=>{
        if ((localStorage.getItem('auth_token') && localStorage.getItem('auth_type')!== 'client_indus')||(!localStorage.getItem('auth_token')))
        {
            navigate(-1);
            swal('Success',"Unhothorized", "success");
        }
    },[]);


    useEffect(()=>{
        axios.get(`api/cycle_user/${localStorage.getItem('auth_id')}`).then(res => {
                if (res.data.status===200) {
                    setCycles(res.data.cycles);
                    console.log(res.data.cycles);
                }

            });
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
                        cycles.map(cycle=>(
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