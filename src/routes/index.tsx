import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";

import { Editarproduto } from "./editarproduto/index";
import { Adicionarproduto } from "./adicionarproduto";
import { Carrinho } from "componentes/carrinho";


const MinhasRotas = () => {
    return(
        <Routes>
           <Route path="/home" element={<Home />} />
           < Route index element={<Home/>}/>
            <Route path="/editarproduto/:id" element={<Editarproduto/>}/>
            <Route path="/adicionarproduto" element={<Adicionarproduto/>}/>
            <Route path="/carrinho/:id" element={<Carrinho/>}/>
            </Routes>
        
    )
}

export default MinhasRotas;
