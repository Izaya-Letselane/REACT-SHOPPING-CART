import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="links">
            <Link to="/">Shop</Link>
            <Link to="/Cart">
                <ShoppingCart size={32}/>
            </Link>
           
        </div>
      
    </div>
  )
}

export default Navbar
