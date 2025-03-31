import React from 'react';
import products from './InfoAllProducts';

export default function ProductSection() {
  return (
    <section className="product-section">
        <div className="heading">
          <h2>Latest Products</h2>
        </div>
        <div className="map">
          {products.map((product) => (
            <div key={product.id} className="product">
              <div className="box">
                <a href="#">
                  <div className="img-box">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="detail-box">
                    <h6>{product.name}</h6>
                    <h6>
                      Price <span>{product.price}</span>
                    </h6>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="button">
          <a href="">View All Products</a>
        </div>
    </section>
  );
};