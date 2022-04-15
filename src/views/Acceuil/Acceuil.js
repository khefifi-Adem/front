import React from "react";
import NavBar from "../../components/NavBar/navBar";
import {Link} from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import automation from "../../assets/automation.jpg";
import p_4 from "../../assets/p4.jpg"
import './Acceruil.css';

function Acceuil() {
    return(
        <div className="cont">
            <div className="fixed-top">
                <NavBar/>
            </div>
            {/*Header*/}
            <header className=" py-5" >
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">SMS2i</h1>
                                <p className="lead fw-normal text-white-50 mb-4">L’axe principal des activités de la société est le développement de projet d’automatisation et de supervision de processus industrielle.</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#vedette">En vedette</a>
                                    <Link className="btn btn-outline-light btn-lg px-4" to="#!">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                            <img className="img-fluid rounded-3 my-5" src={automation} alt="..." />
                        </div>
                    </div>
                </div>
            </header>
            {/*Features section*/}
            <section className="py-5" id="vedette">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h2 className="fw-bolder mb-0">
                                Les plus importants module qui concernent SMS2I
                            </h2>
                        </div>
                        <div className="col-lg-8">
                            <div className="row gx-5 row-cols-1 row-cols-md-2">
                                <div className="col mb-5">
                                    <div className="feature bg-primary bg-gradient text-white rounded mb-3 ">
                                        <i className="bi bi-laptop "/>
                                    </div>
                                    <h2 className="h5">Automatisme et Engineering Industriel</h2>
                                    <p className="mb-0">Automatisme Control & Instrumentation Electrique, Processus Réseaux Electrique,</p>
                                </div>
                                <div className="col mb-5 ">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <i className="bi bi-cpu"/>
                                    </div>
                                    <h2 className="h5">Integration des systèmes</h2>
                                    <p className="mb-0">SMS2I assure l'intégration de plusieurs solutions dans les différents domaines industriels armoires électriques, câblage et réseaux électriques, Implémentation;</p>
                                </div>
                                <div className="col mb-5 mb-md-0 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <i className="bi bi-mortarboard"/>
                                    </div>
                                    <h2 className="h5">Formation Industrielle</h2>
                                    <p className="mb-0">SMS2I supporte plusieurs industriels dans des domaines multiples, à savoir: laitière, électriques, Automatisme, industrie agroalimentaire...</p>
                                </div>
                                <div className="col h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <i className="bi bi-question-circle"/>
                                    </div>
                                    <h2 className="h5">Supports clients de haute qualité</h2>
                                    <p className="mb-0">En se basant sur une équipe compétente, expérimentée sur des domaines variés, haute disponibilité .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Partners section*/}
            <section className="py-5 bg-light" id="partners">
                <div className="container px-5 my-5">
                    <div className="col-md- p-2 w-100 h-100">
                        <div className="row justify-content-center">
                            <div className="text-center">
                                <h2 className="fw-bolder fs-2 mb-4 fst-italic">
                                    Nos Parteners
                                </h2>
                            </div>
                            <div className="col-4 d-none d-xl-block text-center">
                                <img className="img-fluid rounded-3 my-5" src={automation} alt="..." />
                            </div>
                            <div className="col-4 d-none d-xl-block text-center">
                                <img className="img-fluid rounded-3 my-5" src={automation} alt="..." />
                            </div>
                            <div className="col-4 d-none d-xl-block text-center">
                                <img className="img-fluid rounded-3 my-5" src={automation} alt="..." />
                            </div>
                            <div className="col-4 d-none d-xl-block text-center">
                                <img className="img-fluid rounded-3 my-5" src={automation} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Project section*/}
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder fs-2 mb-4 fst-italic">
                                    Nos Projets
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner ">

                            <div className="carousel-item active">
                                <div className="row gx-5 justify-content-center">
                                    <div className="col-lg-4 mb-5">
                                        <div className="card h-100 shadow border-0">
                                            <img className="card-img-top" src={p_4} alt="..." />
                                            <div className="card-body p-4">
                                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">INDUSTRIE LAITIÈRE</div>
                                                <Link className="text-decoration-none link-dark stretched-link" to="#!"><h5 className="card-title mb-3"> TUNISIE-LAIT "ELBENE"</h5></Link>
                                                <p className="card-text mb-0">2015/2016 => Remise en état, Automatisation d'un TANK ASEPTIQUE TETRAPACK UHT. 2017=> Intégration de la gestion de production et Nettoyage d'une machine de Conditionnement de Produit Frais via une batterie de vannes (PROCESS PIERRE GUERIN)</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row gx-5 justify-content-center">
                                    <div className="col-lg-4 mb-5">
                                        <div className="card h-100 shadow border-0">
                                            <img className="card-img-top" src={p_4} alt="..." />
                                            <div className="card-body p-4">
                                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">INDUSTRIE LAITIÈRE</div>
                                                <Link className="text-decoration-none link-dark stretched-link" to="#!"><h5 className="card-title mb-3"> TUNISIE-LAIT "ELBENE"</h5></Link>
                                                <p className="card-text mb-0">2015/2016 => Remise en état, Automatisation d'un TANK ASEPTIQUE TETRAPACK UHT. 2017=> Intégration de la gestion de production et Nettoyage d'une machine de Conditionnement de Produit Frais via une batterie de vannes (PROCESS PIERRE GUERIN)</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row gx-5 justify-content-center">
                                    <div className="col-lg-4 mb-5">
                                        <div className="card h-100 shadow border-0">
                                            <img className="card-img-top" src={p_4} alt="..." />
                                            <div className="card-body p-4">
                                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">INDUSTRIE LAITIÈRE</div>
                                                <Link className="text-decoration-none link-dark stretched-link" to="#!"><h5 className="card-title mb-3"> TUNISIE-LAIT "ELBENE"</h5></Link>
                                                <p className="card-text mb-0">2015/2016 => Remise en état, Automatisation d'un TANK ASEPTIQUE TETRAPACK UHT. 2017=> Intégration de la gestion de production et Nettoyage d'une machine de Conditionnement de Produit Frais via une batterie de vannes (PROCESS PIERRE GUERIN)</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <button className="carousel-control-prev text-dark" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="fa fa-solid fa-angle-left display-5" aria-hidden="true"/>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next text-dark" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="next">

                            <span className="fa fa-solid fa-angle-right display-5" aria-hidden="true"/>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </section>


            <Footer/>
        </div>
    );
}
export default Acceuil;