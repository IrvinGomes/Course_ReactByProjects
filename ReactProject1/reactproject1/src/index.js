import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo192 from './images/logo192.png'

/**
 * Why do we need to import React from react in our files?
 *  ->React is what defines JSX.
 * 
 * If I were console.log(Page) in index.js, what would show up?
 *  ->Javascript element/object. React element that describe what React should add to the real DOM
 * 
 * What's wrong with this code?
 * const page = (
 * <h1>Hello</h1>
 * <p>This is my Website!</p>
 * )
 *  ->We need a single parent element.
 * 
 * What does it mean for something to be "declarative" instead of "imperative"?
 *  ->Declarative means I can tell the computer WHAT to do and expect it to handle the details.
 *  ->Imperative means I need to tell it HOW to do each step
 * 
 * What does it mean for something to be composable?
 *  ->We have small pieces that we can put together to make something larger/greater than the individual pieces
 */

function Page() {
    return (
        <div className='page'>
            <Header />
            <Content />
        </div>
    )
}

function Logo() {
    return (
        <img src={logo192} width="40px" />
    )
}

function Header() {
    return (
        <nav className='header'>
            <Logo />
            <h1>Fun facts about React</h1>
        </nav>
    )
}

function Content() {
    return (
        <div className='content'>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Page />
);