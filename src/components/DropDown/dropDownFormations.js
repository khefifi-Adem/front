import React, { useState } from 'react';
import { MenuItemsFormations } from '../../Data/MenuItems/menuItemsFormation';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function DropDownFormations() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu1 clicked' : 'dropdown-menu1'}
            >
                {MenuItemsFormations.map((item, index) => {
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

export default DropDownFormations;
