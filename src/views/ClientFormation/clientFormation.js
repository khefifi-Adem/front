import React, {useState} from "react";
import ClientNavBar from "../../components/ClientNavBar/clientNavBar";
import formation_v1 from "../../assets/formation_v1.jpg";
import formations from "../../Data/FormationData/formation.json";
import SideBar from "../../components/SideBar/sideBar";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./clientFormation.css"
import ShowFileModal from "../../components/ShowFileModal/showFileModal";
import SinscrireModal from "../../components/SinscrireModal/sinscrireModal";

function ClientFormation() {

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
                                <p className="lead fw-normal text-dark-50 mb-4">Pour rester compétitif, il suffit d’assurer des formations de qualité à tous les employés, tout au long de leur vie professionnelle et adapter les formations aux opportunités professionnelles</p>
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
                                formations.map(formation=>(
                                    <div key={formation.id}>
                                        <h2 className='py-2 p-5'>{formation.titre}</h2>
                                        <SideBar data={formation.childrens}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="formation  ">
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
                                    Les cycles de formation programmés
                                </h2>
                            </div>
                            <div className="cycle-container">
                                <table className="cycle">
                                    <tr className="cycle-head">
                                        <th className="title">Niveau</th>
                                        <th>Date de debut</th>
                                        <th>Date de fin</th>
                                        <th>Nombre d'heure</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr className="cycle-body">
                                        <td>Niveau 1</td>
                                        <td>11/12/2022</td>
                                        <td>31/12/2022</td>
                                        <td>35</td>
                                        <td className="action">
                                            <button className="btn btn-outline-primary m-1" onClick={onClickShow} >S'inscrire</button>
                                            <SinscrireModal show={show} niveau={"Niveau 1"} onClose={onClickClose}/>
                                            <button className="btn btn-outline-primary m-1" data-bs-toggle="modal" data-bs-target="#showfiledetailmodal">Détails</button>
                                            <ShowFileModal path="https://drive.google.com/file/d/1ZdxB3drQCEE6qvBj-UAOD3UFMc2ryub5/preview" id="showfiledetailmodal"/>
                                            <button className="btn btn-outline-primary m-1" data-bs-toggle="modal" data-bs-target="#showfileprogrammemodal">Programme</button>
                                            <ShowFileModal path="https://drive.google.com/file/d/1DFH8SBbEz19qG6mFQcKTSOmF7m3rGZ77/view?usp=sharing" id="showfileprogrammemodal"/>

                                        </td>
                                    </tr><tr className="cycle-body">
                                        <td>Niveau 1</td>
                                        <td>11/12/2022</td>
                                        <td>31/12/2022</td>
                                        <td>35</td>
                                        <td className="action">
                                            <button className="btn btn-outline-primary m-1" onClick={onClickShow} >S'inscrire</button>
                                            <SinscrireModal show={show} niveau={"Niveau 1"} onClose={onClickClose}/>
                                            <button className="btn btn-outline-primary m-1" data-bs-toggle="modal" data-bs-target="#showfiledetailmodal">Détails</button>
                                            <ShowFileModal path="https://drive.google.com/file/d/1ZdxB3drQCEE6qvBj-UAOD3UFMc2ryub5/preview" id="showfiledetailmodal"/>
                                            <button className="btn btn-outline-primary m-1" data-bs-toggle="modal" data-bs-target="#showfileprogrammemodal">Programme</button>
                                            <ShowFileModal path="https://drive.google.com/file/d/1DFH8SBbEz19qG6mFQcKTSOmF7m3rGZ77/view?usp=sharing" id="showfileprogrammemodal"/>

                                        </td>
                                    </tr>

                                    <tr className="cycle-body">
                                        <td>Niveau 1</td>
                                        <td>11/12/2022</td>
                                        <td>31/12/2022</td>
                                        <td>35</td>
                                        <td className="action">
                                            <button className="btn btn-outline-primary m-1" onClick={onClickShow} >S'inscrire</button>
                                            <SinscrireModal show={show} niveau={"Niveau 1"} onClose={onClickClose}/>
                                            <button className="btn btn-outline-primary m-1" data-bs-toggle="modal" data-bs-target="#showfiledetailmodal">Détails</button>
                                            <ShowFileModal path="https://drive.google.com/file/d/1ZdxB3drQCEE6qvBj-UAOD3UFMc2ryub5/preview" id="showfiledetailmodal"/>
                                            <button className="btn btn-outline-primary m-1" data-bs-toggle="modal" data-bs-target="#showfileprogrammemodal">Programme</button>
                                            <ShowFileModal path="https://drive.google.com/file/d/1DFH8SBbEz19qG6mFQcKTSOmF7m3rGZ77/view?usp=sharing" id="showfileprogrammemodal"/>

                                        </td>
                                    </tr>

                                    <tr className="cycle-body">
                                        <td>Niveau 1</td>
                                        <td>11/12/2022</td>
                                        <td>31/12/2022</td>
                                        <td>35</td>
                                        <td className="action">
                                            <button className="btn btn-outline-primary m-1" onClick={onClickShow} >S'inscrire</button>
                                            <SinscrireModal show={show} niveau={"Niveau 1"} onClose={onClickClose}/>
                                            <button className="btn btn-outline-primary m-1" data-bs-toggle="modal" data-bs-target="#showfiledetailmodal">Détails</button>
                                            <ShowFileModal path="https://drive.google.com/file/d/1ZdxB3drQCEE6qvBj-UAOD3UFMc2ryub5/preview" id="showfiledetailmodal"/>
                                            <button className="btn btn-outline-primary m-1" data-bs-toggle="modal" data-bs-target="#showfileprogrammemodal">Programme</button>
                                            <ShowFileModal path="https://drive.google.com/file/d/1DFH8SBbEz19qG6mFQcKTSOmF7m3rGZ77/view?usp=sharing" id="showfileprogrammemodal"/>

                                        </td>
                                    </tr>

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