import React, {useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import {Link, Outlet, useLocation} from "react-router-dom";
import EditTheme from "../EditTheme/editTheme";

function ModifyThemes() {

    const location = useLocation();


    const [themes, setThemes] = useState([]);

    const initialValues ={ titre: "",description: "",domaine_id: location.state};
    const [addtheme, setAddtheme] = useState(initialValues);

    useEffect(()=> {
        const getDomaine = async () => {
            await axios.get(`api/themes_find/${location.state}`).then(res => {
                if (res.status === 200) {

                    setThemes(res.data.themes);



                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getDomaine()

    },[])

    const handleInput = (e) => {

        const { name, value } = e.target;
        setAddtheme({ ...addtheme, [name]: value });

    }

    const addAdmin = (e) => {
        e.preventDefault();
        const data= addtheme;

        axios.post("api/themes",data).then(res=>{
                if (res.status === 200){
                    if (res.data.status === 200)
                    {
                        swal("Success",res.data.message,"success");
                        window.location.reload(false)
                    }
                }
            }
        )
    }






    return(
        <div className="container bg-white rounded-3 shadow-sm">
            {/*<h5 className="display-5 p-20">*/}
            {/*    Client List*/}
            {/*</h5>*/}
            <section className=" d-flex py-5">
                <div className="container d-flex flex-column  align-items-center">
                    <h3>
                        Themes List
                    </h3>

                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter-theme" aria-expanded="false" aria-controls="collapseExample">Créeer Un Theme</button>


                    <div className="collapse w-100" id="ajouter-theme">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouter </h1>
                            <form className="w-50" onSubmit={addAdmin} >
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="titre" type="text" name="titre"
                                           placeholder="Enter your titre here... "
                                           value={addtheme.titre}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="titre">Titre</label>

                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="description" type="text" name="description"
                                           placeholder="Enter your description here... "
                                           value={addtheme.description}
                                           onChange={handleInput}

                                    />
                                    <label htmlFor="description">Description </label>

                                </div>




                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary m-1" type="submit" >Valider</button>
                                    <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter-theme" aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                </div>

                            </form>
                        </div>
                    </div>




                    <div className="card-body w-100">
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th className="w-20">Themes</th>
                                <th className="w-20">Description</th>
                                <th className="w-20">Action</th>

                            </tr>
                            </thead>
                            <tbody>


                            {
                                themes.map(theme=>
                                    (
                                        <tr key={theme.id}>
                                            <th className="w-25">{theme.titre}</th>
                                            <th className="w-50">{theme.description}</th>
                                            <th className="w-25">
                                                <Link className="btn btn-primary  m-1" to={`${theme.id}`} state={theme.id} >Consulter</Link>
                                                <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#theme${theme.id}`}>Edit</button>
                                                <EditTheme theme={theme}/>
                                                <button className="btn  btn-danger  m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletetheme${theme.id}`} aria-expanded="false" aria-controls="collapseExample">Supprimer</button>

                                                <div className="collapse" id={`deletetheme${theme.id}`}>
                                                    <div className="d-flex card card-body align-items-center">
                                                        <h6 className="fw-bolder">Vous voulez confirmer la suppression</h6>
                                                        <div>
                                                            <button className="btn btn-success m-1">Confirmer</button>
                                                            <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletetheme${theme.id}`} aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>

                                        </tr>
                                    ))
                            }

                            </tbody>
                        </table>

                    </div>
                </div>
            </section>

            <hr className="dropdown-divider"/>

            <section className="d-flex">
                <Outlet/>

            </section>
        </div>
    )
}

export default ModifyThemes;