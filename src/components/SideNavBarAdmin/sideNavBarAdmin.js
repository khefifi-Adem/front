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

                    <a className="collapsed nav-link" data-bs-toggle="collapse" href="#collapsePages" role="button"
                       aria-expanded="false" aria-controls="collapsePages">
                        <i className="fa fa-folder me-1"/>
                        Pages
                        <i className=" fa fa-angle-down p-1"/>
                    </a>


                    <div className="collapse" id="collapsePages">
                        <div className="card card-body">
                           <Link to="acceuil" className="nav-link">
                               <i className="fa fa-home me-1 "/>
                               Acceuil
                           </Link>

                            <Link to="services" className="nav-link">
                               <i className="fa fa-bell-concierge me-1 "/>
                               Services
                           </Link>

                            <Link to="formation" className="nav-link">
                               <i className="fa fa-graduation-cap me-1 "/>
                               Formations
                           </Link>

                            <Link to="references" className="nav-link">
                               <i className="fa fa-book-medical me-1 "/>
                               References
                           </Link>

                            <Link to="groupe-sms2i" className="nav-link">
                               <i className="fa fa-city me-1 "/>
                               Grp-SMS2I
                           </Link>
                        </div>
                    </div>
                </li>

                <hr className="sidebar-divider my-0"/>


                <li className="list-group-item list-group-item-action bg-transparent second-text fw-bold">

                    <a className="collapsed nav-link" data-bs-toggle="collapse" href="#collapseUser" role="button"
                       aria-expanded="false" aria-controls="collapseExample">
                        <i className="fa fa-user me-1"/>
                        Utilisateurs
                        <i className=" fa fa-angle-down p-1"/>
                    </a>


                    <div className="collapse" id="collapseUser">
                        <div className="card card-body">
                            <Link to="clients" className="nav-link">
                                <i className="fa fa-user-graduate me-1 "/>
                                Client
                            </Link>

                            <Link to="clients-indus" className="nav-link">
                                <i className="fa fa-user-gear me-1 "/>
                                Client Indus
                            </Link>

                            <Link to="formateurs" className="nav-link">
                                <i className="fa fa-user-tie me-1 "/>
                                Formateur
                            </Link>

                            <Link to="admins" className="nav-link">
                                <i className="fa fa-user-plus me-1 "/>
                                Admin
                            </Link>
                        </div>
                    </div>
                </li>


                <hr className="sidebar-divider my-0"/>


                <li className="list-group-item list-group-item-action bg-transparent second-text fw-bold">

                    <a className="collapsed nav-link" data-bs-toggle="collapse" href="#collapseFormation" role="button"
                       aria-expanded="false" aria-controls="collapseExample">
                        <i className="fa fa-rectangle-list me-1"/>
                        Formations
                        <i className=" fa fa-angle-down p-1"/>
                    </a>


                    <div className="collapse" id="collapseFormation">
                        <div className="card card-body">
                            <Link to="formations-details" className="nav-link">
                                <i className="fa fa-file-lines me-1 "/>
                                Details
                            </Link>

                            <Link to="cycle-formations" className="nav-link">
                                <i className="fa fa-arrows-spin me-1 "/>
                                Cycle formation
                            </Link>

                        </div>
                    </div>
                </li>

                <hr className="sidebar-divider my-0"/>

                <li className="list-group-item list-group-item-action bg-transparent second-text fw-bold">

                    <a className="collapsed nav-link" data-bs-toggle="collapse" href="#collapseProjects" role="button"
                       aria-expanded="false" aria-controls="collapseExample">
                        <i className="fa fa-hands-holding-child me-1"/>
                        Projets
                        <i className=" fa fa-angle-down p-1"/>
                    </a>


                    <div className="collapse" id="collapseProjects">
                        <div className="card card-body">
                            <Link to="domaine-insdutriel" className="nav-link">
                                <i className="fa fa-list  me-1 "/>
                                Domaine Industrielle
                            </Link>

                            <Link to="projects" className="nav-link">
                                <i className="fa fa-thumbs-up me-1 "/>
                                Projets Realisé
                            </Link>



                        </div>
                    </div>
                </li>

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