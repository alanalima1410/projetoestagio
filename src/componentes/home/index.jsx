import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Produto from '../produto';
//import Editarproduto from '../editarproduto/index';
import img2 from '../imagens/img2.png';
import im3 from '../imagens/im3.png';
import im4 from '../imagens/im4.png';
//import Adicionarproduto from '../adicionarproduto/index';
//import Carrinho from "../carrinho/index";


function Home (){
    const meusprodutos = [{img:im3, name:"Câmera interna inteligente Wi-Fi Full HD iM3", descricao:"Intelbras", valor:"R$ 300,00", cor:"Cor: Branco" },
    {img:img2, name:"Câmera DS-2CD 2583G2-I", descricao:"Hikvision", valor:"R$ 645,00", cor:"Cor: Branco" },
    {img:im4, name:"Câmera interna inteligente Wi-Fi Full HD iM4", descricao:"Intelbras", valor:"R$ 349,00", cor:"Cor: Branco" }]
    return(
        <>
         <div>
            <nav>
                <Link to="/editarproduto">Editar Produto</Link>
            </nav>
            </div>
            <div>
            <nav>
                <Link to="/adicionarproduto">Adicionar Produto</Link>
            </nav>
            </div>
            <div>
            <nav>
                <Link to="/carrinho">Carrinho</Link>
            </nav>
            </div>
            <container>
                <div>
           <h1>Produtos</h1>
            <button className='button'>
               Adicionar Produto
            </button>
        </div>
        </container>
        {meusprodutos.map(it => <Produto img={it.img} name={it.name} descricao={it.descricao} valor={it.valor} cor={it.cor}/>)}
        <div className="content">
            <div className="content-img">1</div>
            <div className="content-name">2</div>
            <div className="content-action">3</div>
        </div>       
       
        </>
    )
}
export default Home
