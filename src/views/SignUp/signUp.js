import React, {useEffect, useState} from "react";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/Footer";
import swal from "sweetalert";

function SignUp() {

    const initialValues ={ lastname: "",name: "",email: "",phone_number: "",birthday: "", password: "" ,repeterpassword:""};
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
                swal({
                    title:"success!",
                    text:"Message received successfully",
                    icon:"success",
                    button: "Fermer"
                })
            }
        }, [formSignErrors,isSubmit]
    );
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.lastname){
            errors.lastname = "lastname is required!";
        }
        if (!values.name)
        {
            errors.name = "name is required!";
        }
        if (!values.email)
        {
            errors.email = "Email is required!";
        }
        else if (!regex.test(values.email))
        {
            errors.email = "This is not a valid email format!";
        }
        if (!values.phone_number) {
            errors.phone_number = "phone number is required";
        } else if (values.phone_number.length !== 8) {
            errors.phone_number = "phone number must be equal to 8 digits";
        }
        if (!values.birthday){
            errors.birthday="date is required"
        }
        if (!values.password)
        {
            errors.password = "Password is required";
        }
        else if (values.password.length < 8)
        {
            errors.password = "Password must be more than 8 characters";
        }
        else if(values.password !== values.repeterpassword){
            errors.repeterpassword ="La mot de passe repeter n'est pas correcte";
        }

        else if (values.password && !values.repeterpassword)
        {
            errors.repeterpassword = "password repeat is required";
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
                                        <input className="form-control" id="lastname" type="text" name="lastname"
                                               placeholder="Enter your last name..." value={formSignUp.lastname}
                                               onChange={handleChange}/>
                                        <label htmlFor="lastname">Nom</label>
                                        <p>
                                            {formSignErrors.lastname}
                                        </p>

                                    </div>
                                    {/*prenom input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="name" type="text" name="name"
                                               placeholder="Enter your name..." value={formSignUp.name}
                                               onChange={handleChange}/>
                                        <label htmlFor="name">Prénom</label>
                                        <p>
                                            {formSignErrors.name}
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
                                        <input className="form-control" id="phone_number" type="tel" name="phone_number"
                                               placeholder="Enter your name..." value={formSignUp.phone_number}
                                               onChange={handleChange}/>
                                        <label htmlFor="phone_number">Phone number</label>
                                        <p>
                                            {formSignErrors.phone_number}
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
                                        <input className="form-control" id="repeterpassword" type="password" name="repeterpassword"
                                               placeholder="Write again ur password" value={formSignUp.repeterpassword}
                                               onChange={handleChange}/>
                                        <label htmlFor="repeterpassword">Répeter Mot de Passe</label>
                                        <p>
                                            {formSignErrors.repeterpassword}
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