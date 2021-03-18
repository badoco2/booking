import ReactDOM from 'react-dom';
import React from 'react';
import "./index.css";
import Navbar from './componente/Navbar';
import Oferta from './componente/Oferta';
import Footer from './componente/Footer';

/* Gosto de utilizar componentes para a montagem do site */
/* Foi utulizado uma biblioteca de CSS do W3CSS foi a primeira vez que a utilizei */
const el = document.getElementById('root')
ReactDOM.render(
    
    <div>
        <Navbar/>
        <Oferta/>
        <Footer/>
    </div>


, el)