import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux';

function Header() {

   const like =useSelector((state)=>state.productReducer)
   const cart=useSelector((state)=>state.cartReducer)
  return (
    <>
    <Navbar expand="lg" className="bg-success">
      <Container>
        <Navbar.Brand style={{color:'black'}} className='fs-2' >Mobile<span style={{color:'white',fontSize:'25px'}}>store</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='rounded bg-secondary m-2' ><Link style={{textDecoration:'none',color:'black'}} to={'/cards'}>Products</Link> </Nav.Link>
            <Nav.Link className='rounded bg-secondary m-2'  ><Link style={{textDecoration:'none',color:'black'}} to={'/like'}><i class='fa-solid fa-heart me-2 '></i>like<Badge bg='secondary' className='rounded ms-1'>{like.length} </Badge></Link> </Nav.Link>
            <Nav.Link className='rounded bg-secondary m-2' ><Link style={{textDecoration:'none',color:'black'}} to={'/cart'}><i class="fa-solid fa-cart-shopping me-2"></i>Cart<Badge bg='secondary' className='rounded ms-1'>{cart.length} </Badge></Link> </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  )
}

export default Header

