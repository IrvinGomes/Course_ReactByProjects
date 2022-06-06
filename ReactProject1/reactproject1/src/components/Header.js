import React from 'react';
import logo192 from '../images/logo192.png'

export default function Header() {
    return (
        <header>
            <nav className='header'>
                <Logo />
                <h1>Project 1</h1>
                <Menu />
            </nav>
        </header>
    )
}

function Logo() {
    return (
        <img src={logo192} className="logo" />
    )
}

function Menu() {
    return (
        <ul className='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    )
}