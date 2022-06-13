import React, { useState } from "react";
import '../styles/MemeForm.css';
import Data from '../data/memesData.js'

export default function MemeForm() {
    const memes = Data.data.memes;
    let [meme, setMeme] = useState();
    let [top_text, setTopText] = useState();
    let [bottom_text, setBottomText] = useState();

    function getMeme() {
        setMeme(memes[Math.floor(Math.random() * memes.length)])
    }

    function getTopText(event) {
        setTopText(event.target.value)
    }
    function getBottomText(event) {
        setBottomText(event.target.value)
    }

    return (
        <div>
            <div className="memeForm" action="#">
                <input
                    className="memeForm--input"
                    type="text"
                    placeholder="Top Text"
                    onChange={getTopText} />
                <input
                    className="memeForm--input"
                    type="text"
                    placeholder="Bottom text"
                    onChange={getBottomText} />
                <button
                    className="memeForm--submit"
                    onClick={getMeme}>
                    Get a new meme image 🖼️
                </button>
            </div>
            <div className="memeImage">
                <p className="memeImage--top_text">{top_text}</p>
                {meme && <img src={meme.url} alt="" />}
                <p className="memeImage--bottom_text">{bottom_text}</p>
            </div>
        </div>
    )
}