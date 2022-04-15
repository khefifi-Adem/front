import React from 'react';
import './Button.css';



export function Button({titre}) {
  return (
      <>
          {/*data-bs-toggle={databstoggle} data-bs-target={databstarget}*/}
      <button className="btn1 "  >{titre}</button>

      </>
  );
}
