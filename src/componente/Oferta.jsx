import React from 'react';
import "../index.css";
import Item from "./ItemSpec";

import hilton from '../assets/hiltonhotel.jpg';
/* Neste componente foi criado a parte onde mostra o pacote escolhido nesse caso o  GRAND HILTON HOTEL */
export default function oferta(){
    return(
        <div className="w3-row-padding">
            <div className="w3-content">
            <h5 className="padding-top  padding-botom legenda">Home / Ofertas / Grand Hilton Hotel</h5>
            </div>
            {/* o codigo abaixo utilizando a tag <i> foi criado as 5 estrelas*/}
                <div className="w3-content  w3-white">
                
                    <i className="material-icons no-padding" style={{fontSize:12, color:'#ff6600'}}>star_rate</i>
                    <i className="material-icons no-padding" style={{fontSize:12, color:'#ff6600'}}>star_rate</i>
                    <i className="material-icons no-padding" style={{fontSize:12, color:'#ff6600'}}>star_rate</i>
                    <i className="material-icons no-padding" style={{fontSize:12, color:'#ff6600'}}>star_rate</i>
                    <i className="material-icons no-padding" style={{fontSize:12, color:'#ff6600'}}>star_rate</i>
                    <h3 className="no-margin no-padding">GRAND HILTON HOTEL     <span class="w3-tag w3-red"><h5>OFERTA</h5></span></h3>
                    <h5 className="no-padding legenda">Meia pensão | Tudo Incluso + Atividades extras + Crianças não pagam </h5>
                    <div className="w3-row">
                        <div className="w3-col w3-twothird w3-margin-top">
                        {/* aqui inserimos a imagem do GRAND HILTON HOTEL */}
                        <img src={hilton} class="w3-round-large w3-image" alt="Grand Hilton Hotel"/>
                        </div>
                        {/* Neste parte contruimos o card lateral onde podera ver os preços */}
                        <div className="w3-col w3-third w3-margin-top w3-mobile  ">
                            <div className="w3-row-padding">
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
                            {/* Aqui inserimos o mapa usando um iframe direto do google maps */}
                            <div className="w3-row padding-left padding-top "> 
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.0476143001897!2d-87.62988678515921!3d41.8918330792211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cad971620f5%3A0xdae44dd413265e89!2s10%20E%20Grand%20Ave%2C%20Chicago%2C%20IL%2060611%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1615754498269!5m2!1spt-BR!2sbr" width="100%" height="250" className="w3-round-large w3-margin-top" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                            </div> 

                                     
                        </div>
                        
                    </div>    
                </div>
                <div className="w3-row w3-content w3-margin-top">
                    <div className=" w3-content w3-bar w3-mobile w3-white">
                        {/* Neste parte temos um submenu que navegaria entre componetes mostrando todas as 
                        caracteristicas do pacote contratado */}
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu w3-text-red w3-border-red w3-bottombar"><h5>Resumo</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>Informações</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>Quartos</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>Atividades</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>Entretenimento</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>Avaliações</h5></div>
                        <div className="w3-col w3-bar-item w3-l2 w3-mobile menu"><h5>Duvidas</h5></div>
                        
                    </div>
                    {/* Neste parte temos os quadros com as caracteristicas conforme a posição do submenu que esta em informaçoes */}
                    <div className="w3-row w3-margin-top">
                        <div className="w3-row-padding w3-rest padding-top padding-botom">
                            <h3>RESUMO</h3>
                        </div>
                        <div className="w3-row-padding w3-half  padding-botom w3-whites">
                            <div className="w3-row w3-rest darkblue">
                                <h4 className="padding-left">Destaques</h4>
                            </div>
                            <div className="w3-row w3-half w3-padding">
                                <h5>
                                <Item titulo="Meia diari\Tudo incluso"/>
                                <Item titulo="Crianças nao pagam"/>
                                <Item titulo="LUX' Me Spa"/>
                                </h5>
                            </div>
                            <div className="w3-row w3-half w3-padding">
                            <h5>
                            <Item titulo="Hotel 5 estrelas"/>  
                            <Item titulo="Banyan restrito a adultos"/>  
                            </h5>  
                            </div>
                        </div>
                        <div className="w3-row-padding w3-half  padding-botom  ">
                         <div className="w3-row w3-rest darkblue">
                                <h4>Detalhes</h4>
                            </div>
                            <div className="w3-row w3-half  w3-padding">
                                <h5>
                                    <Item titulo="Desconto para oferta infantil"></Item>
                                </h5>
                                
                            </div>
                            <div className="w3-row w3-half w3-padding">
                                <h5>
                                    <Item titulo="Oferta de 10 Março ha 30 Abril"></Item>
                                </h5>
                            
                            </div>
                            
                        </div>
                        <div className="w3-row-padding completa w3-white ">
                                <div className="w3-row padding-left darkblue">
                                    <h4>Detalhes do Resumo do Pacote</h4>
                                </div>
                                <div className="w3-row w3-third w3-padding">
                                    <h5 className="w3-text-red padding-botom">Incluso na Compra</h5>
                                    <h5>
                                        <Item titulo="Seleção do Quarto"/>
                                        <Item titulo="WIFI Livre"/>
                                        <Item titulo="Segurança contra incendios"/>
                                        <Item titulo="Atividades Complementares"/>
                                    </h5>
                                </div>
                                <div className="w3-row w3-third w3-padding">
                                    <h5 className="w3-text-red padding-botom">Atividades Complementares</h5>
                                    <h5>
                                        <Item titulo="Hidroginastica"/>
                                        <Item titulo="Academia"/>
                                        <Item titulo="Quadra de Tenis"/>
                                        <Item titulo="Bola de Futebol"/>
                                        <Item titulo="Yoga"/>
                                        <Item titulo="Pista de Corrida"/>
                                        <Item titulo="Praia"/>
                                    </h5>
                                </div>
                                <div className="w3-row w3-third w3-padding">
                                    <h5 className="w3-text-red padding-botom">Atividades Aquático</h5>
                                    <h5>
                                        <Item titulo="Esqui aquático"/>
                                        <Item titulo="Windsurfing"/>
                                        <Item titulo="Pedalinho"/>
                                        <Item titulo="Caiaque"/>
                                        <Item titulo="Yoga"/>
                                        <Item titulo="Pista de Corrida"/>
                                        <Item titulo="Hidroginastica"/>
                                    </h5>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
             


    )
}