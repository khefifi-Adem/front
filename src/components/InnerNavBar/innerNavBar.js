import React from 'react';
import { MenuItemsServices } from '../../Data/MenuItems/menuItemsServices';

function InnerNavBar() {
    return (
        <ul className="nav nav-tabs bg-dark justify-content-center fs-6 ">
            {
                MenuItemsServices.map((item, index) => {
                        return (
                            <li className="nav-item " key={index} >
                                <a className="nav-link text-white" aria-current="page" href={item.path}>{item.title}</a>
                            </li>
                        )
                    }
                )
            }
        </ul>
    )
}

export default InnerNavBar;