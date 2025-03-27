import './styles.css'
import ProductsProps from './types';

function Product ({productName, productPrice}: ProductsProps) {
    return (
        <div className="products-card-container">
            <div className="product-name">Product: {productName}</div>
            <div className="product-price">Price: ${productPrice.toFixed(2)}</div>
        </div>
    )

}

export default Product;