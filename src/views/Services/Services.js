import React from "react";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/Footer";
import InnerNavBar from "../../components/InnerNavBar/innerNavBar";
import './Services.css';
import smart from '../../assets/smart.jpg';
import maintenance from '../../assets/maintenance.png';
import services from "../../Data/ServicesData/services.json";

function Services() {
    return (
        <div className="cont">
            <div className="fixed-top">
                <NavBar/>
            </div>
            {/*Services section*/}
            <section className="header py-5 ">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center ">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="tit fw-bolder fs-2 mb-4 fst-italic">
                                    Comment nous le faisons
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="branded-section process text-center">
                    <div className="masked">
                        <div className="container ">
                            <div className="  heading ">
                                <p>
                                    Anticiper vos besoins grâce à notre proactivité. Proposer des solutions innovantes et
                                    originales. Vous informez des dernières évolutions dans le domaine de Services et
                                    maintenance des systèmes informatiques et Industriels
                                </p>
                            </div>
                            <div className="row ">
                                <div className="col-4 ">
                                    <div className="process-item ">
                                        <i className="icon fa fa-search fa-3x"/><br/>
                                        <h3 className="tit">Analyse</h3><br/>
                                        <p className="font-m text-muted text-muted">
                                            Delimiter les périmètres des projets. Déterminer les
                                            besoins et les contraintes. Préparer les besoins fonctionnels
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="process-item delay1">
                                        <i className="icon fa fa-thumb-tack fa-3x"/><br/>
                                        <h3 className="tit" >Planification</h3><br/>
                                        <p className="font-m text-muted">Déterminer et ordonnancer les tâches. Estimer les charges
                                            et déterminer les profils nécessaires à la réalisation</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="process-item delay2">
                                        <i className=" icon fa fa-gavel fa-3x"/><br/>
                                        <h3 className="tit">Exécution</h3><br/>
                                        <p className="font-m text-muted">
                                            Animer des réunions. Valider et suivre les décisions et
                                            les tâches. Respecter l’échéancier prévu
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="process-item delay3">
                                        <i className="icon fa fa-puzzle-piece fa-3x"/><br/>
                                        <h3 className="tit">Déploiement</h3><br/>
                                        <p className="font-m text-muted">
                                            Déploiement des solutions développées sur les sites de
                                            productions réelles. Produire les livrables
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="process-item delay4">
                                        <i className="icon fa fa-undo fa-3x"/><br/>
                                        <h3 className="tit">Test </h3><br/>
                                        <p className="font-m text-muted">
                                            Tester les solutions et le bon fonctionnement des
                                            résultats ainsi que le respect des exigences fonctionnelles
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="process-item delay5">
                                        <i className="icon fa  fa-key  fa-3x"/><br/>
                                        <h3 className="tit">Clôture</h3><br/>
                                        <p className="font-m text-muted">
                                            Livrer les projets, former les équipes, documenter les
                                            solutions et tirer les leçons pour les futurs projets
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <InnerNavBar data={services}/>
            {/* Automatisme */}

            {
                services.map(service=>
                {
                    if (service.id % 2===0)
                    {
                        return(
                            <section className="py-5" id={service.id}>
                                <div className="container px-5 my-5">
                                    <div className="row gx-5 align-items-center">
                                        <div className="col-lg-6 order-first order-lg-last">
                                            <img className="img-fluid rounded mb-5 mb-lg-0" src={smart} alt="..."/>
                                        </div>
                                        <div className="col-lg-6">
                                            <h2 className="fw-bolder">{service.titre}</h2>
                                            <p className="lead fw-normal text-muted mb-0">
                                                {service.description}
                                            </p>
                                            <div className="d-flex justify-content-end p-1">
                                                <button className="btn btn-primary ">Lire la suite</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                    }
                    else
                    {
                        return(
                            <section className="py-5 " id={service.id}>
                                <div className="container px-5 my-5  ">
                                    <div className="row gx-5 align-items-center">
                                        <div className="col-lg-6">
                                            <img className="img-fluid rounded mb-5 mb-lg-0" src={maintenance} alt="..."/>
                                        </div>
                                        <div className="col-lg-6">
                                            <h2 className="fw-bolder">{service.titre}</h2>
                                            <p className="lead fw-normal text-muted mb-0">
                                                {service.description}
                                            </p>
                                            <div className="d-flex justify-content-end p-1">
                                                <button className="btn btn-primary ">Lire la suite</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        )

                }}
                )
            }


            <Footer/>
        </div>
    );
}

export default Services;

