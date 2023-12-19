import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let postData = [
  { id: 1, name: 'Привет', like: 15 },
  { id: 2, name: 'Как дела', like: 25 },
  { id: 3, name: 'Здорово', like: 10 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App postData={postData} />);
