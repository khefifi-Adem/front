import React, { useState} from "react";
import axios from "axios";
import swal from "sweetalert";

function EditService({service}) {

    const initialValues ={ titre: service.titre, description: service.description};
    const [updateService, seUpdatetService] = useState(initialValues);
    const [picture, setPicture] = useState([]);

    const handleInput = (e) => {

        const { name, value } = e.target;
        seUpdatetService({ ...updateService, [name]: value });

    }

    const handlepicture = (e) => {

        setPicture({ image:e.target.files[0]});
    }


    const updateServiceData = (e) => {
        e.preventDefault();

        const service_id = service.id;

        const data = new FormData();

        data.append('titre',updateService.titre);
        data.append('description',updateService.description);
        data.append('image_path',picture.image);


        axios.post(`api/services/${service_id}`, data).then(res=>{
            if (res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                window.location.reload(false);
            }
            else {

                console.log(res.data.status)
            }
        })
    }

    return (
        <div className=" modal fade"   id={`service${service.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content d-flex align-items-center p-2">
                    <h1 className="fw-normal "> Edit {service.titre}  </h1>
                    <form className="w-75" onSubmit={updateServiceData}>
                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="titre" type="text" name="titre"
                                   placeholder="Enter your title here..."
                                   value={updateService.titre}
                                   onChange={handleInput}

                            />
                            <label htmlFor="titre">Titre</label>

                        </div>
                        <div className="form-floating mb-3 w-100">
                            <textarea className="form-control" id="description" name="description"
                                      placeholder="Enter your description here..."
                                      value={updateService.description}
                                      onChange={handleInput}
                            /><label htmlFor="description">Description</label>
                        </div>
                        <div className="form-floating mb-3">
                            <div className=" mb-3">
                                <label htmlFor="image" className="form-label">Selectionner une image</label>
                                <input className="form-control" type="file" id="image"
                                       onChange={handlepicture}
                                />

                            </div>
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

export  default  EditService;