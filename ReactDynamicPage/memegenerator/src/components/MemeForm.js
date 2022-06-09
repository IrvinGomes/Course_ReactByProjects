import React from "react";
import '../styles/MemeForm.css';

export default function MemeForm() {
    return (
        <div>
            <form className="memeForm">
                <input className="memeForm--input" type="text" placeholder="Top Text" />
                <input className="memeForm--input" type="text" placeholder="Bottom text" />
                <button className="memeForm--submit">Get a new meme image 🖼️</button>
            </form>
        </div>
    )
}