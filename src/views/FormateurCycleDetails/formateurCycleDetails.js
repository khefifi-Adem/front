import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import EditFichier from "../EditFichier/editFichier";

function FomateurCycleDetails() {



    const location = useLocation()
    console.log(location.state.inscription);


    const [fileName,setFileName] = useState([]);
    const [file,setFile] = useState([]);


    const handleFile = (e) => {

        setFile({ file:e.target.files[0]});
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFileName({ ...fileName, [name]: value });
    }
    const addFile = (e) => {
        e.preventDefault();
        const data= new FormData;
        data.append('id_cycle',location.state.id);
        data.append('titre', fileName.titre);
        data.append('file_path',file.file);

        axios.post("api/files",data).then(res=>{

            if (res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                window.location.reload(false);

            }


        })
    }


    const deleteFile = (e, id) => {

        e.preventDefault();
        axios.delete(`api/files/${id}`).then(res=>{

                if (res.data.status === 200)
                {
                    swal("Success",res.data.message,"success");

                    window.location.reload(false);
                }


            }
        )
    }







    const listeCondidat = (inscription) => {
        if (inscription.length !==0)
        {
            return(
                <table className="w-100 table table-bordered table-striped">
                    <thead>

                    <th className="w-auto">Nom</th>
                    <th className="w-auto">Prenom</th>
                    <th className="w-auto">Telephone</th>
                    <th className="w-auto">Email</th>


                    </thead>
                    <tbody className="">


                    {
                        inscription.map(client=>(
                            <tr>
                                <th className="w-auto">{client.clients.nom}</th>
                                <th className="w-auto">{client.clients.prenom}</th>
                                <th className="w-auto">{client.clients.num_tel}</th>
                                <th className="w-auto">{client.clients.email}</th>
                            </tr>
                        ))
                    }


                    </tbody>
                </table>
                )
        }else {
            return (<h3>Aucune Inscription</h3>);
        }
    }

    const listeFiles = (files) => {
        if (files.length !==0)
        {
            return(
                <table className="w-100 table table-bordered table-striped">
                    <thead>

                    <th className="w-auto">Fichier</th>
                    <th className="w-auto">Action</th>



                    </thead>
                    <tbody className="">


                    {
                        files.map(file=>(
                            <tr>
                                <th className="w-auto"><a className="link-info" href={`http://127.0.0.1:8000/${file.file_path}`}> {file.titre} </a></th>
                                <th className="w-auto">
                                    <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#file${file.id}`}>Edit</button>
                                    <EditFichier fileg={file}/>
                                    <button className="btn  btn-danger  m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletefile${file.id}`} aria-expanded="false" aria-controls="collapseExample">Supprimer</button>

                                    <div className="collapse" id={`deletefile${file.id}`}>
                                        <div className="d-flex card card-body align-items-center">
                                            <h6 className="fw-bolder">Vous voulez confirmer la suppression</h6>
                                            <div>
                                                <button className="btn btn-success m-1" onClick={(e) => deleteFile(e,file.id)}>Confirmer</button>
                                                <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletefile${file.id}`} aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                            </div>
                                        </div>
                                    </div>
                                </th>

                            </tr>
                        ))
                    }


                    </tbody>
                </table>
                )
        }else {
            return (<h3>Aucune Fichier</h3>);
        }
    }


    return (
        <div className="cont w-100 ">
            <div className=" w-100 p-5 justify-content-center  ">
                <h4 className="w-100 fw-bold display-4">{location.state.titre}</h4>
                <table className="w-100 table table-bordered table-striped">
                    <tbody className="">
                    <tr>
                        <th className="w-auto">Description</th>
                        <th className="w-auto">{location.state.description}</th>
                    </tr>
                    <tr>
                        <th className="w-auto">Date Debut</th>
                        <th className="w-auto">{location.state.date_debut}</th>
                    </tr>
                    <tr>
                        <th className="w-auto">Date fin</th>
                        <th className="w-auto">{location.state.date_fin}</th>
                    </tr>
                    <tr>
                        <th className="w-auto">Nombre de jours</th>
                        <th className="w-auto">{location.state.nb_jours}</th>
                    </tr>
                    <tr>
                        <th className="w-auto">Nombre d'heures</th>
                        <th className="w-auto">{location.state.nb_heures}</th>
                    </tr>
                    <tr>
                        <th className="w-auto">Nombre des places disponible</th>
                        <th className="w-auto">{location.state.nb_places_dispo}</th>
                    </tr>

                    </tbody>
                </table>

            </div>
            <div className="row m-1">
                <div className="col-6">
                    <h4 className='display-4'>Liste Condidat</h4>
                    {listeCondidat(location.state.inscription)}
                </div>
                <div className="col-6">
                    <h4 className='display-4'>Liste de fichiers</h4>
                    <button className="btn btn-success  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#edit" aria-expanded="false" aria-controls="collapseExample">Ajouter une fichier</button>
                    <div className="collapse" id="edit">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouter Fichier </h1>
                            <form className="w-50" onSubmit={addFile}>
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="titre" type="text" name="titre"
                                           placeholder="Enter your titre here..."
                                           value={fileName.titre}
                                           onChange={handleChange}
                                    />
                                    <label htmlFor="titre">Titre</label>
                                </div>

                                <div className=" mb-3">
                                    <label htmlFor="file" className="form-label">Selectionner fichier</label>
                                    <input className="form-control" type="file" id="file"
                                           onChange={handleFile}
                                    />

                                </div>

                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary m-1" type="submit">Valider</button>
                                    <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target="#edit" aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                </div>

                            </form>
                        </div>
                    </div>
                    {listeFiles(location.state.files)}
                </div>



            </div>






        </div>
    )

}
export default FomateurCycleDetails