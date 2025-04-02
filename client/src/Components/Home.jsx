import Navigation from "./Parts/Navigation";
import GiftSection from "./Sections/GiftSection/GiftSection";
import Order from "./Sections/Order/Order";
import ProductSection from "./Sections/ProductSection/ProductSection";
import ShoppingBonus from "./Sections/ShoppingBonus/ShoppingBonus";
import TypeSweets from "./Sections/TypeSweets/TypeSweets";
import baner from "/photos/Strawberries/Boxes/baner_strawberries.jpg";
import { Link } from "react-router-dom";
export default function Home({ addToCart }) {
    return(
        <>
        <div className="banner">
            <img src={baner} alt="baner" className="baner-photo" />
            <Navigation/>
            <div className="info">
                <div className="baner-info">
                  <h1 className="moto">Chocolate delight in a cute box!</h1>
                  <p className="about">We create exquisite chocolates, chocolate-covered strawberries, truffles and éclairs - perfect for special occasions or everyday indulgence.</p>
                  <Link className="buy" to="/products">BUY</Link>
                </div>
            </div>
        </div>

        <TypeSweets/>
        <GiftSection addToCart={addToCart}/>
        <ShoppingBonus/>
        <ProductSection addToCart={addToCart}/>
        <Order/>
        </>
    )
}