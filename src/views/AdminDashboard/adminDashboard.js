import React, {useEffect} from "react";
import SideNavBarAdmin from "../../components/SideNavBarAdmin/sideNavBarAdmin";
import "./adminDashboard.css";
import TopBarDashboard from "../../components/TopBarDashboard/topBarDashboard";
import {Outlet, useNavigate} from "react-router-dom";
import swal from "sweetalert";

function AdminDashboard() {


    let navigate = useNavigate();
    useEffect(()=>{
        if ((localStorage.getItem('auth_token') && localStorage.getItem('auth_type')!== 'admin')||(!localStorage.getItem('auth_token')))
        {
            navigate(-1);
            swal('Success',"Unhothorized", "success");
        }
    },[])



    return(

        <div className="conttt d-flex" id="wrapper">




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