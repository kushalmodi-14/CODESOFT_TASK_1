import React from 'react'
import { Link } from 'react-router-dom'
import './../Components/Style.css'

const Navbar = () => {
  return (
    <div>
      <div className="header">

        <div className="logo">
          <h2>Product Catalog</h2>
        </div>

        <div className="navbar">
          <ul>
            <li> <Link to="/" className='Link'>Product </Link> </li>
            <li> <Link to="/cart" className='Link'>cart </Link> </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar