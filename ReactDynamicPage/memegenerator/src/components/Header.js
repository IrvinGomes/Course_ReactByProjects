import React from "react";
import '../styles/Header.css';

export default function Header() {
    return (
        <div className="header">
            <img className="header--img" src="https://clipart.world/wp-content/uploads/2020/08/troll-face-transparent.png" alt="" />
            <h2 className="header--title">MemeGenerator</h2>
            <h3 className="header--text">React Course - Project 3</h3>
        </div>
    )
}