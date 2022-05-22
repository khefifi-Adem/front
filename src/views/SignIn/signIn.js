import React, {useEffect, useState} from "react";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/Footer";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function SignIn() {

    let navigate = useNavigate()
    const initialValues ={ email: "", password: "" };
    const [formConnexion, setFormConnexion] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormConnexion({ ...formConnexion, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formConnexion));
        setIsSubmit(true);
    };

    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // swal({
            //     title:"success!",
            //     text:"Message received successfully",
            //     icon:"success",
            //     button: "Fermer"
            // })
            axios.post("api/login",formConnexion).then(res=>{
                if (res.data.status === 200){
                    localStorage.setItem('auth_token',res.data.token);
                    localStorage.setItem('auth_nom',res.data.user.nom);
                    localStorage.setItem('auth_prenom',res.data.user.prenom);
                    if (res.data.user.type === "admin"){
                        navigate('/dashboard-admin/acceuil');
                    }else if (res.data.user.type === "admin"){
                        navigate('/client/formations');
                    }
                }
            })
        }
        }, [formErrors,isSubmit]
    );
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email)
        {
            errors.email = "Email is required!";
        }
        else if (!regex.test(values.email))
        {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password)
        {
            errors.password = "Password is required";
        }
        else if (values.password.length < 8)
        {
            errors.password = "Password must be more than 8 characters";
        }

        return errors;
    };


    return(

        <div className="cont">
            <NavBar/>
            <section className="py-5">
                <div className="container px-5">
                    {/* Contact form */}
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                <i className="bi bi-door-open-fill"/>
                            </div>
                            <h1 className="fw-bolder">Connexion</h1>

                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">

                                <form id="contactForm" onSubmit={handleSubmit} >

                                    {/*Email address input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" type="email" name="email"
                                               placeholder="name@example.com" value={formConnexion.email}
                                               onChange={handleChange}/>
                                        <label htmlFor="email">Email address</label>
                                        <p>
                                            {formErrors.email}
                                        </p>

                                    </div>
                                    {/*Phone number input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="password" type="password" name="password"
                                               placeholder="Write ur password" value={formConnexion.password}
                                               onChange={handleChange}/>
                                        <label htmlFor="password">Mot de Passe</label>
                                        <p>
                                            {formErrors.password}
                                        </p>
                                    </div>

                                    {/*Submit Button*/}
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-lg "  type="submit">
                                            Connexion
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
export default SignIn;