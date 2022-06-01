import React, {useEffect, useState} from "react";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/Footer";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import ClientNavBar from "../../components/ClientNavBar/clientNavBar";


function ProfileClient() {

    let navigate = useNavigate();
    //
    // useEffect(()=>{
    //     if (localStorage.getItem('auth_token'))
    //     {
    //         navigate('/');
    //     }
    // },[])
    const initialValues ={ password: "" ,newPassword: "" ,password_confirmation:""};
    const [formSignUp, setFormSignUp] = useState(initialValues);
    const [formSignErrors, setFormSignErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormSignUp({ ...formSignUp, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSignErrors(validate(formSignUp));
        setIsSubmit(true);
    };

    useEffect(() => {

            if (Object.keys(formSignErrors).length === 0 && isSubmit) {

                axios.put(`api/modifier_passe/${localStorage.getItem('auth_id')}`,formSignUp).then(res=>{
                    if (res.data.status === 200){
                        swal('Success',res.data.message,'syccess');


                    }else {
                        swal('Error',res.data.message,'error');
                    }

                })
            }
        }, [formSignErrors,isSubmit]
    );
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.password)
        {
            errors.password = "Password is required";
        }
        else if (values.password.length < 8)
        {
            errors.password = "Password must be more than 8 characters";
        }

        if (!values.newPassword)
        {
            errors.newPassword = "New password is required";
        }
        else if (values.newPassword.length < 8)
        {
            errors.newPassword = "New password must be more than 8 characters";
        }
        else if(values.newPassword !== values.password_confirmation){
            errors.password_confirmation ="La mot de passe repeter n'est pas correcte";
        }

        else if (values.newPassword && !values.password_confirmation)
        {
            errors.password_confirmation = "New password repeat is required";
        }

        return errors;
    };

    return(

        <div className="cont">
            <ClientNavBar/>
            <section className="py-5">
                <div className="container px-5">
                    {/* Contact form */}
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">

                            <h1 className="fw-bolder">Changer Mot De Passe</h1>

                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">


                            <form id="contactForm" onSubmit={handleSubmit} >




                                    {/*Passworinput*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="password" type="password" name="password"
                                               placeholder="Write ur actual password" value={formSignUp.password}
                                               onChange={handleChange}/>
                                        <label htmlFor="password">Mot de Passe actuel</label>
                                        <p>
                                            {formSignErrors.password}
                                        </p>
                                    </div>

                                    {/*Passworinput*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="newPassword" type="password" name="newPassword"
                                               placeholder="Write ur password" value={formSignUp.newPassword}
                                               onChange={handleChange}/>
                                        <label htmlFor="newPassword">Nouveau Mot de Passe</label>
                                        <p>
                                            {formSignErrors.newPassword}
                                        </p>
                                    </div>

                                    {/*RepeterPassworinput*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="password_confirmation" type="password" name="password_confirmation"
                                               placeholder="Write again ur password" value={formSignUp.password_confirmation}
                                               onChange={handleChange}/>
                                        <label htmlFor="password_confirmation">Répeter Nouveau Mot de Passe</label>
                                        <p>
                                            {formSignErrors.password_confirmation}
                                        </p>
                                    </div>

                                    {/*Submit Button*/}
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-lg "  type="submit">
                                            Changer
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="pt-5"> <Footer/> </div>
        </div>
    );
}
export default ProfileClient;