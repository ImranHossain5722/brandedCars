import React from 'react';
import'./product.css'

const Product = (props) => {
console.log(props);
const {img,name,brand, price} = props.product
    return (
        <div className='single-product'>
          <img src={img} alt="" />
         <div className='product-info'>
         <p><span className='p-name'>Name:</span> {name}</p>
         <p><span className='p-brand'>Brand:</span>{brand} </p> 
        <p><span className='p-price'>Price: $ </span>{price}</p>

         </div>

        </div>
    );
};

export default Product;