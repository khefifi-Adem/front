import React, {useEffect, useState} from 'react';
import './Dropdown.css';
import {MenuItemsReferences} from "../../Data/MenuItems/menuItemsReferences";
import { Link } from 'react-router-dom';
import axios from "axios";

function DropDownReferences() {
    const [click, setClick] = useState(false);



    const handleClick = () => setClick(!click);

    // useEffect(()=> {
    //     const getGroupe = async () => {
    //         await axios.get("api/groupe_sms2i").then(res => {
    //             if (res.status === 200) {
    //
    //                 setMenuItemsReferences(res.data.groupesms2i);
    //                 console.log(res.data.groupesms2i)
    //
    //             }
    //         }).catch((e) => {
    //             console.log(e)
    //         });
    //     };
    //     getGroupe()
    //
    // },[]);

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
