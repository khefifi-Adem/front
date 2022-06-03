import React, {useEffect, useState} from "react";
import NavBar from "../../components/NavBar/navBar";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import p_4 from "../../assets/p4.jpg"
import './Acceruil.css';
import axios from "axios";
import swal from "sweetalert";

function Acceuil() {

    let navigate = useNavigate();
    useEffect(()=>{
        if (localStorage.getItem('auth_token'))
        {
            navigate(-1);
            swal('Success',"u have to deconnect", "success");
        }
    },[])


    const [cards, setCards]= useState([]);
    const [partners, setPartners]= useState([]);
    const [projects, setProjects]= useState([]);
    const [pages, setPages] = useState([]);

    const Pages = (pages) => {
        if (pages)
        {
            return(
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <div className="my-5 text-center text-xl-start">
                            <h1 className="display-5 fw-bolder text-white mb-2">{pages.titre}</h1>
                            <p className="lead fw-normal text-white-50 mb-4">{pages.description}</p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#vedette">En vedette</a>
                                <Link className="btn btn-outline-light btn-lg px-4" to="#!">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                        <img className="img-fluid rounded-3 my-5" src={`http://127.0.0.1:8000/${pages.image_path}`} alt="..." />
                    </div>
                </div>
            )
        }else {
            return null;
        }
    }



    useEffect(()=> {
        const getPage = async () => {
            await axios.get("api/pages/1").then(res => {
            if (res.status === 200) {
                setPages(res.data.pages);
            }
            }).catch((e) => {
                console.log(e)
            });
        };
        getPage();

    },[])


    useEffect(()=> {
        const getCards = async () => {
            await axios.get("api/card-acceuils").then(res => {
                if (res.status === 200) {

                    setCards(res.data.cards);

                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getCards()

    },[])





        useEffect(()=> {
            const getPartners = async () => {
                await axios.get('api/nos_parteners').then(res=> {
                    if (res.status === 200)
                    {
                        setPartners(res.data.partners);
                    }
                }).catch((e) => {
                    console.log(e)
                });
            };
            getPartners();
        },[])


        useEffect(()=> {
            const getProjects = async () => {
                await axios.get('api/projects').then(res=> {
            if (res.status === 200)
            {
                setProjects(res.data.projects);
            }
            }).catch((e) => {
                console.log(e)
            });
            };
            getProjects();
        },[])


    return(
        <div className="cont">
            <NavBar/>
            {/*Header*/}
            <header className=" py-5" >
                <div className="container px-5">
                    {Pages(pages)}
                </div>
            </header>
            {/*Features section*/}
            <section className="py-5 bg-light" id="vedette">
                <div className="container px-5 my-5">



                            <div className="row gx-5 row-cols-1 row-cols-md-2">

                                {
                                    cards.map(card=>(

                                <div className="info col-md-4 mb-5 p-2 " key={card.id}>
                                    <div className="feature bg-primary bg-gradient text-white rounded mb-3 ">
                                        <i className={card.card_icon}/>
                                    </div>
                                    <h2 className="h5">{card.card_head}</h2>
                                    <p className="mb-0">{card.card_text}</p>
                                </div>
                                    ))
                                }
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
                            {
                                partners.map(partner => (

                                    <div className="col-md-3 mb-5 p-2  d-xl-block text-center" key={partner.id}>
                                        <img className=" img-fluid rounded-3 my-5" src={`http://127.0.0.1:8000/${partner.image_path}`} alt="..." />
                                    </div>
                                    ))
                            }

                        </div>
                    </div>
                </div>
            </section>
            {/*Project section*/}
            <section className="py-5 bg-light">
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

                            {
                                projects.map(project=>(
                                <div className="carousel-item">
                                    <div className="row gx-5 justify-content-center">
                                        <div className="col-lg-4 mb-5">
                                            <div className="card h-100 shadow border-0">
                                                <img className="card-img-top" src={`http://127.0.0.1:8000/${project.image}`} alt="..." />
                                                <div className="card-body p-4">
                                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">{project.domaine.titre}</div>
                                                    <Link className="text-decoration-none link-dark stretched-link" to="#!"><h5 className="card-title mb-3">{project.user.nom_jurdique}</h5></Link>
                                                    <p className="card-text mb-0">{project.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}



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