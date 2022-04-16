import React from 'react';

function InnerNavBar({data}) {
    return (
        <ul className="nav nav-tabs bg-dark justify-content-center fs-6 ">
            {
                data.map((data => {
                        return (
                            <li className="nav-item " key={data.id} >
                                <a className="nav-link text-white" aria-current="page" href={`#${data.id}`}>{data.titre}</a>
                            </li>
                        )
                    }
                ))
            }
        </ul>
    )
}

export default InnerNavBar;