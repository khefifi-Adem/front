import React, { useEffect, useState} from 'react';
import axios from "axios";
import swal from "sweetalert";


function ModifyArticles() {
    const [categories, setCategorie]= useState([]);
    const [articles, setArticles]= useState([]);
    const [marques, setMarques] = useState([])




    const [addCategories, setAddCategories]= useState([]);
    const [addArticles, setAddArticles]= useState([{model:""},{edition:""},{description:""}]);
    const [addMarques, setAddMarques] = useState([{marque:""}])
    const [pictureMarque, setPictureMarque] = useState([]);
    const [pictureArticle, setPictureArticle] = useState([]);
    const [pictureCategorie, setPictureCategorie] = useState([]);
    const [selectedCategorie, setSelectedCategorie] = useState([]);
    const [selectedMarque, setSelectedMarque] = useState([]);



    const handleMarque = (e) => {
        const { name, value } = e.target;
        setAddMarques({ ...addMarques, [name]: value });
    }
    // const handleCategorie = (e) => {
    //     const { name, value } = e.target;
    //     setMarques({ ...marques, [name]: value });
    // }
    const handleArticle = (e) => {
        const { name, value } = e.target;
        setAddArticles({ ...addArticles, [name]: value });
    }

    const handleCategorie = (e) => {
        const { name, value } = e.target;
        setAddCategories({ ...addCategories, [name]: value });
    }





    const handlepicture = (e) => {
        setPictureMarque({image:e.target.files[0]});
    }
    const handleArticleImage = (e) => {
        setPictureArticle({image:e.target.files[0]});
    }
    const handlepictureCategorie = (e) => {
        setPictureCategorie({image:e.target.files[0]});
    }

    const addMarqueData = (e) => {

        e.preventDefault();

        const data = new FormData();
        data.append('marque',addMarques.marque);
        data.append('image_path',pictureMarque.image);

        axios.post("api/marques",data).then(res=> {
            if (res.data.status === 200) {
                swal("Success",res.data.message,"success");
                window.location.reload(false);
            }
        })


    }

    const addCategorieData = (e) => {

        e.preventDefault();

        const data = new FormData();
        data.append('categorie',addCategories.categorie);
        data.append('description',addCategories.description);
        data.append('image_path',pictureCategorie.image);
        data.append('image_alt',addCategories.categorie);


        axios.post("api/categorie_utilisation",data).then(res=> {
            if (res.data.status === 200) {
                swal("Success",res.data.message,"success");
                window.location.reload(false);
            }
    })}

    const addArticleData = (e) => {

        e.preventDefault();

        const data = new FormData();
        data.append('model',addArticles.model);
        data.append('edition',addArticles.edition);
        data.append('description',addArticles.description);
        data.append('image_path',pictureArticle.image);
        data.append('id_marque',selectedMarque);
        data.append('id_categorie_utilisation',selectedCategorie);

        axios.post("api/articles",data).then(res=> {
            if (res.data.status === 200) {
                swal("Success",res.data.message,"success");
                window.location.reload(false);
            } else
            {
                console.log(res.data.errors)
            }




    })}








    useEffect(()=> {
        const getCategories = async () => {
            await axios.get('api/categorie_utilisation').then(res => {
                if (res.data.status === 200) {
                    setCategorie(res.data.categories);
                    console.log(res.data.categories)

                }
            }).catch((e) => {
                console.log(e)
            });
        };

        const getArticles = async () => {
            await axios.get('api/articles').then(res => {
                if (res.data.status === 200) {
                    setArticles(res.data.articles);
                    console.log(res.data.articles)

                }
            }).catch((e) => {
                console.log(e)
            });
        };

        const getMarques = async () => {
            await axios.get('api/marques').then(res => {
                if (res.data.status === 200) {
                    setMarques(res.data.marques);
                    console.log(res.data.marques)

                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getCategories();
        getArticles();
        getMarques();

    },[])


    const deleteCategorie = (e, id) => {

        e.preventDefault();
        axios.delete(`api/categorie_utilisation/${id}`).then(res=>{

                    if (res.data.status === 200)
                    {
                        swal("Success",res.data.message,"success");
                        window.location.reload(false);

                    }


            }
        )
    }


    const deleteMarque = (e, id) => {

        e.preventDefault();
        axios.delete(`api/marques/${id}`).then(res=>{

                    if (res.data.status === 200)
                    {
                        swal("Success",res.data.message,"success");
                        window.location.reload(false);
                    }


            }
        )
    }
    const deleteArticle = (e, id) => {

        e.preventDefault();
        axios.delete(`api/articles/${id}`).then(res=>{

                    if (res.data.status === 200)
                    {
                        swal("Success",res.data.message,"success");
                        window.location.reload(false);

                    }


            }
        )
    }


    return(
        <div className="container bg-white rounded-3 shadow-lg">

            <section className=" d-flex py-5">
                <div className="container d-flex flex-column  align-items-center">
                    <h1>
                        Modify Categories
                    </h1>

                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajoutercat" aria-expanded="false" aria-controls="collapseExample">Nouvelle Categorie</button>


                    <div className="collapse w-100" id="ajoutercat">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouter </h1>
                            <form className="w-50" onSubmit={addCategorieData} >
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="categorie" type="text" name="categorie"
                                           placeholder="Enter your titre here... "
                                           value={addCategories.categorie}
                                           onChange={handleCategorie}

                                    />
                                    <label htmlFor="categorie">Categorie</label>

                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="description" type="text" name="description"
                                           placeholder="Enter your titre here... "
                                           value={addCategories.description}
                                           onChange={handleCategorie}

                                    />
                                    <label htmlFor="description">Description</label>

                                </div>
                                <div className=" mb-3">
                                    <label htmlFor="image" className="form-label">Selectionner une image</label>
                                    <input className="form-control" type="file" id="image"
                                           onChange={handlepictureCategorie}
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
                                <th>Categorie</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>


                            {
                                categories.map(categorie=>(
                                <tr key={categorie.id}>
                                    <th className="w-25">{categorie.categorie}</th>
                                    <th className="w-25">{categorie.description}</th>
                                    <th className="w-25">
                                        <img className="img-fluid rounded-3 my-5" src={`http://127.0.0.1:8000/${categorie.image_path}`} alt="..." />
                                    </th>
                                    <th className="w-auto">
                                        <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#categorie${categorie.id}`}>Edit</button>
                                        {/*<EditCategorie categorie{categorie}/>*/}
                                        <button className="btn  btn-danger  m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletecategorie${categorie.id}`} aria-expanded="false" aria-controls="collapseExample">Supprimer</button>

                                        <div className="collapse" id={`deletecategorie${categorie.id}`}>
                                            <div className="d-flex card card-body align-items-center">
                                                <h6 className="fw-bolder">Vous voulez confirmer la suppression</h6>
                                                <div>
                                                    <button className="btn btn-success m-1" onClick={(e) => deleteCategorie(e,categorie.id)}>Confirmer</button>
                                                    <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletecategorie${categorie.id}`} aria-expanded="false" aria-controls="collapseExample">Annuler</button>
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


            <section className=" d-flex py-5">
                <div className="container d-flex flex-column  align-items-center">
                    <h1>
                        Modify Marques
                    </h1>
                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter" aria-expanded="false" aria-controls="collapseExample">Nouvelle Marque</button>


                    <div className="collapse w-100" id="ajouter">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouter </h1>
                            <form className="w-50" onSubmit={addMarqueData} >
                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="marque" type="text" name="marque"
                                           placeholder="Enter your titre here... "
                                           value={addMarques.marque}
                                           onChange={handleMarque}

                                    />
                                    <label htmlFor="titre">Marque</label>

                                </div>
                                <div className=" mb-3">
                                <label htmlFor="image" className="form-label">Selectionner une image</label>
                                <input className="form-control" type="file" id="image"
                                       onChange={handlepicture}
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
                                <th>Marques</th>
                                <th>Images</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                marques.map(marque=>(

                                    <tr key={marque.id}>
                                        <th className="w-25 font-monospace fw-normal">{marque.marque}</th>
                                        <th className="w-25 font-monospace fw-normal">
                                            <img className="img-fluid rounded-3 my-5" src={`http://127.0.0.1:8000/${marque.image_path}`} alt="..." />
                                        </th>
                                        <th >
                                            <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#marque${marque.id}`}>Edit</button>
                                            {/*<EditMarque marque={marque}/>*/}
                                            <button className="btn  btn-danger  m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#delete${marque.id}`} aria-expanded="false" aria-controls="collapseExample">Supprimer</button>
                                            <div className="collapse" id={`delete${marque.id}`}>
                                                <div className="d-flex card card-body align-items-center">
                                                    <h6 className="fw-bolder">Vous voulez confirmer la suppression</h6>
                                                    <div>
                                                        <button className="btn btn-success m-1" type={"button"} onClick={(e) => deleteMarque(e,marque.id)}>Confirmer</button>
                                                        <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#delete${marque.id}`} aria-expanded="false" aria-controls="collapseExample">Annuler</button>
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


            <section className=" d-flex py-5">
                <div className="container d-flex flex-column  align-items-center">
                    <h1>
                        Modify Articles
                    </h1>
                    <button className="btn btn-primary  m-1" type="button" data-bs-toggle="collapse" data-bs-target="#ajouter-article" aria-expanded="false" aria-controls="collapseExample">Nouveau Articles</button>

                    <div className="collapse w-100" id="ajouter-article">
                        <div className="d-flex card card-body align-items-center">
                            <h1 className="fw-normal"> Ajouter </h1>
                            <form className="w-50" onSubmit={addArticleData}>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="model" type="text" name="model"
                                           placeholder="Enter your titre here..."
                                           value={articles.model}
                                           onChange={handleArticle}
                                    />
                                    <label htmlFor="model">Model</label>
                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="edition" type="text" name="edition"
                                           placeholder="Enter your titre here..."
                                           value={articles.edition}
                                           onChange={handleArticle}
                                    />
                                    <label htmlFor="edition">Edition</label>
                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input className="form-control w-100" id="description" type="text" name="description"
                                           placeholder="Enter your titre here..."
                                           value={articles.description}
                                           onChange={handleArticle}
                                    />
                                    <label htmlFor="description">Description</label>
                                </div>

                                <div className="mb-3 w-100">
                                    <select className="form-select" id="marque"
                                            aria-label="Floating label select example" onChange={e=>setSelectedMarque(e.target.value)}>
                                        <option value="">Marque</option>
                                        {marques.map(marque=>(<option key={marque.id} value={marque.id}>{marque.marque}</option>))}
                                    </select>


                                </div>

                                <div className="mb-3 w-100">
                                    <select className="form-select" id="categorie"
                                            aria-label="Floating label select example" onChange={e=>setSelectedCategorie(e.target.value)}>
                                        <option value="">Categorie</option>
                                        {categories.map(categorie=>(<option key={categorie.id} value={categorie.id}>{categorie.categorie}</option>))}
                                    </select>

                                </div>

                                <div className=" mb-3">
                                    <label htmlFor="image" className="form-label">Selectionner une image</label>
                                    <input className="form-control" type="file" id="image"
                                           onChange={handleArticleImage}
                                    />

                                </div>








                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary m-1" type="submit">Valider</button>
                                    <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target="#edit" aria-expanded="false" aria-controls="collapseExample">Annuler</button>
                                </div>

                            </form>
                        </div>
                    </div>



                    <div className="card-body w-100">
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>Model</th>
                                <th>Edition</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Marque</th>
                                <th>Categorie</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>

                            {
                                articles.map(article=>
                                    (
                                        <tr key={article.id}>
                                            <th className="w-25">{article.model}</th>
                                            <th className="w-25">{article.edition}</th>
                                            <th className="w-25">{article.description}</th>
                                            <th className="w-25">
                                                <img className="img-fluid rounded-3 my-5" src={`http://127.0.0.1:8000/${article.image_path}`} alt="..." />
                                            </th>
                                            <th className="w-25">{article.marque.marque}</th>
                                            <th className="w-25">{article.category.categorie}</th>
                                            <th className="w-25">
                                                <th>
                                                    <button className="btn btn-success  m-1" data-bs-toggle="modal" data-bs-target={`#article${article.id}`}>Edit</button>
                                                    {/*<EditCategorie service={article}/>*/}
                                                    <button className="btn  btn-danger  m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletes${article.id}`} aria-expanded="false" aria-controls="collapseExample">Supprimer</button>
                                                </th>
                                                <div className="collapse" id={`deletes${article.id}`}>
                                                    <div className="d-flex card card-body align-items-center">
                                                        <h6 className="fw-bolder">Vous voulez confirmer la suppression</h6>
                                                        <div>
                                                            <button className="btn btn-success m-1" type={"button"} onClick={(e) => deleteArticle(e,article.id)}>Confirmer</button>
                                                            <button className="btn btn-danger m-1" type="button" data-bs-toggle="collapse" data-bs-target={`#deletes${article.id}`} aria-expanded="false" aria-controls="collapseExample">Annuler</button>
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
        </div>
    )
}

export default ModifyArticles;