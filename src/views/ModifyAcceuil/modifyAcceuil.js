import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import EditCard from "../EditCard/editCard";
import swal from "sweetalert";
import EditPartener from "../EditPartener/editPartener";

function ModifyAcceuil() {


    const [cards, setCards]= useState([]);
    const [pages, setPages]= useState({});
    const [parteners, setParteners]= useState([]);

    const initialValueHome = { titre:"", description:"" };
    const [home, setHome] = useState(initialValueHome);


    const [picture, setPicture] = useState([]);
    const [picturePartner, setPicturePartner] = useState([]);

    const initialValues ={ card_head: "", card_icon: "", card_text: ""};
    const [updateCard, setUpdateCard] = useState(initialValues);
    const [addPartner, setAddPartner] = useState({'partener': "",'partener_description':""});


    const handlePicture = (e) => {

        setPicturePartner({ image:e.target.files[0]});
    }

    const handleInput = (e) => {

        const { name, value } = e.target;
        setUpdateCard({ ...updateCard, [name]: value });

    }

    const handleInputPartener = (e) => {

        const { name, value } = e.target;
        setAddPartner({ ...addPartner, [name]: value });

    }


    useEffect(()=> {
        const getCards = async () => {
            await axios.get("api/card-acceuils").then(res => {
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
        const getPartener = async () => {
            await axios.get("api/nos_parteners").then(res => {
                if (res.status === 200) {

                    setParteners(res.data.partners);

                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getPartener()

    },[])


    useEffect(()=> {
        axios.get("api/pages/1").then(res => {
                if (res.status === 200) {
                    setPages(res.data.pages);
                }
            }).catch((e) => {
                console.log(e)
            });

    },[]);





    const handleChange = (e) => {
        const { name, value } = e.target;
        setHome({ ...home, [name]: value });
    }

    const handlepicture = (e) => {

        setPicture({ image:e.target.files[0]});
    }

    const addCard = (e) => {
      e.preventDefault();
      const data= updateCard;

      axios.post("api/card-acceuils",data).then(res=>{

              if (res.data.status === 200)
              {
                  swal("Success",res.data.message,"success");
                  console.log(res.data.status)
                  window.location.reload(false);
                  }


              })
    }
    const addPartener = (e) => {
      e.preventDefault();
      const data= new FormData();
      data.append('partener',addPartner.partener);
      data.append('partener_description',addPartner.partener_description);
      data.append('image_alt',addPartner.partener);
      data.append('image_path',picturePartner.image);


      axios.post("api/nos_parteners",data).then(res=>{

              if (res.data.status === 200)
              {
                  swal("Success",res.data.message,"success");
                  console.log(res.data.status)
                  window.location.reload(false);
                  }


              })
    }

    const deleteCard = useCallback( (id) => {
        return async (e) => {
            e.preventDefault()


      axios.delete(`api/card-acceuils/${id}`).then(res=>{
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
    const deletePartener = useCallback( (id) => {
        return async (e) => {
            e.preventDefault()


      axios.delete(`api/nos_parteners/${id}`).then(res=>{
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

    const updateAcceuilIntro = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('page_name','home');
        data.append('titre',home.titre);
        data.append('description',home.description);
        data.append('image_path',picture.image);
        axios.post("api/pages/1", data).then(res=>{
            if (res.data.status === 200)
            {
                swal("Success",res.data.message);
                window.location.reload(false);
            }
        })
    }



    return(
        <div className="container bg-white rounded-3 shadow-lg">
            <h5 className="display-5 p-2">
                Acceuil Page
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
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={pages.id}>
                                    <th className="w-25">{pages.titre}</th>
                                    <th className="w-25">{pages.description}</th>
                                    <th className="w-25"><img  className="w-100" src={`http://localhost:8000/${pages.image_path}`}/></th>
                                    <th className="w-25">
                                        <button className="btn btn-success  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#edit" aria-expanded="false" aria-controls="collapseExample">Edit</button>
                                    </th>
                                </tr>

                            </tbody>
                        </table>
                        <div className="collapse" id="edit">
                            <div className="d-flex card card-body align-items-center">
                                <h1 className="fw-normal"> Edit </h1>
                                <form className="w-50" onSubmit={updateAcceuilIntro}>
                                    <div className="form-floating mb-3 w-100">
                                        <input className="form-control w-100" id="titre" type="text" name="titre"
                                               placeholder="Enter your titre here..."
                                               value={home.titre}
                                               onChange={handleChange}
                                            />
                                        <label htmlFor="titre">Titre</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="description" name="description"
                                                  placeholder="Enter your description here..."
                                                  value={home.description}
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


                    </div>
                </div>

            </section>


            <section className=" d-flex py-5">
                <div className="container d-flex flex-column  align-items-center">
                    <h1>
                        Modify page cards
                    </h1>
                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter" aria-expanded="false" aria-controls="collapseExample">Nouveau Card</button>


                    <div className="collapse w-100" id="ajouter">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouter </h1>
                            <form className="w-50" onSubmit={addCard} >
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="titre" type="text" name="card_head"
                                           placeholder="Enter your titre here... "
                                           value={updateCard.card_head}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="titre">Titre</label>

                                </div>
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="icon" type="text" name="card_icon"
                                           placeholder="fontawesome icons , bootstrap icons"
                                           value={updateCard.card_icon}
                                           onChange={handleInput}
                                    /><label htmlFor="icon">Icon</label>
                                </div>
                                <div className="form-floating mb-3">
                        <textarea className="form-control" id="description" name="card_text"
                                  placeholder="Enter your description here..."
                                  value={updateCard.card_text}
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
                                <th className="w-25 font-monospace fw-normal">{card.card_head}</th>
                                <th className="w-25 font-monospace fw-normal">{card.card_icon}</th>
                                <th className="w-25  font-monospace fw-normal m-1">{card.card_text}</th>
                                <th >
                                    <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#card${card.id}`}>Edit</button>
                                    <EditCard card={card}/>
                                    <button className="btn  btn-danger  m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#delete${card.id}`} aria-expanded="false" aria-controls="collapseExample">Supprimer</button>

                                    <div className="collapse" id={`delete${card.id}`}>
                                        <div className="d-flex card card-body align-items-center">
                                            <h6 className="fw-bolder">Vous voulez confirmer la suppression</h6>
                                            <div>
                                                <button className="btn btn-success m-1" type={"button"} onClick={deleteCard(card.id)}>Confirmer</button>
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
                        Modify Partners
                    </h1>
                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouterPartner" aria-expanded="false" aria-controls="collapseExample">Nouveau Partener</button>


                    <div className="collapse w-100" id="ajouterPartner">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouter </h1>
                            <form className="w-50" onSubmit={addPartener} >
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="partener" type="text" name="partener"
                                           placeholder="Enter your partener here... "
                                           value={addPartner.partener}
                                           onChange={handleInputPartener}

                                    />
                                    <label htmlFor="titre">Titre</label>

                                </div>

                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="partener_description" name="partener_description"
                                              placeholder="Enter your description here..."
                                              value={addPartner.partener_description}
                                              onChange={handleInputPartener}
                                    />
                                    <label htmlFor="description">Description</label>

                                </div>

                                <div className=" mb-3">
                                    <label htmlFor="image" className="form-label">Selectionner une image</label>
                                    <input className="form-control" type="file" id="image"
                                           onChange={handlePicture}
                                    />

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
                                parteners.map(partener=>(
                                    <tr key={partener.id}>
                                        <th className="w-25 font-monospace fw-normal">{partener.partener}</th>
                                        <th className="w-25 font-monospace fw-normal">{partener.partener_description}</th>
                                        <th className="w-25  font-monospace fw-normal m-1">
                                            <img  className="w-100" src={`http://localhost:8000/${partener.image_path}`}/>
                                        </th>
                                        <th >
                                            <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#partener${partener.id}`}>Edit</button>
                                            <EditPartener parteners={partener}/>
                                            <button className="btn  btn-danger  m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletePartener${partener.id}`} aria-expanded="false" aria-controls="collapseExample">Supprimer</button>

                                            <div className="collapse" id={`deletePartener${partener.id}`}>
                                                <div className="d-flex card card-body align-items-center">
                                                    <h6 className="fw-bolder">Vous voulez confirmer la suppression</h6>
                                                    <div>
                                                        <button className="btn btn-success m-1" type={"button"} onClick={deletePartener(partener.id)}>Confirmer</button>
                                                        <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletePartener${partener.id}`} aria-expanded="false" aria-controls="collapseExample">Annuler</button>
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
        </div>
    )

}

export default ModifyAcceuil;