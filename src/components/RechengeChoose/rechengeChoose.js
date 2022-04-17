import React from 'react';
import domaines from "../../Data/PiecesRechengeData/Domaine.json";
import maintenance from "../../assets/maintenance.png";
import pieces from "../../Data/PiecesRechengeData/piecesRechenge.json";
import {Link, Outlet} from "react-router-dom";

function RechengeChoose() {
    return(
        <>
            <section className="py-5" >
                <div className="m-0 row gx-5 align-items-center">
                    {
                        domaines.map(domaine=> (

                                <div className="mb-5 col-lg-4 d-flex">
                                    <div className="w-50">
                                        <img className="img-fluid rounded mb-5 mb-lg-0" src={maintenance} alt="..."/>
                                    </div>
                                    <div className=" w-50 my-1 text-center">
                                        <span className=" fw-bolder  mb-2">{domaine.domaine}</span>
                                        {
                                            pieces.map(piece=>{
                                                if(piece.domaine_utilisation === domaine.domaine)
                                                {
                                                    return(
                                                        <ul className="d-flex">
                                                            <li className=" list align-self-start">
                                                                <Link className="lien" to={`${piece.id}`} state={piece}>
                                                                    <p className="lead fw-normal mb-4">
                                                                        {`${piece.marque} ${piece.model}`}
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