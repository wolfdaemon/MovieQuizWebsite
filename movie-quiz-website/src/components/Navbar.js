import React, {useState } from 'react'
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

import '../styles/Navbar.css';

function Navbar() {
    // useState hook to open the hiddenLinks of the hamburger mobile menu
    const [openLinks, setOpenLinks] = useState(false);
    // function to toggle the navbar upon clicking the "ReorderIcon" statement
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

    return (
    <div className="navbar">
        {/* Turnary operator on openLinks state, i.e. {state ? "true" do this : "false" do this} */}
        <div className="leftside" id={openLinks ? "open" : "close"}>
            <img className="logo" src={ Logo } />
            <div className="hiddenLinks">
                <Link to="/">Home </Link>
                <Link to="/shop">Movies </Link>
                <Link to="/about">About </Link>
                <Link to="/contact">Contact </Link>
            </div>
        </div>
        <div className="rightside">
            <Link to="/">Home</Link>
            <Link to="/shop">Movies </Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <div className="mobile-menu">
                <button onClick={toggleNavbar} className="burger-menu">
                    <ReorderIcon />
                </button>
            </div>
        </div>
    </div>
    )
}

export default Navbar
