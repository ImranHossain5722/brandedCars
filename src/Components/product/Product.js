// fon Awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import'./product.css'

const Product = (props) => {
    // destructuring 
const {addToCartHandel}=props
const {img,name,brand, price} = props.product

    return (
        <div className='single-product'>
          <img src={img} alt="" />
         <div className='product-info'>
         <p><span className='p-name'>Name:</span> {name}</p>
         <p><span className='p-brand'>Brand:</span>{brand} </p> 
        <p><span className='p-price'>Price: $ </span>{price}</p>

         </div>
         <button onClick={()=> addToCartHandel(props.product)} className='btn-cart'>Add to cart 
          <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon> 
         
         </button>

        </div>
    );
};

export default Product;