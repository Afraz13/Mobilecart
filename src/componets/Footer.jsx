import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px',color:'black'}} className='d-flex justify-content-center align-items-center w-100 flex-column bg-success mt-5'>
    <div className='d-flex justify-content-evenly w-100'>
      <div className='website' style={{width:'400px'}}>
      <h4 style={{textAlign:'left'}}>
      {/* <i class="fa-solid fa-video text-warning me-3" style={{color:"blue"}}></i> */}
        Mobile<span style={{color:'white'}}>store</span>
      </h4>
        <p style={{maxWidth:'80%'}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non libero, a voluptas inventore dolorum nobis nam expedita consectetur magni aliquam explicabo quis odit necessitatibus dignissimos fugiat quibusdam perferendis amet culpa?
        </p>
        
      </div>
      <div className='links d-flex flex-column'>
        <h4 className='mb-3'>Links</h4>
        <Link to={'/'} style={{textDecoration:'none',color:'black'}}>Home page  </Link>
        <Link to={'/cart'}style={{textDecoration:'none',color:'black'}}> cart</Link>
        <Link to={'/cards'}style={{textDecoration:'none',color:'black'}}> product</Link>
      </div>
      <div className='guides d-flex flex-column'>
        <h4 className='mb-3'>Guides</h4>
        <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'black'}}>React </Link>
        <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'black'}}>React Bootstrap</Link>
      </div>
      <div className='contacts d-flex flex-column'>
        <h4 className='mb-3'>Contact Us</h4>
        <div className='d-flex'>
          <input type="text" placeholder='Enter here' className='form-control' />
          <button className="btn btn-warning ms-3">Subscribe</button>
        </div>
        <div className='d-flex justify-content-evenly align-items-center mt-4'>
          <Link to={'/'} style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-instagram"></i></Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-facebook"></i></Link>
          <Link to={'/'} style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-twitter"></i></Link>
          <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
          <i class="fa-brands fa-linkedin"></i>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer

