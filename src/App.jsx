import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListCantainer";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting={"Tienda Ecommerce Zapatillas AlmayDeportes"}
              />
            }
          />
          <Route
            path="/categoria/:name"
            element={
              <ItemListContainer
                greeting={"Tienda Ecommerce Zapatillas AlmayDeportes"}
              />
            }
          />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;