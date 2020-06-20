import React from 'react';
import {Link } from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg nav-tabs navbar-dark bg-secondary " style={{fontSize:"18px", fontWeight:"700", color:"white"}}>
            <div className="collapse navbar-collapse justify-content-end mr-5" id="navbarSupportedContent">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/review">Review</Link>
                    <Link className="nav-item nav-link" to="/ratings">Ratings</Link>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;