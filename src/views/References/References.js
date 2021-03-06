import React, {useEffect, useState} from "react";
import "./References.css"
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/Footer";
import {Outlet, useNavigate} from "react-router-dom";
import references from "../../assets/references.png";
import swal from "sweetalert";
import axios from "axios";

function References() {

    const [pages, setPages ] = useState([]);

    let navigate = useNavigate();
    useEffect(()=>{
        if (localStorage.getItem('auth_token'))
        {
            navigate(-1);
            swal('Success',"u have to deconnect", "success");
        }

        axios.get('api/pages/3').then(res=> {
            if (res.status === 200)
            {

                setPages(res.data.pages);
            }
        });

    },[])
    return (
        <div className="cont">
                <NavBar/>
            <section className=" py-5" >
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder  mb-2">{pages.titre}</h1>
                                <p className="lead fw-normal mb-4">{pages.description}</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                            <img className="img-fluid rounded-3 my-5" src={references} alt="..." />
                        </div>
                    </div>
                </div>

            </section>
            <section className="py-5">
                <Outlet/>
            </section>


            <div className="pt-5">
                <Footer />
            </div>
        </div>
    )
}
export default References