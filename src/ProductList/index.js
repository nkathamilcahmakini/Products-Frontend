import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products/');
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <div className="productdetails">
      <h1>Product Details</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image_url} alt={product.name} />
            <br />
            <br />
            <p>Name: {product.name}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
          </li>
        ))}
      </ul>

      <Link to={'/AddProductForm/'}>
        <button type="submit" className="view">
          Add Product
        </button>
      </Link>
    </div>
  );
};

export default Products;
