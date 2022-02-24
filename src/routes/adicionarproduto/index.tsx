import { Alert, Button, TextField, Snackbar } from "@mui/material";
import { AxiosResponse } from "axios";
import { ProdutoDTO } from "dtos/produtosDTO";
import React, { useState, useEffect, useRef } from "react";
import { NodeAPI } from "services/Service";
import "./adicionarproduto.css";
import moment from "moment";
import "moment/locale/pt-br";
import { Link } from "react-router-dom";

export function Adicionarproduto() {
  const uploadfile: any = useRef();
  const [nome, setNome] = useState<string>("");
  const [valor, setValor] = useState<number>(0);
  const [imagem, setImagem] = useState<string>("");
  const [cor, setCor] = useState<string>("");
  const [marca, setMarca] = useState<string>("");
  const [data, setData] = useState<string>(moment().format("L"));
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [severity, setSeverity] = useState<
    "success" | "info" | "warning" | "error"
  >("success");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  async function AdicionarprodutoHandler() {
    const produtoDTO = new ProdutoDTO(nome, valor, imagem, cor, marca);

    try {
      const postResponse: AxiosResponse = await NodeAPI.post(
        `${process.env.REACT_APP_API_URL}/produto`,
        produtoDTO
      );
      setFeedbackMessage("Produto cadastrado com sucesso");
      setSeverity("success");
      setIsOpen(true);

      setNome("");
      setValor(0);
      setImagem("");
      setCor("");
      setMarca("");
      window.location.replace("/");
      console.log(postResponse);
    } catch (error) {
      setFeedbackMessage("Produto cadastrado não foi cadastrado");
      setSeverity("error");
      setIsOpen(true);
      console.log(error);
    }
  }

  function closeSnackbar() {
    setIsOpen(false);
  }
  function openFileExplorer() {
    uploadfile.current.click();
  }

  function handlefile(event: any) {
    parseFileBase64(event.target.files[0]);
  }

  function parseFileBase64(file: File) {
    file.text().then(() => {
      let reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const document: string | ArrayBuffer | null = reader.result;
        if (typeof document === "string") {
          setImagem(
            document.slice(document.lastIndexOf(",") + 1, document.length)
          );
          console.log(
            document.slice(document.lastIndexOf(",") + 1, document.length)
          );
        }
      };
    });
  }
  return (
    <>
      <div>
        <header>
          <nav className="links">
            <Link to="../home"> Home &gt; </Link>
            <Link to="/adicionarproduto">Adicionar Produto</Link>
          </nav>
        </header>
      </div>
      <div className="titulos">
        <h1>Adicionar Produto</h1>
      </div>
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "left",
          marginLeft: "261px",
          alignItems: "left",
          marginTop: "50px",
          marginRight: "50px",
        }}
      >
        <div
          style={{
            height: "90%",
            width: "45%",
            display: "flex",
            justifyContent: "left",
          }}
        >
          <div style={{ width: "100%" }}>
            <div
              style={{
                marginBottom: "15px",
                width: "990px",
                height: "62px",
                display: "flex",
                justifyContent: "left",
              }}
            >
              <TextField
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                label={"Nome do produto"}
                variant="outlined"
                style={{ width: "50%", backgroundColor: "white" }}
              />
            </div>
            <div
              style={{
                marginBottom: "15px",
                width: "990px",
                height: "62px",
                display: "flex",
                justifyContent: "left",
              }}
            >
              <TextField
                value={marca}
                label={"Marca"}
                variant="outlined"
                onChange={(event) => setMarca(event.target.value)}
                style={{ width: "50%", backgroundColor: "white" }}
              />
            </div>
            <div
              style={{
                marginBottom: "15px",
                width: "450px",
                height: "62px",
                display: "flex",
                justifyContent: "left",
              }}
            >
              <TextField
                value={valor}
                label={"Valor"}
                variant="outlined"
                type={"number"}
                onChange={(event) => setValor(Number(event.target.value))}
                style={{ width: "50%", backgroundColor: "white" }}
              />
            </div>

            <div
              style={{
                marginBottom: "15px",
                width: "450px",
                height: "62px",
                display: "flex",
                justifyContent: "left",
              }}
            >
              <TextField
                value={cor}
                label={"Cor"}
                variant="outlined"
                onChange={(event) => setCor(event.target.value)}
                style={{ width: "50%", backgroundColor: "white" }}
              />
            </div>

            <div
              style={{
                marginBottom: "15px",
                width: "450px",
                height: "62px",
                display: "flex",
                justifyContent: "left",
              }}
            >
              <TextField
                value={data}
                label={"Data de Cadastro"}
                type={"string"}
                variant="outlined"
                onChange={(event) => setData(event.target.value)}
                style={{ width: "50%", backgroundColor: "white" }}
                disabled
              />
            </div>
            <div
              style={{
                marginBottom: "15px",
                width: "150px",
                height: "150px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div>
                <label className="file" htmlFor="file">
                  <svg
                    width="77"
                    height="76"
                    viewBox="0 0 77 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M60.6695 22.4902V31.8867C60.6695 31.8867 54.3453 31.9182 54.3136 31.8867V22.4902H44.7797C44.7797 22.4902 44.8114 16.2363 44.7797 16.2049H54.3136V6.77692H60.6695V16.2049H70.2034V22.4902H60.6695ZM51.1356 35.0608V25.6329H41.6017V16.2049H16.178C12.6822 16.2049 9.82204 19.0333 9.82204 22.4902V60.2021C9.82204 63.659 12.6822 66.4874 16.178 66.4874H54.3136C57.8093 66.4874 60.6695 63.659 60.6695 60.2021V35.0608H51.1356ZM16.178 60.2021L25.7119 47.6314L32.0678 57.0594L41.6017 44.4888L54.3136 60.2021H16.178Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                  Adicionar Foto
                </label>
                <input
                  className="botaofile"
                  type="file"
                  onChange={handlefile}
                  id="file"
                  accept="image"
                />
                <img
                  className="imagem"
                  src={`data:image/png;base64,${imagem}`}
                  alt=""
                />
              </div>
            </div>

            <div
              style={{
                marginBottom: "15px",
                width: "100%",
                display: "flex",
                justifyContent: "left",
                flexDirection: "row",
              }}
            >
              <Button
                variant={"contained"}
                style={{
                  height: "50px",
                  width: "200px",
                  backgroundColor: "blue",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "175px",
                }}
                onClick={AdicionarprodutoHandler}
              >
                {"ADICIONAR PRODUTO"}
              </Button>
            </div>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={isOpen}
          autoHideDuration={6000}
          onClose={closeSnackbar}
        >
          <Alert
            onClose={closeSnackbar}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {feedbackMessage}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}
