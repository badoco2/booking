import React from 'react';
import '../index.css';

export default function icon(props){
    return(
      
            <h6 class="w3-bar-item w3-right w3-margin-right"> 
                <img src={props.icon} class="icon"/>
                {props.titulo}
            </h6>
  
    )
}