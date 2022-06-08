import React from "react";
import '../styles/Content.css';
import Card from "./Card";
import Hero from "./Hero";

import Data from '../data/data.js';

export default function Content() {
    const items = Data.map((info) => {
        return (<Card obj={info} key={info.id} />)
    })

    return (
        <div className="content">
            <Hero />
            <div className="content--list">{items}</div>
        </div>
    )
}