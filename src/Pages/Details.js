import React from 'react';
import { useParams } from 'react-router-dom';
import { Data } from '../Data/Data';
import './Details.css'; 

const Details = () => {
  const { id } = useParams(); 
  const product = Data.find(item => item.id === parseInt(id, 10)); 

  if (!product) {
    return <div className="product-detail-container">Product not found</div>;
  }

  return (
    <div className="product-detail-container">
      <h2>{product.brand}</h2>
      <img src={product.image} alt={`Product ${product.id}`} />
      <div className="details">
        <p>Price: RS. {product.price}</p>
        <p>Size: {product.size}</p>
        <p>Color: {product.color}</p>
        <p>Type: {product.type}</p>
        <p>Season: {product.season}</p>
        <p>Gender: {product.gender}</p>
        <p>Fit: {product.fit}</p>
      </div>
    </div>
  );
};

export default Details;
