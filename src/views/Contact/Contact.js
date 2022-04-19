import React, {useEffect, useState} from "react";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/Footer";
import swal from "sweetalert";
function Contact() {

    const initialValues ={ username: "", email: "", phonenumber: "",subject:"",message:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmit) {
            swal({
                title:"success!",
                text:"Message received successfully",
                icon:"success",
                button: "Fermer"
            })
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.phonenumber) {
            errors.phonenumber = "phone number is required";
        } else if (values.phonenumber.length !== 8) {
            errors.phonenumber = "phone number must be equal to 8 digits";
        }
        if (!values.subject) {
            errors.subject = "subject is required";
        }
        if (!values.message) {
            errors.message = "message is required";
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
                                <i className="bi bi-envelope"/>
                            </div>
                            <h1 className="fw-bolder">Entrer en contact</h1>
                            <p className="lead fw-normal text-muted mb-0">Nous aimerions recevoir de vos nouvelles</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">

                                <form id="contactForm" onSubmit={handleSubmit} >
                                    {/*Name input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="name" type="text" name="username"
                                               placeholder="Enter your name..." value={formValues.username}
                                               onChange={handleChange}/>
                                        <label htmlFor="name">Nom & Prénom</label>
                                        <p>
                                            {formErrors.username}
                                        </p>

                                    </div>
                                     {/*Email address input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" type="email" name="email"
                                               placeholder="name@example.com" value={formValues.email}
                                               onChange={handleChange}/>
                                        <label htmlFor="email">Email address</label>
                                        <p>
                                            {formErrors.email}
                                        </p>

                                    </div>
                                     {/*Phone number input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="phone" type="tel" name="phonenumber"
                                               placeholder="(123) 456-7890" value={formValues.phonenumber}
                                               onChange={handleChange}/>
                                        <label htmlFor="phone">Phone number</label>
                                        <p>
                                            {formErrors.phonenumber}
                                        </p>
                                    </div>

                                    {/*subject input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="sujet" type="text" name="subject"
                                               placeholder="(123) 12-345-678" value={formValues.subject}
                                               onChange={handleChange}/>
                                        <label htmlFor="sujet">sujet</label>
                                        <p>
                                            {formErrors.subject}
                                        </p>
                                    </div>
                                     {/*Message input*/}
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="message" name="message"
                                                  placeholder="Enter your message here..." value={formValues.message}
                                                  onChange={handleChange}/>
                                        <label htmlFor="message">Message</label>
                                        <p >
                                            {formErrors.message}

                                        </p>
                                    </div>



                                    {/*Submit Button*/}
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-lg "  type="submit">
                                            Envoyer
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/*Contact cards*/}
                    <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5">

                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                                className="bi bi-telephone"/></div>
                            <div className="h5">Call us</div>
                            <p className="text-muted mb-0">Call us during normal business hours at (216) 26-821-891.</p>
                        </div>

                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                                className="bi bi-twitter"/></div>
                            <div className="h5 mb-2">Chat with us</div>
                            <p className="text-muted mb-0">Chat live with one of our support specialists.</p>
                        </div>

                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                <i className="bi bi-facebook"/>
                            </div>
                            <div className="h5">Ask the community</div>
                            <p className="text-muted mb-0">Explore our community forums and communicate with other
                                users.</p>
                        </div>

                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                <i className="bi bi-instagram"/>
                            </div>
                            <div className="h5">Support center</div>
                            <p className="text-muted mb-0">Browse FAQ's and support articles to find solutions.</p>
                        </div>

                    </div>
                </div>
            </section>
           <div className="pt-5"> <Footer/> </div>
        </div>
    );
}
export default Contact;