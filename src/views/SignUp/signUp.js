import React, {useEffect, useState} from "react";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/Footer";
import swal from "sweetalert";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function SignUp() {

    let navigate = useNavigate();

    useEffect(()=>{
        if (localStorage.getItem('auth_token'))
        {
            navigate('/');
        }
    },[])
    const initialValues ={ nom: "",prenom: "",email: "",num_tel: "",adresse:"", birthday: "", password: "" ,password_confirmation:""};
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

                axios.post("api/registerclient",formSignUp).then(res=>{
                    if (res.data.status === 200){
                        localStorage.setItem('auth_token',res.data.token);
                        localStorage.setItem('auth_nom',res.data.user.nom);
                        localStorage.setItem('auth_prenom',res.data.user.prenom);
                            navigate('/client/formations');
                        swal("Success",res.data.message,"success")
                    }
                })
            }
        }, [formSignErrors,isSubmit]
    );
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.nom){
            errors.nom = "nom is required!";
        }
        if (!values.prenom)
        {
            errors.prenom = "prenom is required!";
        }
        if (!values.email)
        {
            errors.email = "Email is required!";
        }
        else if (!regex.test(values.email))
        {
            errors.email = "This is not a valid email format!";
        }
        if (!values.num_tel) {
            errors.num_tel = "phone number is required";
        } else if (values.num_tel.length !== 8) {
            errors.num_tel = "phone number must be equal to 8 digits";
        }
        if (!values.birthday){
            errors.birthday="date is required"
        }
        if (!values.adresse){
            errors.adresse="adresse is required"
        }
        if (!values.password)
        {
            errors.password = "Password is required";
        }
        else if (values.password.length < 8)
        {
            errors.password = "Password must be more than 8 characters";
        }
        else if(values.password !== values.password_confirmation){
            errors.password_confirmation ="La mot de passe repeter n'est pas correcte";
        }

        else if (values.password && !values.password_confirmation)
        {
            errors.password_confirmation = "password repeat is required";
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
                                <i className="bi bi-key-fill"/>
                            </div>
                            <h1 className="fw-bolder">S'inscrire</h1>

                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">

                                <form id="contactForm" onSubmit={handleSubmit} >
                                    {/*nom input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="nom" type="text" name="nom"
                                               placeholder="Enter your last name..." value={formSignUp.nom}
                                               onChange={handleChange}/>
                                        <label htmlFor="lastname">Nom</label>
                                        <p>
                                            {formSignErrors.nom}
                                        </p>

                                    </div>
                                    {/*prenom input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="prenom" type="text" name="prenom"
                                               placeholder="Enter your name..." value={formSignUp.prenom}
                                               onChange={handleChange}/>
                                        <label htmlFor="prenom">Prénom</label>
                                        <p>
                                            {formSignErrors.prenom}
                                        </p>

                                    </div>

                                    {/*Email address input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" type="email" name="email"
                                               placeholder="name@example.com" value={formSignUp.email}
                                               onChange={handleChange}/>
                                        <label htmlFor="email">Email address</label>
                                        <p>
                                            {formSignErrors.email}
                                        </p>

                                    </div>
                                    {/*phone number input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="num_tel" type="tel" name="num_tel"
                                               placeholder="Enter your name..." value={formSignUp.num_tel}
                                               onChange={handleChange}/>
                                        <label htmlFor="num_tel">Phone number</label>
                                        <p>
                                            {formSignErrors.num_tel}
                                        </p>

                                    </div>


                                    {/*adresse input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="adresse" type="text" name="adresse"
                                               placeholder="Enter your adresse..." value={formSignUp.adresse}
                                               onChange={handleChange}/>
                                        <label htmlFor="adresse">Adresse</label>
                                        <p>
                                            {formSignErrors.adresse}
                                        </p>

                                    </div>

                                    {/*date input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="birthday" type="date" name="birthday"
                                               placeholder="Enter your name..." value={formSignUp.birthday}
                                               onChange={handleChange}/>
                                        <label htmlFor="birthday">Birthday</label>
                                        <p>
                                            {formSignErrors.birthday}
                                        </p>

                                    </div>
                                    
                                    {/*Passworinput*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="password" type="password" name="password"
                                               placeholder="Write ur password" value={formSignUp.password}
                                               onChange={handleChange}/>
                                        <label htmlFor="password">Mot de Passe</label>
                                        <p>
                                            {formSignErrors.password}
                                        </p>
                                    </div>
                                    
                                    {/*RepeterPassworinput*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="password_confirmation" type="password" name="password_confirmation"
                                               placeholder="Write again ur password" value={formSignUp.password_confirmation}
                                               onChange={handleChange}/>
                                        <label htmlFor="password_confirmation">Répeter Mot de Passe</label>
                                        <p>
                                            {formSignErrors.password_confirmation}
                                        </p>
                                    </div>

                                    {/*Submit Button*/}
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-lg "  type="submit">
                                            S'inscrire
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


export default SignUp;