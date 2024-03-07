import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from "./rotas.js"
import "./style/global.css"
import { CartProvider } from './contexts/cart-context.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
  <Rotas/>
  </CartProvider>
);