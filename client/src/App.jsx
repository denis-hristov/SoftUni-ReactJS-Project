import { Routes, Route } from "react-router";

import Home from "./Components/Home";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Products from "./Components/Products";

import Footer from "./Components/Parts/Footer";
//import Navigation from "./Parts/Navigation";

function App() {
    
    return(<>
        {/* <Navigation/> */}
    
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contacts" element={<Contacts />}/>
        </Routes> 
                         
        <Footer/>
    </>);
}
export default App;
