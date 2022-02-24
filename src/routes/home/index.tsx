import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Produto from "../../componentes/produto";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { NodeAPI } from "../../services/Service";
import { ProdutoDTO } from "dtos/produtosDTO";
import { useParams } from "react-router-dom";

function Home() {
  const [produtos, setProdutos] = useState<Array<ProdutoDTO>>([]);
  useEffect(() => {
    const getProdutos = async () => {
      try {
        const resposta = await NodeAPI.get(
          `${process.env.REACT_APP_API_URL}/produto`
        );
        setProdutos(resposta.data);
      } catch (erro) {
        console.log(erro);
      }
    };
    getProdutos();
  }, []);

  return (
    <>
      <div className="topo">
        <h1>Produtos</h1>
        <Button
          className="adicionar"
          variant="outlined"
          startIcon={<AddCircleIcon />}
          onClick={() => {
            window.location.replace("/adicionarproduto");
          }}
        >
          Adicionar Produto
        </Button>
      </div>
      {produtos.map((it, index) => (
        <Produto key={index} produtoDTO={it} />
      ))}
    </>
  );
}
export default Home;
