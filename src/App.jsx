import './App.css';
import React from 'react';
import MinhasRotas from './componentes/routes/routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './componentes/header/index';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <MinhasRotas />
      </BrowserRouter>
    </div>
  )
}

export default App
