import React from 'react';
import '../index.css';
import Presente from '../assets/presente.png';
import Estrela from '../assets/star.png';
import Icons from './icon';

export default function navbar(){
    return(
        <div>
            <header class="w3-col">
                 <div class="w3-row w3-light-grey"> 
                    <div class="w3-content ">
                        <div class="w3-half w3-text-black">
                            <h6 class="w3-mobile"><b>Perguntas? Precisa de ajuda?</b> Ligue para nós  (+123) 456 1500</h6>
                        </div>
                        <div class="w3-half w3-text-black">
                            <Icons titulo="BTN Cartão de Presente" icon={Presente}/>
                            <Icons titulo="Clube do Desconto" icon={Estrela}/>
                        </div>
                    </div>
                </div>
                <div class="w3-row s12 m12 l12  w3-padding-32">
                    <div class="w3-content ">
                        <div class="w3-quarter w3-blue">i</div>
                        <div class="w3-quarter w3-blue">a</div>
                        <div class="w3-quarter w3-blue">b</div>
                        <div class="w3-quarter w3-blue">c</div>
                    </div>
                </div>
                <div class="w3-row darkblue w3-padding-16">
                </div>
            </header>
        </div>
    )
}