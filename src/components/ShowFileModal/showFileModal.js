import React from "react";
import "./showFileModal.css"


function ShowFileModal( {path,id} ) {
    return(
            <div className="file modal fade"   id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="file-container modal-dialog">
                    <div className="file-content m-0 p-0 modal-content">
                        <div className="mod modal-body">
                            <iframe className="m-0 p-0 w-100 h-100"  src={path}   allow="autoplay" />
                        </div>
                    </div>
                </div>
            </div>

    )

}
export default ShowFileModal;