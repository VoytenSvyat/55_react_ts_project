import { v4 } from "uuid";
import Product from "../components/Product/Product";
import { products } from "./Products";
import './styles.css'



function Homework07 () {
    const productCards = products.map((product)=>{
       return <Product
       key={ v4() }
       name={product.name}
       price={product.price}
       /> 
    }
    ) 
    return (
        <div className="cards-wrapper">
            <div className="style">
            {productCards}
        </div>
        </div>
    )   
}

export default Homework07
