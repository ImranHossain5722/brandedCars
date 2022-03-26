import React,{ useEffect,useState} from 'react';
import Product from '../../product/Product';
import'./Shop.css'

const Shop = () => {
// for product useState
const [products, setProducts ] = useState([])
// for shopping cart useState
const [addToCart, setAddToCart] =useState([])
    useEffect( ()=>{
        fetch ('products.json')
        .then(res=>res.json())
        .then (data=> setProducts(data))

    },[])

    const addToCartHandel=(product)=>{
    
        const newAddToCart =[...addToCart, product]
        setAddToCart(newAddToCart)
        console.log(product.name);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=> <Product key={product.id}
                    product={product}
                    addToCartHandel={addToCartHandel}

                    ></Product>)
                }
            </div>
            <div className='cartContainer'> 
            
            
             <Cart addToCart={addToCart} > </Cart>
        
            </div>
               
        </div>
    );
};

export default Shop;