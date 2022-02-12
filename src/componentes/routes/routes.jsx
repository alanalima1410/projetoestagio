import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home";
import Editarproduto from "../editarproduto/index";
import Adicionarproduto from '../adicionarproduto/index';
import Carrinho from "../carrinho/index";

const MinhasRotas = () => {
    return(
        <Routes>
           <Route exact path="/home" element={<Home />} />
           < Route index element={<Home/>}/>
            <Route  exact  path="/editarproduto" element={<Editarproduto/>}/>
            <Route  exact  path="/adicionarproduto" element={<Adicionarproduto/>}/>
            <Route  exact  path="/carrinho" element={<Carrinho/>}/>
            </Routes>
    )
}

export default MinhasRotas
