import React from 'react';
import '../index.css';

export default function icon(props){
    return(
        <a href={props.link}>
            <h6 className="w3-bar-item w3-mobile w3-right w3-margin-right"  > 
                <img src={props.icon} className="icon"/>
                {props.titulo}
            </h6>
        </a>
    )
}