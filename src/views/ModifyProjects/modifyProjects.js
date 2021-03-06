import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import {Link, Outlet} from "react-router-dom";
import EditProject from "../EditProjects/editProject";

function ModifyProjects() {
    const [projects, setProjects] = useState([]);
    const [domaines, setDomaines] = useState([]);
    const [clientIndus, setClientIndus] = useState([]);
    const [societes, setSocietes] = useState([]);

    const initialValues ={ title: "",description: ""};
    const [addproject, setAddProject] = useState(initialValues);
    const [selectedSociete, setSelectedSociete] = useState([]);
    const [selectedClient, setSelectedClient] = useState([]);
    const [selectedDomain, setSelectedDomain] = useState([]);
    const [picture, setPicture] = useState([]);


    const deleteProject = useCallback( (id) => {
        return async (e) => {
            e.preventDefault()


            axios.delete(`api/projects/${id}`).then(res=>{
                    if (res.status === 200){
                        if (res.data.status === 200)
                        {
                            swal("Success",res.data.message,"success");
                            console.log(res.data.status)
                            window.location.reload(false);
                        }
                    }
                }
            )}
    })

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
        getProjects();

    },[]);

    useEffect(()=> {
        const getDomaine = async () => {
            await axios.get("api/domaine_indus").then(res => {
                if (res.status === 200) {

                    setDomaines(res.data.domaineindus);



                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getDomaine();

    },[]);

    useEffect(()=> {
        const getClientIndustrial = async () => {
            await axios.get("api/clients-indus").then(res => {
                if (res.status === 200) {

                    setClientIndus(res.data.users);



                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getClientIndustrial();

    },[]);

    useEffect(()=> {
        const getSocietes = async () => {
            await axios.get("api/groupe_sms2i").then(res => {
                if (res.status === 200) {

                    setSocietes(res.data.groupesms2i);



                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getSocietes();

    },[]);

    const handleInput = (e) => {

        const { name, value } = e.target;
        setAddProject({ ...addproject, [name]: value });

    }
    const handlePicture = (e) => {


        setPicture({ image: e.target.files[0] });

    }



    const addProject = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('image',picture.image )
        data.append('title',addproject.title )
        data.append('description',addproject.description )
        data.append('id_soc',selectedSociete )
        data.append('id_client_indus',selectedClient )
        data.append('id_domaine_indus',selectedDomain )

        console.log(data)
        axios.post("api/projects",data).then(res=>{
                if (res.status === 200){
                    if (res.data.status === 200)
                    {
                        swal("Success",res.data.message,"success");

                    }
                }
            }
        )
    }







    return(
        <div className="container bg-white rounded-3 shadow-lg">
            {/*<h5 className="display-5 p-20">*/}
            {/*    Client List*/}
            {/*</h5>*/}
            <section className=" d-flex py-5">
                <div className="container d-flex flex-column  align-items-center">
                    <h1>
                        Projects List
                    </h1>

                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter-secteur" aria-expanded="false" aria-controls="collapseExample">Cr??eer Un Projet</button>


                    <div className="collapse w-100" id="ajouter-secteur">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouter </h1>
                            <form className="w-50" onSubmit={addProject}  method="POST">

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="title" type="text" name="title"
                                           placeholder="Enter your titre here... "
                                           value={addproject.title}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="title">Titre</label>





                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="description" type="text" name="description"
                                           placeholder="Enter your description here... "
                                           value={addproject.description}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="description">Description </label>

                                </div>

                                    <div className="mb-3 w-100">
                                        <select className="form-select" id="id_client_indus"
                                                aria-label="Floating label select example" onChange={e=>setSelectedClient(e.target.value)}>
                                            <option value="">Client industriel</option>
                                            {clientIndus.map(client=>(<option key={client.id} value={client.id}>{client.nom_jurdique}</option>))}
                                        </select>


                                </div>

                                    <div className="mb-3 w-100">
                                        <select className="form-select" id="id_soc"
                                                aria-label="Floating label select example" onChange={e=>setSelectedSociete(e.target.value)}>
                                            <option value="">Realis?? par</option>
                                            {societes.map(societe=>(<option key={societe.id} value={societe.id}>{societe.nom_soc}</option>))}
                                        </select>

                                    </div>

                                <div className="mb-3 w-100">
                                    <select className="form-select" id="id_domaine_indus"
                                            aria-label="Floating label select example" onChange={e=>setSelectedDomain(e.target.value)}>
                                        <option value="">Choose Industrial Domain</option>
                                        {domaines.map(domaine=>(<option key={domaine.id} value={domaine.id}>{domaine.titre}</option>))}
                                    </select>

                                </div>



                                <div className=" mb-3">
                                    <label htmlFor="image" className="form-label">Selectionner une image</label>
                                    <input className="form-control" type="file" id="image"
                                           onChange={handlePicture}
                                    />

                                </div>




                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary m-1" type="submit" >Valider</button>
                                    <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter-secteur" aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                </div>

                            </form>
                        </div>
                    </div>




                    <div className="card-body w-100">
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th className="w-auto">Project</th>
                                <th className="w-auto">Description</th>
                                <th className="w-auto">Client</th>
                                <th className="w-auto">Realis?? par</th>
                                <th className="w-auto">Image</th>
                                <th className="w-auto">Action</th>

                            </tr>
                            </thead>
                            <tbody>


                            {
                                projects.map(project=>
                                    (
                                        <tr key={project.id}>
                                            <th className="w-auto">{project.title}</th>
                                            <th className="w-auto">{project.description}</th>
                                            <th className="w-auto">{project.user.nom_jurdique}</th>
                                            <th className="w-auto">{project.societe.nom_soc}</th>
                                            <th className="w-auto"><img className=" img-fluid rounded-3 w-50" src={`http://127.0.0.1:8000/${project.image}`} alt="..." /></th>
                                            <th className="w-auto">
                                                <Link className="btn btn-primary  m-1" to={`${project.title}`} state={project}>Consulter</Link>
                                                <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#project${project.id}`}>Edit</button>
                                                <EditProject project={project} clientIndus={clientIndus} domaines={domaines} societes={societes}/>
                                                <button className="btn  btn-danger  m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletesecteur${project.id}`} aria-expanded="false" aria-controls="collapseExample">Supprimer</button>

                                                <div className="collapse" id={`deletesecteur${project.id}`}>
                                                    <div className="d-flex card card-body align-items-center">
                                                        <h6 className="fw-bolder">Vous voulez confirmer la suppression</h6>
                                                        <div>
                                                            <button className="btn btn-success m-1" onClick={deleteProject(project.id)}>Confirmer</button>
                                                            <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletesecteur${project.id}`} aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>

                                        </tr>
                                    ))
                            }

                            </tbody>
                        </table>

                    </div>
                </div>

            </section>

            <hr className="dropdown-divider"/>

            <section className="  d-flex container">
                <Outlet/>

            </section>
        </div>
    )
}

export default ModifyProjects;