import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';
import Navbar from './Navbar';
import Introduction from './Introduction';
import Features from './Features';


function App(){
    return(
<>
         <Navbar/>
         <Introduction/>
         <Features/>
         </>
    )         
}
ReactDom.render(
    <div>
    <App/>
    </div>,
    document.getElementById('root')
)