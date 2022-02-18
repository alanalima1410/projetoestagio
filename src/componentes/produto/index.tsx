import { ProdutoDTO } from 'dtos/produtosDTO';
import React, { useState, useEffect } from 'react';
import './produto.css';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useParams } from 'react-router-dom';
import { NodeAPI } from 'services/Service';


type ProdutoProps = {
    produtoDTO:ProdutoDTO;
}

export default function Produto (props:ProdutoProps){
    const {produtoDTO} = props
    
    async function deleteProdutoById(apagar:number) {
        
        try {
          await NodeAPI.delete(`${process.env.REACT_APP_API_URL}/produto/${apagar}`);
        } catch (error) {
    console.log(error);
    
    }
    }
   
    return(
        <>
          
        <section className='content-product'>
            <div className="img" >
                <img className="img" src={"data:image/jpeg;base64," + produtoDTO.imagem} alt=''/>
            </div>
            
            <div className="details">
                <h2 className='camera'>{produtoDTO.nome}</h2>
                {/* <p className='descricao'>{produtoDTO.idmarca}</p> */}
                <p className='valor'>R${produtoDTO.valor},00</p>
                {/* <p className='cor'>{produtoDTO.idcor}</p> */}
            </div>
           <div className="actions"><Button variant="outlined" onClick={()=>{window.location.replace('/editarproduto/'+produtoDTO.id)}}>
            Editar Produto
            </Button>
            <Button>
           {produtoDTO.id?<DeleteIcon aria-label="delete" onClick={()=>{deleteProdutoById(Number(produtoDTO.id))}}></DeleteIcon>:<></>}
            </Button>
            
            <IconButton aria-label="carrinho"></IconButton>
           <Button variant="outlined"onClick={()=>{window.location.replace('/carrinho')}}><AddShoppingCartIcon />
            </Button>

            </div>
            
      
          
        </section>
        


        </>
    )
}
{/* <Button variant="outlined"onClick={}><DeleteIcon /> */}
