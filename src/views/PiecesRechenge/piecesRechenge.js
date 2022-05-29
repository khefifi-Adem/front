import React, {useEffect} from "react";
import "./piecesRechenge.css";
import NavBar from "../../components/NavBar/navBar";
import rechenge from "../../assets/piecerechenge.jpg";
import Footer from "../../components/Footer/Footer";
import {Outlet, useNavigate} from "react-router-dom";
import swal from "sweetalert";
function PiecesRechenge() {

    let navigate = useNavigate();
    useEffect(()=>{
        if (localStorage.getItem('auth_token'))
        {
            navigate(-1);
            swal('Success',"u have to deconnect", "success");
        }
    },[])

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