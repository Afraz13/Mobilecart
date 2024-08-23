import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFecth from '../hooks/useFecth';
import { useDispatch } from 'react-redux';
import { addTolike } from '../redux/likeSlice';
import { addToProduct } from '../redux/slice/productSlice';
import { addToCart } from '../redux/slice/cartSlice';

function Cardsview() {

    const data = useFecth('https://dummyjson.com/products/category/smartphones')
    console.log(data);

    const dispatch =useDispatch()


    return (
        <Row className='ms-3 me-3' style={{ marginTop: '150px' }}>

            {data?.length > 0 ?
                data?.map(item => (<Col className=' mb-5 ' sm={12} md={6} lg={4} xl={3}>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={item.thumbnail} style={{ height: '200px' }} />
                        <Card.Body>
                            <Card.Title>{item.title.slice(0,15)}...</Card.Title>
                            <Card.Text>
                            {item.description.slice(0,40)}...
                                <p>Price £:{item.price} </p>
                            </Card.Text>
                            <div className='d-flex align-items-center justify-content-center flex-column '>
                                <Button onClick={()=>dispatch(addToProduct(item))} variant="danger" className='w-100 mb-3'><i class="fa-solid fa-heart me-2"></i>Like</Button>
                                <Button onClick={()=>dispatch(addToCart(item))} variant="success" className='w-100'><i class="fa-solid fa-cart-shopping me-2"></i>cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>))

                : <p>Nothing to display</p>

            }
        </Row>
    )
}

export default Cardsview
