import React, { useState } from 'react';
import { Button } from '../Buttons/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropDownFormations from "../DropDown/dropDownFormations";
import DropDownReferences from "../DropDown/dropDownReferences";

function NavBar() {
  const [click, setClick] = useState(false);

  const [dropdownF, setDropdownF] = useState(false);
  const [dropdownR, setDropdownR] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);





  const onMouseEnterF = () => {
    if (window.innerWidth < 960) {
      setDropdownF(false);
    } else {
      setDropdownF(true);
    }
  };

  const onMouseLeaveF = () => {
    if (window.innerWidth < 960) {
      setDropdownF(false);
    } else {
      setDropdownF(false);
    }
  };

  const onMouseEnterR = () => {
    if (window.innerWidth < 960) {
      setDropdownR(false);
    } else {
      setDropdownR(true);
    }
  };

  const onMouseLeaveR = () => {
    if (window.innerWidth < 960) {
      setDropdownR(false);
    } else {
      setDropdownR(false);
    }
  };

  return (
    <>
      <nav className='navbar1 '>
        <Link to='/' className='navbar-logo1 navbar-brand' onClick={closeMobileMenu}>
          SMS2I

        </Link>
        <div className='menu-icon1' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu1 active' : 'nav-menu1'}>
          <li className='nav-item1'>
            <Link to='/' className='nav-links1 text-uppercase' onClick={closeMobileMenu}>
              Acceuil
            </Link>
          </li>
          <li className='nav-item1'>
            <Link
                to='/services'
                className='nav-links1 text-uppercase'
                onClick={closeMobileMenu}
            >
              services
            </Link>
          </li>
          <li
            className='nav-item1'
            onMouseEnter={onMouseEnterF}
            onMouseLeave={onMouseLeaveF}
          >
            <Link
              to='/formations'
              className='nav-links1 text-uppercase'
              onClick={closeMobileMenu}
            >
              formations <i className='fas fa-caret-down' />
            </Link>
            {dropdownF && <DropDownFormations />}
          </li>

          <li
            className='nav-item1'
            onMouseEnter={onMouseEnterR}
            onMouseLeave={onMouseLeaveR}
          >
            <Link
              to='/references/sms2i-service-locals'
              className='nav-links1 text-uppercase'
              onClick={closeMobileMenu}
            >
              References <i className='fas fa-caret-down' />
            </Link>
            {dropdownR && <DropDownReferences />}
          </li>


          <li className='nav-item1'>
            <Link
              to='/pieces-rechange/all'
              className='nav-links1 text-uppercase'
              onClick={closeMobileMenu}
            >
              pièces de réchange
            </Link>
          </li>



          <li className='nav-item1'>
            <Link
              to='/galerie'
              className='nav-links1 text-uppercase'
              onClick={closeMobileMenu}
            >
              galerie
            </Link>
          </li>


          <li className='nav-item1'>
            <Link
              to='/contact'
              className='nav-links1 text-uppercase'
              onClick={closeMobileMenu}
            >
              contact
            </Link>
          </li>
          <li className='nav-item1'>
            <Link
              to='/groupe-sms2i'
              className='nav-links1 text-uppercase'
              onClick={closeMobileMenu}
            >
              Groupe-sms2i
            </Link>
          </li>
          {/*<li className='nav-item1'>*/}
          {/*  <Link*/}
          {/*    to='/espace-universitaire'*/}
          {/*    className='nav-links1 text-uppercase'*/}
          {/*    onClick={closeMobileMenu}*/}
          {/*  >*/}
          {/*    espace universitaire*/}
          {/*  </Link>*/}
          {/*</li>*/}
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile1'
              onClick={closeMobileMenu}
            >
              S'inscrire
            </Link>
          </li>
          <li>
            <Link
              to='/sign-in'
              className='nav-links-mobile1'
              onClick={closeMobileMenu}
            >
              S'identifier
            </Link>
          </li>
        </ul>



        <Button titre={"S'inscrire"} path="/sign-up" />
        <Button titre={"S'identifier"} path={"/sign-in"} />



      </nav>
    </>
  );
}

export default NavBar;
