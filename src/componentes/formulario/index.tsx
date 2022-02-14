import { Alert, Button, InputAdornment, Snackbar, TextField } from '@mui/material';
import { AxiosResponse } from 'axios';
import { ProdutoDTO } from 'dtos/produtosDTO';
import React, { useState, useEffect } from 'react';
import { NodeAPI } from 'services/Service';

export default function Formulario() {
  const [nome, setNome] = useState<string>('');
  const [idmarca, setIdmarca] = useState<string>('');
  const [valor, setValor] = useState<string>('');
  const [idcor, setIdcor] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [severity, setSeverity] = useState<
    'success' | 'info' | 'warning' | 'error'
  >('success');
  const [produtos, setProdutos] = useState<Array<ProdutoDTO>>([]);

  useEffect(()=> {
    const getProdutos = async ()=>{

    try {
      const resposta = await NodeAPI.get(`${process.env.REACT_APP_API_URL}/produto`)
                setProdutos(resposta.data)
      
      setProdutos([]);
      setSeverity('success');
      setIsOpen(true);

      setNome('');
      setIdmarca('');
      setValor('');
      setIdcor('');
      console.log(resposta);
    } catch (error) {
      setProdutos([]);
      setSeverity('error');
      setIsOpen(true);
      console.log(error);
    }
  }
  getProdutos();


}, []); 

  /*
   useEffect(() => {
  }, []); 
  */

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
              value={idmarca}
              label={'Marca'}
              variant="outlined"
              onChange={(event) => setIdmarca(event.target.value)}
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
              type={'valor'}
              prefix="$"
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
              value={idcor}
              label={'Cor'}
              variant="outlined"
              onChange={(event) => setIdcor(event.target.value)}
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
              value={nome}
              label={'Data de Cadastro'}
              variant="outlined"
              onChange={(event) => setIdcor(event.target.value)}
              style={{ width: '50%', backgroundColor: 'white' }}
            />
          </div>


          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button variant="outlined">
            Salvar Produto
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
