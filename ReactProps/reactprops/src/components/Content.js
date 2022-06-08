import React from "react";
import '../styles/Content.css';
import Card from "./Card";
import Hero from "./Hero";

export default function Content() {
    return (
        <div className="content">
            <Hero></Hero>
            <Card />
        </div>
    )
}