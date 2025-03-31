import React from "react";

const images = [
  { src: "/photos/Candy/Candy1.jpg", alt: "Item 1", link: "#", text: "Candy" },
  { src: "/photos/Strawberries/Boxes/MainStrawberries.jpg", alt: "Item 2", link: "#", text: "Strawberries" },
  { src: "/photos/Chocolates/MainChocolates.jpg", alt: "Item 3", link: "#", text: "Chocolates" },
  { src: "/photos/Eclairs/MainEclairs.jpg", alt: "Item 4", link: "#", text: "Eclairs" },
];

export default function TypeSweets() {
  return (
    <div className="typeSweets">
      {images.map((image, index) => (
        <a key={index} href={image.link} className="typeSweets-item">
          <img src={image.src} alt={image.alt} />
          <div className="typeSweets-text">{image.text}</div>
        </a>
      ))}
    </div>
  )
}