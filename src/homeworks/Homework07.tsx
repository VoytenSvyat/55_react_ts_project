import { v4 } from "uuid";

import ProductCard from "../components/Product/Product";
import { products } from "./Products";
import './styles.css'
import { Product } from "./types";

function Homework07() {
    const productsList = products.map((product: Product)=>{
       return ( 
        <ProductCard
       key={ v4() }
       productName={product.name}
       productPrice={product.price}
       /> 
    )
}) 
    return (
        <div className="homework07-container">
      <h1>Products</h1>
      {productsList}
    </div>
    )   
}

export default Homework07
