import React from "react";
import "./showFileModal.css"


function ShowFileModal( {path} ) {
    return(
            <div className=" modal fade"   id="showfilemodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="m-0 p-0 modal-content">
                        <div className="mod modal-body">
                            <iframe className="m-0 p-0 w-100 h-100"  src={path}   allow="autoplay" />
                        </div>
                    </div>
                </div>
            </div>

    )

}
export default ShowFileModal;