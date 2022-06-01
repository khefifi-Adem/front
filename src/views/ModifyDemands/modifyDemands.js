import React, {useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import {Link, Outlet} from "react-router-dom";
import EditCycleIndus from "../EditCycleIndus/editCycleIndus";

function ModifyDemands() {


    const [cycles, setCycles] = useState([]);
    const [niveaux, setNiveaux] = useState([]);
    const [formateurs, setFormateurs] = useState([]);
    const [clients, setClients] = useState([]);

    const initialValues ={ title: "",description: "",date_debut: "", date_fin: "",nb_jours:"",nb_heures:"",nb_places:"",etat:"",cout:""};
    const [addCycle, setAddCycle] = useState(initialValues);
    const [selectedFormateur, setSelectedFormateur] = useState([]);
    const [selectedClient, setSelectedClient] = useState([]);
    const [selectedNiveau, setSelectedNiveau] = useState([]);
    const [detailsFile, setDetailsFile] = useState([]);
    const [programmeFile, setProgrammeFile] = useState([]);
    const [demands, setDemands] = useState([]);




    const deleteCycle = (e, id) => {

        e.preventDefault();
        axios.delete(`api/cycle_indus/${id}`).then(res=>{

                if (res.status === 200){
                    if (res.data.status === 200)
                    {
                        swal("Success",res.data.message,"success");

                    }
                }
                else {
                    swal("Failed",res.data.message,"failed");
                }
            }
        )
    }
    useEffect(()=> {
        const getCycles = async () => {
            await axios.get("api/cycle_indus").then(res => {
                if (res.status === 200) {

                    setCycles(res.data.cycles);

                }
            }).catch((e) => {
                console.log(e)
            });
        };
        const getDemands = async () => {
            await axios.get("api/demande_cycle").then(res => {
                if (res.status === 200) {

                    setDemands(res.data.cycles);

                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getDemands()
        getCycles();

    },[]);
    const handleFileDetails = (e) => {


        setDetailsFile({ file: e.target.files[0] });

    }
    const handleFileProg = (e) => {


        setProgrammeFile({ file: e.target.files[0] });

    }





    useEffect(()=> {
        const getDemands= async () => {
            await axios.get("api/demande_cycle").then(res => {
                if (res.status === 200) {

                    setDemands(res.data.demands);


                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getDemands()

    },[])

    useEffect(()=> {
        const getFormateur = async () => {
            await axios.get("api/formateurs").then(res => {
                if (res.status === 200) {

                    setFormateurs(res.data.users);



                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getFormateur();

    },[]);

    useEffect(()=> {
        const getClient = async () => {
            await axios.get("api/clients-indus").then(res => {
                if (res.status === 200) {

                    setClients(res.data.users);



                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getClient();

    },[]);

    useEffect(()=> {
        const getNiveaux = async () => {
            await axios.get("api/niveaux").then(res => {
                if (res.status === 200) {

                    setNiveaux(res.data.niveaux);



                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getNiveaux();

    },[]);



    const addCycleData = (e) => {

        e.preventDefault();

        const data = new FormData();
        data.append('titre', addCycle.titre);
        data.append('description', addCycle.description);
        data.append('date_debut', addCycle.date_debut);
        data.append('date_fin', addCycle.date_fin);
        data.append('nb_jours', addCycle.nb_jours);
        data.append('nb_heures', addCycle.nb_heures);
        data.append('nb_places', addCycle.nb_places);
        data.append('cout', addCycle.cout);
        data.append('id_user', selectedClient);
        data.append('id_formateur', selectedFormateur);
        data.append('link', addCycle.link);
        data.append('niveau_id', selectedNiveau);


        axios.post("api/cycle_indus", data).then(res => {
            if (res.status === 200) {
                let res1 = res;
                const fileDetails = new FormData;
                fileDetails.append('file_path',detailsFile.file);
                fileDetails.append('id_induses',res1.data.cycle.id);
                axios.post("api/details_files_indus",fileDetails);
                const fileProgramme = new FormData;
                fileProgramme.append('file_path',programmeFile.file);
                fileProgramme.append('id_induses',res1.data.cycle.id);
                axios.post("api/programme_files_indus",fileProgramme);
                swal("Success",res1.data.message,"success");

            }
        });

    }






    const handleInput = (e) => {

        const { name, value } = e.target;
        setAddCycle({ ...addCycle, [name]: value });

    }


    const demandes = (demands) => {
      if (!demands)
      {
          return(<h4>Aucune demande</h4>)
      }else {
          return (<tbody>


          {
              demands.map(demand=>
                  (
                      <tr key={demand.id}>
                          <th className="w-25">{demand.client.nom_jurdique}</th>
                          <th className="w-25">{demand.niveau.titre}</th>
                          <th className="w-25">{demand.type}</th>
                          <th className="w-25">{demand.message}</th>
                      </tr>
                  ))
          }

          </tbody>)
      }
    }


    const cycleData = (cycles) => {
      if (cycles.length === 0)
      {
          return(<h4>Aucune cycle</h4>)
      }else {
          return (
              <tbody>


              {
                  cycles.map(cycle=>
                      (
                          <tr key={cycle.id}>
                              <th className="w-auto">{cycle.titre}</th>

                              <th className="w-auto">
                                  <Link className="btn btn-primary  m-1" to={`${cycle.titre}`} state={cycle}>Consulter</Link>
                                  <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#cycle${cycle.id}`}>Edit</button>
                                  <EditCycleIndus cycle={cycle} formateurs={formateurs} niveaux={niveaux} clients={clients} />
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
          )
      }
    }



    return(
        <div className="container bg-white rounded-3 shadow-lg">

            <section className=" d-flex py-5">
                <div className="container d-flex flex-column  align-items-center">
                    <h1>
                        Demands List
                    </h1>

                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter-cycle" aria-expanded="false" aria-controls="collapseExample">Créeer Une Cycle Industriel</button>


                    <div className="collapse w-100" id="ajouter-cycle">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouter </h1>
                            <form className="w-50" onSubmit={addCycleData}  method="POST">
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="titre" type="text" name="titre"
                                           placeholder="Enter your titre here... "
                                           value={addCycle.titre}
                                           onChange={handleInput}
                                    />
                                    <label htmlFor="titre">Titre</label>
                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="description" type="text" name="description"
                                           placeholder="Enter your description here... "
                                           value={addCycle.description}
                                           onChange={handleInput}
                                    />
                                    <label htmlFor="description">Description </label>

                                </div>

                                <div className="form-floating mb-3">
                                    <input className="form-control" id="date_debut" type="date" name="date_debut"
                                           placeholder="Enter your name..." value={addCycle.date_debut}
                                           onChange={handleInput}/>
                                    <label htmlFor="date_debut">Date début</label>
                                </div>

                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="date_fin" type="date" name="date_fin"
                                               placeholder="Enter your name..." value={addCycle.date_fin}
                                               onChange={handleInput}/>
                                        <label htmlFor="date_fin">Date fin</label>

                                    </div>

                                    <div className="form-floating mb-3 w-100">
                                        <input className="form-control w-100" id="nb_jours" type="number" name="nb_jours"
                                               placeholder="Enter your description here... "
                                               value={addCycle.nb_jours}
                                               onChange={handleInput}

                                        />
                                        <label htmlFor="nb_jours">Nombre de jours </label>

                                    </div>

                                    <div className="form-floating mb-3 w-100">
                                        <input className="form-control w-100" id="nb_heures" type="number" name="nb_heures"
                                               placeholder="Enter your description here... "
                                               value={addCycle.nb_heures}
                                               onChange={handleInput}

                                        />
                                        <label htmlFor="nb_heures">Nombre d'heures </label>

                                    </div>

                                    <div className="form-floating mb-3 w-100">
                                        <input className="form-control w-100" id="nb_places" type="number" name="nb_places"
                                               placeholder="Enter your description here... "
                                               value={addCycle.nb_places}
                                               onChange={handleInput}

                                        />
                                        <label htmlFor="nb_places">Nombre de places </label>

                                    </div>

                                    <div className="form-floating mb-3 w-100">
                                        <input className="form-control w-100" id="cout" type="number" name="cout"
                                               placeholder="Enter your description here... "
                                               value={addCycle.cout}
                                               onChange={handleInput}

                                        />
                                        <label htmlFor="cout">Prix </label>

                                    </div>
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="link" type="text" name="link"
                                           placeholder="Enter your titre here... "
                                           value={addCycle.link}
                                           onChange={handleInput}
                                    />
                                    <label htmlFor="link">    Lien du groupe</label>
                                </div>


                                    <div className="mb-3 w-100">
                                        <select className="form-select" id="id_client_indus"
                                                aria-label="Floating label select example" onChange={e=>setSelectedClient(e.target.value)}>
                                            <option value="">Client</option>
                                            {clients.map(client=>(<option key={client.id} value={client.id}>{client.nom_jurdique}</option>))}
                                        </select>


                                    </div>

                                <div className="mb-3 w-100">
                                        <select className="form-select" id="id_client_indus"
                                                aria-label="Floating label select example" onChange={e=>setSelectedFormateur(e.target.value)}>
                                            <option value="">Formateur</option>
                                            {formateurs.map(formateur=>(<option key={formateur.id} value={formateur.id}>{formateur.nom + ' '+formateur.prenom}</option>))}
                                        </select>


                                    </div>



                                    <div className="mb-3 w-100">
                                        <select className="form-select" id="id_domaine_indus"
                                                aria-label="Floating label select example" onChange={e=>setSelectedNiveau(e.target.value)}>
                                            <option value="">Choose Niveau</option>
                                            {niveaux.map(niveau=>(<option key={niveau.id} value={niveau.id}>{niveau.titre}</option>))}
                                        </select>

                                    </div>



                                    <div className=" mb-3">
                                        <label htmlFor="details" className="form-label">Selectionner un fichier details</label>
                                        <input className="form-control" type="file" id="details"
                                               onChange={handleFileDetails}
                                        />

                                    </div>

                                    <div className=" mb-3">
                                        <label htmlFor="programme" className="form-label">Selectionner un fichier programme</label>
                                        <input className="form-control" type="file" id="programme"
                                               onChange={handleFileProg}
                                        />

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
                                <th className="w-20">Client Industriel</th>
                                <th className="w-20">Niveau</th>
                                <th className="w-20">Type</th>
                                <th className="w-20">Message</th>
                            </tr>
                            </thead>
                            {demandes(demands)}
                        </table>
                    </div>
                </div>
            </section>
            <section className=" d-flex py-5">
                <div className="card-body w-100">
                    <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th className="w-auto">Titre</th>
                            <th className="w-auto">action</th>

                        </tr>
                        </thead>
                        {cycleData(cycles)}
                    </table>
                </div>
            </section>





    <hr className="dropdown-divider"/>

    <section className="  d-flex container">
        <Outlet/>

    </section>

        </div>
) }
export default ModifyDemands;