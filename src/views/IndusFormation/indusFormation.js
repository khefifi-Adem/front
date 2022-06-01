import React, {useEffect, useState} from "react";
import IndusNavBar from "../../components/IndusNavBar/indusNavBar";
import formation_v1 from "../../assets/formation_v1.jpg";
import formations from "../../Data/FormationData/formation.json";
import SideBar from "../../components/SideBar/sideBar";
import {Outlet, useNavigate} from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import swal from "sweetalert";
import './indusFormation.css'
import axios from "axios";

function IndusFormation() {

    let navigate = useNavigate();
    useEffect(()=>{
        if ((localStorage.getItem('auth_token') && localStorage.getItem('auth_type')!== 'client_indus')||(!localStorage.getItem('auth_token')))
        {
            navigate(-1);
            swal('Success',"Unhothorized", "success");
        }
    },[])

    const [secteurs, setSecteurs]= useState([]);
    const initialValues ={ nb_personne: "",message:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [niveaux, setNiveaux] = useState([]);
    const [selectedNiveau, setSelectedNiveau] = useState(0);
    const [selectedType, setSelectedType] = useState(0);
    const [pages, setPages]= useState({});




    const addDemands = () => {



        const data = new FormData();
        data.append('type', selectedType);
        data.append('message', formValues.message);
        data.append('id_client_indus', localStorage.getItem('auth_id'));
        data.append('id_niveau', selectedNiveau);
        data.append('nb_personne', formValues.nb_personne);


        axios.post("api/demande_cycle", data).then(res => {

                if (res.data.status === 200) {
                    swal("Success", res.data.message, "success");
                    window.location.reload(false);

                }
            }
        )
    }


    useEffect(() => {
        axios.get('api/secteurs').then(res=> {
            if (res.status === 200)
            {

                setSecteurs(res.data.secteurs);

            }});

        axios.get('api/pages/3').then(res=> {
            if (res.status === 200)
            {

                setPages(res.data.pages);
            }
        });
        },[]);



    useEffect(()=> {
        const getNiveaux = async () => {
            await axios.get("api/niveaux").then(res => {
                if (res.status === 200) {

                    setNiveaux(res.data.niveaux);

                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getNiveaux();

    },[]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues,selectedNiveau,selectedType));
        setIsSubmit(true);
    };



    useEffect(() => {


        if (Object.keys(formErrors).length === 0 && isSubmit) {
            addDemands();
        }
    }, [formErrors,isSubmit]);


    const validate = (values,selectedNiveau,selectedType) => {
        const errors = {};

        if (!values.nb_personne) {
            errors.nb_personne = "Nombre personne is required!";
        }

        if (selectedType === 0) {
            errors.type = "Type is required";
        }
        if (!values.message) {
            errors.message = "Message is required";
        }
        if (selectedNiveau === 0) {
            errors.niveau = "Niveau is required";
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
                                <h1 className="display-5 fw-bolder text-dark mb-2">{pages.titre}</h1>
                                <p className="lead fw-normal text-dark-50 mb-4">{pages.description}</p>
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
                                secteurs.map(secteur=>(
                                    <div key={secteur.id} className="sideside">
                                        <h2 className='py-2 p-5'>{secteur.titre}</h2>
                                        <SideBar data={secteur.childrens}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="formation ">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </section>

        {/*demande dune formation on inter */}

            <section className="py-5">
                <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                    <div className="text-center mb-5">
                        <p className="lead fw-normal text-muted mb-0">Demande d'une formation Industriel</p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">

                            <form id="contactForm" onSubmit={handleSubmit} >

                                {/*subject input*/}
                                <div className="mb-3 w-100">
                                    <select className="form-select" id="niveau" name="niveau"
                                            aria-label="Floating label select example"
                                            onChange={e=>setSelectedNiveau(e.target.value)}>
                                        <option value={0}>Choose Niveau</option>
                                        {niveaux.map(niveau=>(<option key={niveau.id} value={niveau.id}>{niveau.titre}</option>))}
                                    </select>
                                    <p>
                                        {formErrors.niveau}
                                    </p>
                                </div>

                                <div className="form-floating mb-3">
                                    <select className="form-control" id="type" name="type"
                                           placeholder="(123) 12-345-678"
                                            onChange={e=>setSelectedType(e.target.value)}>
                                        <option value="">--Please choose an option--</option>
                                        <option value="intra">Intra Entreprise</option>
                                        <option value="inter">Inter Entreprise</option>

                                    </select>
                                    <label htmlFor="type">Type</label>
                                    <p>
                                        {formErrors.type}
                                    </p>
                                </div>

                                <div className="form-floating mb-3">
                                    <input className="form-control" id="nb_personne" type="text" name="nb_personne"
                                           placeholder="Nombre personne"
                                           onChange={handleChange}/>
                                    <label htmlFor="nb_personne">Nombre personne</label>
                                    <p>
                                        {formErrors.nb_personne}
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