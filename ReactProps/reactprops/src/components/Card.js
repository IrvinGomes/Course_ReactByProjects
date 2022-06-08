import React from 'react';
import '../styles/Card.css';
import Star from '../images/star.png'


export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.obj.img} alt='' className='card--img' />
            <div className='card--stats'>
                <img src={Star} alt='' className='card--star' />
                <span>{props.obj.rating}</span>
                <span className='gray'>({props.obj.reviewCount}) •</span>
                <span className='gray'>{props.obj.country}</span>
            </div>
            <p>{props.obj.title}</p>
            <p><strong>From ${props.obj.price}</strong> / person</p>
        </div>
    )
}