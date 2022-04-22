import { Link } from "react-router-dom";

function Product(props) {
  const { product } = props;
  return (<div className="product" key={product.slug}>
    <Link to={`/product/${product.slug}`}>
      <img src={product.image} alt={product.name} />
    </Link>
    <div className="product_info">
      <Link to={`/product/${product.slug}`}>
        <p>{product.name}</p>
      </Link>
      <p>
        <strong>${product.price}</strong>
      </p>
      <button>Add to Cart</button>
    </div>
  </div>)
}
export default Product;