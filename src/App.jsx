import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import CartWidget from './components/CartWidget'

function App() {
  const [count, setCount] = useState(0)
  const productos = [
    {id:1 , nombre: "Notebook"},
    {id:2 , nombre: "Monitor"},
    {id:3 , nombre: "Impesora"},
    {id:4 , nombre: "Mouse"},
    {id:5 , nombre: "Teclado"},
  
  ]
  const getProductos = () =>{
    
    return productos;
  }; 

  const sumar = () => {
    setCount(count +1);
  };
  
  return (
    <>
      <p>{count}</p>
      <button onClick={sumar}>Sumar</button>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos" />
      <CartWidget/>
    </>
    
  )
}

export default App
