import React from "react";
import styles from './form.css';
import Input from "./input";

function Formulario () {
    return (
        <>
        <form className={styles.form}>
            <div className="legend-border1">
            <fieldset>            
            <legend >Nome do produto</legend>
            <Input 
            type="text"
            name="name"
            placeholder="Digite o nome do produto"
             />
            </fieldset>
            </div>
            <div className="legend-border2">
            <fieldset>
            <legend >Marca</legend>
            <Input 
            type="text"
            name="name"
            placeholder="Digite a marca do produto"
             />
            </fieldset>
            </div>
            <div className="legend-border3">
            <fieldset>
            <legend >Valor</legend>
            <Input 
            type="number"
            name="name"
            placeholder="000,00"
             />
            </fieldset>
            </div>
            <div className="legend-border4">
            <fieldset>
            <legend >Cor</legend>
            <Input 
            type="text"
            name="name"
            placeholder="Selecione a cor"
             />
            </fieldset>
            </div>
            <div className="legend-border5">
            <fieldset>
            <legend >Data de Cadastro</legend>
            <Input 
            type="date"
            name="name"
             />
            </fieldset>
            </div>
            <div className="imageadd">
            <fieldset>
            
            <Input type="image"/>
            </fieldset>
            </div>
            <div className='button'>
                <input type="submit" value="Adicionar Produto" />
            </div>
    
        </form>
        
         
     </>
    )
}
export default Formulario