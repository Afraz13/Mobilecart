import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slice/cartSlice';

function Cart() {

    const cartArray =useSelector((state)=>state.cartReducer)
    const naviagte =useNavigate()

    const dispatch=useDispatch()
    const [total , setTotal]=useState(0)

    const getTotal =()=>{
        if(cartArray.length>0){
            setTotal(cartArray?.map(item =>item.price).reduce((p1,p2)=>p1+p2))
        }
        else{
            setTotal(0)
        }
    }
    useEffect(()=>{
        getTotal()
    },[cartArray])

    const handlecart =()=>{
        alert('Thankyou........Your Oder Placed Successfully')
        dispatch(emptyCart())
        naviagte('/')
    }
    return (
        <div style={{ marginTop: '150px' }}>
            {cartArray?.length>0?
            <div className='row w-100'>
                <div className='col-lg-6 m-5'>
                    <table className='table border shadow'>
                        <thead>
                            <th>#</th>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {
                                cartArray?.map((item,index)=>( <tr>
                                    <td>{index+1}</td>
                                    <td>{item.title}</td>
                                    <td><img src={item.thumbnail}  width={'150px'} alt="no image" /></td>
                                    <td>₹ {item.price}</td>
                                    <td><Button onClick={()=>dispatch(removeFromCart(item.id))}  variant='outline-danger rounded'><i class="fa-solid fa-trash"></i></Button></td>
                                </tr>))
                            }


                           


                        </tbody>
                    </table>
                </div>
                <div className='col-lg-4 d-flex justify-content-center align-items-center flex-column'>
                    <div className='border shadow p-5'>
                        <h2 className='text-primary mb-3'>Cart Summary</h2>
                        <h4>Total Number Of Product :{cartArray.length}</h4>
                        <h4>Total Price: ₹{total}</h4>
                        <button onClick={()=>handlecart()} className='btn btn-success rounded w-100 mt-3'>Checkout</button>

                    </div>

                </div>
            </div>:
            <div style={{ height: '100vh', backgroundColor: 'white' }} className='d-flex justify-content-center align-items-center flex-column'>
                <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" height={'300px'} />
                <h4 className='text-danger mt-3'>Your whislist is empty</h4>
                <button className='btn btn-success rounded mt-3'> <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'} ><i class="fa-solid fa-arrow-left me-3"></i>Back to home</Link> </button>
            </div>}

        </div>
    )
}

export default Cart
