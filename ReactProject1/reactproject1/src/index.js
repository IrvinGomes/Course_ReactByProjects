import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';

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
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Page />
);