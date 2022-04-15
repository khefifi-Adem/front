import React from "react";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/Footer";
import './Formations.css';
import {Link,Outlet} from "react-router-dom";
import formation_v1 from "../../assets/formation_v1.jpg";
import SideBar from "../../components/SideBar/sideBar";
import formations from '../../Data/FormationData/formation.json'




function Formations() {
    return(
        <div className="cont">
            <div className="fixed-top">
                <NavBar/>
            </div>
            {/*Formation section*/}
            <section className=" py-5 ">
                <div className="container px-5 ">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-dark mb-2">La formation pour une industrie au top</h1>
                                <p className="lead fw-normal text-dark-50 mb-4">Pour rester compétitif, il suffit d’assurer des formations de qualité à tous les employés, tout au long de leur vie professionnelle et adapter les formations aux opportunités professionnelles</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#!">En vedette</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6  d-xl-block text-center">
                            <img className="img-fluid rounded-3 my-5" src={formation_v1} alt="..." />
                        </div>
                    </div>
                </div>
            </section>


                    <section className='mb-3 mt-3' >
                                <div className="">
                                    {/*<h2 className="fw-bolder align-self-lg-center p-5"></h2>*/}
                                    <div className="cont_for">
                                        <div className="side">

                                            {
                                                formations.map(formation=>(
                                                    <div>
                                                    <h2 className='py-5'>{formation.titre}</h2>
                                                    <SideBar data={formation.childrens}/>
                                                    </div>
                                                ))

                                            }

                                        </div>
                                        <div className="formation pt-5 h-100">
                                            <Outlet/>
                                        </div>
                                    </div>
                                </div>

                        </section>




            <div className="pt-5"><Footer /></div>
        </div>
    );
}

export default Formations;