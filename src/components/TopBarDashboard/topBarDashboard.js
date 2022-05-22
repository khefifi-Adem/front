import React from "react";
import "./topBarDashboard.css";
import {useNavigate} from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";




function TopBarDashboard() {

    let navigate = useNavigate()
    const logout = (e) => {
        e.preventDefault();
        axios.post('/api/logout').then(res =>{
            if (res.data.status === 200) {
                localStorage.clear();
                swal("Success",res.data.message,"success")
                navigate('/');
            }
        })
    }




    return(
        // Topbar 
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div className="d-flex align-items-center">
                <i className="fas fa-align-left primary-text fs-4 me-3 " id="menu-toggle" type="button" data-bs-toggle="collapse"
                   data-bs-target="#sidebar-wrapper" aria-controls="sidebar-wrapper"
                   aria-expanded="false" aria-label="Toggle navigation"/>
                <h2 className="fs-2 m-0 text-white">ADMIN</h2>
            </div>



            <div className="profile collapse navbar-collapse w-100" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className=" nav-item dropdown">
                        <a className=" nav-link dropdown-toggle second-text fw-bold text-white" href="#" id="navbarDropdown"
                           role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-user me-2"/>{localStorage.auth_nom +' '+localStorage.auth_prenom }
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><button className="dropdown-item" type="button" onClick={logout}>Logout</button></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
     // End of Topbar 
    )
}
    
export default TopBarDashboard;