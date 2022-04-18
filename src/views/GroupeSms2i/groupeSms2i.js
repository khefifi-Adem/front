import React from "react";
import "./groupeSms2i.css";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/Footer";
import groupe_sms2i from "../../assets/sms2i_presentation3.jpg";
import groupes from "../../Data/GroupeSms2iData/GroupeSms2i.json"


function GroupeSms2i() {
    return(
        <div className="cont">
             <NavBar/>

            <section className=" py-1" >
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-xl-5 col-xxl-6  d-xl-block text-center">
                            <img className="img-fluid rounded-3 my-5" src={groupe_sms2i} alt="..." />
                        </div>
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder  mb-2">Présentation du groupe SMS2i</h1>
                                <p className="text lead fw-bold  mb-4">
                                    SMS2i est l’abréviation de société de «Services et Maintenance des Systèmes Informatiques et Industriels ». Elle est nouvellement créée par un groupe d’enseignant universitaire en mai 2008 dans le but de rendre service au tissu industriel dans le domaine du service et de maintenance des systèmes industriels. Elle est actuellement installée à la zone Industriel de Messaadine (Immeuble Néodeme) Gouvernorat de Sousse. L’axe principal des activités de la société est le développement de projet d’automatisation et de supervision de processus industrielle. Vu la qualité de service fourni par la société SMS2i et les compétences qu’elle intègre dans le domaine Electrique, Electronique, Mécanique, Automatisme et informatique industriel, elle est devenu depuis 2010 un intégrateur officiel de SIEMENS SA et prochainement Solution Partner de SIEMENS SA en Automatisme. Cette même Image a permis la société de gagner la confiance de plusieurs fournisseurs de solutions industrielles dans différents domaines tels que : PCM de France le célèbre fournisseur de pompe et système de dosage et IPI le fournisseur Italien de machine de conditionnement du lait et du jus. Les demandes de services internationaux ont poussé les fondateurs de SMS2i à créer un groupe de société pour répondre aux différents besoins
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                groupes.map(groupe=>(
                    <section className="py-5 border ">
                        <div className="m-0 row gx-5 align-items-center justify-content-cente p-5">
                            <div className="d-flex col-12 justify-content-center pb-5  ">
                                <h1 className="display-5 fw-bolder">{groupe.titre}</h1>
                            </div>
                            <div className="col-12">
                                <p className="text lead fw-bold d-flex justify-content-center" >{groupe.description}</p>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <img className="img-fluid rounded-3 " src={groupe_sms2i} alt="..." />
                        </div>
                    </section>
                ))}

            <div className="pt-5">
                <Footer/>
            </div>
        </div>
    )

}

export default GroupeSms2i;