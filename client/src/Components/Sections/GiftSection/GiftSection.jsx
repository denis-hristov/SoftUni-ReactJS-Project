import React from "react";
import giftImage from "/photos/Strawberries/Bouquet/GiftSection.jpg";

export default function GiftSection() {
  return (
    <section className="gift-section">
        <div className="row">
            <div className="col-left">
                <div className="img-container">
                    <img src={giftImage} alt="Gifts" />
                </div>
            </div>
            <div className="col-right">
                <div className="detail-box">
                    <h2>
                        Gifts for your
                        <br />
                        loved ones
                    </h2>
                    <p>
                    Looking for the perfect way to surprise your loved one? Our Chocolate-Covered Strawberry Bouquet is the ultimate gift that combines romance, elegance and irresistible taste. Make your special moments even sweeter! Order now and deliver a delightful surprise straight to their heart.
                    </p>
                    <div className="btn-box">
                      <a href="#" className="btn1">
                        Buy Now
                      </a>
                      <a href="/products" className="btn2">
                        See More
                      </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}