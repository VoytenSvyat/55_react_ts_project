import { useEffect } from 'react';

import './styles.css'
import ProductsProps from './types';

function Product ({productName, productPrice}: ProductsProps) {
    // Unmounting - виполняеться действие при размонтировании компонента Product
    useEffect(()=>{
        return ()=>{
            console.log('Component will unmount');  
        }
    },[])  

    return (
        <div className="products-card-container">
            <div >Product: {productName}</div>
            <div >Price: ${productPrice.toFixed(2)}</div>
        </div>
    )

}

export default Product;