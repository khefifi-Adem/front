import React, {useEffect, useState} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import FormateurNavBar from "../../components/FormateurNavBar/formateurNavBar";
import Footer from "../../components/Footer/Footer";


function FormateurSpaceIndus() {
    const [cycles, setCycles]= useState([]);
    let navigate = useNavigate();




    useEffect(()=>{

        if ((localStorage.getItem('auth_token') && localStorage.getItem('auth_type')!== 'formateur')||(!localStorage.getItem('auth_token')))
        {
            navigate(-1);
            swal('Success',"Unhothorized", "success");
        }

        axios.get('api/cycle_indus').then(res=> {
            if (res.status === 200)
            {

                setCycles(res.data.cycles);

            }
        });
    },[])


    const fileProgramme = (cycle) => {
        if(cycle.file_programme.length !==0)
        {
            return(<a className="btn btn-outline-primary m-1" href={`http://127.0.0.1:8000/${cycle.file_programme.file_path}`} target="_blank">Programme</a>)
        }
        else {
            return(<a className="nav-link disabled" href={"#"} target="_blank">Programme</a>)
        }


    }
    const fileDetails = (cycle) => {
        if(cycle.file_details.length !==0)
        {
            return(<a className="btn btn-outline-primary m-1" href={`http://127.0.0.1:8000/${cycle.file_details.file_path}`} target="_blank">Détails</a>)
        }
        else {
            return(<a className="nav-link disabled " href={"#"} target="_blank" >Détails</a>)
        }


    }


    return(
        <div className="cont">
            <FormateurNavBar/>
            <section className="py-5 bg-white " id="partners">
                <div className="container px-5 my-5">
                    <div className="col-md- p-2 w-100 h-100">
                        <div className="row justify-content-center">
                            <div className="text-center">
                                <h2 className="fw-bolder fs-2 mb-4 fst-italic">
                                    Les cycles de formation programmés
                                </h2>
                            </div>
                            <div className="cycle-container">
                                <table className="cycle">
                                    <tr className="cycle-head">
                                        <th className="title">Titre</th>
                                        <th className="title">Date de debut</th>
                                        <th className="title">Date de fin</th>
                                        <th className="title">Nombre d'heure</th>
                                        <th className="title">Niveau</th>
                                        <th className="title">Action</th>
                                    </tr>
                                    {
                                        cycles.map(cycle=>(
                                            <tr className="cycle-body" key={cycle.id}>
                                                <td >{cycle.titre}</td>
                                                <td className="w-auto">{cycle.date_debut}</td>
                                                <td className="w-auto">{cycle.date_fin}</td>
                                                <td className="w-auto">{cycle.nb_heures}</td>
                                                <td className="w-auto">{cycle.niveaux.titre}</td>
                                                <td className="action w-auto">
                                                    <Link className="btn btn-outline-primary m-1" to={`${cycle.id}`} state={cycle} >Consulter</Link>
                                                    {fileProgramme(cycle)}
                                                    {fileDetails(cycle)}

                                                </td>
                                            </tr>
                                        ))}


                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <Outlet/>
            </section>
            <div className="pt-5"><Footer /></div>
        </div>)
}
export default FormateurSpaceIndus;