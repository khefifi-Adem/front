import React, {useEffect, useState} from "react";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/Footer";
import InnerNavBar from "../../components/InnerNavBar/innerNavBar";
import './Services.css';
import smart from '../../assets/smart.jpg';
import maintenance from '../../assets/maintenance.png';
import axios from "axios";

function Services() {

    const [cards, setCards]= useState([]);
    const [pages, setPages]= useState({});
    const [services, setServices] = useState([])


    useEffect(()=> {
        axios.get("api/card-services").then(res=> {
            if (res.status === 200)
            {

                setCards(res.data.cards);
            }
        });

        axios.get('api/pages/2').then(res=> {
            if (res.status === 200)
            {

                setPages(res.data.pages);
            }
        });

        axios.get('api/services').then(res=> {
            if (res.status === 200)
            {

                setServices(res.data.services);
            }
        });
    },[]);


    return (
        <div className="cont">

                <NavBar/>

            {/*Services section*/}
            <section className="header py-5 ">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center ">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="tit fw-bolder fs-2 mb-4 fst-italic">
                                    {pages.titre}
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
                                    {pages.description}
                                </p>
                            </div>
                            <div className="row ">
                                {
                                    cards.map(card=>(

                                        <div className="col-md-4 " key={card.id}>
                                            <div className="process-item p-1 ">
                                                <i className={card.icon+" fa-3x icon" } /><br/>
                                                <h3 className="tit">{card.titre}</h3><br/>
                                                <p className=" font-m text-muted text-muted">
                                                    {card.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }


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
                            <section className="services py-5" id={service.id}>
                                <div className="container px-5 my-5">
                                    <div className="row gx-5 align-items-center">
                                        <div className="col-lg-6 order-first order-lg-last">
                                            <img className="img-fluid rounded mb-5 mb-lg-0" src={smart} alt="..."/>
                                        </div>
                                        <div className="col-lg-6">
                                            <h2 className="fw-bolder">{service.titre}</h2>
                                            <p className="lead fw-normal  mb-0">
                                                {service.description}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                    }
                    else
                    {
                        return(
                            <section className="servicess py-5 " id={service.id}>
                                <div className="container px-5 my-5  ">
                                    <div className="row gx-5 align-items-center">
                                        <div className="col-lg-6">
                                            <img className="img-fluid rounded mb-5 mb-lg-0" src={maintenance} alt="..."/>
                                        </div>
                                        <div className="col-lg-6">
                                            <h2 className="fw-bolder">{service.titre}</h2>
                                            <p className="lead fw-normal  mb-0">
                                                {service.description}
                                            </p>

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

