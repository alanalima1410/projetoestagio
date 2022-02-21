import { Alert, Button, TextField, Snackbar } from '@mui/material';
import { AxiosResponse } from 'axios';
import { ProdutoDTO } from 'dtos/produtosDTO';
import React, { useState, useEffect, useRef } from 'react';
import { NodeAPI } from 'services/Service';

export function Adicionarproduto() {
  const uploadfile: any = useRef();
  const [nome, setNome] = useState<string>('');
  const [valor, setValor] = useState<number>(0);
  const [imagem, setImagem] = useState<string>('');
  const [idcor, setIdcor] = useState<number>(0);
  const [idmarca, setIdmarca] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [severity, setSeverity] = useState<
    'success' | 'info' | 'warning' | 'error'
  >('success');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  async function AdicionarprodutoHandler() {
    const produtoDTO = new ProdutoDTO(nome, valor, imagem, idcor, idmarca);

    try {
      const postResponse: AxiosResponse = await NodeAPI.post(
        `${process.env.REACT_APP_API_URL}/produto`,
        produtoDTO
      );
      setFeedbackMessage('Produto cadastrado com sucesso');
      setSeverity('success');
      setIsOpen(true);

      setNome('');
      setValor(0);
      setImagem('');
      setIdcor(0);
      setIdmarca(0);
      console.log(postResponse);
    } catch (error) {
      setFeedbackMessage('Produto cadastrado não foi cadastrado');
      setSeverity('error');
      setIsOpen(true);
      console.log(error);
    }
  }


  function closeSnackbar() {
    setIsOpen(false)
  }
  //botao uploud
  function openFileExplorer() {
    uploadfile.current.click();
  }


  function handlefile(event: any) {
    parseFileBase64(event.target.files[0])

  }

  function parseFileBase64(file: File) {
    file.text().then(() => {
      let reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const document: string | ArrayBuffer | null = reader.result;
        if (typeof document === 'string') {
          setImagem(
            document.slice(document.lastIndexOf(',') + 1, document.length)
          );
          console.log(
            document.slice(document.lastIndexOf(',') + 1, document.length)
          );
        }
      };
    });
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
          <div>

            <div style={
              { width: "100%", height: '150px' }}>
              <input
                ref={uploadfile}
                style={{ display: "none" }}
                type="file"
                onChange={handlefile}

              />
              <img src={`data:image/png;base64,${imagem}`} alt="" />
              <Button onClick={openFileExplorer} variant='outlined'>
                Abrir explorer
              </Button>
            </div>

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
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={closeSnackbar}
      >
        <Alert
          onClose={closeSnackbar}
          severity={severity}
          sx={{ width: '100%' }}
        >
          {feedbackMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
