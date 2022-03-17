import React from "react";
import {NavLink} from "react-router-dom";

function Navbar(){
    return <div className="navbar">
<h1>Movies App</h1>

<div className="navlink">
<NavLink  className="link" to="/">Home</NavLink>
<NavLink className="link" to="/about">About</NavLink>
{/* <NavLink activeclassName="active" className="link" to="/contact">Contact</NavLink> */}
<NavLink  className="link" to="/movies">Movies</NavLink>
</div>



    </div>
}
export default Navbar;