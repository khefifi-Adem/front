import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import swal from "sweetalert";
import EditSociete from "../EditSociete/editSociete";

function ModifyGroupeSms2i() {

    const [pages, setPages]= useState({});
    const [groupeSms2i, setGroupeSms2i] = useState([]);

    const initialValue = { titre:"", description:"" };
    const [groupe, setGroupe] = useState(initialValue);
    const initialValueGroupe = { nom_soc:"", description:"" };
    const [updateGroupe, setUpdateGroupe] = useState([initialValueGroupe])
    const [picture, setPicture] = useState([]);
    const [pictureGroupe, setPictureGroupe] = useState([]);




    const deleteSoc = useCallback( (id) => {
        return async (e) => {
            e.preventDefault()


            axios.delete(`api/groupe_sms2i/${id}`).then(res=>{
                    if (res.status === 200){
                        if (res.data.status === 200)
                        {
                            swal("Success",res.data.message,"success");
                            console.log(res.data.status)
                            window.location.reload(false);
                        }
                    }
                }
            )}
    })




    const handleChange = (e) => {
        const { name, value } = e.target;
        setGroupe({ ...groupe, [name]: value });
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUpdateGroupe({ ...updateGroupe, [name]: value });
    }

    const handlePicture = (e) => {

        setPicture({ image:e.target.files[0]});
    }

    const handlePictureGroupe = (e) => {

        setPictureGroupe({ image:e.target.file[0]});
    }



    useEffect(()=> {
        const getPage = async () => {
            await axios.get("api/pages/5").then(res => {
                if (res.status === 200) {

                    setPages(res.data.pages);


                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getPage()

    },[])


    useEffect(()=> {
        const getGroupe = async () => {
            await axios.get("api/groupe_sms2i").then(res => {
                if (res.status === 200) {

                    setGroupeSms2i(res.data.groupesms2i);


                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getGroupe()

    },[])




    const addGroupe = (e) => {
        e.preventDefault();
        const data= updateGroupe;

        axios.post("api/groupe_sms2i",data).then(res=>{
                if (res.status === 200){
                    if (res.data.status === 200)
                    {
                        swal("Success",res.data.message,"success");
                        console.log(res.data.status)
                    }
                }
            }
        )
    }

    const updateGroupeIntro = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('page_name','services');
        data.append('titre',groupe.titre);
        data.append('description',groupe.description);
        data.append('image_path',picture.image);
        axios.post("api/pages/5", data).then(res=>{
            if (res.data.status === 200)
            {
                swal("Success",res.data.message);
                window.location.reload(false);
            }
        })
    }

    return(
        <div className="container bg-white rounded-3 shadow-lg">
            <h5 className="display-5 p-2">
                Groupe SMS2I Page
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
                                <th className="w-25">
                                    <img  className="w-100" src={`http://localhost:8000/${pages.image_path}`}/>

                                </th>
                                <th className="w-25">
                                    <button className="btn btn-success  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#edit" aria-expanded="false" aria-controls="collapseExample">Edit</button>
                                </th>
                            </tr>


                            </tbody>
                        </table>
                        <div className="collapse" id="edit">
                            <div className="d-flex card card-body align-items-center">
                                <h1 className="fw-normal"> Edit </h1>
                                <form className="w-50" onSubmit={updateGroupeIntro}>
                                    <div className="form-floating mb-3 w-100">
                                        <input className="form-control w-100" id="titre" type="text" name="titre"
                                               placeholder="Enter your titre here..."
                                               value={groupe.titre}
                                               onChange={handleChange}
                                        />
                                        <label htmlFor="titre">Titre</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="description" name="description"
                                                  placeholder="Enter your description here..."
                                                  value={groupe.description}
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
                                        <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target="#edit" aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                    </div>

                                </form>
                            </div>
                        </div>


                    </div>
                </div>

            </section>




            <section className=" d-flex py-5">
                <div className="container d-flex flex-column  align-items-center">
                    <h1>
                        Modify Societies
                    </h1>
                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter" aria-expanded="false" aria-controls="collapseExample">Nouveau Societe</button>


                    <div className="collapse w-100" id="ajouter">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouter </h1>
                            <form className="w-50"  onSubmit={addGroupe}>
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="nom_soc" type="text" name="nom_soc"
                                           placeholder="Enter your Societe here... "
                                           value={updateGroupe.nom_soc}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="nom_soc">Nom_soc</label>

                                </div>
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="description" type="text" name="description"
                                           placeholder="Enter your description here... "
                                           value={updateGroupe.description}
                                           onChange={handleInput}
                                    /><label htmlFor="description">Icon</label>
                                </div>
                                <div className=" mb-3">
                                    <label htmlFor="image" className="form-label">Selectionner une image</label>
                                    <input className="form-control" type="file" id="image"
                                           onChange={handlePictureGroupe}
                                    />

                                </div>



                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary m-1" type="submit" >Valider</button>
                                    <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter" aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="card-body w-100">
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>Societe</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                groupeSms2i.map(grp=>(

                                    <tr key={grp.id}>
                                        <th className="w-25 font-monospace fw-normal">{grp.nom_soc}</th>
                                        <th className="w-25 font-monospace fw-normal">{grp.description}</th>
                                        <th className="w-25  font-monospace fw-normal m-1">
                                            <img  className="w-100" src={`http://localhost:8000/${grp.image_path}`}/>
                                        </th>
                                        <th >
                                            <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#groupe${grp.id}`}>Edit</button>
                                            <EditSociete societe={grp}/>
                                            <button className="btn  btn-danger  m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#delete${grp.id}`} aria-expanded="false" aria-controls="collapseExample">Supprimer</button>

                                            <div className="collapse" id={`delete${grp.id}`}>
                                                <div className="d-flex card card-body align-items-center">
                                                    <h6 className="fw-bolder">Vous voulez confirmer la suppression</h6>
                                                    <div>
                                                        <button className="btn btn-success m-1" onClick={deleteSoc(grp.id)}>Confirmer</button>
                                                        <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#delete${grp.id}`} aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>

                                    </tr>


                                ))}

                            </tbody>
                        </table>



                    </div>

                </div>

            </section>


        </div>
    )

}

export default ModifyGroupeSms2i;