import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

const rootDiv = document.querySelector('#root');
ReactDOM.render(<App data="Hello World" />, rootDiv);
