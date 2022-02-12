import React from 'react';
import './produto.css';

export default function Produto (props){
    return(
        <>
        <section className='content-product'>
            <img className='img' src={props.img}/>
           <h2 className='camera'>{props.name}</h2>
           <p className='descricao'>{props.descricao}</p>
           <p className='valor'>{props.valor}</p>
           <p className='cor'>{props.cor}</p>
        </section>

        </>
    )
}



