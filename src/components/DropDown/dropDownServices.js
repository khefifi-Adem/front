import React, { useState } from 'react';
import { MenuItemsServices } from '../../Data/MenuItems/menuItemsServices';
import './Dropdown.css';
function DropDownServices() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu1 clicked' : 'dropdown-menu1'}
      >
        {MenuItemsServices.map((item, index) => {
          return (
            <li key={index}>
              <a
                className={item.cName}
                href={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropDownServices;
