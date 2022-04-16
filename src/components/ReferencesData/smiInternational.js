import React from "react";
import references from "../../Data/ReferencesData/smiInternational.json";
import SideBar from "../SideBar/sideBar";
import {Outlet} from "react-router-dom";

function SmiInternational() {
    if (references){
        return (
            <section className='mb-3 mt-3' >
                <div className="">

                    <div className="cont_ref">
                        <div className="side">

                            {
                                references.map(reference=>(
                                    <div key={reference.id}>
                                        <h2 className='py-2 p5'>{reference.titre}</h2>
                                        <SideBar data={reference.childrens}/>
                                    </div>
                                ))

                            }

                        </div>
                        <div className="references pt-5 h-100">
                            <Outlet/>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
    else
    {
        return (
            <div>
                <span className="w-100 bi bi-exclamation-triangle"/>
                <p className="display-1">
                    this page has no elements until now
                </p>
            </div>
        )
    }






}
export default SmiInternational;