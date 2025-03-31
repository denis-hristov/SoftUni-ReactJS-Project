import React from 'react';
import products from './AllProducts/InfoAllProducts';
import { Link } from 'react-router-dom';

export default function ProductSection() {
  return (
    <section className="product-section">
        <div className="heading">
          <h2>Latest Products</h2>
        </div>
        <div className="map">
          {products.slice(0, 8).map((product) => (
            <div key={product.id} className="product">
              <div className="box">
                <Link to="#">
                  <div className="img-box">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="detail-box">
                    <h6>{product.name}</h6>
                    <h6>
                      Price <span>{product.price}</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="button">
          <Link to="/products">View All Products</Link>
        </div>
    </section>
  );
};