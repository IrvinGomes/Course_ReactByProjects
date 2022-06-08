import React from "react";
import '../styles/Navbar.css';
import AirbnbLogo from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <div className="nav">
            <img className="nav--logo" src={AirbnbLogo} alt="" />
        </div>
    )
}