import React, {useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";

function EditCycle({cycle,niveaux,formateurs}) {


    const initialValues ={ titre: cycle.titre,description: cycle.description, date_debut: cycle.date_debut, date_fin: cycle.date_fin,nb_jours: cycle.nb_jours, nb_heures: cycle.nb_heures,nb_places: cycle.nb_places,cout: cycle.cout, link : cycle.link};
    const [updateCycle, setUpdateCycle] = useState(initialValues);
    const [selectedFormateur, setSelectedFormateur] = useState([]);


    const [selectedNiveau, setSelectedNiveau] = useState([]);
    const [detailsFile, setDetailsFile] = useState([]);
    const [programmeFile, setProgrammeFile] = useState([]);

    const handleInput = (e) => {

        const { name, value } = e.target;
        setUpdateCycle({ ...updateCycle, [name]: value });

    }

    const handleDetailsFile = (e) => {

        setDetailsFile({ file: e.target.files[0] });

    }
    const handleProgrammeFile = (e) => {

        setProgrammeFile({ file: e.target.files[0] });


    }
    const updateCycleData = (e) => {


        const cycle_id = cycle.id;
        const data = new FormData;
        data.append('titre',updateCycle.titre);
        data.append('description',updateCycle.description);
        data.append('date_debut',updateCycle.date_debut);
        data.append('date_fin',updateCycle.date_fin);
        data.append('nb_jours',updateCycle.nb_jours);
        data.append('nb_places',updateCycle.nb_places);
        data.append('nb_heures',updateCycle.nb_heures);
        data.append('niveau_id',selectedNiveau);
        data.append('formateur_id',selectedFormateur);
        data.append('cout',updateCycle.cout);
        data.append('link',updateCycle.link);

        axios.post(`api/cycle_formations/${cycle_id}`, data).then(res=>{
            if (res.data.status === 200) {
                let res1 = res;
                const fileDetails = new FormData;
                fileDetails.append('file_path',detailsFile.file);
                axios.post(`api/details_files/${cycle.file_details.id}`,fileDetails);
                const fileProgramme = new FormData;
                fileProgramme.append('file_path',programmeFile.file);
                axios.post(`api/programme_files/${cycle.file_programme.id}`,fileProgramme);
                swal("Success",res1.data.message,"success");
                window.location.reload(false);

            }
        })
    }
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(updateCycle,selectedNiveau,selectedFormateur,detailsFile,programmeFile));
        setIsSubmit(true);
    };
    const validate = (updateCycle,selectedNiveau,selectedFormateur,detailsFile,programmeFile) => {
        const errors = {};

        if (!updateCycle.titre) {
            errors.titre = "titre is required!";
        }
        if (!updateCycle.description) {
            errors.description = "description is required!";
        }
        if (!updateCycle.date_debut) {
            errors.date_debut = "date_debut is required!";
        }
        if (!updateCycle.date_fin) {
            errors.date_fin = "date_fin is required!";
        }
        if (!updateCycle.nb_jours) {
            errors.nb_jours = "nb_jours is required!";
        }
        if (!updateCycle.nb_places) {
            errors.nb_places = "nb_places is required!";
        }
        if (!updateCycle.nb_heures) {
            errors.nb_heures = "nb_heures is required!";
        }
        if (!updateCycle.cout) {
            errors.cout = "cout is required!";
        }
        if (!updateCycle.link) {
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
    useEffect(() => {


        if (Object.keys(formErrors).length === 0 && isSubmit) {
            updateCycleData();
        }
    }, [formErrors,isSubmit]);

    return (
        <div className=" modal fade"   id={`cycle${cycle.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content d-flex align-items-center p-2">
                    <h1 className="fw-normal"> Edit {cycle.titre} </h1>
                    <form className="w-50" onSubmit={handleSubmit}  method="POST">

                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="titre" type="text" name="titre"
                                   placeholder="Enter your titre here... "
                                   value={updateCycle.titre}
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
                                   value={updateCycle.description}
                                   onChange={handleInput}

                            />
                            <label htmlFor="description">Description </label>
                            <p>
                                {formErrors.description}
                            </p>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control" id="date_debut" type="date" name="date_debut"
                                   placeholder="Enter your name..." value={updateCycle.date_debut}
                                   onChange={handleInput}/>
                            <label htmlFor="date_debut">Date début</label>
                            <p>
                                {formErrors.date_debut}
                            </p>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control" id="date_fin" type="date" name="date_fin"
                                   placeholder="Enter your name..." value={updateCycle.date_fin}
                                   onChange={handleInput}/>
                            <label htmlFor="date_fin">Date fin</label>
                            <p>
                                {formErrors.date_fin}
                            </p>
                        </div>

                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="nb_jours" type="number" name="nb_jours"
                                   placeholder="Enter your description here... "
                                   value={updateCycle.nb_jours}
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
                                   value={updateCycle.nb_heures}
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
                                   value={updateCycle.nb_places}
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
                                   value={updateCycle.cout}
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
                                   value={updateCycle.link}
                                   onChange={handleInput}
                            />
                            <label htmlFor="link">   Lien du groupe</label>
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
                            <button className="btn btn-danger m-1" type="button" data-bs-dismiss="modal" aria-label="Close">Annuler</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default EditCycle