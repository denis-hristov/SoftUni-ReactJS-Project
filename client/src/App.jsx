import { useState } from "react";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Products from "./Components/Products";
import Footer from "./Components/Parts/Footer";
import Error404 from "./Components/Parts/Error404";
import { AuthProvider } from "./Components/Sections/AuthContext/AuthContext.jsx";
import { CartProvider } from "./Components/Sections/Cart/CartContext";
import Cart from "./Components/Sections/Cart/Cart";
import Login from "./Components/Sections/LogInOut/Login.jsx";
import Register from "./Components/Sections/Register/Register.jsx";

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };
    return(<>
    <CartProvider>
    <AuthProvider>

        <Routes>
            <Route path="/" element={<Home addToCart={addToCart}/>}/>
            <Route path="/products" element={<Products addToCart={addToCart}/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/registration" element={<Register />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="/cart" element={<Cart cart={cart}/>} />
            <Route path="*" element={<Error404/>} />
        </Routes> 
                         
        <Footer/>
    </AuthProvider>
    </CartProvider>
    </>);
}
export default App;
