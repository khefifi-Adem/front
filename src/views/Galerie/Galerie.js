import React from "react";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/Footer";
import p_4 from "../../assets/p4.jpg";
import {Link} from "react-router-dom";

function Galerie() {
    return(
        <div className="cont">
            <NavBar/>
            <div className="container py-5">
                <section className="row gx-5 ">
                    <div className="col-lg-4 p-5">
                        <div className=" card h-100 shadow border-0">
                            <img className="card-img-top" src={p_4} alt="..." />
                            <div className="card-body p-4">
                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">INDUSTRIE LAITIÈRE</div>
                                <Link className="text-decoration-none link-dark stretched-link" to="#!"><h5 className="card-title mb-3"> TUNISIE-LAIT "ELBENE"</h5></Link>
                                <p className="card-text mb-0">2015/2016 => Remise en état, Automatisation d'un TANK ASEPTIQUE TETRAPACK UHT. 2017=> Intégration de la gestion de production et Nettoyage d'une machine de Conditionnement de Produit Frais via une batterie de vannes (PROCESS PIERRE GUERIN)</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 p-5">
                        <div className="card h-100 shadow border-0">
                            <img className="card-img-top" src={p_4} alt="..." />
                            <div className="card-body p-4">
                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">INDUSTRIE LAITIÈRE</div>
                                <Link className="text-decoration-none link-dark stretched-link" to="#!"><h5 className="card-title mb-3"> TUNISIE-LAIT "ELBENE"</h5></Link>
                                <p className="card-text mb-0">2015/2016 => Remise en état, Automatisation d'un TANK ASEPTIQUE TETRAPACK UHT. 2017=> Intégration de la gestion de production et Nettoyage d'une machine de Conditionnement de Produit Frais via une batterie de vannes (PROCESS PIERRE GUERIN)</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 p-5">
                        <div className="card h-100 shadow border-0">
                            <img className="card-img-top" src={p_4} alt="..." />
                            <div className="card-body p-4">
                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">INDUSTRIE LAITIÈRE</div>
                                <Link className="text-decoration-none link-dark stretched-link" to="#!"><h5 className="card-title mb-3"> TUNISIE-LAIT "ELBENE"</h5></Link>
                                <p className="card-text mb-0">2015/2016 => Remise en état, Automatisation d'un TANK ASEPTIQUE TETRAPACK UHT. 2017=> Intégration de la gestion de production et Nettoyage d'une machine de Conditionnement de Produit Frais via une batterie de vannes (PROCESS PIERRE GUERIN)</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 p-5">
                        <div className="card h-100 shadow border-0">
                            <img className="card-img-top" src={p_4} alt="..." />
                            <div className="card-body p-4">
                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">INDUSTRIE LAITIÈRE</div>
                                <Link className="text-decoration-none link-dark stretched-link" to="#!"><h5 className="card-title mb-3"> TUNISIE-LAIT "ELBENE"</h5></Link>
                                <p className="card-text mb-0">2015/2016 => Remise en état, Automatisation d'un TANK ASEPTIQUE TETRAPACK UHT. 2017=> Intégration de la gestion de production et Nettoyage d'une machine de Conditionnement de Produit Frais via une batterie de vannes (PROCESS PIERRE GUERIN)</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 p-5">
                        <div className="card h-100 shadow border-0">
                            <img className="card-img-top" src={p_4} alt="..." />
                            <div className="card-body p-4">
                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">INDUSTRIE LAITIÈRE</div>
                                <Link className="text-decoration-none link-dark stretched-link" to="#!"><h5 className="card-title mb-3"> TUNISIE-LAIT "ELBENE"</h5></Link>
                                <p className="card-text mb-0">2015/2016 => Remise en état, Automatisation d'un TANK ASEPTIQUE TETRAPACK UHT. 2017=> Intégration de la gestion de production et Nettoyage d'une machine de Conditionnement de Produit Frais via une batterie de vannes (PROCESS PIERRE GUERIN)</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 p-5">
                        <div className="card h-100 shadow border-0">
                            <img className="card-img-top" src={p_4} alt="..." />
                            <div className="card-body p-4">
                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">INDUSTRIE LAITIÈRE</div>
                                <Link className="text-decoration-none link-dark stretched-link" to="#!"><h5 className="card-title mb-3"> TUNISIE-LAIT "ELBENE"</h5></Link>
                                <p className="card-text mb-0">2015/2016 => Remise en état, Automatisation d'un TANK ASEPTIQUE TETRAPACK UHT. 2017=> Intégration de la gestion de production et Nettoyage d'une machine de Conditionnement de Produit Frais via une batterie de vannes (PROCESS PIERRE GUERIN)</p>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            <div className="pt-5">
                <Footer/>
            </div>
        </div>
    )
}
export default Galerie;