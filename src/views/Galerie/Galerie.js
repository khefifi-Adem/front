import React, {useEffect, useState} from "react";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/Footer";
import p_4 from "../../assets/p4.jpg";
import {Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

function Galerie() {


    const [projects, setProjects] = useState([]);

    let navigate = useNavigate();
    useEffect(()=>{
        if (localStorage.getItem('auth_token'))
        {
            navigate(-1);
            swal('Success',"u have to deconnect", "success");
        }
    },[])

    useEffect(()=> {
        const getProjects = async () => {
            await axios.get("api/projects").then(res => {
                if (res.status === 200) {

                    setProjects(res.data.projects);

                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getProjects()

    },[])


    return(
        <div className="cont">
            <NavBar/>
            <div className="container py-5">
                <section className="row gx-5 ">
                    {
                        projects.map(project=>(
                        <div className="col-lg-4 p-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src={`http://127.0.0.1:8000/${project.image}`} alt="..."/>
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">{project.domaine.titre}</div>
                                    <Link className="text-decoration-none link-dark stretched-link" to="#!">
                                        <h5 className="card-title mb-3">
                                            {project.user.nom_jurdique}
                                        </h5>
                                    </Link>
                                    <p className="card-text mb-0">
                                        {project.description}
                                    </p>
                                </div>
                             </div>
                        </div>
                        ))}


                </section>
            </div>
            <div className="pt-5">
                <Footer/>
            </div>
        </div>
    )
}
export default Galerie;