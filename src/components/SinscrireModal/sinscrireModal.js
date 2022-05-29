import React, { useState} from "react";
import axios from "axios";
import swal from "sweetalert";

function SinscrireModal({cycle}) {

    const initialValues ={ card_number: "", yy: "", mm: "", cvc: ""};
    const [inscrire, setInscrire] = useState(initialValues);

    const handleInput = (e) => {

        const { name, value } = e.target;
        setInscrire({ ...inscrire, [name]: value });

    }

    const addInscription = (e) => {
        e.preventDefault();


        const data = new FormData();
        data.append('id_user',localStorage.getItem('auth_id'));
        data.append('id_cycle_formation',cycle.id);
        data.append('etat','confirmed');
        axios.post(`api/inscriptions`, data).then(res=>{
            if (res.data.status === 200)
            {
                swal("Success",res.data.message);
                window.location.reload(false);
            }
        })
    }

    return (
        <div className=" modal fade"   id={`cycle${cycle.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content d-flex align-items-center p-2">
                    <h1 className="fw-normal"> Paiement d'inscription </h1>
                    <form className="w-100" onSubmit={addInscription}>
                        <div className="form-floating mb-3 w-100">
                            <input className="form-control w-100" id="card_number" type="text" name="card_number"
                                   placeholder="Enter your title here..."
                                   value={inscrire.card_number}
                                   onChange={handleInput}

                            />
                            <label htmlFor="card_number"><i className="fa-solid fa-credit-card"/>Card Number</label>

                        </div>
                        <div className="row ">
                        <div className="col-md-4 form-floating mb-3 ">
                            <input className="form-control w-100" id="mm" type="text" name="mm"
                                   placeholder="fontawesome icons , bootstrap icons"
                                   value={inscrire.mm}
                                   onChange={handleInput}
                                /><label htmlFor="mm">MM</label>
                        </div>
                        <div className=" col-md-4 form-floating mb-3">
                            <input className="form-control w-100" id="yy" type="text" name="yy"
                                   placeholder="fontawesome icons , bootstrap icons"
                                   value={inscrire.yy}
                                   onChange={handleInput}
                            /><label htmlFor="yy">YY</label>
                        </div>

                        <div className=" col-md-4 form-floating mb-3">
                            <input className="form-control w-100" id="cvc" type="text" name="cvc"
                                   placeholder="fontawesome icons , bootstrap icons"
                                   value={inscrire.cvc}
                                   onChange={handleInput}
                            /><label htmlFor="icon">CvC</label>
                        </div>
                        </div>



                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary m-1" type="submit" >Valider</button>
                            <button className="btn btn-success m-1" type="button" data-bs-dismiss="modal" aria-label="Close">Annuler</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

}

export  default  SinscrireModal;