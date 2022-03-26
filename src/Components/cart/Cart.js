// font Awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import'./Cart.css'
const cart = (props) => {
   const {addToCart}=props 
    return (
        <div className='cart-container'>
                <h2>Product Information</h2>

                {
                    addToCart.map((item) =>(
                    <h5 key={item.id}> <span className='pro-name'>Product Name: </span>{item.name} <button className='btn-trash'>
                    <FontAwesomeIcon icon ={faTrash}> </FontAwesomeIcon> </button> 
                    <br></br> <span className='pro-name'> Product Price:</span> ${item.price}  </h5>
                    ))
                }
                
                <div className='btn-container'>
                    <button className='choose-btn' >Choose For Me 1</button>
                    <button className='choose-btn' >Reset All</button>
                </div>
       </div>
    );
};

export default cart;