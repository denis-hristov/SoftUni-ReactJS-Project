export default function Footer() {
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                        </p>
                    </div>
                    <div className="part">
                      <div className="info_form ">
                        <h5>Newsletter</h5>
                        <form>
                          <input type="email" placeholder="Enter your email"/>
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
  
  