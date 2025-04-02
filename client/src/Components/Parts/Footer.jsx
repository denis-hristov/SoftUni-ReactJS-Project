import { useRef } from "react";

export default function Footer() {
  const emailRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current?.value.trim();
    if (!email) {
      alert("Please enter a valid email!");
      return;
  }

    try {
        const response = await fetch('http://localhost:3030/data/emailList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });

        if (response.ok) {
            alert("Successfully subscribed!");
            emailRef.current.value = "";
        } else {
            alert("Failed to subscribe!");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred!");
    }
};
    return(
        <>
            <footer>
                <ul>
                    <li><a href="https://www.instagram.com/vivid.chocolatrie"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=61573175553384"><i className="fa-brands fa-square-facebook"></i></a></li>
                    <li><a href="https://www.youtube.com/@denis_hristov"><i className="fa-brands fa-youtube"></i></a></li>
                </ul>

                <div className="main">
                    <div class="part">
                        <h6>ABOUT US</h6>
                        <p>
                        We create exquisite chocolates, chocolate-covered strawberries, truffles and éclairs - perfect for special occasions or everyday indulgence.
                        </p>
                    </div>
                    <div className="part">
                      <div className="info_form ">
                        <h5>Newsletter</h5>
                        <form onSubmit={handleSubmit}>
                          <input type="email" ref={emailRef} placeholder="Enter your email"/>
                          <button>SUBSCRIBE</button>
                        </form>
                      </div>
                    </div>
                    <div className="part">
                        <h6>CONTACT US</h6>
                        <div className="info_contacts">
                          <a href="">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <span> Varna, Bulgaria </span>
                          </a>
                          <a href="">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <span>359 881 234 5678</span>
                          </a>
                          <a href="">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <span>valqbg1@gmail.com</span>
                          </a>
                        </div>
                    </div>
                </div>

                <p className="footer_p">© 2025 - All Rights Reserved By Vivid Chocolatrie</p> 
            </footer>
        </>
    )
}
  
  