import React, {useEffect, useState} from "react";
import axios from "axios";


function ModifyClients() {

    const [clients, setClients] = useState([]);


    useEffect(()=> {
        const getClients = async () => {
            await axios.get("api/clients").then(res => {
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
                        Client List
                    </h1>



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
                                clients.map(client=>
                                (
                                    <tr key={client.id}>
                                        <th className="w-20">{client.nom}</th>
                                        <th className="w-20">{client.prenom}</th>
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

export default ModifyClients;