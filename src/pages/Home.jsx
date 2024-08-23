import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Home() {
  return (
    <>
   <Row className=''>
  <Col md={6} className='d-flex justify-content-center align-items-center mt-5'>
    <div style={{textAlign: 'center'}}>
      <p style={{color:'black', fontSize:'70px', marginBottom: '0px',fontFamily:'monospace'}}>Mobile <span style={{fontSize:'50px'}}>store</span></p>
      <p style={{fontSize:'20px', marginTop: '0px', letterSpacing: '3.5px',color:'black'}}>smart range of collections</p>
    </div>
  </Col>
  <Col md={6} className='d-flex justify-content-center align-items-center mt-5'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTER3IaqHoWXXu9V2Pvb-tDbmGKvkZ4LLR_sw&s" alt="" width={'400px'}  />
  </Col>
</Row>


<Row className=" mb-5 justify-content-center" style={{marginTop:'100px'}}>
    <Col md={3} className="d-flex justify-content-center align-items-center mb-5">
      <div className='bg-primary' style={{ width: '100%', height: '200px', textAlign: 'center', padding: '20px', borderRadius: '10px' }}>
        <h2 className='mt-2' style={{color:'white'}}><i class="fa-brands fa-apple fs-1 "></i> Iphone</h2>
        <p style={{fontSize:'10px',color:'white'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos temporibus sed nam nemo voluptatum at rem molestiae delectus vitae perferendis sapiente optio, </p>
      </div>
    </Col>
    <Col md={3} className="d-flex justify-content-center align-items-center mb-5">
      <div className='bg-info'  style={{ width: '100%', height: '200px', backgroundColor: '#e9ecef', textAlign: 'center', padding: '20px', borderRadius: '10px' }}>
        <h2 className='mt-2' style={{color:'white'}}><i class="fa-brands fa-windows fs-1 me-3"></i>Window Phone</h2>
        <p style={{fontSize:'10px',color:'white'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos temporibus sed nam nemo voluptatum at rem molestiae delectus vitae perferendis sapiente optio, </p>
      </div>
    </Col>
    <Col md={3} className="d-flex justify-content-center align-items-center mb-5">
      <div className='bg-success'  style={{ width: '100%', height: '200px', backgroundColor: '#dee2e6', textAlign: 'center', padding: '20px', borderRadius: '10px' }}>
      <h2 className='mt-2' style={{color:'white'}}><i class="fa-brands fa-android me-3"></i>Android Phone</h2>
      <p style={{fontSize:'10px',color:'white'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos temporibus sed nam nemo voluptatum at rem molestiae delectus vitae perferendis sapiente optio, </p>
      </div>
    </Col>
  </Row>
    </>
  )
}

export default Home
