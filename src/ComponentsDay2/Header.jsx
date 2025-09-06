import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [btnName,setBtnName]=useState('Login')
  return (
    <div className='header'>
        <div className='logo-container'>
            <h1>Swiggy</h1>
        </div>
      <div className='nav-items'>
        <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li>Cart</li>
            <button className='loginBtn' onClick={()=>{
                btnName === "login"?setBtnName('Logout'):setBtnName('Login');
            }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header
