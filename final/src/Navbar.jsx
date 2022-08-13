import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar fixed-top  "style={{  backgroundColor: '#e3f2fd', color:'blue',fontWeight:"bold" }}  
    > 
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Restaurant product
        </Link> 
         {/* <i class="fa fa-cutlery" aria-hidden="true"></i> */}
         <img src={process.env.PUBLIC_URL+"images/download.jpg"} style={{width:"70px"}} />
        <div>
          <div className="navbar-nav d-flex flex-row gap-4">
            <NavLink
                end
              className={({ isActive }) =>isActive ? "nav-link active" : "nav-link" }
                to="Home">
                Home
            </NavLink>
          
            <NavLink
                end
              className={({ isActive }) =>isActive ? "nav-link active" : "nav-link"}
              to="/about">
                About
            </NavLink>

            <NavLink
              end
              className={({ isActive }) =>isActive ? "nav-link active" : "nav-link"}
              to="/contactus">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
