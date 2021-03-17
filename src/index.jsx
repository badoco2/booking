import ReactDOM from 'react-dom';
import React from 'react';
import "./index.css";
import Navbar from './componente/Navbar';
import Oferta from './componente/Oferta';
import Footer from './componente/Footer';
import Pacotes from './componente/OutrosPacotes';

const el = document.getElementById('root')
ReactDOM.render(
    
    <div>
        <Navbar/>
        <Oferta/>
        <Pacotes/>

    </div>


, el)