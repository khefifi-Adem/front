import React from 'react';
import './Button.css';
import {Link} from "react-router-dom";



export function Button({titre,path}) {
  return (
      <>
          {/*data-bs-toggle={databstoggle} data-bs-target={databstarget}*/}
          <Link className="lien" to={path}>
              <button className="btn1 "  >
                  {titre}
              </button>
          </Link>
      </>
  );
}
