import React from "react";
import {Link} from "react-router-dom";


function Footer() {
 return(
     <footer className=" footer py-4 mt-auto">
         <div className="container px-5">
             <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                 <div className="col-auto">
                     <div className="small m-0 text-black">
                         Copyright &copy; SMS2I 2022
                     </div>
                 </div>
                 <div className="col-auto">
                     <Link className="text-black " to="#!">
                         <i className="fa fa-solid fa-twitter"/>
                     </Link>
                     <span className="text-black mx-1">&middot;</span>
                     <a className="text-black " href="https://www.facebook.com/SMS2i-100632635146941">
                         <i className="fa fa-facebook"/>
                     </a>
                     <span className="text-black mx-1">&middot;</span>
                     <Link className="text-black " to="#!">
                         <i className="fa fa-instagram"/>
                     </Link>
                 </div>
             </div>
         </div>
     </footer>
 );
}
export default Footer;