import React, { useState} from "react";
import axios from "axios";
import swal from "sweetalert";

function EditDomaineIndus({indus}) {

    const initialValues ={ titre: indus.titre, description: indus.description};
    const [updateIndus, setUpdateIndus] = useState(initialValues);

    const handleInput = (e) => {

        const { name, value } = e.target;
        setUpdateIndus({ ...updateIndus, [name]: value });

    }

    const updateIndusData = (e) => {
        e.preventDefault();

        const indus_id = indus.id;
        const data = updateIndus;
        axios.post(`api/domaine_indus/${indus_id}`, data).then(res=>{
            if (res.data.status === 200)
            {
                swal("Success",res.data.message,"success");

                window.location.reload(true)
            }
            else {

                console.log(res.data.status)
            }
        })
    }

    return (
        <div className=" modal fade"   id={`indus${indus.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content d-flex align-items-center p-2">
                    <h1 className="fw-normal"> Edit {indus.titre} </h1>
                    <form className="w-50" onSubmit={updateIndusData}>
                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="titre" type="text" name="titre"
                                   placeholder="Enter your title here..."
                                   value={updateIndus.titre}
                                   onChange={handleInput}

                            />
                            <label htmlFor="titre">Titre</label>

                        </div>

                        <div className="form-floating mb-3">
                        <textarea className="form-control" id="description" name="description"
                                  placeholder="Enter your description here..."
                                  value={updateIndus.description}
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

export  default  EditDomaineIndus;