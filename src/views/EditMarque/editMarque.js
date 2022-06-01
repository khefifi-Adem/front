import React, {useState} from 'react';
import axios from "axios";
import swal from "sweetalert";

function EditMarque({marques}) {



    const [marque, setMarque] = useState({'marque': marques.marque});
    const [picture, setPicture] = useState([]);

      const handlePicture = (e) => {

            setPicture({ image:e.target.files[0]});
        }


        const handleChange = (e) => {
            const { name, value } = e.target;
            setMarque({ ...marque, [name]: value });
        }

        const updateMarque = (e) => {
            e.preventDefault();
            const data= new FormData;
            data.append('marque', marque.marque);
            data.append('image_path',picture.image);


            axios.post(`api/marques/${marques.id}`,data).then(res=>{

                if (res.data.status === 200)
                {
                    swal("Success",res.data.message,"success");
                    window.location.reload(false);

                }


            })
        }



        return (
            <div className=" modal fade"   id={`marques${marques.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content d-flex align-items-center p-2">
                        <h1 className="fw-normal"> Edit {marques.marque} </h1>
                        <form className="w-50" onSubmit={updateMarque}>
                            <div className="form-floating mb-3 w-100">
                                <input className="form-control w-100" id="marque" type="text" name="marque"
                                       placeholder="Enter your marque here..."
                                       value={marque.marque}
                                       onChange={handleChange}
                                />
                                <label htmlFor="marque">Marque</label>
                            </div>

                            <div className=" mb-3">
                                <label htmlFor="file" className="form-label">Selectionner une image</label>
                                <input className="form-control" type="file" id="file"
                                       onChange={handlePicture}
                                />

                            </div>

                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary m-1" type="submit">Valider</button>
                                <button className="btn btn-success m-1" type="button" data-bs-dismiss="modal" aria-label="Close">Annuler</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )

    }

export default EditMarque;