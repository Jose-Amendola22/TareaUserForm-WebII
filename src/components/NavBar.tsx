//@ts-nocheck
import React from "react";
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Home from "../screens/Home.tsx"
import About from "../screens/About.tsx"
import TermsAndConditions from "../screens/TermsAndConditions.tsx"
function NavBar() {
    return(
        <Router>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        {/* <a className="nav-link" href="/#"> Home </a> */}
                        <NavLink to="/" className="nav-link active"> Home </NavLink>
                    </li>
                    <li className="nav-item active">
                        {/* <a className="nav-link" href="/#"> About</a> */}
                        <NavLink to="/about/10" className="nav-link active"> About 10 </NavLink>
                    </li>
    
                    <li className="nav-item active">
                        {/* <a className="nav-link " href="/#" >Terms and Conditions</a> */}
                        <NavLink to="/about/20" className="nav-link active"> About 20 </NavLink>
                    </li>
                    <li className="nav-item active">
                        {/* <a className="nav-link " href="/#" >Terms and Conditions</a> */}
                        <NavLink to="/terms-and-conditions" className="nav-link active"> Terms and conditions </NavLink>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about/:id" element={<About/>}/>
                <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>

            </Routes>

        </Router>
    )

}

export default NavBar