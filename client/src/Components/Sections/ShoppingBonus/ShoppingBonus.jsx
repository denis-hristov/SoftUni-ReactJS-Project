export default function ShoppingBonus() {
  const features = [
    {
      icon: "https://static.thenounproject.com/png/2526085-200.png",
      title: "Fast Delivery",
      description: "Get your favorite chocolates delivered quickly and fresh."
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1892/1892654.png",
      title: "Premium Quality",
      description: "We offer only the finest selection of handcrafted chocolates."
    },
    {
      icon: "https://static.vecteezy.com/system/resources/previews/015/911/602/non_2x/customer-support-icon-outline-style-vector.jpg",
      title: "24/7 Support",
      description: "Our support team is here to help you anytime, anywhere."
    }
  ];

  return (
      <div className="section-bonuses">
        <h2 className="title">Why Shop With Us</h2>
        <div className="bonuses">
          {features.map((feature, index) => (
            <div key={index} className="element">
              <div className="element-icon"><img src={feature.icon}/></div>
              <h5 className="element-title">{feature.title}</h5>
              <p className="element-info">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
  )
}