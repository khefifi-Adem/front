import React from "react";
import SideNavBarAdmin from "../../components/SideNavBarAdmin/sideNavBarAdmin";
import "./adminDashboard.css";
import TopBarDashboard from "../../components/TopBarDashboard/topBarDashboard";
import {Outlet} from "react-router-dom";

function AdminDashboard() {
    return(

        <div className="d-flex" id="wrapper">




            <SideNavBarAdmin/>

            {/*Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column w-100">

                {/*Main Content */}
                <div id="content">

                    <TopBarDashboard/>
                    <div className="container-fluid px-4">
                        <div className="row g-3 my-2">
                        <Outlet/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default AdminDashboard;