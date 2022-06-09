import React from "react";

import '../styles/Header.css'

export default function Header() {
    return (
        <div className="header">
            <img className="header--img" src="https://cdn-icons-png.flaticon.com/512/44/44536.png" alt="" />
            <h3 className="header--text">My Travel Journal</h3>
        </div>
    )
}