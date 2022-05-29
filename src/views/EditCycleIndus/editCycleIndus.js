import React, {useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";

function EditCycleIndus({cycle,niveaux,formateurs,clients}) {


    const initialValues ={ title: "",description: "",date_debut: "", date_fin: "",nb_jours:"",nb_heures:"",nb_places:"",etat:"",cout:""};
    const [addCycle, setAddCycle] = useState(initialValues);
    const [selectedFormateur, setSelectedFormateur] = useState([]);
    const [selectedClient, setSelectedClient] = useState([]);
    const [selectedNiveau, setSelectedNiveau] = useState([]);
    const [detailsFile, setDetailsFile] = useState([]);
    const [programmeFile, setProgrammeFile] = useState([]);


    const handleFileDetails = (e) => {


        setDetailsFile({ file: e.target.files[0] });

    }
    const handleFileProg = (e) => {


        setProgrammeFile({ file: e.target.files[0] });

    }


    const updateCycleData = (e) => {

        e.preventDefault();

        const data = new FormData();
        data.append('titre',addCycle.titre);
        data.append('description',addCycle.description);
        data.append('date_debut',addCycle.date_debut);
        data.append('date_fin',addCycle.date_fin);
        data.append('nb_jours',addCycle.nb_jours);
        data.append('nb_heures',addCycle.nb_heures);
        data.append('nb_places',addCycle.nb_places);
        data.append('cout',addCycle.cout);
        data.append('id_user',selectedClient);
        data.append('id_formateur',selectedFormateur);
        data.append('niveau_id',selectedNiveau);


        const dataDetails = new FormData();
        dataDetails.append('file_path',detailsFile.file)
        const dataProgs = new FormData();
        dataProgs.append('file_path',programmeFile.file)



        axios.post(`api/cycle_indus/${cycle.id}`,data).then(res=>{
                if (res.status === 200){
                    if (res.data.status === 200)

                    {
                        swal("Success",res.data.message,"success");
                        axios.post(`details_files/${cycle.details.id}`,dataDetails).then(resD=>{
                            if (resD.data.status === 200 ){
                                swal("Success",res.data.message,"success");
                            }
                        });

                        axios.post(`programme_files/${cycle.programme.id}`,dataProgs).then(resP=>{
                            if (resP.data.status === 200 ){
                                swal("Success",res.data.message,"success");
                            }
                        });

                    }
                }
            }
        )
    }


    const handleInput = (e) => {

        const { name, value } = e.target;
        setAddCycle({ ...addCycle, [name]: value });

    }

    return (
        <div className=" modal fade"   id={`cycle${cycle.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content d-flex align-items-center p-2">
                    <h1 className="fw-normal"> Edit {cycle.titre} </h1>
                    <form className="w-50" onSubmit={updateCycleData}  method="POST">
                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="titre" type="text" name="titre"
                                   placeholder="Enter your titre here... "
                                   value={addCycle.titre}
                                   onChange={handleInput}
                            />
                            <label htmlFor="titre">Titre</label>
                        </div>

                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="description" type="text" name="description"
                                   placeholder="Enter your description here... "
                                   value={addCycle.description}
                                   onChange={handleInput}
                            />
                            <label htmlFor="description">Description </label>

                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control" id="date_debut" type="date" name="date_debut"
                                   placeholder="Enter your name..." value={addCycle.date_debut}
                                   onChange={handleInput}/>
                            <label htmlFor="date_debut">Date début</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control" id="date_fin" type="date" name="date_fin"
                                   placeholder="Enter your name..." value={addCycle.date_fin}
                                   onChange={handleInput}/>
                            <label htmlFor="date_fin">Date fin</label>

                        </div>

                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="nb_jours" type="number" name="nb_jours"
                                   placeholder="Enter your description here... "
                                   value={addCycle.nb_jours}
                                   onChange={handleInput}

                            />
                            <label htmlFor="nb_jours">Nombre de jours </label>

                        </div>

                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="nb_heures" type="number" name="nb_heures"
                                   placeholder="Enter your description here... "
                                   value={addCycle.nb_heures}
                                   onChange={handleInput}

                            />
                            <label htmlFor="nb_heures">Nombre d'heures </label>

                        </div>

                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="nb_places" type="number" name="nb_places"
                                   placeholder="Enter your description here... "
                                   value={addCycle.nb_places}
                                   onChange={handleInput}

                            />
                            <label htmlFor="nb_places">Nombre de places </label>

                        </div>

                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="cout" type="number" name="cout"
                                   placeholder="Enter your description here... "
                                   value={addCycle.cout}
                                   onChange={handleInput}

                            />
                            <label htmlFor="cout">Prix </label>

                        </div>



                        <div className="mb-3 w-100">
                            <select className="form-select" id="id_client_indus"
                                    aria-label="Floating label select example" onChange={e=>setSelectedClient(e.target.value)}>
                                <option value="">Client</option>
                                {clients.map(client=>(<option key={client.id} value={client.id}>{client.nom_jurdique}</option>))}
                            </select>


                        </div>

                        <div className="mb-3 w-100">
                            <select className="form-select" id="id_client_indus"
                                    aria-label="Floating label select example" onChange={e=>setSelectedFormateur(e.target.value)}>
                                <option value="">Formateur</option>
                                {formateurs.map(formateur=>(<option key={formateur.id} value={formateur.id}>{formateur.nom + ' '+formateur.prenom}</option>))}
                            </select>


                        </div>



                        <div className="mb-3 w-100">
                            <select className="form-select" id="id_domaine_indus"
                                    aria-label="Floating label select example" onChange={e=>setSelectedNiveau(e.target.value)}>
                                <option value="">Choose Niveau</option>
                                {niveaux.map(niveau=>(<option key={niveau.id} value={niveau.id}>{niveau.titre}</option>))}
                            </select>

                        </div>



                        <div className=" mb-3">
                            <label htmlFor="details" className="form-label">Selectionner un fichier details</label>
                            <input className="form-control" type="file" id="details"
                                   onChange={handleFileDetails}
                            />

                        </div>

                        <div className=" mb-3">
                            <label htmlFor="programme" className="form-label">Selectionner un fichier programme</label>
                            <input className="form-control" type="file" id="programme"
                                   onChange={handleFileProg}
                            />

                        </div>




                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary m-1" type="submit" >Valider</button>
                            <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#cycle${cycle.id}`} aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default EditCycleIndus;