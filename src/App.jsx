import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/cart/Cart'
import Shop from './pages/shop/shop'
import ShopContextProvider from './context/ShopContextProvider'


function App() {
 

  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element ={<Shop/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
      </Router>

      </ShopContextProvider>
      
    </div>
  )
}

export default App
 