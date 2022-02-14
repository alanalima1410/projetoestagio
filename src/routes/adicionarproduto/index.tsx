import { Alert, Button, Snackbar, TextField } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { ProdutoDTO } from 'dtos/produtosDTO';
import React, { useState, useEffect } from 'react';
import { NodeAPI } from 'services/Service';

export const Adicionarproduto = () => {
  const [nome, setNome] = useState<string>('');
  const [valor, setValor] = useState<string>('');
  const [imagem, setImagem] = useState<string>('');
  const [idcor, setIdcor] = useState<number>(Number);
  const [idmarca, setIdmarca] = useState<number>(Number);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [severity, setSeverity] = useState<
    'success' | 'info' | 'warning' | 'error'
  >('success');
  const [produtos, setProdutos] = useState<string>('');
  
  async function AdicionarprodutoHandler() {
    const produtosDTO = new ProdutoDTO(nome,valor,imagem,idcor,idmarca);

    try {
      const postResponse: AxiosResponse = await NodeAPI.post(
        `${process.env.REACT_APP_API_URL}/produto`,
        produtosDTO
      );
      setProdutos('Produto cadastrado com sucesso');
      setSeverity('success');
      setIsOpen(true);

      setNome('');
      setValor('');
      setImagem('');
      setIdcor(Number);
      setIdmarca(Number);
      console.log(postResponse);
    } catch (error) {
        setProdutos('Produto cadastrado não foi cadastrado');
      setSeverity('error');
      setIsOpen(true);
      console.log(error);
    }
  }

 

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
              onChange={(event) => setValor(event.target.value)}
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
              onChange={(event) => setIdcor(Number)}
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
              onChange={(event) => setIdmarca(Number)}
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
              onClick={AdicionarprodutoHandler}
            >
              {'Salvar'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}