import React from 'react'
import '../styles/Card.css'
import CardFooter from './CardFooter'
import Profile from './Profile'

export default function Card() {
    return (
        <div className='card'>
            <Profile />
            <CardFooter />
        </div>
    )
}