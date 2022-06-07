import React from 'react';
import logo192 from '../images/logo192.png'

export default function Header() {
    return (
        <header>
            <nav className='nav'>
                <Logo />
                <h3 className='nav--logo_text'>ReactExpectation</h3>
                <Menu />
            </nav>
        </header>
    )
}

function Logo() {
    return (
        <img src={logo192} className="nav--logo" alt="Logo" />
    )
}

function Menu() {
    return (
        <h4 className='nav--title'>React Course - Project 1</h4>
    )
}