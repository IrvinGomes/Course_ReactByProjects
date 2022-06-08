import React from 'react';
import '../styles/Card.css';
import Katie from '../images/katie-zaferes.png'
import Star from '../images/star.png'


export default function Card() {
    return (
        <div className='card'>
            <img src={Katie} alt='' className='card--img' />
            <div className='card--stats'>
                <img src={Star} alt='' className='card--star' />
                <span>5.0</span>
                <span className='gray'>(6) •</span>
                <span className='gray'>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </div>
    )
}