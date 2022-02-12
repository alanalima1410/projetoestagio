import React from 'react';
import './carrinho.css';

function Carrinho (){
    return(
        <>
        <container>
                <div>
           <h1>Carrinho</h1>
            
        </div>

        </container>
            <div className="container">
                <fieldset className="fieldset-border">
                <legend className="legend-border">Nome do Produto</legend>
                </fieldset>
                <fieldset className="fieldset-border">
                <legend className="legend-border">Marca</legend>
                </fieldset>
            </div>
            <div className="container">
                <fieldset className="menores">
                <legend className="legend-border">Valor</legend>
                </fieldset>
                <fieldset className="menores">
                <legend className="legend-border">Cor</legend>
                </fieldset>
                <fieldset className="menores">
                <legend className="legend-border">Data de cadastro</legend>
                </fieldset>
                <button className='button'>
               Pagar
            </button>
            </div>
        </>
    )
}

export default Carrinho