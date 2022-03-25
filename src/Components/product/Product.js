import React from 'react';
import'./product.css'

const Product = (props) => {
console.log(props);
const {img,name,brand, price} = props.product
    return (
        <div className='single-product'>
        <img src={img} alt="" />
         <div className='product-info'>
         <h2>name: {name}</h2>
         <p>Brand:{brand} </p> 
        <p>Price: $ {price}</p>
         </div>

        </div>
    );
};

export default Product;