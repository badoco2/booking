import React from 'react';

export  default function ItemSpec(props){
    return (
    <div>
        <i class="material-icons w3-cell-middle icon" style={{fontSize:15}}>&#xe86c;</i>
        {props.titulo}
    </div>
    )
}