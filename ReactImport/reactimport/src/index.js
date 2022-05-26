import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Navbar() {
  return (
    <nav>
      <h1>Irvin's Web</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Navbar />
);
