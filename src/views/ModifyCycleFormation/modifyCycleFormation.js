import React, {useEffect, useState} from 'react';
import axios from "axios";
import swal from "sweetalert";
import {Link, Outlet} from "react-router-dom";
import EditCycle from "../EditCycle/editCycle";

function ModifyCycleFormation() {
    const [cycles, setCycles] = useState([]);
    const [niveaux, setNiveaux] = useState([]);
    const [formateurs, setFormateurs] = useState([]);


    const [addCycle, setAddCycle] = useState([]);
    const [selectedFormateur, setSelectedFormateur] = useState([]);
    const [selectedNiveau, setSelectedNiveau] = useState([]);
    const [detailsFile, setDetailsFile] = useState([]);
    const [programmeFile, setProgrammeFile] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(addCycle,selectedNiveau,selectedFormateur,detailsFile,programmeFile));
        setIsSubmit(true);
    };
    const validate = (addCycle,selectedNiveau,selectedFormateur,detailsFile,programmeFile) => {
        const errors = {};

        if (!addCycle.titre) {
            errors.titre = "titre is required!";
        }
        if (!addCycle.description) {
            errors.description = "description is required!";
        }
        if (!addCycle.date_debut) {
            errors.date_debut = "date_debut is required!";
        }
        if (!addCycle.date_fin) {
            errors.date_fin = "date_fin is required!";
        }
        if (!addCycle.nb_jours) {
            errors.nb_jours = "nb_jours is required!";
        }
        if (!addCycle.nb_places) {
            errors.nb_places = "nb_places is required!";
        }
        if (!addCycle.nb_heures) {
            errors.nb_heures = "nb_heures is required!";
        }
        if (!addCycle.cout) {
            errors.cout = "cout is required!";
        }
        if (!addCycle.link) {
            errors.link = "link is required!";
        }
        if (selectedNiveau === 0) {
            errors.niveau = "niveau is required!";
        }
        if (selectedFormateur === 0) {
            errors.formateur = "formateur is required!";
        }
        if (!programmeFile.file) {
            errors.fileProgramme = "File is required!";
        }
        if (!detailsFile.file) {
            errors.fileDetails = "File is required!";
        }

        return errors;
    };






    useEffect(()=> {
        const getCycles = async () => {
            await axios.get("api/cycle_formations").then(res => {
                if (res.data.status === 200) {

                    setCycles(res.data.cycles);




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
    const handleDetailsFile = (e) => {

        setDetailsFile({ file: e.target.files[0] });

    }
    const handleProgrammeFile = (e) => {

        setProgrammeFile({ file: e.target.files[0] });


    }
    useEffect(()=> {
        const getFormateur = async () => {
            await axios.get("api/formateurs").then(res => {
                if (res.data.status === 200) {

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
                if (res.data.status === 200) {

                    setNiveaux(res.data.niveaux);



                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getNiveaux();

    },[]);
    useEffect(() => {


        if (Object.keys(formErrors).length === 0 && isSubmit) {
            addCycleData();
        }
    }, [formErrors,isSubmit]);



    const addCycleData = () => {

        const data = new FormData;
        data.append('titre',addCycle.titre);
        data.append('description',addCycle.description);
        data.append('date_debut',addCycle.date_debut);
        data.append('date_fin',addCycle.date_fin);
        data.append('nb_jours',addCycle.nb_jours);
        data.append('nb_places',addCycle.nb_places);
        data.append('nb_heures',addCycle.nb_heures);
        data.append('niveau_id',selectedNiveau);
        data.append('formateur_id',selectedFormateur);
        data.append('cout',addCycle.cout);
        data.append('link',addCycle.link);






        axios.post("api/cycle_formations",data).then(res=> {
            if (res.data.status === 200) {
                let res1 = res;
                console.log(res1);
                const fileDetails = new FormData;
                fileDetails.append('file_path',detailsFile.file);
                fileDetails.append('id_cycle',res1.data.cycle.id);
                axios.post("api/details_files",fileDetails);
                const fileProgramme = new FormData;
                fileProgramme.append('file_path',programmeFile.file);
                fileProgramme.append('id_cycle',res1.data.cycle.id);
                axios.post("api/programme_files",fileProgramme);
                swal("Success",res1.data.message,"success");
                // window.location.reload(false);

            }
        })
    }








    const deleteCycle = (e, id) => {

        e.preventDefault();
        axios.delete(`api/cycle_formations/${id}`).then(res=>{


                    if (res.data.status === 200)
                    {
                        swal("Success",res.data.message,"success");
                        window.location.reload(false);
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
                            <h1 className="fw-normal"> Ajouter </h1>
                            <form className="w-50" onSubmit={handleSubmit}  method="POST">

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="titre" type="text" name="titre"
                                           placeholder="Enter your titre here... "
                                           value={addCycle.titre}
                                           onChange={handleInput}
                                    />
                                    <label htmlFor="titre">Titre</label>
                                    <p>
                                        {formErrors.titre}
                                    </p>
                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="description" type="text" name="description"
                                           placeholder="Enter your description here... "
                                           value={addCycle.description}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="description">Description </label>
                                    <p>
                                        {formErrors.description}
                                    </p>
                                </div>


                                <div className="form-floating mb-3">
                                    <input className="form-control" id="date_debut" type="date" name="date_debut"
                                           placeholder="Enter your name..." value={addCycle.date_debut}
                                           onChange={handleInput}/>
                                    <label htmlFor="date_debut">Date début</label>
                                    <p>
                                        {formErrors.date_debut}
                                    </p>

                                </div>

                                <div className="form-floating mb-3">
                                    <input className="form-control" id="date_fin" type="date" name="date_fin"
                                           placeholder="Enter your name..." value={addCycle.date_fin}
                                           onChange={handleInput}/>
                                    <label htmlFor="date_fin">Date fin</label>
                                    <p>
                                        {formErrors.date_fin}
                                    </p>
                                </div>


                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="nb_jours" type="number" name="nb_jours"
                                           placeholder="Enter your description here... "
                                           value={addCycle.nb_jours}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="nb_jours">Nombre de jours </label>
                                    <p>
                                        {formErrors.nb_jours}
                                    </p>
                                </div>


                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="nb_heures" type="number" name="nb_heures"
                                           placeholder="Enter your description here... "
                                           value={addCycle.nb_heures}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="nb_heures">Nombre d'heures </label>
                                    <p>
                                        {formErrors.nb_heures}
                                    </p>
                                </div>


                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="nb_places" type="number" name="nb_places"
                                           placeholder="Enter your description here... "
                                           value={addCycle.nb_places}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="nb_places">Nombre de places </label>
                                    <p>
                                        {formErrors.nb_places}
                                    </p>
                                </div>


                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="cout" type="number" name="cout"
                                           placeholder="Enter your description here... "
                                           value={addCycle.cout}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="cout">Prix </label>
                                    <p>
                                        {formErrors.cout}
                                    </p>
                                </div>


                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="link" type="text" name="link"
                                           placeholder="Enter your titre here... "
                                           value={addCycle.link}
                                           onChange={handleInput}
                                    />
                                    <label htmlFor="link">    Lien du groupe</label>
                                    <p>
                                        {formErrors.link}
                                    </p>
                                </div>

                                <div className="mb-3 w-100">
                                    <select className="form-select" id="id_client_indus"
                                            aria-label="Floating label select example" onChange={e=>setSelectedFormateur(e.target.value)}>
                                        <option value={0}>Formateur</option>
                                        {formateurs.map(formateur=>(<option key={formateur.id} value={formateur.id}>{formateur.nom + ' '+formateur.prenom}</option>))}
                                    </select>
                                    <p>
                                        {formErrors.formateur}
                                    </p>
                                </div>



                                <div className="mb-3 w-100">
                                    <select className="form-select" id="id_domaine_indus"
                                            aria-label="Floating label select example" onChange={e=>setSelectedNiveau(e.target.value)}>
                                        <option value={0}>Choose Niveau</option>
                                        {niveaux.map(niveau=>(<option key={niveau.id} value={niveau.id}>{niveau.titre}</option>))}
                                    </select>
                                    <p>
                                        {formErrors.niveau}
                                    </p>
                                </div>



                                <div className=" mb-3">
                                    <label htmlFor="details" className="form-label">Selectionner un fichier details</label>
                                    <input className="form-control" type="file" id="details"
                                           onChange={handleDetailsFile}
                                    />
                                    <p>
                                        {formErrors.fileDetails}
                                    </p>
                                </div>

                                <div className=" mb-3">
                                    <label htmlFor="programme" className="form-label">Selectionner un fichier programme</label>
                                    <input className="form-control" type="file" id="programme"
                                           onChange={handleProgrammeFile}
                                    />
                                    <p>
                                        {formErrors.fileProgramme}
                                    </p>
                                </div>




                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary m-1" type="submit" >Valider</button>
                                    <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter-cycle" aria-expanded="false" aria-controls="collapseExample">Annuler</button>
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