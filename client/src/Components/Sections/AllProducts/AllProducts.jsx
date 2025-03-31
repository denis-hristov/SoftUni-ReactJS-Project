import { useState } from 'react';
import React from 'react';
import products from './InfoAllProducts';
import { Link } from 'react-router-dom';


export default function ProductSection() {
    const [sortType, setSortType] = useState('default');

    const sortedItems = [...products].sort((a, b) => {
        const priceA = parseInt(a.price.replace('$', ''));
        const priceB = parseInt(b.price.replace('$', ''));

        if (sortType === 'name') {
            return a.name.localeCompare(b.name);
        }
        if (sortType === 'price-asc') {
            return priceA - priceB;
        }
        if (sortType === 'price-desc') {
            return priceB - priceA;
        }
        return 0;
  });
  return (
    <section className="product-section">

        <select onChange={(e) => setSortType(e.target.value)}>
            <option value="default">Default</option>
            <option value="name">Sort by Name</option>
            <option value="price-asc">Sort by Low Price</option>
            <option value="price-desc">Sort by High Price</option>
        </select>

        <div className="map">
          {sortedItems.map((product) => (
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
                  </Link>
                </div>
              </div>
          ))}
        </div>
    </section>
  );
};