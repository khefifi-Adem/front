import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import swal from "sweetalert";
import EditServiceCard from "../EditServiceCard/editServiceCard";
import EditService from "../EditService/editService";

function ModifyServices() {
    const [cards, setCards]= useState([]);
    const [pages, setPages]= useState({});
    const [services, setServices] = useState([])

    const initialValueService = { titre:"", description:"" };
    const [addServices, setAddServices] = useState(initialValueService)
    const [picture, setPicture] = useState([]);


    const deleteService = useCallback( (id) => {
        return async (e) => {
            e.preventDefault()


            axios.delete(`api/services/${id}`).then(res=>{
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

    const deleteCardService = useCallback( (id) => {
        return async (e) => {
            e.preventDefault()


            axios.delete(`api/card-services/${id}`).then(res=>{
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


    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddServices({ ...addServices, [name]: value });
    }

    const handlepicture = (e) => {

        setPicture({ image:e.target.files[0]});
    }




    const initialValueHome = { page_name: 'services',titre:"", description:"" };
    const [home, setHome] = useState(initialValueHome);



    const initialValues ={ titre: "", icon: "", description: ""};
    const [updateCard, seUpdatetCard] = useState(initialValues);

    const handleInput = (e) => {

        const { name, value } = e.target;
        seUpdatetCard({ ...updateCard, [name]: value });

    }

    useEffect(()=> {
        const getCards = async () => {
            await axios.get("api/card-services").then(res => {
                if (res.status === 200) {

                    setCards(res.data.cards);

                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getCards()

    },[])

    useEffect(()=> {
        const getPage = async () => {
            await axios.get('api/pages/2').then(res => {
                if (res.status === 200)
                {
                    setPages(res.data.pages);

                }
            }).catch((e) => {
                console.log( e)
            });
        };
        getPage()
    },[])

    useEffect(()=> {
        const getService = async () => {
            await axios.get('api/services').then(res => {
                if (res.status === 200) {
                    setServices(res.data.services);

                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getService();

    },[])

    const handleChangeHome = (e) => {
        const { name, value } = e.target;
        setHome({ ...home, [name]: value });
    }




    const addCard = (e) => {
        e.preventDefault();
        const data= updateCard;

        axios.post("http://127.0.0.1:8000/api/card-services",data).then(res=>{
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

    const addService = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append('titre',addServices.titre);
        data.append('description',addServices.description);
        data.append('image_path',picture.image);

        axios.post("api/services", data).then(res=>{
            if (res.data.status === 200)
            {
                swal("Success",res.data.message);
                window.location.reload(false);
            }
        })
    }

    const updateServiceIntro = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('page_name', 'servives');
        data.append('titre', home.titre);
        data.append('description', home.description);

        axios.post("api/pages/2", data).then(res=>{
            if (res.data.status === 200)
            {
                swal("Success",res.data.message);
                window.location.reload(false);
            }
        })
    }



    return(
        <div className="container bg-white rounded-3 shadow-lg">
            <h5 className="display-5 p-20">
                Serices Page
            </h5>
            <section className=" d-flex py-5">
                <div className="container d-flex flex-column  align-items-center">
                    <h1>
                        Modify displayed data at the head of page
                    </h1>



                    <div className="card-body w-100">
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>




                            <tr key={pages.id}>
                                <th className="w-25">{pages.titre}</th>
                                <th className="w-25">{pages.description}</th>
                                <th className="w-25">
                                    <button className="btn btn-success  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#edit" aria-expanded="false" aria-controls="collapseExample">Edit</button>
                                </th>
                            </tr>


                            </tbody>
                        </table>
                        <div className="collapse" id="edit">
                            <div className="d-flex card card-body align-items-center">
                                <h1 className="fw-normal"> Edit </h1>
                                <form className="w-50" onSubmit={updateServiceIntro}>
                                    <div className="form-floating mb-3 w-100">
                                        <input className="form-control w-100" id="titre" type="text" name="titre"
                                               placeholder="Enter your titre here..."
                                               value={home.titre}
                                               onChange={handleChangeHome}
                                        />
                                        <label htmlFor="titre">Titre</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="description" name="description"
                                                  placeholder="Enter your description here..."
                                                  value={home.description}
                                                  onChange={handleChangeHome}
                                        />
                                        <label htmlFor="description">Description</label>

                                    </div>



                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-primary m-1" type="submit">Valider</button>
                                        <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target="#edit" aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                    </div>

                                </form>
                            </div>
                        </div>


                    </div>
                </div>

            </section>


            <section className=" d-flex py-5">
                <div className="container d-flex flex-column  align-items-center">
                    <h1>
                        Modify ??tape cards
                    </h1>
                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter" aria-expanded="false" aria-controls="collapseExample">Nouveau Card</button>


                    <div className="collapse w-100" id="ajouter">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouter </h1>
                            <form className="w-50" onSubmit={addCard} >
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="titre" type="text" name="titre"
                                           placeholder="Enter your titre here... "
                                           value={updateCard.titre}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="titre">Titre</label>

                                </div>
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="icon" type="text" name="icon"
                                           placeholder="fontawesome icons , bootstrap icons"
                                           value={updateCard.icon}
                                           onChange={handleInput}
                                    /><label htmlFor="icon">Icon</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="description" name="description"
                                              placeholder="Enter your description here..."
                                              value={updateCard.description}
                                              onChange={handleInput}
                                    />
                                    <label htmlFor="description">Description</label>

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
                                <th>Titre</th>
                                <th>Icon</th>
                                <th>Text</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                cards.map(card=>(

                                    <tr key={card.id}>
                                        <th className="w-25 font-monospace fw-normal">{card.titre}</th>
                                        <th className="w-25 font-monospace fw-normal">{card.icon}</th>
                                        <th className="w-25  font-monospace fw-normal m-1">{card.description}</th>
                                        <th >
                                            <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#card${card.id}`}>Edit</button>
                                            <EditServiceCard card={card}/>
                                            <button className="btn  btn-danger  m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#delete${card.id}`} aria-expanded="false" aria-controls="collapseExample">Supprimer</button>
                                            <div className="collapse" id={`delete${card.id}`}>
                                                <div className="d-flex card card-body align-items-center">
                                                    <h6 className="fw-bolder">Vous voulez confirmer la suppression</h6>
                                                    <div>
                                                        <button className="btn btn-success m-1" type={"button"} onClick={deleteCardService(card.id)}>Confirmer</button>
                                                        <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#delete${card.id}`} aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>

                                    </tr>


                                ))}

                            </tbody>
                        </table>



                    </div>

                </div>

            </section>


            <section className=" d-flex py-5">
                <div className="container d-flex flex-column  align-items-center">
                    <h1>
                        Modify services
                    </h1>
                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter-service" aria-expanded="false" aria-controls="collapseExample">Nouveau Service</button>

                    <div className="collapse w-100" id="ajouter-service">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Edit </h1>
                            <form className="w-50" onSubmit={addService}>
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="titre" type="text" name="titre"
                                           placeholder="Enter your titre here..."
                                           value={setAddServices.titre}
                                           onChange={handleChange}
                                    />
                                    <label htmlFor="titre">Titre</label>
                                </div>

                                <div className="form-floating mb-3">
                                        <textarea className="form-control" id="description" name="description"
                                                  placeholder="Enter your description here..."
                                                  value={setAddServices.description}
                                                  onChange={handleChange}
                                        />
                                    <label htmlFor="description">Description</label>

                                </div>

                                <div className=" mb-3">
                                    <label htmlFor="image" className="form-label">Selectionner une image</label>
                                    <input className="form-control" type="file" id="image"
                                           onChange={handlepicture}
                                    />

                                </div>

                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary m-1" type="submit">Valider</button>
                                    <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target="#edit" aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                </div>

                            </form>
                        </div>
                    </div>



                    <div className="card-body w-100">
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>


                            {
                                services.map(service=>
                                (
                                    <tr key={service.id}>
                                        <th className="w-25">{service.titre}</th>
                                        <th className="w-25">{service.description}</th>
                                        <th className="w-25">
                                            <img  className="w-100" src={`http://localhost:8000/${service.image_path}`}/>
                                            </th>
                                        <th className="w-25">
                                            <th>
                                                <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#service${service.id}`}>Edit</button>
                                                <EditService service={service}/>
                                                <button className="btn  btn-danger  m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletes${service.id}`} aria-expanded="false" aria-controls="collapseExample">Supprimer</button>
                                            </th>
                                            <div className="collapse" id={`deletes${service.id}`}>
                                                <div className="d-flex card card-body align-items-center">
                                                    <h6 className="fw-bolder">Vous voulez confirmer la suppression</h6>
                                                    <div>
                                                        <button className="btn btn-success m-1" type={"button"} onClick={deleteService(service.id)}>Confirmer</button>
                                                        <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletes${service.id}`} aria-expanded="false" aria-controls="collapseExample">Annuler</button>
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

export default ModifyServices;