import React from "react";
import "./sideNavBarAdmin.css";
import logo from "../../assets/logosms2i.png"
import {Link} from "react-router-dom";

function SideNavBarAdmin() {
    return(
        <div className="" id="sidebar-wrapper">
            <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
                <img className="w-25" src={logo} alt="..."/>
            </div>
            <ul className="list-group list-group-flush my-3">
                <li className="list-group-item list-group-item-action bg-transparent second-text fw-bold">

                    <a className="collapsed nav-link" data-bs-toggle="collapse" href="#collapseExample" role="button"
                       aria-expanded="false" aria-controls="collapseExample">
                        <i className="fa fa-folder me-1"/>
                        Pages
                        <i className=" fa fa-angle-down p-1"/>
                    </a>


                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                           <Link to="acceuil" className="nav-link">
                               <i className="fa fa-home me-1 "/>
                               Acceuil
                           </Link>

                            <Link to="services" className="nav-link">
                               <i className="fa fa-bell-concierge me-1 "/>
                               Services
                           </Link>

                            <Link to="#" className="nav-link">
                               <i className="fa fa-graduation-cap me-1 "/>
                               Formations
                           </Link>

                            <Link to="#" className="nav-link">
                               <i className="fa fa-book-medical me-1 "/>
                               References
                           </Link>
                        </div>
                    </div>
                </li>

                <hr className="sidebar-divider my-0"/>

                {/*<a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i*/}
                {/*    className="fas fa-project-diagram me-2"/>Projects</a>*/}
                {/*<a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i*/}
                {/*    className="fas fa-chart-line me-2"/>Analytics</a>*/}
                {/*<a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i*/}
                {/*    className="fas fa-paperclip me-2"/>Reports</a>*/}
                {/*<a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i*/}
                {/*    className="fas fa-shopping-cart me-2"/>Store Mng</a>*/}
                {/*<a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i*/}
                {/*    className="fas fa-gift me-2"/>Products</a>*/}
                {/*<a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i*/}
                {/*    className="fas fa-comment-dots me-2"/>Chat</a>*/}
                {/*<a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i*/}
                {/*    className="fas fa-map-marker-alt me-2"/>Outlet</a>*/}
                {/*<a href="#" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i*/}
                {/*    className="fas fa-power-off me-2"/>Logout</a>*/}
            </ul>
        </div>

    )
}
export default SideNavBarAdmin;