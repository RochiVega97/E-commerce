import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import CartWidget from './components/CartWidget'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const sumar = () => {
    setCount(count +1);
  };
  
  return (
    <>
      <p>{count}</p>
      <button onClick={sumar}>Sumar</button>
      <BrowserRouter>
        <NavBar/>

    <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/about" element ={<About/>} />
        <Route exact path="/about" element ={<ItemListContainer/>} />
        <Route exact path="/about" element ={<CartWidget/>} />
    </Routes>
        <Footer/>
      </BrowserRouter>
    </>
    
  )
}

export default App
