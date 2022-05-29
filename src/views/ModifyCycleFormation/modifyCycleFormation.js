import React, {useEffect, useState} from 'react';
import axios from "axios";
import swal from "sweetalert";
import {Link, Outlet} from "react-router-dom";
import EditCycle from "../EditCycle/editCycle";

function ModifyCycleFormation() {
    const [cycles, setCycles] = useState([]);
    const [niveaux, setNiveaux] = useState([]);
    const [formateurs, setFormateurs] = useState([]);

    const initialValues ={ title: "",description: "",date_debut: "", date_fin: "",nb_jours:"",nb_heures:"",nb_places:"",etat:"",cout:""};
    const [addCycle, setAddCycle] = useState(initialValues);
    const [selectedFormateur, setSelectedFormateur] = useState([]);
    const [selectedNiveau, setSelectedNiveau] = useState([]);
    const [detailsFile, setDetailsFile] = useState([]);
    const [programmeFile, setProgrammeFile] = useState([]);



    useEffect(()=> {
        const getCycles = async () => {
            await axios.get("api/cycle_formations").then(res => {
                if (res.status === 200) {

                    setCycles(res.data.cycles);
                    console.log(cycles)



                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getCycles();

    },[]);




    const handleInput = (e) => {

        const { name, value } = e.target;
        setAddCycle({ ...addCycle, [name]: value });

    }
    useEffect(()=> {
        const getFormateur = async () => {
            await axios.get("api/formateurs").then(res => {
                if (res.status === 200) {

                    setFormateurs(res.data.users);



                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getFormateur();

    },[]);

    useEffect(()=> {
        const getNiveaux = async () => {
            await axios.get("api/niveaux").then(res => {
                if (res.status === 200) {

                    setNiveaux(res.data.niveaux);



                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getNiveaux();

    },[]);



    const addCycleData = (e) => {
        e.preventDefault();

        const data = [];
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
    const deleteCycle = (e, id) => {

        e.preventDefault();
        axios.delete(`api/cycle_formations/${id}`).then(res=>{

                if (res.status === 200){
                    if (res.data.status === 200)
                    {
                        swal("Success",res.data.message,"success");

                    }
                }
                else {
                    swal("Failed",res.data.message,"failed");
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
                        Cycles Formation List
                    </h1>

                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter-cycle" aria-expanded="false" aria-controls="collapseExample">Créeer Une Cycle</button>


                    <div className="collapse w-100" id="ajouter-cycle">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouer </h1>
                            <form className="w-50" onSubmit={addCycleData}  method="POST">

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
                                           onChange={e=>setDetailsFile(e.target.file)}
                                    />

                                </div>

                                <div className=" mb-3">
                                    <label htmlFor="programme" className="form-label">Selectionner un fichier programme</label>
                                    <input className="form-control" type="file" id="programme"
                                           onChange={e=>setProgrammeFile(e.target.file)}
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
                                        <th className="w-auto">Titre</th>
                                        <th className="w-auto">action</th>

                                    </tr>
                                </thead>
                                <tbody>


                                    {
                                        cycles.map(cycle=>
                                        (
                                        <tr key={cycle.id}>
                                        <th className="w-auto">{cycle.titre}</th>

                                        <th className="w-auto">
                                        <Link className="btn btn-primary  m-1" to={`${cycle.titre}`} state={cycle}>Consulter</Link>
                                        <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#cycle${cycle.id}`}>Edit</button>
                                        <EditCycle cycle={cycle} formateurs={formateurs} niveaux={niveaux} />
                                        <button className="btn  btn-danger  m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletecycle${cycle.id}`} aria-expanded="false" aria-controls="collapseExample">Supprimer</button>

                                        <div className="collapse" id={`deletecycle${cycle.id}`}>
                                        <div className="d-flex card card-body align-items-center">
                                        <h6 className="fw-bolder">Vous voulez confirmer la suppression</h6>
                                        <div>
                                        <button className="btn btn-success m-1" onClick={(e) => deleteCycle(e,cycle.id)}>Confirmer</button>
                                        <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletecycle${cycle.id}`} aria-expanded="false" aria-controls="collapseExample">Annuler</button>
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
export default ModifyCycleFormation