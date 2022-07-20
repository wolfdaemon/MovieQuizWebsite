import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/astronautGunship.jpg';
import "../styles/Home.css";


function Home() {
    return (
    <div className="home"
    style={{ backgroundImage: `url(${BannerImage})` }}
    >
        <div
        className="headerContainer">
            <h1> MOVIEQUIZ </h1>
            <p> TEST YOUR KNOWLEDGE </p>
            <Link to="menu">
                <button> SEE MOVIES </button>
            </Link>
        </div>
    </div>
    )
}

export default Home
