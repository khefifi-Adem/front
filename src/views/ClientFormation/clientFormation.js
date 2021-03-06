import React, {useEffect, useState} from "react";
import ClientNavBar from "../../components/ClientNavBar/clientNavBar";
import formation_v1 from "../../assets/formation_v1.jpg";
import SideBar from "../../components/SideBar/sideBar";
import {Outlet, useNavigate} from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./clientFormation.css"
import ShowFileModal from "../../components/ShowFileModal/showFileModal";
import SinscrireModal from "../../components/SinscrireModal/sinscrireModal";
import swal from "sweetalert";
import axios from "axios";

function ClientFormation() {

    const [secteurs, setSecteurs]= useState([]);
    const [cycles, setCycles]= useState([]);


    let navigate = useNavigate();
    useEffect(()=>{
        if ((localStorage.getItem('auth_token') && localStorage.getItem('auth_type')!== 'client')||(!localStorage.getItem('auth_token')))
        {
            navigate(-1);
            swal('Success',"Unhothorized", "success");
        }

        axios.get('api/secteurs').then(res=> {
            if (res.status === 200)
            {

                setSecteurs(res.data.secteurs);

            }
        });

        axios.get('api/cycle_formations').then(res=> {
            if (res.status === 200)
            {

                setCycles(res.data.cycles);

            }
        });

    },[])


    const [show,setShow] = useState(false);
    const onClickShow = () => setShow(true);
    const onClickClose = () => setShow(false);



    return(
        <div className="cont">
            <ClientNavBar/>

            {/*Formation section*/}
            <section className=" py-5 ">
                <div className="container px-5 ">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-dark mb-2">La formation pour une industrie au top</h1>
                                <p className="lead fw-normal text-dark-50 mb-4">Pour rester comp??titif, il suffit d???assurer des formations de qualit?? ?? tous les employ??s, tout au long de leur vie professionnelle et adapter les formations aux opportunit??s professionnelles</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#">En vedette</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6  d-xl-block text-center">
                            <img className="img-fluid rounded-3 my-5" src={formation_v1} alt="..." />
                        </div>
                    </div>
                </div>
            </section>


            <section className='mb-3 mt-3 ' >
                <div className="">
                    {/*<h2 className="fw-bolder align-self-lg-center p-5"></h2>*/}
                    <div className="cont_for">
                        <div className="side">
                            {
                                secteurs.map(secteur=>(
                                    <div key={secteur.id} className="sideside">
                                        <h2 className='py-2 p-5'>{secteur.titre}</h2>
                                        <SideBar data={secteur.childrens}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="formation ">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-5 bg-white" id="partners">
                <div className="container px-5 my-5">
                    <div className="col-md- p-2 w-100 h-100">
                        <div className="row justify-content-center">
                            <div className="text-center">
                                <h2 className="fw-bolder fs-2 mb-4 fst-italic">
                                    Les cycles de formation programm??s
                                </h2>
                            </div>
                            <div className="cycle-container">
                                <table className="cycle">
                                    <tr className="cycle-head">
                                        <th className="title">Niveau</th>
                                        <th>Date de debut</th>
                                        <th>Date de fin</th>
                                        <th>Nombre d'heure</th>
                                        <th>Prix</th>
                                        <th>Action</th>
                                    </tr>
                                    {
                                        cycles.map(cycle=>(
                                        <tr className="cycle-body" key={cycle.id}>
                                            <td>{cycle.titre}</td>
                                            <td>{cycle.date_debut}</td>
                                            <td>{cycle.date_fin}</td>
                                            <td>{cycle.nb_heures}</td>
                                            <td>{cycle.cout}</td>
                                            <td className="action">
                                                <button className="btn btn-outline-primary m-1" data-bs-toggle="modal" data-bs-target={`#cycle${cycle.id}`} >S'inscrire</button>
                                                <SinscrireModal cycle={cycle}/>
                                                <a className="btn btn-outline-primary m-1" href={`http://127.0.0.1:8000/${cycle.file_details.file_path}`}>D??tails</a>
                                                <a className="btn btn-outline-primary m-1" href={`http://127.0.0.1:8000/${cycle.file_programme.file_path}`}>Programme</a>


                                            </td>
                                        </tr>
                                        ))}


                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </section>




            <div className="pt-5"><Footer /></div>

        </div>
    )

}
export default ClientFormation;