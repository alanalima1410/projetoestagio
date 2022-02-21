import { Alert, Button, TextField, Snackbar } from '@mui/material';
import { ProdutoDTO } from 'dtos/produtosDTO';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NodeAPI } from 'services/Service';
import './carrinho.css';

 export function Carrinho() {

  const [nome, setNome] = useState<string>('');
  const [valor, setValor] = useState<number>(0);
  const [imagem, setImagem] = useState<string>('');
  const [idcor, setIdcor] = useState<number>(0);
  const [idmarca, setIdmarca] = useState<number>(0);
  const { id } = useParams();
  //const navigate = useNavigate();


  async function getCarrinhoById() {
          try{
              const resposta = await NodeAPI.get(`${process.env.REACT_APP_API_URL}/produto/${id}`);
              // const date = new Date().toISOString().split('T')[0];
              //const parsedDate = date.split('-')
              //setName(`${parsedDate[2]}/${parsedDate[1]}/${parsedDate[0]}`);
              // setName(date.replace(/-/g, '/'));
              setNome(resposta.data.nome)
              setValor(resposta.data.valor)
              setImagem(resposta.data.imagem)
              setIdcor(resposta.data.idcor)
              setIdmarca(resposta.data.idmarca)
          }catch(erro){
              console.log(erro);
          }
      }
     
      
      
     
     useEffect(() => {
      getCarrinhoById();
    }, []); 
    
  return(

<>
<div className='titulos'>

<h1 className='title'>Carrinho</h1>
<h2 className='titlepedido'>Resumo do pedido</h2>
</div>

<div className='conteudocarrinho'>
    <div className='carrinho'>
        
        {/* <div className='imagem'></div> */}
        <p className='descricao'></p>
            <span>{nome}</span>
            <span>{idmarca}</span>
            <span>{idcor}</span>
            <span>{imagem}</span>
        </div>
        <div className='pedido'>
        <p>Subtotal (1 item)</p>
        <p>Frete</p>
        <p>Valor Total</p>
        <button>PAGAR</button>

        </div>
        </div>
       


        </>

//     <Button
//     variant={'contained'}
//     style={{
//       height: '50px',
//       width: '100px',
//       backgroundColor: 'blue',
//     }}
//     onClick={getCarrinhoById}
//   >
//     {'editar'}
//   </Button>
  );
}