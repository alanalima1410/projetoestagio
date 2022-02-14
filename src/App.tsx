import './App.css';
import React, { useEffect, useState } from 'react';
import MinhasRotas from './routes/index';
import { BrowserRouter } from 'react-router-dom';
import Header from './componentes/header/index';
import ReactDOM from 'react-dom';
import { NodeAPI } from './services/Service';

function App(){
return <div className="App">
<Header />
<BrowserRouter>
<MinhasRotas />
</BrowserRouter>
</div>
}


export default App;
