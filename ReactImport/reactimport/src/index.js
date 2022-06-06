import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Page() {
  return (
    <div className='page'>
      <Navbar />
      <Content />
    </div>
  )
}

function Navbar() {
  return (
    <nav className='navbar'>
      <h1>Irvin's Web</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

function Content() {
  return (
    <div className='content'></div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Page />
);
