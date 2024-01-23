import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter} from 'react-router-dom'
import Nav from './component/Nav.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav/>
   <Home/>
   </BrowserRouter>
  </React.StrictMode>,
)
