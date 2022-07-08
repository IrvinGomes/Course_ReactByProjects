import React, { useState } from "react";
import '../styles/MemeForm.css';
import Data from '../data/memesData.js'

export default function MemeForm() {
    const memes = Data.data.memes;
    let [meme, setMeme] = useState({
        url: '',
        top_text: '',
        bottom_text: ''
    });

    function getMeme() {
        setMeme(prevMeme => ({ ...prevMeme, url: memes[Math.floor(Math.random() * memes.length)].url }))
    }

    function getTopText(event) {
        setMeme(prevMeme => ({ ...prevMeme, top_text: event.target.value }))
    }
    function getBottomText(event) {
        setMeme(prevMeme => ({ ...prevMeme, bottom_text: event.target.value }))
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
                <p className="memeImage--top_text">{meme.top_text}</p>
                {meme.url && <img src={meme.url} alt="" />}
                <p className="memeImage--bottom_text">{meme.bottom_text}</p>
            </div>
        </div>
    )
}