import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faUser } from "@fortawesome/free-solid-svg-icons";
import { faPencil, faEnvelope, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return(
        <section>
  <div className="contact-section">
    <div className="contact-info">
      <h2>For More Information:</h2>
      <p>
        <strong>Hotlines:</strong> 07035973706 &amp; 08108112759
      </p>
      <p>
        <strong>Email:</strong> info@ijawdancecontest.ng
      </p>
      <p>
        <strong>Audition Location:</strong> Nitro Studio, Tamara Hall, Otiotio
        Road, Yenegoa, Bayelsa State.
      </p>
    </div>
    <div className="contact-form">
      <form action="" method="POST">
        <div className="form-group">
          <div className="inputicon">
            <FontAwesomeIcon icon={faUser} className="fas fa-user" />
            <input
              type="text"
              name="fname"
              placeholder="Name"
              className="name"
            />
          </div>
          <div className="inputicon">
            <FontAwesomeIcon icon={faPhoneVolume} className="fas fa-phone-volume" />
            <input type="tel" name="phone" placeholder="Phone" />
          </div>
        </div>
        <div className="form-group">
          <div className="inputicon">
            <FontAwesomeIcon icon={faEnvelope} className="fas fa-envelope" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="email"
            />
          </div>
          <div className="inputicon">
            <FontAwesomeIcon icon={faInfoCircle} className="fas fa-info-circle" />
            <input type="text" name="subject" placeholder="Subject" />
          </div>
        </div>
        {/* <label for="message">How can we help you? Feel free to get in touch!</label> */}
        <FontAwesomeIcon icon={faPencil} className="fa-solid fa-pencil pencil" />
        <textarea
          name="message"
          id="message"
          placeholder="How can we help you? Feel free to get in touch!"
          defaultValue={""}
        />
        <button type="submit">Get In Touch</button>
      </form>
    </div>
  </div>
</section>

    )
}

export default Contact;