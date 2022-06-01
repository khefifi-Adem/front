import React, {useState} from 'react';
import axios from "axios";
import swal from "sweetalert";

function EditCategorie({categories}) {



    const [categorie, setCategorie] = useState({'categorie':categories.categorie,'description': categories.description});
    const [picture, setPicture] = useState([]);

    const handlePicture = (e) => {

        setPicture({ image:e.target.files[0]});
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategorie({ ...categorie, [name]: value });
    }

    const updateCategorie = (e) => {
        e.preventDefault();
        const data= new FormData;
        data.append('categorie', categorie.categorie);
        data.append('description', categorie.description);
        data.append('image_path',picture.image);


        axios.post(`api/categorie_utilisation/${categories.id}`,data).then(res=>{

            if (res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                window.location.reload(false);

            }


        })
    }



    return (
        <div className=" modal fade"   id={`categorie${categories.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content d-flex align-items-center p-2">
                    <h1 className="fw-normal"> Edit {categories.categorie} </h1>
                    <form className="w-50" onSubmit={updateCategorie}>
                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="categorie" type="text" name="categorie"
                                   placeholder="Enter your titre here... "
                                   value={categorie.categorie}
                                   onChange={handleChange}

                            />
                            <label htmlFor="categorie">Categorie</label>

                        </div>

                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="description" type="text" name="description"
                                   placeholder="Enter your titre here... "
                                   value={categorie.description}
                                   onChange={handleChange}

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
                            <button className="btn btn-primary m-1" type="submit">Valider</button>
                            <button className="btn btn-success m-1" type="button" data-bs-dismiss="modal" aria-label="Close">Annuler</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

}

export default EditCategorie;