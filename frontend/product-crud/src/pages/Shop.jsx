import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "../styles/Shop.css"

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => setError(err))
    }, []);

    return (
        <>
            <div className="product-grid">
            {
                products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={`http://localhost:8080${product.image}`} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.price}$</p>
                        <Link className="info-btn" to={`/shop/products/${product.id}`}>View Product</Link>
                    </div>
                ))
            }
            </div>
        </>
    )   
}