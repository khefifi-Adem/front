import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import {useLocation} from "react-router-dom";
import EditNiveau from "../EditNiveaux/editNiveau";

function ModifyNiveaux() {

    const location = useLocation();



    const [niveaux, setNiveaux] = useState([]);

    const initialValues ={ titre: "",description: "",theme_id: location.state};
    const [addniveau, setAddniveau] = useState([initialValues]);


    const [file,setFile] = useState([]);
    const handleFile = (e) => {

        setFile({ file:e.target.files[0]});
    }

    const deleteNiveau = useCallback( (id) => {
        return async (e) => {
            e.preventDefault()


            axios.delete(`api/niveaux/${id}`).then(res=>{
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
        const getNiveaux = async () => {
            await axios.get(`api/niveaux_find/${location.state}`).then(res => {
                if (res.status === 200) {

                    setNiveaux(res.data.niveaux);



                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getNiveaux();

    },[])

    const handleInput = (e) => {

        const { name, value } = e.target;
        setAddniveau({ ...addniveau, [name]: value });

    }

    const addAdmin = (e) => {
        e.preventDefault();
        const data= new FormData;
        data.append('titre',addniveau.titre);
        data.append('description', addniveau.description);
        data.append('file_path',file.file);
        data.append('theme_id',location.state);


        axios.post("api/niveaux",data).then(res=>{
                    if (res.data.status === 200)
                    {
                        swal("Success",res.data.message,"success");
                        window.location.reload(false);

                    }

            }
        )
    }






    return(
        <div className="container bg-white rounded-3 shadow-sm">
            {/*<h5 className="display-5 p-20">*/}
            {/*    Client List*/}
            {/*</h5>*/}
            <section className=" d-flex py-5">
                <div className="container d-flex flex-column  align-items-center">
                    <h4>
                        Niveaux List
                    </h4>

                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter-niveau" aria-expanded="false" aria-controls="collapseExample">Créeer Un Niveau</button>


                    <div className="collapse w-100" id="ajouter-niveau">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouter </h1>
                            <form className="w-50" onSubmit={addAdmin} >
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="titre" type="text" name="titre"
                                           placeholder="Enter your titre here... "
                                           value={addniveau.titre}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="titre">Titre</label>

                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="description" type="text" name="description"
                                           placeholder="Enter your description here... "
                                           value={addniveau.description}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="description">Description </label>

                                </div>
                                <div className=" mb-3">
                                    <label htmlFor="file" className="form-label">Selectionner fichier</label>
                                    <input className="form-control" type="file" id="file"
                                           onChange={handleFile}
                                    />

                                </div>





                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary m-1" type="submit" >Valider</button>
                                    <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter-niveau" aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                </div>

                            </form>
                        </div>
                    </div>




                    <div className="card-body w-100">
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th className="w-20">Niveaux</th>
                                <th className="w-20">Description</th>
                                <th className="w-20">Files</th>
                                <th className="w-20">Action</th>

                            </tr>
                            </thead>
                            <tbody>


                            {
                                niveaux.map(niveau=>
                                    (
                                        <tr key={niveau.id}>
                                            <th className="w-auto">{niveau.titre}</th>
                                            <th className="w-auto">{niveau.description}</th>
                                            <th className="w-auto"><a className="link-info" href={`http://127.0.0.1:8000/${niveau.file_path}`}> Download file </a></th>
                                            <th className="w-auto">
                                                <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#niveau${niveau.id}`}>Edit</button>
                                                <EditNiveau niveau={niveau}/>
                                                <button className="btn  btn-danger  m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deleteniveau${niveau.id}`} aria-expanded="false" aria-controls="collapseExample">Supprimer</button>

                                                <div className="collapse" id={`deleteniveau${niveau.id}`}>
                                                    <div className="d-flex card card-body align-items-center">
                                                        <h6 className="fw-bolder">Vous voulez confirmer la suppression</h6>
                                                        <div>
                                                            <button className="btn btn-success m-1" onClick={deleteNiveau(niveau.id)}>Confirmer</button>
                                                            <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deleteniveau${niveau.id}`} aria-expanded="false" aria-controls="collapseExample">Annuler</button>
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
        </div>
    )
}

export default ModifyNiveaux;