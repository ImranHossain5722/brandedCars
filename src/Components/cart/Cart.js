import React from 'react';

const cart = (props) => {
   const {addToCart}=props 
    return (
        <div>
                <h2>Product Information</h2>

                {
                    addToCart.map((item) =>(
                    <h5 key={item.id}> Product Name: {item.name} <button>delete</button> </h5>
                    ))
                }            
       </div>
    );
};

export default cart;