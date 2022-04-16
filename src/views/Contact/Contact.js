import React from "react";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/Footer";

function Contact() {
    return(
        <>
            <div className="fixed-top">
                <NavBar/>
            </div>
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

                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    {/*Name input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="name" type="text"
                                               placeholder="Enter your name..." data-sb-validations="required"/>
                                        <label htmlFor="name">Full name</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is
                                            required.
                                        </div>
                                    </div>
                                     {/*Email address input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" type="email"
                                               placeholder="name@example.com" data-sb-validations="required,email"/>
                                        <label htmlFor="email">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is
                                            required.
                                        </div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not
                                            valid.
                                        </div>
                                    </div>
                                     {/*Phone number input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="phone" type="tel"
                                               placeholder="(123) 456-7890" data-sb-validations="required"/>
                                        <label htmlFor="phone">Phone number</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone
                                            number is required.
                                        </div>
                                    </div>

                                    {/*subject input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="sujet" type="text"
                                               placeholder="(123) 12-345-678" data-sb-validations="required"/>
                                        <label htmlFor="phone">sujet</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">
                                            A subject is required.
                                        </div>
                                    </div>
                                     {/*Message input*/}
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="message"
                                                  placeholder="Enter your message here..."
                                                  data-sb-validations="required"/>
                                        <label htmlFor="message">Message</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message
                                            is required.
                                        </div>
                                    </div>
                                     {/*Submit success message*/}
                                     {/*This is what your users will see when the form*/}
                                     {/*has successfully submitted*/}
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                        </div>
                                    </div>
                                    {/*Submit error message-->*/}
                                    {/*This is what your users will see when there is*/}
                                    {/*an error submitting the form*/}
                                    <div className="d-none" id="submitErrorMessage">
                                        <div className="text-center text-danger mb-3">
                                            Error sending message!
                                        </div>
                                    </div>
                                    {/*Submit Button*/}
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-lg disabled" id="submitButton"
                                                type="submit">
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
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                                className="bi bi-facebook"/></div>
                            <div className="h5">Ask the community</div>
                            <p className="text-muted mb-0">Explore our community forums and communicate with other
                                users.</p>
                        </div>

                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                                className="bi bi-instagram"/></div>
                            <div className="h5">Support center</div>
                            <p className="text-muted mb-0">Browse FAQ's and support articles to find solutions.</p>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}
export default Contact;