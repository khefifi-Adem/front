import React, {useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import axios from "axios";

function RechengeChoose() {


    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        const getCategories = async () => {
            await axios.get('api/categorie_utilisation').then(res => {
                if (res.data.status === 200) {
                    setCategories(res.data.categories);
                    console.log(res.data.categories)

                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getCategories();
    },[])



    return(
        <>
            <section className="py-5" >
                <div className="m-0 row gx-5 align-items-center">
                    {
                        categories.map(categorie=> (

                                <div className="mb-5 col-lg-4 d-flex">
                                    <div className="w-50">
                                        <img className="img-fluid rounded mb-5 mb-lg-0" src={`http://127.0.0.1:8000/${categorie.image_path}`} alt="..."/>
                                    </div>
                                    <div className=" w-50 my-1 text-center">
                                        <span className=" fw-bolder  mb-2">{categorie.categorie}</span>
                                        {
                                            categorie.article.map(art=>{

                                                {
                                                    return(
                                                        <ul className="d-flex">
                                                            <li className=" list align-self-start">
                                                                <Link className="lien" to={`${art.id}`} state={art}>
                                                                    <p className="lead fw-normal mb-4">
                                                                        {`${art.model} ${art.edition}`}
                                                                    </p>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    )
                                                }
                                            })
                                        }

                                    </div>
                                </div>

                            )

                        )
                    }

                </div>
            </section>
            <section>
                <Outlet/>
            </section>
        </>
    )
}
export default RechengeChoose