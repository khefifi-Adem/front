import React, {useEffect, useState} from "react";
import IndusNavBar from "../../components/IndusNavBar/indusNavBar";
import {Link, Outlet, useNavigate} from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

function VosProjets() {

    const [projects, setProjects] = useState([]);


    let navigate = useNavigate();
    useEffect(()=>{
        if ((localStorage.getItem('auth_token') && localStorage.getItem('auth_type')!== 'client_indus')||(!localStorage.getItem('auth_token')))
        {
            navigate(-1);
            swal('Success',"Unhothorized", "success");
        }
    },[]);


    useEffect(()=>{
        axios.get(`api/project_user/${localStorage.getItem('auth_id')}`).then(res => {
            if (res.data.status===200) {
                setProjects(res.data.projects);
                console.log(res.data.projects);
            }

        });
    },[])



    return (
        <div className="cont">
            <IndusNavBar/>
            <section className="py-5 m-5">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Projets</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        projects.map(project=>(
                            <tr key={project.id}>
                                <th scope="row">{project.title}</th>
                                <td>
                                    <Link  className="btn btn-outline-primary" to={`${project.id}`} state={project} >
                                        Consulter
                                    </Link>
                                </td>
                            </tr>
                        )
                        )
                    }
                    </tbody>
                </table>
            </section>
            <section className="py-5">
                <Outlet/>
            </section>
        </div>
    )
}

export default VosProjets;