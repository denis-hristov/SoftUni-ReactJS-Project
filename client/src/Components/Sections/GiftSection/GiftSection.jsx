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
                        Omnis ex nam laudantium odit illum harum, excepturi accusamus
                        at corrupti, velit blanditiis unde perspiciatis, vitae minus
                        culpa? Beatae at aut consequuntur porro adipisci aliquam
                        eaque iste ducimus expedita accusantium?
                    </p>
                    <div className="btn-box">
                      <a href="#" className="btn1">
                        Buy Now
                      </a>
                      <a href="#" className="btn2">
                        See More
                      </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}