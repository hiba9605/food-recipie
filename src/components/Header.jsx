import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
  <nav className='bg-success' style={{height:'100px',padding:'20px',display:'flex',justifyContent:'space-between'}}>
    <h1>FoodDay</h1>
    <input type="text" placeholder='enter food here' style={{borderRadius:'5px',height:'40px',marginTop:'10px'}} />

  </nav>

  )
}

export default Header