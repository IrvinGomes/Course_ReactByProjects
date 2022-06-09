import React from 'react';
import Content from './components/Content';
import Navbar from './components/Navbar';

export default function App() {
    return (
        <div className='app'>
            <Navbar />
            <Content />
        </div>
    )
}