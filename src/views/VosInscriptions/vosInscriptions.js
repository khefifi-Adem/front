import React, {useEffect, useState} from "react";
import ClientNavBar from "../../components/ClientNavBar/clientNavBar";
import {Link, Outlet, useNavigate} from "react-router-dom";
import cycleFomations from "../../Data/CycleFormation/CycleFormation.json"
import swal from "sweetalert";
import axios from "axios";
function VosInscriptions() {


    const [cycles, setCycles] = useState([]);
    const [inscriptions, setInscriptions] = useState([]);


    let navigate = useNavigate();
    useEffect(()=>{
        if ((localStorage.getItem('auth_token') && localStorage.getItem('auth_type')!== 'client')||(!localStorage.getItem('auth_token')))
        {
            navigate(-1);
            swal('Success',"Unhothorized", "success");
        }

        axios.get('api/cycle_formations').then(res=> {
            if (res.status === 200)
            {

                setCycles(res.data.cycles);

            }

            axios.get(`api/inscriptions-cycle/${localStorage.getItem('auth_id')}`).then(res=>{
                if (res.data.status){
                    setInscriptions(res.data.inscription);
                    console.log(res.data.inscription);
                }
            })
        });


    },[])

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
                        inscriptions.map(inscription=>(
                            cycles.map(cycle=>{
                                if (inscription.id_cycle_formation === cycle.id)
                                {
                                   return( <tr key={cycle.id}>
                                        <th scope="row">{cycle.titre}</th>
                                        <td>
                                            <Link className="btn btn-outline-primary" to={`${cycle.id}`} state={cycle}>
                                                Consulter
                                            </Link>
                                        </td>
                                    </tr>
                                   )
                                }
                            }

                            )    ))
                    }




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