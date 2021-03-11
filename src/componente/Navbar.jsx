import React from 'react';
import "../index.css";
import Presente from '../assets/presente.png';
import Estrela from '../assets/star.png';
import Bag from '../assets/bag.svg';
import Icons from './icon';

export default function navbar(){
    return(
        <div>
            <header className="w3-col">
                 <div className="w3-row-padding w3-light-grey"> 
                    <div className="w3-content ">
                        <div className="w3-half w3-text-black">
                            <h6 className=" w3-bar-item w3-mobile"><b>Perguntas? Precisa de ajuda?</b> Ligue para nós  (+123) 456 1500</h6>
                        </div>
                        <div className="w3-half w3-text-black">
                            <Icons titulo="BTN Cartão de Presente" icon={Presente} link="https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_colors_light-gray"/>
                            <Icons titulo="Clube do Desconto" icon={Estrela}/>
                        </div>
                    </div>
                </div>
                <div className="w3-row s12 m12 l12">
                    <div className="w3-content ">
                        <div className="w3-third w3-mobile">
                            <div className="w3-bar-item w3-mobile"><h2>BEST TOUR PLAN</h2></div>
                        </div>
                        <div className="w3-third w3-margin-top">
                            <input className="w3-input w3-left w3-threequarter w3-round w3-light-grey" type="text" placeholder="Qual é o seu destino?"/>
                           <a href=""><div className="w3-rest w3-border w3-center w3-padding w3-red w3-round"><i className="fa fa-search w3-large"></i></div></a> 
                        </div>
                        <div className="w3-third w3-margin-top">
                            <div className="w3-third w3-bar" >
                                <img src={Bag} style={{width: 65}} className="w3-bar-item w3-right" alt=""/>
                            </div>  
                            <div className="w3-twothird w3-bar">
                                
                            </div>
                             
                        </div>
                    </div>
                </div>
                <div className="w3-row darkblue w3-padding-16">
                </div>
            </header>
        </div>
    )
}