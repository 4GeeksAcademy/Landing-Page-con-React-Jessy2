import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import BarraNavegacion from './components/BarraNavegacion';
import Tarjetas from './components/Tarjetas';
import Jumbotron from './components/Jumbotron';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Home></Home>
  </React.StrictMode>,
)
