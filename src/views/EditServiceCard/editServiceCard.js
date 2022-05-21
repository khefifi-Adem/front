import React, { useState} from "react";
import axios from "axios";
import swal from "sweetalert";

function EditServiceCard({card}) {

    const initialValues ={ titre: card.titre, icon: card.icon, description:card.description };
    const [updateCard, seUpdatetCard] = useState(initialValues);

    const handleInput = (e) => {

        const { name, value } = e.target;
        seUpdatetCard({ ...updateCard, [name]: value });

    }

    const updateCardData = (e) => {
        e.preventDefault();

        const card_id = card.id;
        const data = updateCard;
        axios.post(`api/card-services-update/${card_id}`, data).then(res=>{
            if (res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                console.log(res.data.status)
                window.location.reload(false);
            }
            else {

                console.log(res.data.status)
            }
        })
    }

    return (
        <div className=" modal fade"   id={`card${card.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content d-flex align-items-center p-2">
                    <h1 className="fw-normal"> Edit {card.titre} card </h1>
                    <form className="w-50" onSubmit={updateCardData}>
                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="titre" type="text" name="titre"
                                   placeholder="Enter your title here..."
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
                            <button className="btn btn-success m-1" type="button" data-bs-dismiss="modal" aria-label="Close">Annuler</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

}

export  default  EditServiceCard;