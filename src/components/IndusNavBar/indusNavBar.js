import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./indusNavBar.css"
import {Button} from "../Buttons/Button";
import axios from "axios";
import swal from "sweetalert";

function IndusNavBar() {
    const [clickk, setClickk] = useState(false);
    let navigate = useNavigate();
    const handleClick = () => setClickk(!clickk);
    const closeMobileMenu = () => setClickk(false);
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


    return (
        <>
            <nav className='navbar2 '>
                <Link to='/' className='navbar-logo2 navbar-brand' onClick={closeMobileMenu}>
                    SMS2I

                </Link>
                <div className='menu-icon2' onClick={handleClick}>
                    <i className={clickk ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={clickk ? 'nav-menu2 active' : 'nav-menu2'}>

                    <li className='nav-item2'>
                        <Link
                            to='/client-indus/formations'
                            className='nav-links2 text-uppercase'
                            onClick={closeMobileMenu}
                        >
                            formations
                        </Link>

                    </li>




                    <li className='nav-item2'>
                        <Link
                            to='/client-indus/vos-inscriptions'
                            className='nav-links2 text-uppercase'
                            onClick={closeMobileMenu}
                        >
                            vos inscriptions
                        </Link>
                    </li>
                    <li className='nav-item2'>
                        <Link
                            to='/client-indus/vos-projets'
                            className='nav-links2 text-uppercase'
                            onClick={closeMobileMenu}
                        >
                            vos projets
                        </Link>
                    </li>









                    <li>
                        <Link
                            to='/'
                            className='nav-links-mobile2'
                            onClick={closeMobileMenu}
                        >
                            Déconnexion
                        </Link>
                    </li>
                </ul>



                <Button titre={"Profile"} path="/client-indus/profile" />
                <button className="btn1" type="button" onClick={logout} >Déconnexion</button>



            </nav>
        </>
    );
}
export default IndusNavBar;