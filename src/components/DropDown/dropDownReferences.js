import React, { useState } from 'react';
import { MenuItemsReferences } from '../../Data/MenuItems/menuItemsReferences';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function DropDownReferences() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu1 clicked' : 'dropdown-menu1'}
            >
                {MenuItemsReferences.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className={item.cName}
                                to={item.path}
                                onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default DropDownReferences;
