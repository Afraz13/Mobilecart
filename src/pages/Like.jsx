import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeToProduct } from '../redux/slice/productSlice';
import { addToCart, removeFromCart } from '../redux/slice/cartSlice';

function Like() {
    const likearray = useSelector((state) => state.productReducer)
    console.log(likearray);
    const dispatch =useDispatch()
    const handlewishlist =(item)=>{
        dispatch(addToCart(item))
        dispatch(removeToProduct(item.id))

    }

    return (
        <div style={{ marginTop: '150px' }}>
            <Row className='ms-3 me-3' style={{ marginTop: '150px' }}>
                {
                    likearray?.length > 0 ?
                        likearray?.map((item) => (
                            <Col className=' mb-5 ' sm={12} md={6} lg={4} xl={3}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={item.thumbnail} style={{ height: '200px' }} />
                                    <Card.Body>
                                        <Card.Title>{item.title.slice(0, 15)}...</Card.Title>
                                        <Card.Text>

                                            {item.description.slice(0, 40)}...
                                            <p>Price £:{item.price} </p>
                                        </Card.Text>
                                        <div className='d-flex align-items-center justify-content-center flex-column '>
                                            <Button onClick={()=>dispatch(removeToProduct(item.id))} variant="danger" className='w-100 mb-3'><i class="fa-solid fa-trash me-2"></i>Delete</Button>
                                            <Button onClick={()=>handlewishlist(item)} variant="success" className='w-100'><i class="fa-solid fa-cart-shopping me-2"></i>Buy</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>))
                        :
                        <div style={{ height: '100vh', backgroundColor: 'white' }} className='d-flex justify-content-center align-items-center flex-column'>
                            <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" height={'300px'} />
                            <h4 className='text-danger mt-3'>Your whislist is empty</h4>
                            <button className='btn btn-success rounded mt-3'> <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'} ><i class="fa-solid fa-arrow-left me-3"></i>Back to home</Link> </button>
                        </div>}
            </Row></div>
    )
}

export default Like



