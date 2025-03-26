import './styles.css'
import ProductsProps from './types';

function Product ({name, price}: ProductsProps) {
    return (
        <div className="products-card-container">
            <h3 className="product-name">{name}</h3>
            <p className="product-price">Price: ${price.toFixed(2)}</p>
        </div>
    )

}

export default Product;