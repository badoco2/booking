import React from 'react';
import "../index.css";
import Presente from '../assets/presente.png';
import Estrela from '../assets/star.png';
import Bag from '../assets/bag.svg';
import Icons from './icon';
import Avatar from '../assets/avatar.png';
import hilton from '../assets/hiltonhotel.jpg';



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
                        <div className="w3-third w3-margin-top w3-hide-small">
                            <input className="w3-input w3-left w3-threequarter w3-round w3-light-grey" type="text" placeholder="Qual é o seu destino?"/>
                           <a href=""><div className="w3-rest w3-border w3-center w3-padding w3-red w3-round"><i className="fa fa-search w3-large"></i></div></a> 
                        </div>
                        <div className="w3-third w3-margin-top w3-hide-small">
                            <div className="w3-third w3-bar" >
                            <i className="material-icons" style={{fontSize:40, marginInline: 35}}>local_grocery_store 
                            </i>
                            
                            </div>  
                            <div className="w3-twothird w3-bar w3-hide-small ">
                                <a href="#">
                                <i className="material-icons w3-right" style={{marginTop: 8}}>arrow_drop_down</i>
                                <h3 className="w3-right" style={{marginTop: -10, paddingTop:10, paddingLeft: 5}}>Alexandre </h3>
                                <img src={Avatar} alt="Avatar" className="w3-right w3-circle" style={{width:40}}/>    
                                </a>
                            </div>   
                        </div>
                    </div>
                </div>
                <div className="w3-row darkblue w3-padding">
                


                    <div className=" w3-content w3-bar w3-mobile">
                        
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>HOME</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>OFERTAS</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>HOTELS</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>ATIVIDADES</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>DIARIAS</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>EVENTOS</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>RESTAURANTES</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>SAC</h5></div>
                        
                    </div>
                </div>
            </header>
            <div className="w3-col">
                <div className="w3-content">
                <h5 className="padding-top  padding-botom legenda">Home / Ofertas / Grand Hilton Hotel</h5>
                </div>
                <div className="w3-content ">
                    <i className="material-icons no-padding" style={{fontSize:12, color:'#ff6600'}}>star_rate</i>
                    <i className="material-icons no-padding" style={{fontSize:12, color:'#ff6600'}}>star_rate</i>
                    <i className="material-icons no-padding" style={{fontSize:12, color:'#ff6600'}}>star_rate</i>
                    <i className="material-icons no-padding" style={{fontSize:12, color:'#ff6600'}}>star_rate</i>
                    <i className="material-icons no-padding" style={{fontSize:12, color:'#ff6600'}}>star_rate</i>
                    <h3 className="no-margin no-padding">GRAND HILTON HOTEL     <span class="w3-tag w3-red"><h5>OFERTA</h5></span></h3>
                    <h5 className="no-padding legenda">Meia pensão | Tudo Incluso + Atividades extras + Crianças não pagam </h5>
                    <div className="w3-row">
                        <div className="w3-col w3-twothird w3-margin-top">
                        <img src={hilton} class="w3-round-large w3-image" alt="Grand Hilton Hotel"/>
                        </div>
                        <div className="w3-col w3-third w3-margin-top w3-mobile  ">
                            <div className="w3-row padding-left">
                                <div className="w3-rest darkblue w3-round-large w3-padding">
                                    <div className="completa">
                                        <div className="w3-row">
                                            <h5 className="no-padding legenda w3-left">Valor Inicial</h5>
                                            <h5 className="no-padding legenda w3-right">
                                                <i class="material-icons w3-cell-middle icon"   style={{fontSize:20}}>&#xe7fb;</i>
                                                2x Pessoas</h5>
                                        </div>  
                                        <div className="w3-row">
                                            <h3 className="no-margin no-padding w3-left">$ 8.500,00</h3>
                                            <h5 className="no-padding legenda w3-right">
                                                <i class="material-icons w3-cell-middle icon" style={{fontSize:20}}>&#xe88a;</i>
                                                1x Quarto</h5>
                                        </div>
                                        <div className="w3-row">
                                            <h5 className="no-padding legenda w3-left">Diaria</h5>
                                            
                                        </div>
                                        <div className="w3-row">
                                            <h4 className="w3-left w3-left" >Reserva Rapida</h4>
                                            <h5 className="padding-top w3-right">	
                                            <i class="material-icons w3-cell-middle icon" style={{fontSize:20}}>&#xe0cd;</i> 12100
                                            </h5>
                                        </div>
                                    </div>
                                    
                                    <input type="submit" value="Veja Outras Ofertas" className="w3-btn w3-red completa" />
                                </div>
                                
                            </div>
                            <div className="w3-row padding-left padding-top "> 
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.0476143001897!2d-87.62988678515921!3d41.8918330792211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cad971620f5%3A0xdae44dd413265e89!2s10%20E%20Grand%20Ave%2C%20Chicago%2C%20IL%2060611%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1615754498269!5m2!1spt-BR!2sbr" width="100%" height="250" className="w3-round-large w3-margin-top" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                            </div> 

                                     
                        </div>
                        
                    </div>    
                </div>
                <div className="w3-row w3-content w3-margin-top">
                    <div className=" w3-content w3-bar w3-mobile">
                        
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu w3-text-red w3-border-red w3-bottombar"><h5>Resumo</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>Informações</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>Quartos</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>Atividades</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>Entretenimento</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>Avaliações</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>Duvidas</h5></div>
                        
                    </div>
                    <div className="w3-row w3-margin-top">
                        <div className="w3-row w3-rest padding-top padding-botom w3-red">
                            <h3>RESUMO</h3>
                        </div>
                        <div className="w3-row w3-half  padding-botom padding-right w3-green">
                            <div className="w3-row w3-rest darkblue">
                                <h4>Destaques</h4>
                            </div>
                            <div className="w3-row w3-half w3-red w3-padding"></div>
                            <div className="w3-row w3-half w3-blue w3-padding"></div>
                        </div>
                        <div className="w3-row w3-half padding-top padding-botom padding-left w3-blue">
                         <div className="w3-row w3-rest darkblue w3-padding"></div>
                            <div className="w3-row w3-half w3-red w3-padding"></div>
                            <div className="w3-row w3-half w3-green w3-padding"></div>
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
    )
}   