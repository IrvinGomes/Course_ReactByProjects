import React from "react";


export default function Footer() {

    let year = new Date().getFullYear()
    return (
        <footer className='footer'>
            <small>© {year} Gomes development. All rights reserved.</small>
        </footer>
    )
}