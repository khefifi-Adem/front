import React, {useEffect, useState} from "react";
import axios from "axios";
import EditCard from "../EditCard/editCard";
import swal from "sweetalert";

function ModifyAcceuil() {


    const [cards, setCards]= useState([]);
    const [pages, setPages]= useState({});

    const initialValueHome = { titre:"", description:"" };
    const [home, setHome] = useState(initialValueHome);

    const [picture, setPicture] = useState([]);

    const initialValues ={ card_head: "", card_icon: "", card_text: ""};
    const [updateCard, setUpdatetCard] = useState(initialValues);

    const handleInput = (e) => {

        const { name, value } = e.target;
        setUpdatetCard({ ...updateCard, [name]: value });

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
        const getPage = async () => {
            await axios.get("api/pages/1").then(res => {
                if (res.status === 200) {

                    setPages(res.data.pages);

                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getPage()

    },[])



    const handleChange = (e) => {
        const { name, value } = e.target;
        setHome({ ...home, [name]: value });
    }

    const handlepicture = (e) => {

        setPicture({ image:e.target.file[0]});
    }

    const addCard = (e) => {
      e.preventDefault();
      const data= updateCard;

      axios.post("api/card-acceuils",data).then(res=>{
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
                                        <th className="w-25">{pages.image_path}</th>
                                        <th className="w-25">
                                            <button className="btn btn-success  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#edit" aria-expanded="false" aria-controls="collapseExample">Edit</button>
                                        </th>
                                    </tr>


                            </tbody>
                        </table>
                        <div className="collapse" id="edit">
                            <div className="d-flex card card-body align-items-center">
                                <h1 className="fw-normal"> Edit </h1>
                                <form className="w-50">
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
                                        <button className="btn btn-primary m-1">Valider</button>
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
                            <h1 className="fw-normal"> Ajouer </h1>
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
                                                <button className="btn btn-success m-1">Confirmer</button>
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
        </div>
    )

}

export default ModifyAcceuil;