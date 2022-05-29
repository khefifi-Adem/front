import React, { useState} from "react";
import axios from "axios";
import swal from "sweetalert";

function EditProject({project,clientIndus,societes,domaines}) {

    const initialValues ={ title: "", description: ""};
    const [updateProject, setUpdateProject] = useState(initialValues);
    const [selectedSociete, setSelectedSociete] = useState([]);
    const [selectedClient, setSelectedClient] = useState([]);
    const [selectedDomain, setSelectedDomain] = useState([]);
    const [picture, setPicture] = useState([]);
    const handleInput = (e) => {

        const { name, value } = e.target;
        setUpdateProject({ ...updateProject, [name]: value });

    }
    const handlePicture = (e) => {


        setPicture({ image: e.target.files[0] });

    }

    const updateProjectData = (e) => {
        e.preventDefault();

        const project_id = project.id;

        const data = new FormData();
        data.append('image',picture.image )
        data.append('title',updateProject.title )
        data.append('description',updateProject.description )
        data.append('id_soc',selectedSociete )
        data.append('id_client_indus',selectedClient )
        data.append('id_domaine_indus',selectedDomain )

        console.log(data)
        axios.post(`api/projects/${project_id}`, data).then(res=>{
                if (res.status === 200){
                    if (res.data.status === 200)
                    {
                        swal("Success",res.data.message,"success");

                    }
                }
            }
        )
    }

    return (
        <div className=" modal fade"   id={`project${project.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content d-flex align-items-center p-2">
                    <h1 className="fw-normal"> Edit {project.titre} Project </h1>
                    <form className="w-50" onSubmit={updateProjectData}  method="POST">

                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="title" type="text" name="title"
                                   placeholder="Enter your titre here... "
                                   value={updateProject.title}
                                   onChange={handleInput}

                            />
                            <label htmlFor="title">Titre</label>





                        </div>

                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="description" type="text" name="description"
                                   placeholder="Enter your description here... "
                                   value={updateProject.description}
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
                                <option value="">Realisé par</option>
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
                            <button className="btn btn-success m-1" type="button" data-bs-dismiss="modal" aria-label="Close">Annuler</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

}

export  default  EditProject;