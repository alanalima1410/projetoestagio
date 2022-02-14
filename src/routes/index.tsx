import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Editarproduto from "./editarproduto/index";
import Carrinho from "../componentes/carrinho/index";
import { Adicionarproduto } from "./adicionarproduto";

const MinhasRotas = () => {
    return(
        <Routes>
           <Route path="/home" element={<Home />} />
           < Route index element={<Home/>}/>
            <Route path="/editarproduto" element={<Editarproduto/>}/>
            <Route path="/adicionarproduto" element={<Adicionarproduto/>}/>
            <Route path="/carrinho" element={<Carrinho/>}/>
            </Routes>
        
    )
}

export default MinhasRotas
