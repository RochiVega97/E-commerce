import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import CartWidget from './components/CartWidget'

function App() {
  const [count, setCount] = useState(0)
  const productos = [
    {id:1 , nombre: "Notebook", descripcion:"Notebook Lenovo" , stock:4},
    {id:2 , nombre: "Monitor", descripcion:"Monitor Led DELL" , stock:2},
    {id:3 , nombre: "Impesora", descripcion:"Impresora  Brother" , stock:1},
    {id:4 , nombre: "Mouse", descripcion:"Mouse DELL" , stock:4},
    {id:5 , nombre: "Teclado", descripcion:"Teclado inalambrico DELL" , stock:10},
  
  ]
  const getProductos = () =>{
    return new Promise((resolve, reject) => {
      if (productos.length===0){
        reject(new Error("No hay productos que mostrar"));
      }
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  }; 

  async function fetchingProductos() {
    try {
      const productosFetched = await getProductos();
      console.log(productosFetched);
    } catch (err) {
      console.log(err);
    }
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
