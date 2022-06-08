import React from 'react';
import '../styles/Card.css';

export default function Card(props) {
    return (
        <div className='card'>
            <img src={'/images/' + props.obj.coverImg} alt='' className='card--img' />
            <div className='card--stats'>
                <img src='star.png' alt='' className='card--star' />
                <span>{props.obj.stats.rating}</span>
                <span className='gray'>({props.obj.stats.reviewCount}) •</span>
                <span className='gray'>{props.obj.location}</span>
            </div>
            <p>{props.obj.title}</p>
            <p><strong>From ${props.obj.price}</strong> / person</p>
        </div>
    )
}