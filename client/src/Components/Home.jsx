import Navigation from "./Parts/Navigation";
import Carousel from "./Sections/Carousel/Carousel"
import baner from "/photos/Strawberries/Boxes/baner_strawberries.jpg";
export default function Home() {
    return(
        <>
        <div className="banner">
            <img src={baner} alt="baner" className="baner-photo" />
            <Navigation/>
            <div className="info">
                <div className="baner-info">
                  <h1 className="moto">Chocolate delight in a cute box!</h1>
                  <p className="about">We create exquisite chocolates, chocolate-covered strawberries, truffles and éclairs - perfect for special occasions or everyday indulgence.</p>
                  <a className="buy" href="#">BUY</a>
                </div>
            </div>
        </div>

        {/* <Carousel/> */}
        </>
    )
}