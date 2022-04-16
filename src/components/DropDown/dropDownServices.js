import React, { useState } from 'react';
// import { MenuItemsServices } from '../../Data/MenuItems/menuItemsServices';
import './Dropdown.css';
import services from "../../Data/ServicesData/services.json";
import {Link} from "react-router-dom";
function DropDownServices() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu1 clicked' : 'dropdown-menu1'}
      >
          {
              services.map((service => {
                  return (
                      <li key={service.id}>
                          <Link
                              className="dropdown-link1"
                              to={`#${service.id}`}
                              onClick={() => setClick(false)}
                          >
                              {service.titre}
                          </Link>
                      </li>
                  );
              }))}
      </ul>
    </>
  );
}

export default DropDownServices;
