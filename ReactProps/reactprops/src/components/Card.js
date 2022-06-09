import React from 'react';
import '../styles/Card.css';

export default function Card(props) {
    return (
        <div className='card'>
            {
                props.openSpots === 0 && <div className='card--badge'>SOLD OUT</div>
                || props.location == "Online" && <div className='card--badge'>{props.location}</div>
            }
            <img src={'/images/' + props.coverImg} alt='' className='card--img' />
            <div className='card--stats'>
                <img src='star.png' alt='' className='card--star' />
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) •</span>
                <span className='gray'>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div >
    )
}