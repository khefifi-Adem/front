import React, {useState} from 'react';
import axios from "axios";
import swal from "sweetalert";

function EditArticle({articles,categories,marques}) {



    const [article, setArticle] = useState({'model':articles.model,'edition': articles.edition,'description': articles.description});
    const [picture, setPicture] = useState([]);
    const [selectedCategorie, setSelectedCategorie] = useState([]);
    const [selectedMarque, setSelectedMarque] = useState([]);

    const handlePicture = (e) => {

        setPicture({ image:e.target.files[0]});
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setArticle({ ...article, [name]: value });
    }

    const updateArticle = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('model',article.model);
        data.append('edition',article.edition);
        data.append('description',article.description);
        data.append('image_path',picture.image);
        data.append('id_marque',selectedMarque);
        data.append('id_categorie_utilisation',selectedCategorie);


        axios.post(`api/articles/${articles.id}`,data).then(res=>{

            if (res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                window.location.reload(false);

            }


        })
    }



    return (
        <div className=" modal fade"   id={`article${articles.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content d-flex align-items-center p-2">
                    <h1 className="fw-normal"> Edit {categories.categorie} </h1>
                    <form className="w-50" onSubmit={updateArticle}>

                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="model" type="text" name="model"
                                   placeholder="Enter your titre here..."
                                   value={article.model}
                                   onChange={handleChange}
                            />
                            <label htmlFor="model">Model</label>
                        </div>

                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="edition" type="text" name="edition"
                                   placeholder="Enter your titre here..."
                                   value={article.edition}
                                   onChange={handleChange}
                            />
                            <label htmlFor="edition">Edition</label>
                        </div>

                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="description" type="text" name="description"
                                   placeholder="Enter your titre here..."
                                   value={article.description}
                                   onChange={handleChange}
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
    )

}

export default EditArticle;