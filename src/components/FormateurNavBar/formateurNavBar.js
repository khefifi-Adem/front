import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "../Buttons/Button";
import axios from "axios";
import swal from "sweetalert";

function FormateurNavBar() {

    let navigate = useNavigate()
    const logout = (e) => {
        e.preventDefault();
        axios.post('/api/logout').then(res =>{
            if (res.data.status === 200) {
                localStorage.clear();
                swal("Success",res.data.message,"success")
                navigate('/');
            }
        })
    }


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
                            to='/formateur'
                            className='nav-links0 text-uppercase'
                            onClick={closeMobileMenu}
                        >
                            Cycle Formation
                        </Link>

                    </li>




                    <li className='nav-item0'>
                        <Link
                            to='/formateur-indus'
                            className='nav-links0 text-uppercase'
                            onClick={closeMobileMenu}
                        >
                            Cycle Formation industriel
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



                <Button titre={"Profile"} path="/formateur/profile" />
                <button className="btn1" type="button" onClick={logout} >Déconnexion</button>


            </nav>
        </>
    );
}
export default FormateurNavBar;