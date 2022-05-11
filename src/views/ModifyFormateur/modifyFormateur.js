import React, {useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";


function ModifyFormateur() {

    const [formateurs, setFormateurs] = useState([]);

    const initialValues ={ nom: "",prenom: "", num_tel: "", adresse: "", email: ""};
    const [updateAdmin, setUpdatetAdmin] = useState(initialValues);

    useEffect(()=> {
        const getAdmins = async () => {
            await axios.get("api/clients-indus").then(res => {
                if (res.status === 200) {

                    setFormateurs(res.data.users);
                    console.log(res.data.users);


                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getAdmins()

    },[])

    const handleInput = (e) => {

        const { name, value } = e.target;
        setUpdatetAdmin({ ...updateAdmin, [name]: value });

    }

    const addAdmin = (e) => {
        e.preventDefault();
        const data= updateAdmin;

        axios.post("api/registerindusclient",data).then(res=>{
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
        <div className="container bg-white rounded-3 shadow-lg">
            {/*<h5 className="display-5 p-20">*/}
            {/*    Client List*/}
            {/*</h5>*/}
            <section className=" d-flex py-5">
                <div className="container d-flex flex-column  align-items-center">
                    <h1>
                        Formateur List
                    </h1>

                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter" aria-expanded="false" aria-controls="collapseExample">Nouveau Admin Industriel</button>


                    <div className="collapse w-100" id="ajouter">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouer </h1>
                            <form className="w-50" onSubmit={addAdmin} >
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="nom" type="text" name="nom"
                                           placeholder="Enter your nom here... "
                                           value={updateAdmin.nom}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="nom_jurdique">Nom</label>

                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="prenom" type="text" name="prenom"
                                           placeholder="Enter your prenom here... "
                                           value={updateAdmin.prenom}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="nom_jurdique">Prénom </label>

                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="num_tel" type="tel" name="num_tel"
                                           placeholder="fontawesome icons , bootstrap icons"
                                           value={updateAdmin.num_tel}
                                           onChange={handleInput}
                                    /><label htmlFor="num_tel">Numero du téléphone</label>
                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="adresse" type="text" name="adresse"
                                           placeholder="fontawesome icons , bootstrap icons"
                                           value={updateAdmin.adresse}
                                           onChange={handleInput}
                                    /><label htmlFor="adresse">Adresse</label>
                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="email" type="email" name="email"
                                           placeholder="fontawesome icons , bootstrap icons"
                                           value={updateAdmin.email}
                                           onChange={handleInput}
                                    /><label htmlFor="email">Email</label>
                                </div>




                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary m-1" type="submit" >Valider</button>
                                    <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter" aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                </div>

                            </form>
                        </div>
                    </div>




                    <div className="card-body w-100">
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th className="w-20">Nom</th>
                                <th className="w-20">Prenom</th>
                                <th className="w-20">Numero du telephone</th>
                                <th className="w-20">Adresse</th>
                                <th className="w-20">Email</th>
                            </tr>
                            </thead>
                            <tbody>


                            {
                                formateurs.map(formateur=>
                                    (
                                        <tr key={formateur.id}>
                                            <th className="w-20">{formateur.nom}</th>
                                            <th className="w-20">{formateur.prenom}</th>
                                            <th className="w-20">{formateur.num_tel}</th>
                                            <th className="w-20">{formateur.adresse}</th>
                                            <th className="w-20">{formateur.email}</th>
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

export default ModifyFormateur;