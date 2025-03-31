import { Link } from "react-router-dom";

const images = [
  { src: "/photos/Candy/Candy1.jpg", alt: "Item 1", type: "candy", text: "Candy" },
  { src: "/photos/Strawberries/Boxes/MainStrawberries.jpg", alt: "Item 2", type: "strawberries", text: "Strawberries" },
  { src: "/photos/Chocolates/MainChocolates.jpg", alt: "Item 3", type: "chocolates", text: "Chocolates" },
  { src: "/photos/Eclairs/MainEclairs.jpg", alt: "Item 4", type: "eclairs", text: "Eclairs" },
];

export default function TypeSweets() {
  return (
    <div className="typeSweets">
      {images.map((image, index) => (
        <Link key={index} to={`/products?type=${image.type}`} className="typeSweets-item">
          <img src={image.src} alt={image.alt} />
          <div className="typeSweets-text">{image.text}</div>
        </Link>
      ))}
    </div>
  );
}
