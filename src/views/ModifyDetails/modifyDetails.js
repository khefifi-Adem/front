import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import {Link, Outlet} from "react-router-dom";
import EditCard from "../EditCard/editCard";
import EditSecteur from "../EditSecteur/editSecteur";

function ModifyDetails() {

    const [secteurs, setSecteurs] = useState([]);

    const initialValues ={ titre: "",description: ""};
    const [addsecteur, setAddsecteur] = useState(initialValues);

    useEffect(()=> {
        const getSecteurs = async () => {
            await axios.get("api/secteurs").then(res => {
                if (res.status === 200) {

                    setSecteurs(res.data.secteurs);


                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getSecteurs()

    },[])

    const handleInput = (e) => {

        const { name, value } = e.target;
        setAddsecteur({ ...addsecteur, [name]: value });

    }

    const addSecteur = (e) => {
        e.preventDefault();
        const data= addsecteur;

        axios.post("api/secteurs",data).then(res=>{
                if (res.status === 200){
                    if (res.data.status === 200)
                    {
                        swal("Success",res.data.message,"success");
                        window.location.reload(false);
                    }
                }
            }
        )
    }


    const deleteSecteurs = useCallback( (id) => {
        return async (e) => {
            e.preventDefault()


            axios.delete(`api/secteurs/${id}`).then(res=>{

                        if (res.data.status === 200)
                        {
                            swal("Success",res.data.message,"success");
                            console.log(res.data.status)
                            window.location.reload(false);
                        }

                }
            )}
    })




    return(
        <div className="container bg-white rounded-3 shadow-lg">
            {/*<h5 className="display-5 p-20">*/}
            {/*    Client List*/}
            {/*</h5>*/}
            <section className=" d-flex py-5">
                <div className="container d-flex flex-column  align-items-center">
                    <h1>
                        Secteurs List
                    </h1>

                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter-secteur" aria-expanded="false" aria-controls="collapseExample">Créeer Un Secteur</button>


                    <div className="collapse w-100" id="ajouter-secteur">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouter </h1>
                            <form className="w-50" onSubmit={addSecteur}  method="POST">

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="titre" type="text" name="titre"
                                           placeholder="Enter your titre here... "
                                           value={addsecteur.titre}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="titre">Titre</label>

                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="description" type="text" name="description"
                                           placeholder="Enter your prenom here... "
                                           value={addsecteur.description}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="description">Description </label>

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
                                <th className="w-20">Secteurs</th>
                                <th className="w-20">Description</th>
                                <th className="w-20">Action</th>

                            </tr>
                            </thead>
                            <tbody>


                            {
                                secteurs.map(secteur=>
                                    (
                                        <tr key={secteur.id}>
                                            <th className="w-25">{secteur.titre}</th>
                                            <th className="w-50">{secteur.description}</th>
                                            <th className="w-25">
                                                <Link className="btn btn-primary  m-1" to={`${secteur.titre}`} state={secteur.id}>Consulter</Link>
                                                <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#secteur${secteur.id}`}>Edit</button>
                                                <EditSecteur secteur={secteur}/>
                                                <button className="btn  btn-danger  m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletesecteur${secteur.id}`} aria-expanded="false" aria-controls="collapseExample">Supprimer</button>

                                                <div className="collapse" id={`deletesecteur${secteur.id}`}>
                                                    <div className="d-flex card card-body align-items-center">
                                                        <h6 className="fw-bolder">Vous voulez confirmer la suppression</h6>
                                                        <div>
                                                            <button className="btn btn-success m-1" type='button' onClick={deleteSecteurs(secteur.id)}>Confirmer</button>
                                                            <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletesecteur${secteur.id}`} aria-expanded="false" aria-controls="collapseExample">Annuler</button>
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

export default ModifyDetails;