import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5  w-100 bg-info p-5'>
    <div className="d-flex justify-content-between">
      {/* intro */}
      <div style={{width:'400px'}}>
        <h5 style={{color:'white'}}> <i class="fa-brands fa-docker"></i>FoodDay</h5>
        <p style={{color:'white'}}>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
        <p style={{color:'white'}}>Code licensed MIT, docs CC BY 3.0.</p>
        <p style={{color:'white'}}>Currently v5.3.3.</p>
      </div>
      {/* links */}
      <div className="d-flex flex-column">
        <h5 style={{color:'white'}}>Links</h5>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
        <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Login</Link>
        <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>Register</Link>
      </div>
      {/* guides */}
      <div className="d-flex flex-column">
        <h5 style={{color:'white'}}>Guides</h5>
        <a style={{textDecoration:'none',color:'white'}} href="https://react.dev" target='_blank'>React</a>
        <a style={{textDecoration:'none',color:'white'}} href="https://react.dev" target='_blank'>React Router</a>
        <a style={{textDecoration:'none',color:'white'}} href="https://react-bootstrap.github.io/" target='_blank'>React Bootstrap</a>


      </div>
      {/* contact */}
      <div className="d-flex flex-column">
        <h5 style={{color:'white'}}>Contact</h5>
        <div className="d-flex">
          <input placeholder='Enter your E-mail Here' type="text" className='form-control me-2' />
          <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
        </div>
        <div className='d-flex justify-content-between mt-3'>
          <a href="https://x.com/?lang=en-in&mx=2" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-twitter'></i></a>
          <a href="https://www.instagram.com/?hl=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-instagram'></i></a>
          <a href="https://in.linkedin.com/" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-linkedin'></i></a>
          <a href="https://github.com/" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-github'></i></a>
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-solid fa-phone"></i></a>
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-twitter'></i></a>


        </div>
      </div>
    </div>
    {/* <p>copy</p> */}
    <p style={{color:'white'}} className='text-center mt-3'>Copyright &copy; July 2024 Batch, Food Recipie App. Built with React</p>
    </div>
  )
}

export default Footer