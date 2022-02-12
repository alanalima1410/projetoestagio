import React from 'react';
import styles from './editarproduto.css';
import Formulario from '../formulario/index';

function Editarproduto (){
    return(
        
        
         <div className={styles.adicionarproduto_container}>
           <h1>Editar Produto</h1>
           <Formulario />
        </div>
       
            
            
        
    )
}

export default Editarproduto