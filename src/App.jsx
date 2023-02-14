import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import CartWidget from './components/CartWidget'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos" />
      <CartWidget/>
    </>
    
  )
}

export default App
