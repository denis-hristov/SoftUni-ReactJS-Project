import Navigation from "./Parts/Navigation";
import baner from "/photos/Strawberries/Types/BanerAbout.jpg";

export default function About() {
    return(
        <>
            <div className="banner">
                <img src={baner} alt="baner" className="baner-photo" />
                <Navigation/>
                <div className="info">
                    <div className="baner-info">
                        <h1 className="moto">About Vivid Chocolatrie</h1>
                        <h2 className="about">Chocolate delight in a cute box!</h2>
                    </div>
                </div>
            </div>
            <div className="about-section">
                <div className="part1">
                    <p>
                        At Vivid Chocolatrie, we specialize in creating exquisite chocolates, chocolate-covered strawberries, truffles, and éclairs - perfect for any special occasion or simply as an indulgent treat for your everyday moments. Our journey to perfecting our signature chocolate recipes has been filled with dedication and experimentation. We have spent countless hours perfecting each flavor, each texture, until we could create the irresistible chocolates you enjoy today. It has not always been easy, but the hard work has been worth it!
                    </p>
                    <div className="images-container">
                        <img src="/photos/Making/Making2.jpg" alt="Chocolate-making process 1" className="about-image"/>
                    </div>
                </div>
                <div className="part2">
                    <p>
                        Our mission is to offer you more than just chocolates - we want to offer you a moment of pure joy, wrapped in a cute box. Whether it's a gift for a loved one or a personal indulgence, we believe our treats will add a touch of sweetness to every moment.
                    </p>
                    <div className="images-container">
                        <img src="/photos/Making/Making1.jpg" alt="Chocolate-making process 1" className="about-image"/>
                    </div>
                </div>
            </div>
        </>
    )
}
  
  