import React from 'react';
import styles from './adicionarproduto.css';
import Formulario from '../formulario/index';

function Adicionarproduto (){
    return(
        
        
         <div className={styles.adicionarproduto_container}>
           <h1>Adicionar Produto</h1>
           <Formulario />
        </div>
       
            
            
        
    )
}

export default Adicionarproduto