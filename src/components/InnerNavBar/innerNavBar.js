import React from 'react';
import "./innerNavBar.css"

function InnerNavBar({data}) {
    return (
        <ul className="navigation nav nav-tabs  justify-content-center fs-6 ">
            {
                data.map((data => {
                        return (
                            <li className="inner nav-item p-1 " key={data.id} >
                                <a className="lienn nav-link " aria-current="page" href={`#${data.id}`}>{data.titre}</a>
                            </li>
                        )
                    }
                ))
            }
        </ul>
    )
}

export default InnerNavBar;