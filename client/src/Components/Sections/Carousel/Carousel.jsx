import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import itemData from "./Carousel-items.js";

const CarouselSection = () => {
  return (
    <section className="slider_section">
      <div className="slider_container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {itemData.map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <a href={item.link}>Order Now</a>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="img-box">
                        <img src={item.imgSrc} alt={item.title} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Контроли за навигация */}
          <div className="carousel_btn-box">
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <img src="images/line.png" alt="Line" />
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarouselSection;