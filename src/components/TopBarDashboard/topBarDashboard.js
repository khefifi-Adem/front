import React from "react";
import "./topBarDashboard.css";

function TopBarDashboard() {
    return(
        // Topbar 
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div className="d-flex align-items-center">
                <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"/>
                <h2 className="fs-2 m-0 text-white">ADMIN</h2>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="profile collapse navbar-collapse w-100" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className=" nav-item dropdown">
                        <a className=" nav-link dropdown-toggle second-text fw-bold text-white" href="#" id="navbarDropdown"
                           role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-user me-2"/>John Doe
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
     // End of Topbar 
    )
}
    
export default TopBarDashboard;