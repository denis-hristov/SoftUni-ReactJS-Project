import Navigation from "./Parts/Navigation";
import Order from "./Sections/Order/Order";
import AllProductSection from "./Sections/AllProducts/AllProducts";
import baner from "/photos/Strawberries/Boxes/banerProducts.jpg";
export default function Products() {
    return(
        <>
        <div className="banner">
            <img src={baner} alt="baner" className="baner-photo" />
            <Navigation/>
        </div>
        <AllProductSection/>
        <Order/>
        </>
    )
}