import React, {useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";


function ModifyClientsIndus() {

    const [clients, setClients] = useState([]);


    const initialValues ={ nom_jurdique: "", num_tel: "", adresse: "", email: ""};
    const [updateClient, setUpdatetClient] = useState(initialValues);


    const handleInput = (e) => {

        const { name, value } = e.target;
        setUpdatetClient({ ...updateClient, [name]: value });

    }

    const addClient = (e) => {
        e.preventDefault();
        const data= updateClient;

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




    useEffect(()=> {
        const getClients = async () => {
            await axios.get("api/clients-indus").then(res => {
                if (res.status === 200) {

                    setClients(res.data.users);
                    console.log(res.data.users);


                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getClients()

    },[])



    return(
        <div className="container bg-white rounded-3 shadow-lg">
            {/*<h5 className="display-5 p-20">*/}
            {/*    Client List*/}
            {/*</h5>*/}
            <section className=" d-flex py-5">
                <div className="container d-flex flex-column  align-items-center">
                    <h1>
                        Client Insutriels List
                    </h1>

                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter" aria-expanded="false" aria-controls="collapseExample">Nouveau Client Industriel</button>


                    <div className="collapse w-100" id="ajouter">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouer </h1>
                            <form className="w-50" onSubmit={addClient} >
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="nom_jurdique" type="text" name="nom_jurdique"
                                           placeholder="Enter your num_tel here... "
                                           value={updateClient.nom_jurdique}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="nom_jurdique">Nom jurdique</label>

                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="num_tel" type="tel" name="num_tel"
                                           placeholder="fontawesome icons , bootstrap icons"
                                           value={updateClient.num_tel}
                                           onChange={handleInput}
                                    /><label htmlFor="num_tel">Numero du téléphone</label>
                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="adresse" type="text" name="adresse"
                                           placeholder="fontawesome icons , bootstrap icons"
                                           value={updateClient.adresse}
                                           onChange={handleInput}
                                    /><label htmlFor="adresse">Adresse</label>
                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="email" type="email" name="email"
                                           placeholder="fontawesome icons , bootstrap icons"
                                           value={updateClient.email}
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
                                <th className="w-20">Nom Juridique</th>
                                <th className="w-20">Numero du telephone</th>
                                <th className="w-20">Adresse</th>
                                <th className="w-20">Email</th>
                            </tr>
                            </thead>
                            <tbody>


                            {
                                clients.map(client=>
                                    (
                                        <tr key={client.id}>
                                            <th className="w-20">{client.nom_jurdique}</th>
                                            <th className="w-20">{client.num_tel}</th>
                                            <th className="w-20">{client.adresse}</th>
                                            <th className="w-20">{client.email}</th>
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

export default ModifyClientsIndus;