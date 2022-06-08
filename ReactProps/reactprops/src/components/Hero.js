import React from "react";
import '../styles/Hero.css';
import PhotoGrid from '../images/photo-grid.png';

export default function Hero() {
    return (
        <section className="hero">
            <img src={PhotoGrid} alt="" className="hero--photo" />

            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>

        </section>
    )
}