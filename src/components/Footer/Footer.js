import React from "react";
import {Link} from "react-router-dom";


function Footer() {
 return(
     <footer className=" bg-black py-4 mt-auto">
         <div className="container px-5">
             <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                 <div className="col-auto">
                     <div className="small m-0 text-white">
                         Copyright &copy; Your Website 2022
                     </div>
                 </div>
                 <div className="col-auto">
                     <Link className="link-light small" to="#!">
                         Privacy
                     </Link>
                     <span className="text-white mx-1">&middot;</span>
                     <Link className="link-light small" to="#!">
                         Terms
                     </Link>
                     <span className="text-white mx-1">&middot;</span>
                     <Link className="link-light small" to="#!">
                         Contact
                     </Link>
                 </div>
             </div>
         </div>
     </footer>
 );
}
export default Footer;