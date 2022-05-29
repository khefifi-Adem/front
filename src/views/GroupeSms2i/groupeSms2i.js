import React, {useEffect, useState} from "react";
import "./groupeSms2i.css";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/Footer";
import groupe_sms2i from "../../assets/sms2i_presentation3.jpg";
import groupes from "../../Data/GroupeSms2iData/GroupeSms2i.json"
import {useNavigate} from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";


function GroupeSms2i() {

    let navigate = useNavigate();
    useEffect(()=>{
        if (localStorage.getItem('auth_token'))
        {
            navigate(-1);
            swal('Success',"u have to deconnect", "success");
        }
    },[])


    const [pages, setPages]= useState({});
    useEffect(()=> {
        const getPage = async () => {
            await axios.get("api/pages/5").then(res => {
                if (res.status === 200) {

                    setPages(res.data.pages);

                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getPage()

    },[])





    const [groupeSms2i, setGroupeSms2i] = useState([]);
    useEffect(()=> {
        const getGroupe = async () => {
            await axios.get("api/groupe_sms2i").then(res => {
                if (res.status === 200) {

                    setGroupeSms2i(res.data.groupesms2i);

                }
            }).catch((e) => {
                console.log(e)
            });
        };
        getGroupe()

    },[])

    return(
        <div className="cont">
             <NavBar/>

            <section className=" py-1" >
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-xl-5 col-xxl-6  d-xl-block text-center">
                            <img className="img-fluid rounded-3 my-5" src={`http://127.0.0.1:8000/${pages.image_path}`} alt="..." />
                        </div>
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder  mb-2">{pages.titre}</h1>
                                <p className="text lead fw-bold  mb-4">
                                    {pages.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                groupeSms2i.map(groupe=>(
                    <section className="py-5 border ">
                        <div className="m-0 row gx-5 align-items-center justify-content-cente p-5">
                            <div className="d-flex col-12 justify-content-center pb-5  ">
                                <h1 className="display-5 fw-bolder">{groupe.nom_soc}</h1>
                            </div>
                            <div className="col-12">
                                <p className="text lead fw-bold d-flex justify-content-center" >{groupe.description}</p>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <img className="img-fluid rounded-3 " src={`http://127.0.0.1:8000/${groupe.image_path}`} alt="..." />
                        </div>
                    </section>
                ))}

            <div className="pt-5">
                <Footer/>
            </div>
        </div>
    )

}

export default GroupeSms2i;