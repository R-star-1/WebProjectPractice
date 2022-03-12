import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import App from './App';
import Inventing_Anna from './Images/images (1).jpg';
ReactDOM.render(
   
        // < App />,
        <div>
        <h1 style={{color: "white"}}> Hello Everyone image is not working very well in a react js projcet</h1>
        < img src= {Inventing_Anna}/>
        </ div>,
    document.getElementById('root')
);