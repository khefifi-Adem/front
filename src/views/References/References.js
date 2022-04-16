import React from "react";
import "./References.css"
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/Footer";
import { Outlet} from "react-router-dom";
import references from "../../assets/references.svg";

function References() {
    return (
        <div className="cont">
                <NavBar/>
            <section className=" py-5" >
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder  mb-2">SMS2i</h1>
                                <p className="lead fw-normal mb-4">had successfully accomplished a lot of project with different client inside either outside the border .......................................... ........................ .......... ............ .............. ................. </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                            <img className="img-fluid rounded-3 my-5" src={references} alt="..." />
                        </div>
                    </div>
                </div>
            </section>

            <Outlet/>



            <div className="pt-5">
                <Footer />
            </div>
        </div>
    )
}
export default References