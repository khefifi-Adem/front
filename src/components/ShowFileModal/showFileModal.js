import React from "react";



function ShowFileModal( {path} ) {
    return(
            <div className="modal fade"   id="showfilemodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <iframe className="w-100 h-100"  src={path}   allow="autoplay" ></iframe>
                        </div>
                    </div>
                </div>
            </div>

    )

}
export default ShowFileModal;