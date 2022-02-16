import React from 'react';
import ReactDom from 'react-dom';
function Introduction(){
    return(
        <div className='box'>
            <h1 className='tittle'>React</h1>
            <p className='txt'>A JavaScript Library for building user interfaces</p><br />

            <button className='btn'>Get Started</button>
            <a href="" className='line'>Take the Tutorial</a>
        </div>
    )
}
export default Introduction;