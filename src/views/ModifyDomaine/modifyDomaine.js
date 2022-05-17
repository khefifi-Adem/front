import React, {useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import {Link, Outlet, useLocation} from "react-router-dom";
import EditDomaine from "../EditDomain/editDomain";

function ModifyDomaines() {

    const location = useLocation();
    console.log(location.state);

    const [domaines, setDomaines] = useState([]);

    const initialValues ={ titre: "",description: ""};
    const [adddomaine, setAdddomaine] = useState(initialValues);

    useEffect(()=> {
        const getDomaine = async () => {
            await axios.get(`api/domaines_find/${location.state}`).then(res => {
                if (res.status === 200) {

                    setDomaines(res.data.domaines);
                    console.log(res.data.domaines);


                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getDomaine()

    },[])

    const handleInput = (e) => {

        const { name, value } = e.target;
        setAdddomaine({ ...adddomaine, [name]: value });

    }

    const addAdmin = (e) => {
        e.preventDefault();
        const data= adddomaine;

        axios.post("api/domaines",data).then(res=>{
                if (res.status === 200){
                    if (res.data.status === 200)
                    {
                        swal("Success",res.data.message,"success");
                        console.log(res.data.status)
                    }
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
                    <h2>
                        Domaines List
                    </h2>

                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter-domaine" aria-expanded="false" aria-controls="collapseExample">Créeer Un Domaine</button>


                    <div className="collapse w-100" id="ajouter-domaine">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouer </h1>
                            <form className="w-50" onSubmit={addAdmin} >
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="titre" type="text" name="titre"
                                           placeholder="Enter your titre here... "
                                           value={adddomaine.titre}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="titre">Titre</label>

                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="description" type="text" name="description"
                                           placeholder="Enter your prenom here... "
                                           value={adddomaine.description}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="description">Description </label>

                                </div>






                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary m-1" type="submit" >Valider</button>
                                    <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter-domaine" aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                </div>

                            </form>
                        </div>
                    </div>




                    <div className="card-body w-100">
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th className="w-20">Domaines</th>
                                <th className="w-20">Description</th>
                                <th className="w-20">Action</th>

                            </tr>
                            </thead>
                            <tbody>


                            {
                                domaines.map(domaine=>
                                    (
                                        <tr key={domaine.id}>
                                            <th className="w-25">{domaine.titre}</th>
                                            <th className="w-50">{domaine.description}</th>
                                            <th className="w-25">
                                                <Link className="btn btn-primary  m-1" to={`${domaine.titre}`} state={domaine.id}>Consulter</Link>
                                                <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#domain${domaine.id}`}>Edit</button>
                                                <EditDomaine domain={domaine}/>
                                                <button className="btn  btn-danger  m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletedomaine${domaine.id}`} aria-expanded="false" aria-controls="collapseExample">Supprimer</button>

                                                <div className="collapse" id={`deletedomaine${domaine.id}`}>
                                                    <div className="d-flex card card-body align-items-center">
                                                        <h6 className="fw-bolder">Vous voulez confirmer la suppression</h6>
                                                        <div>
                                                            <button className="btn btn-success m-1">Confirmer</button>
                                                            <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletedomaine${domaine.id}`} aria-expanded="false" aria-controls="collapseExample">Annuler</button>
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

            <section className="d-flex">
                <Outlet/>

            </section>
        </div>
    )
}

export default ModifyDomaines;