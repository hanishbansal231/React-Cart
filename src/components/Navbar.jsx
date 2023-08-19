import React from 'react'
import {FaShoppingCart} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div className='max-w-[1180px] m-auto'>
      <div className='flex flex-row justify-between'>
       <NavLink to="/"> <img src="../logo.png" alt="logo" height={100} width={100} /></NavLink>
        <div>
         <NavLink to="/"><p>Home</p></NavLink>
          <NavLink to="/cart"><FaShoppingCart/></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar