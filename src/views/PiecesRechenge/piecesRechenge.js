import React from "react";
import "./piecesRechenge.css";
import NavBar from "../../components/NavBar/navBar";
import rechenge from "../../assets/piecerechenge.jpg";
import Footer from "../../components/Footer/Footer";
import {Outlet} from "react-router-dom";
function PiecesRechenge() {
    return(
        <div className="cont">
            <NavBar/>
            <section className=" " >
                <img className="picture img-fluid" src={rechenge} alt="..." />
            </section>

            <Outlet/>

            <div className="pt-5">
                <Footer />
            </div>
        </div>
    )

}
export default PiecesRechenge;