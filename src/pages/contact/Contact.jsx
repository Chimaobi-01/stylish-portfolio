import {
  FaEnvelopeOpen,
  FaDribbble,
  FaFacebookF,
  FaPhoneSquareAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import './contact.scss';



const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section_title">
        Get in <span>Touch</span>
      </h2>

      <div className="contact_container container grid">
        <div className="contact_data">
          <h3>Don't be shy</h3>

          <p className="contact_description">
            No internet Try: Checking the network cables, modem, and router
            Reconnecting to Wi-Fi Running Windows Network Diagnostics
            ERR_INTERNET_DISCONNECTED
          </p>

          <div className="contact_info">
            <div className="info_item">
              <FaEnvelopeOpen className="info_icon" />
              <div>
                <span className="info_title">mail me</span>
                <h4 className="info_desc">mail@yahoo.com </h4>
              </div>
            </div>

            <div className="info_item">
              <FaPhoneSquareAlt className="info_icon" />
              <div>
                <span className="info_title">call me</span>
                <h4 className="info_desc">+234 903 956 1136</h4>
              </div>
            </div>
          </div>

          <div className="contact_socials">
            <a href="https://facebook.com" className="contact_social-link">
              <FaFacebookF />
            </a>

            <a href="https://twitter.com" className="contact_social-link">
              <FaTwitter />
            </a>

            <a href="https://youtube.com" className="contact_social-link">
              <FaYoutube />
            </a>

            <a href="https://dribble.com" className="contact_social-link">
              <FaDribbble />
            </a>
          </div>
        </div>

        <form className="contact_form">
          <div className="form_input-group">
            <div className="form_input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form_control"
              />
            </div>

            <div className="form_input-div">
              <input
                type="email"
                placeholder="Your email"
                className="form_control"
              />
            </div>

            <div className="form_input-div">
              <input
                type="text"
                placeholder="Your subject"
                className="form_control"
              />
            </div>
          </div>

          <div className="form_input-div">
            <textarea
              placeholder="Your message"
              className="form_control textarea"
            ></textarea>
          </div>

          <button className="button">
            send message
            <span className="button_icon contact_button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
