import React, {useEffect, useState} from "react";
import axios from "axios";

function ModifyReference() {

    const [pages, setPages]= useState({});
    const initialValueHome = { titre:"", description:"" };
    const [reference, setReference] = useState(initialValueHome);
    const [picture, setPicture] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReference({ ...reference, [name]: value });
    }

    const handlepicture = (e) => {

        setPicture({ image:e.target.file[0]});
    }

    useEffect(()=> {
        const getPage = async () => {
            await axios.get("api/pages/4").then(res => {
                if (res.status === 200) {

                    setPages(res.data.pages);
                    console.log(res.data.pages)

                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getPage()

    },[])

    return(
        <div className="container bg-white rounded-3 shadow-lg">
            <h5 className="display-5 p-2">
                References Page
            </h5>
            <section className=" d-flex py-5">
                <div className="container d-flex flex-column  align-items-center">
                    <h1>
                        Modify displayed data at the head of page
                    </h1>



                    <div className="card-body w-100">
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>




                            <tr key={pages.id}>
                                <th className="w-25">{pages.titre}</th>
                                <th className="w-25">{pages.description}</th>
                                <th className="w-25">{pages.image_path}</th>
                                <th className="w-25">
                                    <button className="btn btn-success  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#edit" aria-expanded="false" aria-controls="collapseExample">Edit</button>
                                </th>
                            </tr>


                            </tbody>
                        </table>
                        <div className="collapse" id="edit">
                            <div className="d-flex card card-body align-items-center">
                                <h1 className="fw-normal"> Edit </h1>
                                <form className="w-50">
                                    <div className="form-floating mb-3 w-100">
                                        <input className="form-control w-100" id="titre" type="text" name="titre"
                                               placeholder="Enter your titre here..."
                                               value={reference.titre}
                                               onChange={handleChange}
                                        />
                                        <label htmlFor="titre">Titre</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="description" name="description"
                                                  placeholder="Enter your description here..."
                                                  value={reference.description}
                                                  onChange={handleChange}
                                        />
                                        <label htmlFor="description">Description</label>

                                    </div>

                                    <div className=" mb-3">
                                        <label htmlFor="image" className="form-label">Selectionner une image</label>
                                        <input className="form-control" type="file" id="image"
                                               onChange={handlepicture}
                                        />

                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-primary m-1">Valider</button>
                                        <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target="#edit" aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                    </div>

                                </form>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
        </div>
    )

}

export default ModifyReference;