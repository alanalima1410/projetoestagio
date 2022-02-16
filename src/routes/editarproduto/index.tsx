import { Alert, Button, TextField, Snackbar } from '@mui/material';
import { AxiosResponse } from 'axios';
import { ProdutoDTO } from 'dtos/produtosDTO';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NodeAPI } from 'services/Service';

 export function Editarproduto() {

  const [nome, setNome] = useState<string>('');
  const [valor, setValor] = useState<number>(0);
  const [imagem, setImagem] = useState<string>('');
  const [idcor, setIdcor] = useState<number>(0);
  const [idmarca, setIdmarca] = useState<number>(0);
  const { id } = useParams();
  //const navigate = useNavigate();


  async function EditarprodutoById() {
    const editarProduto = new ProdutoDTO(nome,valor,imagem,idcor,idmarca,Number(id));

    try {
      await NodeAPI.put(
        `${process.env.REACT_APP_API_URL}/produto/${id}`,
        editarProduto
      );
        //navigate('/users') para voltar para home depois de atualizar
    } catch (error) {
      console.log(error);
    }
  }

 


  async function getProdutoById() {
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
     
      
      async function deleteProdutoById() {
            try {
              await NodeAPI.delete(`${process.env.REACT_APP_API_URL}/produto/${id}`);
            } catch (error) {
      console.log(error);
    
    }
     }
     
     useEffect(() => {
      getProdutoById();
    }, []); 
    
  

return (
    
    <div
    
      style={{
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          height: '90%',
          width: '45%',
          display: 'flex',
          justifyContent: 'center',
        }}
        
      >
        
        <div style={{ width: '100%' }}>
          <div
            style={{
              marginBottom: '15px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
            
  
          >
            
            <TextField
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              label={'Nome do produto'}
              variant="outlined"
              style={{ width: '50%', backgroundColor: 'white' }}
            />
          </div>

          <div
            style={{
              marginBottom: '15px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >

              <TextField
              value={valor}
              label={'Valor'}
              variant="outlined"
              type={'number'}
              onChange={(event) => setValor(Number(event.target.value))}
              style={{ width: '50%', backgroundColor: 'white' }}
            />
          </div>

          <div
            style={{
              marginBottom: '15px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >

              <TextField
              value={imagem}
              label={'Imagem'}
              variant="outlined"
              type={'imagem'}
              onChange={(event) => setImagem(event.target.value)}
              style={{ width: '50%', backgroundColor: 'white' }}
            />
          </div>

          <div
            style={{
              marginBottom: '15px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            
              <TextField
              value={idcor}
              label={'Cor'}
              type={'number'}
              variant="outlined"
              onChange={(event) => setIdcor(Number(event.target.value))}
              style={{ width: '50%', backgroundColor: 'white' }}
            />
          </div>

          <div
            style={{
              marginBottom: '15px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >

              <TextField
              value={idmarca}
              label={'Marca'}
              type={'number'}
              variant="outlined"
              onChange={(event) => setIdmarca(Number(event.target.value))}
              style={{ width: '50%', backgroundColor: 'white' }}
            />
          </div>

          <div
            style={{
              marginBottom: '15px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
              
            <Button
              variant={'contained'}
              style={{
                height: '50px',
                width: '100px',
                backgroundColor: 'blue',
              }}
              onClick={EditarprodutoById}
            >
              {'editar'}
            </Button>
            
            
          </div>
        </div>
      </div>
      
    </div>
  );

}

