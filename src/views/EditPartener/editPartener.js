import React, { useState} from "react";
import axios from "axios";
import swal from "sweetalert";

function EditPartener({parteners}) {



    const initialValues ={ partener: parteners.partener, partener_description: parteners.partener_description};

    const [partenerss, setPartenerss] = useState(initialValues);
    const [picturePartner, setPicturePartner] = useState([]);


    const handlePicture = (e) => {

        setPicturePartner({ image:e.target.files[0]});
    }

    const handleInputPartener = (e) => {
        const { name, value } = e.target;
        setPartenerss({ ...partenerss, [name]: value });

    }
    const updatePartener = (e) => {
        e.preventDefault();
        const data= new FormData();
        data.append('partener',partenerss.partener);
        data.append('partener_description',partenerss.partener_description);
        data.append('image_alt',partenerss.partener);
        data.append('image_path',picturePartner.image);


        axios.post(`api/nos_parteners/${parteners.id}`,data).then(res=>{

            if (res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                console.log(res.data.status)
                window.location.reload(false);
            }


        })
    }


    return (
        <div className=" modal fade"   id={`partener${parteners.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content d-flex align-items-center p-2">
                    <h1 className="fw-normal"> Edit {parteners.titre}  </h1>
                    <form className="w-50" onSubmit={updatePartener} >
                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="partener" type="text" name="partener"
                                   placeholder="Enter your partener here... "
                                   value={partenerss.partener}
                                   onChange={handleInputPartener}

                            />
                            <label htmlFor="titre">Titre</label>

                        </div>

                        <div className="form-floating mb-3">
                                    <textarea className="form-control" id="partener_description" name="partener_description"
                                              placeholder="Enter your description here..."
                                              value={partenerss.partener_description}
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
        </div>
    )

}

export  default  EditPartener;