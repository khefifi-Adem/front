import React, { useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import {useNavigate} from "react-router-dom";

function EditNiveau({niveau}) {

    const initialValues ={ titre: niveau.titre, description: niveau.description};
    const [updateNiveau, setUpdateNiveau] = useState(initialValues);

    const handleInput = (e) => {

        const { name, value } = e.target;
        setUpdateNiveau({ ...updateNiveau, [name]: value });

    }
    const [file,setFile] = useState([]);
    const handleFile = (e) => {

        setFile({ file:e.target.files[0]});
    }

    const updateNiveauData = (e) => {
        e.preventDefault();

        const niveau_id = niveau.id;
        const data = new FormData;
        data.append('titre', updateNiveau.titre)
        data.append('description', updateNiveau.description)
        data.append('file_path', file.file)
        axios.post(`api/niveaux/${niveau_id}`, data).then(res=>{
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
        <div className=" modal fade"   id={`niveau${niveau.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content d-flex align-items-center p-2">
                    <h1 className="fw-normal"> Edit {niveau.titre} Niveau </h1>
                    <form className="w-50" onSubmit={updateNiveauData}>
                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="titre" type="text" name="titre"
                                   placeholder="Enter your title here..."
                                   value={updateNiveau.titre}
                                   onChange={handleInput}

                            />
                            <label htmlFor="titre">Titre</label>

                        </div>

                        <div className="form-floating mb-3">
                        <textarea className="form-control" id="description" name="description"
                                  placeholder="Enter your description here..."
                                  value={updateNiveau.description}
                                  onChange={handleInput}
                        />
                            <label htmlFor="description">Description</label>

                        </div>

                        <div className=" mb-3">
                            <label htmlFor="file" className="form-label">Selectionner fichier</label>
                            <input className="form-control" type="file" id="file"
                                   onChange={handleFile}
                            />

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

export  default  EditNiveau;