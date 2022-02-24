import { Alert, Button, TextField, Snackbar, Divider } from "@mui/material";
import { ProdutoDTO } from "dtos/produtosDTO";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { NodeAPI } from "services/Service";
import { setConstantValue } from "typescript";
import "./carrinho.css";
import { Link } from "react-router-dom";
import { Restore } from "@mui/icons-material";

export function Carrinho() {
  const uploadfile: any = useRef();
  const [cont, setCont] = useState<number>(0);
  const [nome, setNome] = useState<string>("");
  const [valor, setValor] = useState<number>(0);
  const [imagem, setImagem] = useState<string>("");
  const [cor, setCor] = useState<string>("");
  const [marca, setMarca] = useState<string>("");
  const [openPagar, setOpenPagar] = useState<object>({});
  const [cedulas, setCedulas] = useState<boolean>(false);
  const { id } = useParams();

  async function getCarrinhoById() {
    try {
      const resposta = await NodeAPI.get(
        `${process.env.REACT_APP_API_URL}/produto/${id}`
      );
      setNome(resposta.data.nome);
      setValor(resposta.data.valor);
      setImagem(resposta.data.imagem);
      setCor(resposta.data.cor);
      setMarca(resposta.data.marca);
    } catch (erro) {
      console.log(erro);
    }
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

  useEffect(() => {
    getCarrinhoById();
  }, []);

  let subtotal = 0;
  function soma() {
    return (subtotal = valor * cont); //subtotal é o valor vezes a quantidade
  }
  function total() {
    //total é subtotal mais frete
    return soma() / 10 + soma();
  }

  function pagamento(total: number) {
    console.log(total);
    setCedulas(true);
    const counterCedulas = {
      200: 0,
      100: 0,
      50: 0,
      20: 0,
      10: 0,
      5: 0,
      2: 0,
    };
    var resto = total;
    for (var c = Object.keys(counterCedulas).length - 1; c >= 0; c--) {
      const currentCedula = Number(Object.keys(counterCedulas)[c]);
      const div = Math.floor(resto / currentCedula);
      counterCedulas[currentCedula] += div;
      resto -= div * currentCedula;
    }
    setOpenPagar(counterCedulas);
    return resto;
  }

  return (
    <>
      <div>
        <header>
          <nav className="links">
            <Link to="../home"> Home &gt; </Link>
            <Link to="../carrinho">Carrinho</Link>
          </nav>
        </header>
      </div>
      <div className="titulos">
        <h1 className="title">Carrinho</h1>
        <h2 className="titlepedido">Resumo do pedido</h2>
      </div>

      <div className="conteudocarrinho">
        <div className="carrinho">
          <div className="borda">
            <div className="getimagem">
              <img className="foto" src={"data:image/jpeg;base64," + imagem} />

              <div className="descricao">
                <h2>{nome}</h2>
                <p>{marca}</p>
                <p>Cor: {cor}</p>
              </div>
            </div>
            <hr></hr>
            <div className="quantidade">
              <h3 className="quantidade">Quantidade: </h3>
              <button
                className="menos"
                onClick={() => {
                  if (cont > 1) setCont(cont - 1);
                }}
              >
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 18.5V15.5H23V18.5H9Z" fill="#353535" />
                  <circle cx="16" cy="16.5" r="15.5" stroke="#353535" />
                </svg>
              </button>
              <button className="numero">
                <svg
                  width="46"
                  height="47"
                  viewBox="0 0 46 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.488 27.564V29.5H20.056V27.564H22.264V20.172C22.1467 20.332 21.9387 20.524 21.64 20.748C21.3413 20.9613 21.0107 21.148 20.648 21.308C20.296 21.468 19.976 21.548 19.688 21.548V19.564C19.9653 19.564 20.2533 19.4893 20.552 19.34C20.8507 19.1907 21.128 19.02 21.384 18.828C21.64 18.6253 21.848 18.4493 22.008 18.3C22.1787 18.14 22.264 18.0493 22.264 18.028H24.456V27.564H26.488Z"
                    fill="#353535"
                  />
                  <rect
                    x="0.5"
                    y="1"
                    width="45"
                    height="45"
                    rx="6.5"
                    stroke="#353535"
                  />
                </svg>
              </button>
              <button
                className="mais"
                onClick={() => {
                  setCont(cont + 1);
                  console.log(setCont);
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 17.5V23.5H15V17.5H9V15.5H15V9.5H17V15.5H23V17.5H17Z"
                    fill="#353535"
                  />
                  <circle cx="16" cy="16" r="15.5" stroke="#353535" />
                </svg>
              </button>
              <h4>R${valor},00</h4>
            </div>
          </div>
        </div>
        <div className="bordaa">
          <div className="pedido">
            <p>Subtotal R${soma()}</p>
            <hr></hr>
            <p>Frete R${soma() / 10}</p>
            <hr></hr>
            <p>Valor Total R${total()},00</p>
            <hr></hr>
            <button
              className="btpagar"
              onClick={(event) => {
                pagamento(total());
              }}
            >
              <svg
                className="pagar"
                width="373"
                height="55"
                viewBox="0 0 373 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="373" height="55" rx="7" fill="#00264B" />
                <path
                  d="M155.766 34V21.22H161.184C161.772 21.22 162.312 21.346 162.804 21.598C163.308 21.838 163.74 22.162 164.1 22.57C164.46 22.966 164.742 23.422 164.946 23.938C165.15 24.442 165.252 24.952 165.252 25.468C165.252 26.008 165.156 26.536 164.964 27.052C164.772 27.556 164.502 28.006 164.154 28.402C163.806 28.798 163.386 29.116 162.894 29.356C162.402 29.596 161.862 29.716 161.274 29.716H158.25V34H155.766ZM158.25 27.538H161.13C161.586 27.538 161.964 27.352 162.264 26.98C162.576 26.608 162.732 26.104 162.732 25.468C162.732 25.144 162.684 24.856 162.588 24.604C162.492 24.34 162.366 24.118 162.21 23.938C162.054 23.758 161.868 23.626 161.652 23.542C161.448 23.446 161.238 23.398 161.022 23.398H158.25V27.538ZM170.808 21.22H173.004L177.864 34H175.308L174.12 30.814H169.656L168.486 34H165.93L170.808 21.22ZM173.67 29.068L171.906 24.046L170.07 29.068H173.67ZM188.665 32.56C187.645 33.58 186.457 34.09 185.101 34.09C184.261 34.09 183.469 33.922 182.725 33.586C181.993 33.25 181.351 32.788 180.799 32.2C180.259 31.612 179.827 30.922 179.503 30.13C179.191 29.326 179.035 28.462 179.035 27.538C179.035 26.662 179.191 25.84 179.503 25.072C179.827 24.292 180.265 23.614 180.817 23.038C181.381 22.45 182.041 21.988 182.797 21.652C183.553 21.304 184.375 21.13 185.263 21.13C186.463 21.13 187.489 21.382 188.341 21.886C189.205 22.39 189.853 23.068 190.285 23.92L188.431 25.288C188.107 24.652 187.651 24.166 187.063 23.83C186.487 23.494 185.857 23.326 185.173 23.326C184.633 23.326 184.135 23.44 183.679 23.668C183.235 23.896 182.851 24.208 182.527 24.604C182.215 25 181.969 25.456 181.789 25.972C181.621 26.488 181.537 27.034 181.537 27.61C181.537 28.21 181.633 28.774 181.825 29.302C182.017 29.818 182.281 30.268 182.617 30.652C182.953 31.036 183.349 31.342 183.805 31.57C184.273 31.786 184.777 31.894 185.317 31.894C186.553 31.894 187.669 31.312 188.665 30.148V29.248H186.091V27.43H190.717V34H188.665V32.56ZM197.47 21.22H199.666L204.526 34H201.97L200.782 30.814H196.318L195.148 34H192.592L197.47 21.22ZM200.332 29.068L198.568 24.046L196.732 29.068H200.332ZM206.928 34V21.22H212.58C213.168 21.22 213.708 21.346 214.2 21.598C214.704 21.838 215.136 22.162 215.496 22.57C215.856 22.966 216.138 23.422 216.342 23.938C216.546 24.442 216.648 24.952 216.648 25.468C216.648 26.296 216.438 27.052 216.018 27.736C215.61 28.408 215.052 28.894 214.344 29.194L217.26 34H214.47L211.86 29.716H209.412V34H206.928ZM209.412 27.538H212.526C212.754 27.538 212.964 27.484 213.156 27.376C213.36 27.268 213.534 27.124 213.678 26.944C213.822 26.752 213.936 26.53 214.02 26.278C214.104 26.026 214.146 25.756 214.146 25.468C214.146 25.168 214.098 24.892 214.002 24.64C213.906 24.388 213.774 24.172 213.606 23.992C213.45 23.8 213.264 23.656 213.048 23.56C212.844 23.452 212.634 23.398 212.418 23.398H209.412V27.538Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {cedulas && (
        <div className="pagamento">
          <p>Pagamento realizado com sucesso!</p>
          <h2>
            {Object.entries(openPagar).map((it) => {
              if (it[1] > 0) return <p>{`Este pagamento foi realizado com ${it[1]} cédulas de R$${it[0]}`}</p>;
            })}
          </h2>
        </div>
      )}
    </>
  );
}
