import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";



function Footer() {
    return(
      <section>
      <footer>
        <div className="footerSocial">
          <h3>We are social</h3>
          <div className="socialIcons">
            <a href="#">
              <span className="icon-container">
                <FontAwesomeIcon icon={faFacebookF} className="fa-brands fa-facebook-f" />
              </span>
            </a>
            <a href="#">
              <span className="icon-container">
                <FontAwesomeIcon icon={faXTwitter} className="fa-brands fa-x-twitter" />
              </span>
            </a>
            <a href="#">
              <span className="icon-container">
                <FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram" />
              </span>
            </a>
            <a href="#">
              <span className="icon-container">
                <FontAwesomeIcon icon={faYoutube} className="fa-brands fa-youtube" />
              </span>
            </a>
          </div>
        </div>
        <p></p>
        <hr />
        <p />
        <p>© 2024 Imomotimi Foundation. All Rights Reserved.</p>
        <div>
          <a href="#" className="arrow">
            <FontAwesomeIcon icon={faArrowUp} className="fa-solid fa-arrow-up" />
          </a>
        </div>
      </footer>
    </section>
    

    )
}

export default Footer;