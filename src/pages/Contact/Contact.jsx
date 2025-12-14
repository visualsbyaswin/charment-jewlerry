import React from "react";
import "./Contact.css";
import Newsletter from "../../components/Newsletter/NewsLetter";

const Contact = () => {
  return (
<>
    <section className="contactsection">
      <div className="contactus">
        <div className="contactandhelp">
          <div className="contactname">
            <h1>Contact US</h1>
          </div>
          <div className="contactcaption">
            <p>Reach Out Anytime, We're Here to Help.</p>
          </div>
        </div>
        <div className="contactdetailsnames">
          <div className="threeadress">
            <p>123 Elegance Lane, Style City, NY 10001, USA</p>
          </div>
          <div className="threeadress">
            <p>hello@charmant.design</p>
          </div>
          <div className="threeadress">
            <p>+1 999 888 777</p>
          </div>
        </div>
      </div>

      <div className="socialmedia">
        <h1>Social Media</h1>
        <div className="allmediasetttings">
          <div className="media">
            <p>X (Twitter)</p>
          </div>
          <div className="media">
            <p>Framer</p>
          </div>
          <div className="media">
            <p>LinkedIn</p>
          </div>
          <div className="media">
            <p>Youtube</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="whatsmessage">
        <div>
          <h3>Write Us a Message</h3>
        </div>
        <form className="contactform">
          {/* Full Name - 100% */}
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Jane Smith" required />
          </div>

   
          <div className="form-row">
            <div className="form-group half">
              <label>Email</label>
              <input type="email" placeholder="janesmith@email.com" required />
            </div>
            <div className="form-group half">
              <label>Telephone</label>
              <input type="tel" placeholder="+01 999 888 777" required />
            </div>
          </div>

       
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Type Your Message" required></textarea>
          </div>

          <div className="form-check">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree with Terms & Conditions</label>
          </div>

       
          <button type="submit" className="send-btn">
            Send
          </button>
        </form>
      </div>
    </section>
    <Newsletter/>
</>
  );
};

export default Contact;
