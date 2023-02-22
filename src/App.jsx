import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import CartWidget from './components/CartWidget'

function App() {
  const [count, setCount] = useState(0)

  const sumar = () => {
    setCount(count +1);
  }
  
  return (
    <>
      <p>{count}</p>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos" />
      <CartWidget/>
    </>
    
  )
}

export default App
