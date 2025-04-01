import { useState } from "react";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Products from "./Components/Products";
import Footer from "./Components/Parts/Footer";
import Error404 from "./Components/Parts/Error404";
// import ProductDetails from "./Components/Sections/AllProducts/ProductDetails";

import { CartProvider } from "./Components/Sections/Cart/CartContext";
import Cart from "./Components/Sections/Cart/Cart";

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };
    return(<>
    <CartProvider>
        <Routes>
            <Route path="/" element={<Home addToCart={addToCart}/>}/>
            <Route path="/products" element={<Products addToCart={addToCart}/>}/>
            {/* <Route path="/products/info" element={<ProductDetails />}/> */}
            <Route path="/about" element={<About />}/>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="/cart" element={<Cart cart={cart}/>} />
            <Route path="*" element={<Error404/>} />
        </Routes> 
                         
        <Footer/>
    </CartProvider>
    </>);
}
export default App;
