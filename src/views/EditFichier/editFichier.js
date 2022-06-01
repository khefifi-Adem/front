import React, { useState} from "react";
import axios from "axios";
import swal from "sweetalert";

function EditFichier({fileg}) {


    const [fileName,setFileName] = useState({titre: fileg.titre});
    const [file,setFile] = useState([]);


    const handleFile = (e) => {

        setFile({ file:e.target.files[0]});
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFileName({ ...fileName, [name]: value });
    }

    const addFile = (e) => {
        e.preventDefault();
        const data= new FormData;
        data.append('titre', fileName.titre);
        data.append('file_path',file.file);
        console.log(data.file_path);

        axios.post(`api/files/${fileg.id}`,data).then(res=>{

            if (res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                window.location.reload(false);

            }


        })
    }



    return (
        <div className=" modal fade"   id={`file${fileg.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content d-flex align-items-center p-2">
                    <h1 className="fw-normal"> Edit {fileg.titre} </h1>
                    <form className="w-50" onSubmit={addFile}>
                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="titre" type="text" name="titre"
                                   placeholder="Enter your titre here..."
                                   value={fileName.titre}
                                   onChange={handleChange}
                            />
                            <label htmlFor="titre">Titre</label>
                        </div>

                        <div className=" mb-3">
                            <label htmlFor="file" className="form-label">Selectionner fichier</label>
                            <input className="form-control" type="file" id="file"
                                   onChange={handleFile}
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

export  default  EditFichier;