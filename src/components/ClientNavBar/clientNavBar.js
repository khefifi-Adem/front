import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./clientNavBar.css"
import {Button} from "../Buttons/Button";

function ClientNavBar() {
    const [clickk, setClickk] = useState(false);

    const handleClick = () => setClickk(!clickk);
    const closeMobileMenu = () => setClickk(false);



    return (
        <>
            <nav className='navbar0 '>
                <Link to='/' className='navbar-logo0 navbar-brand' onClick={closeMobileMenu}>
                    SMS2I

                </Link>
                <div className='menu-icon0' onClick={handleClick}>
                    <i className={clickk ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={clickk ? 'nav-menu0 active' : 'nav-menu0'}>

                    <li className='nav-item0'>
                        <Link
                            to='/client/formations'
                            className='nav-links0 text-uppercase'
                            onClick={closeMobileMenu}
                        >
                            formations
                        </Link>

                    </li>




                    <li className='nav-item0'>
                        <Link
                            to='/client/vos-inscriptions'
                            className='nav-links0 text-uppercase'
                            onClick={closeMobileMenu}
                        >
                            vos inscriptions
                        </Link>
                    </li>







                    <li className='nav-item0'>
                        <Link
                            to='/groupe-sms2i'
                            className='nav-links0 text-uppercase'
                            onClick={closeMobileMenu}
                        >
                            Groupe-sms2i
                        </Link>
                    </li>

                    <li>
                        <Link
                            to='/client/profile'
                            className='nav-links-mobile0'
                            onClick={closeMobileMenu}
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/'
                            className='nav-links-mobile0'
                            onClick={closeMobileMenu}
                        >
                            Déconnexion
                        </Link>
                    </li>
                </ul>



                <Button titre={"Profile"} path="/client/profile" />
                <Button titre={"Déconnexion"} path={"/"} />



            </nav>
        </>
    );
}
export default ClientNavBar;