import React,{ useEffect,useState} from 'react';
import Product from '../../product/Product';
import Cart from '../../cart/Cart'
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
        console.log(product)
        const newProduct=[product]
        console.log(newProduct);
        const newAddToCart =[...addToCart, product]
        setAddToCart(newAddToCart)
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