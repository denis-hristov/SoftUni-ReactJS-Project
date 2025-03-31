import Navigation from "./Parts/Navigation";
import Order from "./Sections/Order/Order";
import baner from "/photos/Candy/BanerContacts.jpg";

export default function Contacts() {
    return(
        <>
            <div className="bannerContacts">
                <img src={baner} alt="baner" className="baner-photo" />
                <Navigation/>
            </div>
            <Order/>
        </>
    )
}
  
  