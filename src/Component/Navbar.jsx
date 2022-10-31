import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Style.css";


export const Navbar=(props)=>{
    const [isMobile,setisMobile]=React.useState(false)
    const {
        log,
        ho,
        ab,
        port,
        stk,
        con
    }=props
    return(
        <div className="container">
            <div className="logo">{log}</div>
            <ul className={isMobile ? "nav-links-mobile" : "navbar-links"} onClick={() => setisMobile(false)}>
            <Link to="#home" className="Nav-home" smooth>
                <li>{ho}</li>
            </Link>
            <Link to="#about" className="Nav-about" smooth>
                <li>{ab}</li>
            </Link>
            <Link to="#portfolio" className="Nav-port" smooth>
                <li>{port}</li>
            </Link>
            <Link to="#stacks" className="Nav-stack" smooth>
                <li>{stk}</li>
            </Link>
            <Link to="#contact" className="Nav-contact" smooth>
                <li>{con}</li>
            </Link>
            </ul>
            <button className="mobile-menu-icon" 
            onClick={()=> setisMobile(!isMobile)}>
                {isMobile ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars-staggered"></i> }
            </button>
        </div>
    )
}