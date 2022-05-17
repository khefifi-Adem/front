import React, {useEffect, useState} from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import axios from "axios";

function DropDownReferences() {
    const [click, setClick] = useState(false);

    const [menuItemsReferences ,setMenuItemsReferences] = useState([]);

    const handleClick = () => setClick(!click);

    useEffect(()=> {
        const getGroupe = async () => {
            await axios.get("api/groupe_sms2i").then(res => {
                if (res.status === 200) {

                    setMenuItemsReferences(res.data.groupesms2i);
                    console.log(res.data.groupesms2i)

                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getGroupe()

    },[]);

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu1 clicked' : 'dropdown-menu1'}
            >
                {menuItemsReferences.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className="dropdown-link1"
                                to={item.nom_soc}
                                onClick={() => setClick(false)}
                            >
                                {item.nom_soc}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default DropDownReferences;
