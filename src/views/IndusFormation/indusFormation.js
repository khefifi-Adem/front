import React, {useEffect, useState} from "react";
import IndusNavBar from "../../components/IndusNavBar/indusNavBar";
import formation_v1 from "../../assets/formation_v1.jpg";
import formations from "../../Data/FormationData/formation.json";
import SideBar from "../../components/SideBar/sideBar";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import swal from "sweetalert";
import './indusFormation.css'

function IndusFormation() {

    const initialValues ={ nbrpersonne: "",subject:"",message:"" };
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
                text:"demand received successfully",
                icon:"success",
                button: "Fermer"
            })
        }
    }, [formErrors,isSubmit]);
    const validate = (values) => {
        const errors = {};

        if (!values.nbrpersonne) {
            errors.nbrpersonne = "Nomber personne is required!";
        }

        if (!values.subject) {
            errors.subject = "subject is required";
        }
        if (!values.message) {
            errors.message = "message is required";
        }
        return errors;
    };

    return (
        <div className="cont">
            <IndusNavBar/>

            {/*Formation section*/}
            <section className=" py-5 ">
                <div className="container px-5 ">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-dark mb-2">La formation pour une industrie au top</h1>
                                <p className="lead fw-normal text-dark-50 mb-4">Pour rester compétitif, il suffit d’assurer des formations de qualité à tous les employés, tout au long de leur vie professionnelle et adapter les formations aux opportunités professionnelles</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#">En vedette</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6  d-xl-block text-center">
                            <img className="img-fluid rounded-3 my-5" src={formation_v1} alt="..." />
                        </div>
                    </div>
                </div>
            </section>

            <section className='mb-3 mt-3 ' >
                <div className="">
                    {/*<h2 className="fw-bolder align-self-lg-center p-5"></h2>*/}
                    <div className="cont_for">
                        <div className="side">
                            {
                                formations.map(formation=>(
                                    <div key={formation.id}>
                                        <h2 className='py-2 p-5'>{formation.titre}</h2>
                                        <SideBar data={formation.childrens}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="formation  ">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </section>

        {/*demande dune formation on inter */}

            <section className="py-5">
                <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                    <div className="text-center mb-5">
                        <p className="lead fw-normal text-muted mb-0">Demande d'une formation en intra-entreprise</p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">

                            <form id="contactForm" onSubmit={handleSubmit} >

                                {/*subject input*/}
                                <div className="form-floating mb-3">
                                    <select className="form-control" id="sujet" type="text" name="subject"
                                           placeholder="(123) 12-345-678" value={formValues.subject}
                                            onChange={handleChange}>
                                        <option value="">--Please choose an option--</option>
                                        <option value="dog">Niveau 1</option>
                                        <option value="cat">Niveau 1</option>
                                        <option value="hamster">Niveau 1</option>
                                        <option value="parrot">Niveau 1</option>
                                        <option value="spider">Niveau 1</option>
                                        <option value="goldfish">Niveau 1</option>
                                    </select>
                                    <label htmlFor="sujet">Niveau</label>
                                    <p>
                                        {formErrors.subject}
                                    </p>
                                </div>

                                <div className="form-floating mb-3">
                                    <input className="form-control" id="nbr_personne" type="text" name="nbr_personne"
                                           placeholder="Nombre personne" value={formValues.nbrpersonne}
                                           onChange={handleChange}/>
                                    <label htmlFor="nbr_personne">Nombre personne</label>
                                    <p>
                                        {formErrors.nbrpersonne}
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
            </section>


            <div className="pt-5"><Footer /></div>
        </div>
    )

}

export default IndusFormation;