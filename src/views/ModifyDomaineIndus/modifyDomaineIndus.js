import React, {useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import EditCard from "../EditCard/editCard";
import EditDomaineIndus from "../EditDomainIndus/editDomaineIndus";


function ModifyDomaineIndus() {
    const [domaineIndus, setDomaineIndus] = useState([]);

    const initialValues ={ titre: "",description: ""};
    const [addDomaine, setAddDomaine] = useState(initialValues);

    useEffect(()=> {
        const getDomaineIndus = async () => {
            await axios.get(`api/domaine_indus`).then(res => {
                if (res.status === 200) {

                    setDomaineIndus(res.data.domaineindus);
                    console.log(res.data.domaineindus);


                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getDomaineIndus();

    },[])

    const handleInput = (e) => {

        const { name, value } = e.target;
        setAddDomaine({ ...addDomaine, [name]: value });

    }

    const addAdmin = (e) => {
        e.preventDefault();
        const data= addDomaine;

        axios.post("api/domaine_indus",data).then(res=>{
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
                    <h4>
                        Domaine Industriel List
                    </h4>

                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter-domaine" aria-expanded="false" aria-controls="collapseExample">Créeer Un Domaine Industriel</button>


                    <div className="collapse w-100" id="ajouter-domaine">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouer </h1>
                            <form className="w-50" onSubmit={addAdmin} >
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="titre" type="text" name="titre"
                                           placeholder="Enter your titre here... "
                                           value={addDomaine.titre}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="titre">Titre</label>

                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="description" type="text" name="description"
                                           placeholder="Enter your description here... "
                                           value={addDomaine.description}
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
                                <th className="w-20">Domaines Industriels</th>
                                <th className="w-20">Description</th>
                                <th className="w-20">Action</th>

                            </tr>
                            </thead>
                            <tbody>


                            {
                                domaineIndus.map(indus=>
                                    (
                                        <tr key={indus.id}>
                                            <th className="w-25">{indus.titre}</th>
                                            <th className="w-50">{indus.description}</th>
                                            <th className="w-25">
                                                <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#indus${indus.id}`}>Edit</button>
                                                <EditDomaineIndus indus={indus}/>
                                                <button className="btn  btn-danger  m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deleteindus${indus.id}`} aria-expanded="false" aria-controls="collapseExample">Supprimer</button>

                                                <div className="collapse" id={`deleteindus${indus.id}`}>
                                                    <div className="d-flex card card-body align-items-center">
                                                        <h6 className="fw-bolder">Vous voulez confirmer la suppression</h6>
                                                        <div>
                                                            <button className="btn btn-success m-1">Confirmer</button>
                                                            <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deleteindus${indus.id}`} aria-expanded="false" aria-controls="collapseExample">Annuler</button>
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
export default ModifyDomaineIndus;