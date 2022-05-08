import React, { useState} from "react";
import "./sinscrireModal.css"



const SinscrireModal = props => {

    const initialValues ={ username: "flen fouleni ", email: "flenfouleni@gmail.com", phonenumber: "26821891",subject:"aaa",message:"aaa" };
    const [insValues, setInsValues] = useState(initialValues);

    const [isSubmit, setIsSubmit] = useState(false);

    const [insPaiement, setInsPaiement] = useState({methode:"paiement"});

    const handleRadio = (e) => {
        const { name, value } = e.target;
        setInsPaiement( { ...insPaiement, [name]: value });
        console.log(insPaiement);


    }

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setInsValues({ ...insValues, [name]: value });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
    };

    const vue =() => {
        if ( insPaiement.methode === "paiement")
        {
            return (
                <div className="">
                <h1>
                    this is paiement
                </h1>
            {/*Submit Button*/}

                <button className="btn btn-lg btn-outline-success p-2 m-2" >Suivant <i className='bi bi-chevron-right'/> </button>
            </div>
            )
        }
    }


    if (!props.show)
    {
        return null;
    }
    else {
        return (
            <div className="modall">
                <div className="modall-content">
                    <div className="modall-head">
                        <div className="text-center mb-5">
                            <h1 className="fw-bolder">{props.niveau}</h1>
                            <p className="lead fw-normal text-muted mb-0">Merci de completer votre Inscription</p>
                        </div>
                    </div>
                    <div className="modall-body">
                            <section className="py-5">
                                <div className="container ">
                                    {/* Contact form */}
                                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-1 ">

                                        <div className="row gx-5 justify-content-center">
                                            <div className="col-lg-8 col-xl-6">
                                                <div className="align-items-start w-100 d-flex flex-column bg-white rounded-3 p-5 ">
                                                    <div className="font-monospace">
                                                        <h6>Nom et Prénom: {insValues.username}</h6>
                                                    </div>
                                                    <div className="font-monospace">
                                                        <h6>Email: {insValues.email}</h6>
                                                    </div>
                                                    <div className="font-monospace">
                                                        <h6>Numero de téléphone: {insValues.phonenumber}</h6>
                                                    </div>
                                                </div>
                                                <form id="contactForm" onSubmit={handleSubmit} >
                                                    {/*Name input*/}

                                                    <div className="form-floating mb-3">
                                                        <div className="form-check"/>
                                                        <input className="form-check-input" type="radio"
                                                               name="methode1" id="methode1" value="paiement" onChange={handleRadio} checked/>
                                                            <label className="form-check-label"
                                                                   htmlFor="methode1">
                                                                Paiement en ligne
                                                            </label>
                                                    </div>

                                                    <div className="form-floating mb-3">
                                                        <div className="form-check"/>
                                                        <input className="form-check-input" type="radio"
                                                               name="methode1" id="methode1" value="caisse" onChange={handleRadio}/>
                                                            <label className="form-check-label"
                                                                   htmlFor="methode1">
                                                                Paiement a la caisse
                                                            </label>
                                                    </div>

                                                </form>
                                                <div className="container">
                                                    {
                                                      vue()
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>
                    </div>
                    <div className="modall-footer">
                        <div className=" d-flex justify-content-end">

                            <button className="btn btn-lg btn-outline-danger p-2 m-2" onClick={props.onClose} >Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default SinscrireModal;