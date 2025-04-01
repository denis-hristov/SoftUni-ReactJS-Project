import baner from "/photos/Candy/BanerCart.jpg";
import Navigation from "../../Parts/Navigation";
export default function Cart({ cart }) {

    return (
<>
        <div className="bannerCart">
                        <img src={baner} alt="baner" className="baner-photo" />
                        <Navigation/>
                    </div>

        <section className="cart-section">
    <h2 className="cartH2">Shopping Cart</h2>
    {cart.length === 0 ? (
        <p className="cartP">Your cart is empty.</p>
    ) : (
        <>
            <ul className="CartUL">
                {cart.map((product, index) => (
                    <li key={index}>
                        <img src={product.image} alt={product.name} width="50" />
                        <span>{product.name} - {product.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="cartTotal">
                Total: $
                {cart.reduce((total, product) => total + parseFloat(product.price.replace('$', '')), 0).toFixed(2)}
            </h3>
        </>
    )}
    <button className="cartButton">Proceed to Checkout</button>
</section>
</>
    );
}
