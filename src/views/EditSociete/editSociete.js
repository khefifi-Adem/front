import React, { useState} from "react";
import axios from "axios";
import swal from "sweetalert";

function EditSociete({societe}) {


    const initialValues ={ nom_soc: societe.nom_soc, description: societe.description};
    const [updatesociete, seUpdatetsociete] = useState(initialValues);
    const [picture, setPicture] = useState([]);

    const handleInput = (e) => {

        const { name, value } = e.target;
        seUpdatetsociete({ ...updatesociete, [name]: value });

    }

    const handlepicture = (e) => {

        setPicture({ image:e.target.files[0]});
    }


    const updateSocieteData = (e) => {
        e.preventDefault();

        const societe_id = societe.id;
        const data = new FormData();
        data.append('nom_soc',updatesociete.nom_soc);
        data.append('description',updatesociete.description);
        data.append('image_path',picture.image);
        axios.post(`api/groupe_sms2i/${societe_id}`, data).then(res=>{
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
        <div className=" modal fade"   id={`groupe${societe.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content d-flex align-items-center p-2">
                    <h1 className="fw-normal "> Edit {societe.nom_soc} societe </h1>
                    <form className="w-75" onSubmit={updateSocieteData}>
                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="nom_soc" type="text" name="nom_soc"
                                   placeholder="Enter your title here..."
                                   value={updatesociete.nom_soc}
                                   onChange={handleInput}

                            />
                            <label htmlFor="nom_soc">Titre</label>

                        </div>
                        <div className="form-floating mb-3 w-100">
                            <textarea className="form-control" id="description" name="description"
                                      placeholder="Enter your description here..."
                                      value={updatesociete.description}
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

export  default  EditSociete;