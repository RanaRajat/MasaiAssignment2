import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>

      <div className='productsNavbar'>
         <NavLink to = '/' htmlFor="">Products</NavLink>
      </div>

     <div className='whishlistNavbar'>
     <NavLink to='/whishlist' htmlFor="">Whishlist</NavLink>
       
     </div>
     <Outlet/>
    </div>
  )
}

export default Navbar