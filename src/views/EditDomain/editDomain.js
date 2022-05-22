import React, { useState} from "react";
import axios from "axios";
import swal from "sweetalert";

function EditDomaine({domain}) {

    console.log(domain);
    const initialValues ={ titre: domain.titre, description: domain.description};
    const [updateDomain, setUpdateDomain] = useState(initialValues);

    const handleInput = (e) => {

        const { name, value } = e.target;
        setUpdateDomain({ ...updateDomain, [name]: value });

    }

    const updateDomainData = (e) => {
        e.preventDefault();

        const domain_id = domain.id;
        const data = updateDomain;
        axios.post(`api/domaines/${domain_id}`, data).then(res=>{
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
        <div className=" modal fade"   id={`domain${domain.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content d-flex align-items-center p-2">
                    <h1 className="fw-normal"> Edit {domain.titre} </h1>
                    <form className="w-50" onSubmit={updateDomainData}>
                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="titre" type="text" name="titre"
                                   placeholder="Enter your title here..."
                                   value={updateDomain.titre}
                                   onChange={handleInput}

                            />
                            <label htmlFor="titre">Titre</label>

                        </div>

                        <div className="form-floating mb-3">
                        <textarea className="form-control" id="description" name="description"
                                  placeholder="Enter your description here..."
                                  value={updateDomain.description}
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

export  default  EditDomaine;