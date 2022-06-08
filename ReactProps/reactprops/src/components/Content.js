import React from "react";
import '../styles/Content.css';
import Card from "./Card";
import Hero from "./Hero";

import Katie from '../images/katie-zaferes.png'

export default function Content() {
    const title = "Life Lessons with Katie Zaferes";
    const price = 136

    const list = [
        { img: Katie, rating: 5.0, reviewCount: 6, country: "USA", title: title, price: price },
        { img: Katie, rating: 5.0, reviewCount: 6, country: "USA", title: title, price: price },
        { img: Katie, rating: 5.0, reviewCount: 6, country: "USA", title: title, price: price },
        { img: Katie, rating: 5.0, reviewCount: 6, country: "USA", title: title, price: price },
        { img: Katie, rating: 5.0, reviewCount: 6, country: "USA", title: title, price: price },
        { img: Katie, rating: 5.0, reviewCount: 6, country: "USA", title: title, price: price },
        { img: Katie, rating: 5.0, reviewCount: 6, country: "USA", title: title, price: price },
        { img: Katie, rating: 5.0, reviewCount: 6, country: "USA", title: title, price: price }
    ]

    return (
        <div className="content">
            <Hero />
            <div className="content--list">
                {list.map((info, i) => {
                    return (<Card obj={info} key={i} />)
                })}
            </div>
        </div>
    )
}